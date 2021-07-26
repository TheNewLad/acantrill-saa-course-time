const fs = require('fs');
const cheerio = require('cheerio');


const courseFile = fs.readFileSync(`${__dirname}/course.html`);
let $ = cheerio.load(courseFile);

const parsedCourseList = [];

$('.course-section').each(function() {
    const sectionList = $(this);
    sectionList.each(function() {
        const section = $(this);
        const sectionTitle = extractSectionTitle(section).trim();

        const lectures = [];
        const sectionItemList = section.find('.section-list');
        
        sectionItemList.each(function() {
            const lectureItems = $(this).find('li.section-item > a.item');

            addLectureItemsToList(lectureItems, lectures);
        });

        parsedCourseList.push({
            'title': sectionTitle,
            lectures
        })
    })
});

fs.writeFileSync(`${__dirname}/course.json`, JSON.stringify(parsedCourseList));

function extractSectionTitle(section) {
    return section.find('.section-title')[0].childNodes[2].nodeValue;
}

function addLectureItemsToList(lectureItems, lectures) {
    lectureItems.each(function () {
        const lecture = $(this);
        const lectureName = getCleanLectureName(lecture);
        const isComplete = getLectureStatus(lecture) === 'Completed item';

        lectures.push({
            'name': lectureName,
            'done': isComplete
        });
    });

    function getLectureStatus(lecture) {
        return lecture.find('.status-container').attr('aria-label');
    }

    function getCleanLectureName(lecture) {
        let trimmedName = lecture.find('.lecture-name').text().trim();
        trimmedName = removeNewLineCharacters(trimmedName);
        trimmedName = removeExtraSpaces(trimmedName);
        return trimmedName;
    }
}

function removeNewLineCharacters(name) {
    return name.replace(/(\r\n|\n|\r)/gm, "");
}

function removeExtraSpaces(name) {
    return name.replace(/\s+/g, " ");
}