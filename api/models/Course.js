class Prerequisite {
    constructor(title, prerequisites) {
        this.title = title;
        this.prerequisites = prerequisites;
    }
}

class MiniCourse {
    constructor(
        courseId,
        courseTitle,
        universityName,
        universityIconUrl
    ) {
        this.courseId = courseId;
        this.courseTitle = courseTitle;
        this.universityName = universityName;
        this.universityIconUrl = universityIconUrl;
    }
}

class Course {
    constructor(
        id,
        university_id,
        title,
        faculty,
        prerequisites,
        requiredAverage,
        domesticTution,
        domesticBooks,
        domesticNotes,
        internationalTuition,
        internationalBooks,
        internationalNotes,
        notes,
    ) {
        this.id = id;
        this.universityId = university_id;
    
        this.title = title;
        this.faculty = faculty;
        this.prerequisites = prerequisites;
        this.requiredAverage = requiredAverage;
        this.domesticTution = domesticTution;
        this.domesticBooks = domesticBooks;
        this.domesticNotes = domesticNotes;
        this.internationalTuition = internationalTuition;
        this.internationalBooks = internationalBooks;
        this.internationalNotes = internationalNotes;
        this.notes = notes;
    }
}

module.exports = {
    Prerequisite,
    Course,
    MiniCourse
};