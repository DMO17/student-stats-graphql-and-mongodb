const courses = () => {
  return [
    {
      courseName: "Full Stack Coding Bootcamp",
      inPerson: false,
      students: [],
    },
    {
      courseName: "AI Coding Bootcamp",
      inPerson: true,
      students: [],
    },
    {
      courseName: "MatLab and Simulink",
      inPerson: true,
      students: [],
    },
    {
      courseName: "3D CAD DRAWING",
      inPerson: true,
      students: [],
    },
  ];
};
const course = () => {
  return {
    courseName: "Full Stack Coding Bootcamp",
    inPerson: false,
    students: [],
  };
};
const createCourse = () => {};

module.exports = { courses, course, createCourse };
