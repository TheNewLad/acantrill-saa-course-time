import { Section } from "./sections";
const { ms, s, m, h, d } = require('time-convert');

export interface LectureObject {
    title: string | undefined,
    seconds: number
}

const regex = /(?<title>.*)( \((?<minutes>\d{1,2}):(?<seconds>\d{2})\))/;

const calculateSeconds = (seconds = 0, minutes = 0) => (minutes * 60) + seconds;

export const parseLectureName = (lectureName: string) : LectureObject => {
    const lectureRegex = lectureName.match(regex)?.groups;
    const lectureTitle = lectureRegex?.title;
    const lectureMinutes = lectureRegex?.minutes ? parseInt(lectureRegex?.minutes) : 0;
    const lectureSeconds = lectureRegex?.seconds ? parseInt(lectureRegex?.seconds) : 0;
    
    const totalSeconds = calculateSeconds(lectureSeconds, lectureMinutes);

    return {title: lectureTitle, seconds: totalSeconds};
}

export const calculateTimeLeftInCourse = (sections: Section[]) => {
    let minutesLeftInCourse = 0;
    let secondsLeftInCourse = 0;
    sections.forEach(section => {
        section.lectures.forEach(lecture => {
            const lectureTime = lecture.name.match(regex)?.groups;
            if (!lecture.done && lectureTime?.seconds && lectureTime?.minutes) {
                minutesLeftInCourse += parseInt(lectureTime.minutes);
                secondsLeftInCourse += parseInt(lectureTime.seconds);
            }
        });
    });

    return calculateSeconds(secondsLeftInCourse, minutesLeftInCourse);
};

export const calculateTimeLeftInSection = (section: Section) => {
    let minutesLeftInCourse = 0;
    let secondsLeftInCourse = 0;
    section.lectures.forEach(lecture => {
        const lectureTime = lecture.name.match(regex)?.groups;
        if (!lecture.done && lectureTime?.seconds && lectureTime?.minutes) {
            minutesLeftInCourse += parseInt(lectureTime.minutes);
            secondsLeftInCourse += parseInt(lectureTime.seconds);
        }
    });

    return calculateSeconds(secondsLeftInCourse, minutesLeftInCourse);
};

export const getHumanTimeLeft = (seconds: number) => {
    const milliseconds = ms.from(s)(seconds);
    const time = ms.to(d, h, m, s)(milliseconds);
    if (time[3] >= 30) {
        time[2]++;
    }
    const days: string = time[0] ? `${time[0]}d` : '';
    const hours: string = time[1] ? `${time[1]}h` : '';
    const minutes: string = time[2] ? `${time[2]}m` : '';
    return `${days} ${hours} ${minutes}`;
};