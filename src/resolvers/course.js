const { Course } = require("../models");

const courses = async () => {
  const courses = await Course.find({}).populate("students");

  return courses;
};
const course = async (_, { coursesId }) => {
  const course = await Course.findById(coursesId).populate("students");

  return course;
};
const createCourse = () => {};

module.exports = { courses, course, createCourse };
