import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { calculateTimeLeftInSection, getHumanTimeLeft } from './time';
import { Section as SectionType } from './sections';

interface SectionProps {
    section: SectionType
}

const Section = ({ section }: SectionProps) => {
    const timeLeft = calculateTimeLeftInSection(section);
    return (
        <div className="card">
            <header className="card-header">
                <h1 className="card-header-title">{section.title}</h1>
            </header>
            {timeLeft ? <div className="card-content">
                <ul>
                    {section.lectures.map((lecture, index) => {
                        return (
                            <li key={index}><span className="icon"><FontAwesomeIcon icon={lecture.done ? faCheck : faTimes} /></span> {lecture.name}</li>
                        )
                    })}
                </ul>
                <br />
                <p className="">{`${getHumanTimeLeft(timeLeft)} left in section`}</p>
            </div> : null}
        </div>
    );
};

export default Section