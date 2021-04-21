import React from 'react';
import sections from './sections';
import Section from './Section';
import { calculateTimeLeftInCourse } from './calculateTimeLeft';
import moment from 'moment';

function App() {
  return (
    <div className="App">
      {sections.map((section, index) => <Section key={index} section={section} />)}
      <p>{moment.duration(calculateTimeLeftInCourse(sections), 'seconds').humanize()} left in course</p>
    </div>
  );
}

export default App;
