import { Section } from "./sections";

const regex = /( \((?<minutes>\d{1,2}):(?<seconds>\d{2})\))/;

const calculateSeconds = (minutes: number, seconds: number) => (minutes * 60) + seconds;

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

    return calculateSeconds(minutesLeftInCourse, secondsLeftInCourse);
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

    return calculateSeconds(minutesLeftInCourse, secondsLeftInCourse);
};