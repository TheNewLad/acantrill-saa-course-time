import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { calculateTimeLeftInSection } from './timer';
import { Section as SectionType } from './sections';

interface SectionProps {
    section: SectionType
}

const Section = ({ section }: SectionProps) => {
    const getTimeLeftInSection = () => {
        const timeLeft = calculateTimeLeftInSection(section);
        return (
            timeLeft ? `${moment.duration(timeLeft, 'seconds').humanize()} left in section` : 'Section Complete'
        );
    }
    return (
        <div className="card">
            <header className="card-header">
                <h1 className="card-header-title">{section.title}</h1>
            </header>
            <div className="card-content">
                <ul>
                    {section.lectures.map((lecture, index) => {
                        return (
                            <li key={index}><span className="icon"><FontAwesomeIcon icon={lecture.done ? faCheck : faTimes} /></span> {lecture.name}</li>
                        )
                    })}
                </ul>
                <br />
                <p className="">{getTimeLeftInSection()}</p>
            </div>
        </div>
    );
};

export default Section