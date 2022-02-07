const { Student } = require("../models");

const students = async () => {
  const students = await Student.find({});
  return students;
};

const student = async (_, { studentId }) => {
  const student = await Student.findById(studentId);

  return student;
};

const createStudent = async (_, { input }) => {
  const createStudent = await Student.create(input);

  return createStudent;
};

module.exports = { students, student, createStudent };
