export interface Section {
    title: string,
    lectures: Lecture[]
};

interface Lecture {
    name: string,
    done: boolean
};