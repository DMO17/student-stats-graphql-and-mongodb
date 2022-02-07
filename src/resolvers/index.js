const {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("./course");
const {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
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
    updateCourse,
    deleteStudent,
    deleteCourse,
  },
};

module.exports = resolvers;
