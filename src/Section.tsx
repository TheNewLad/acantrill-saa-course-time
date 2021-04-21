import React from 'react';
import moment from 'moment';
import { calculateTimeLeftInSection } from './calculateTimeLeft';
import { Section as SectionType } from './sections';

interface SectionProps {
    section: SectionType
}

const Section = ({ section }: SectionProps) => {
    return (
        <div>
            <p className="title">{section.title}</p>
            <ul>
                {section.lectures.map((lecture, index) => {
                    return (
                        <li key={index}><span>{lecture.done ? 'Complete' : 'Incomplete'}</span> :: {lecture.name}</li>
                    )
                })}
            </ul>
            <p>{moment.duration(calculateTimeLeftInSection(section), 'seconds').humanize()} left in section</p>
        </div>
    );
};

export default Section