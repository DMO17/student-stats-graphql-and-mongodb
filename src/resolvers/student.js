const students = () => {
  return [
    {
      firstName: "Bob",
      lastName: "Smith",
      githubUrl: "https://github.com/bobsmith",
      assignments: [
        { assignmentName: "HTML Intro", score: 90 },
        {
          assignmentName: "CSS Intro",
          score: 95,
        },
        {
          assignmentName: "JS Intro",
          score: 60,
        },
      ],
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      githubUrl: "https://github.com/janesmith",
      assignments: [
        {
          assignmentName: "HTML Intro",
          score: 95,
        },
        {
          assignmentName: "CSS Intro",
          score: 95,
        },
        {
          assignmentName: "JS Intro",
          score: 80,
        },
      ],
    },
    {
      firstName: "Jack",
      lastName: "Smith",
      githubUrl: "https://github.com/jacksmith",
      assignments: [
        { assignmentName: "HTML Intro", score: 40 },
        {
          assignmentName: "CSS Intro",
          score: 45,
        },
        {
          assignmentName: "JS Intro",
          score: 50,
        },
      ],
    },
    {
      firstName: "Tom",
      lastName: "Smith",
      githubUrl: "https://github.com/tomsmith",
      assignments: [
        { assignmentName: "HTML Intro", score: 85 },
        {
          assignmentName: "CSS Intro",
          score: 64,
        },
        {
          assignmentName: "JS Intro",
          score: 66,
        },
      ],
    },
    {
      firstName: "Jill",
      lastName: "Smith",
      githubUrl: "https://github.com/jillsmith",
      assignments: [
        { assignmentName: "HTML Intro", score: 60 },
        {
          assignmentName: "CSS Intro",
          score: 60,
        },
        {
          assignmentName: "JS Intro",
          score: 60,
        },
      ],
    },
  ];
};
const student = () => {
  return {
    firstName: "Bob",
    lastName: "Smith",
    githubUrl: "https://github.com/bobsmith",
    assignments: [
      { assignmentName: "HTML Intro", score: 90 },
      {
        assignmentName: "CSS Intro",
        score: 95,
      },
      {
        assignmentName: "JS Intro",
        score: 60,
      },
    ],
  };
};
const createStudent = () => {};

module.exports = { students, student, createStudent };
