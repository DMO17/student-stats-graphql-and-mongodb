const { courses, course, createCourse } = require("./course");
const { students, student, createStudent } = require("./student");

const resolvers = {
  Query: {
    students,
    student,
    courses,
    course,
  },

  Mutation: {
    createStudent,
    createCourse,
  },
};

module.exports = resolvers;
