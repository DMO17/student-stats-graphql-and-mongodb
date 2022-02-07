const { Course } = require("../models");

const courses = async () => {
  const courses = await Course.find({}).populate("students");

  return courses;
};
const course = async (_, { coursesId }) => {
  const course = await Course.findById(coursesId).populate("students");

  return course;
};
const createCourse = async (_, { input }) => {
  const createCourse = await Course.create(input);

  return createCourse;
};
const updateCourse = async (_, { input, coursesId }) => {
  const updateCourse = await Course.findByIdAndUpdate(coursesId, input);

  return updateCourse;
};

const deleteCourse = async (_, { coursesId }) => {
  const deleteCourse = await Course.findByIdAndDelete(coursesId);

  return deleteCourse;
};

module.exports = { courses, course, createCourse, updateCourse, deleteCourse };
