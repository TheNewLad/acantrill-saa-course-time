const fs = require('fs');
const courseJson = require('./course.json');
// import courseJson from './course.json';

const regex = /(?<title>.*)( \((?<minutes>\d{1,2}):(?<seconds>\d{2})\))/;

const calculateSeconds = (seconds = 0, minutes = 0) => (minutes * 60) + seconds;

const parseLectureName = (lectureName) => {
    const lectureRegex = lectureName.match(regex)?.groups;
    const lectureTitle = lectureRegex?.title || lectureName;
    const lectureMinutes = lectureRegex?.minutes ? parseInt(lectureRegex?.minutes) : 0;
    const lectureSeconds = lectureRegex?.seconds ? parseInt(lectureRegex?.seconds) : 0;
    
    const totalSeconds = calculateSeconds(lectureSeconds, lectureMinutes);

    return {title: lectureTitle, seconds: totalSeconds};
}

const getRoundedUpMinutes = (seconds) => Math.ceil(seconds / 60);

let courseText = "";
courseJson.forEach(section => {
    courseText += `${section.title}\n`;

    const lectures = section.lectures;
    lectures.forEach(lecture => {
        const lectureObj = parseLectureName(lecture.name);
        const lectureName = `${lectureObj.title} ~${getRoundedUpMinutes(lectureObj.seconds)}`
        
        courseText += `\t${lectureName}\n`;
    });
});

fs.writeFileSync(`${__dirname}/course-marvin.txt`, courseText);