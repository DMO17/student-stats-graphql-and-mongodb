const { courses, course, createCourse } = require("./course");
const {
  students,
  student,
  createStudent,
  updateStudent,
} = require("./student");

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
    updateStudent,
  },
};

module.exports = resolvers;
