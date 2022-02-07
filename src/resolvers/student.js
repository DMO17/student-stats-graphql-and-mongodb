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

const updateStudent = async (_, { input, studentId }) => {
  const updatedStudentInfo = await Student.findByIdAndUpdate(studentId, input);

  return updatedStudentInfo;
};
const deleteStudent = async (_, { studentId }) => {
  const deleteStudent = await Student.findByIdAndDelete(studentId);

  return deleteStudent;
};

module.exports = {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
};
