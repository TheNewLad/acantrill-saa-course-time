import React from 'react';
import 'bulma/css/bulma.css';
import sections from './sections';
import Section from './Section';
import { calculateTimeLeftInCourse } from './calculateTimeLeft';
import moment from 'moment';

function App() {
  return (
    <div className="container">
      {sections.map((section, index) => <Section key={index} section={section} />)}
      <div className="card">
            <header className="card-header">
                <p className="card-header-title">{moment.duration(calculateTimeLeftInCourse(sections), 'seconds').humanize()} left in course</p>
            </header>
            </div>
    </div>
  );
}

export default App;
