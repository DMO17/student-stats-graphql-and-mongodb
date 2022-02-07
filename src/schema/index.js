const { gql } = require("apollo-server");

const typeDefs = gql`
  type Student {
    firstName: String!
    lastName: String!
    githubUrl: String!
    assignments: [Assignment]
  }

  type Assignment {
    _id: ID
    assignmentName: String
    score: Int
  }

  type Course {
    _id: ID
    courseName: String!
    inPerson: Boolean!
    students: [Student]
  }

  type Query {
    students: [Student]
    student(studentId: ID!): Student
    courses: [Course]
    course(coursesId: ID!): Course
  }

  input StudentInput {
    firstName: String!
    lastName: String!
    githubUrl: String!
    assignments: [AssignmentInput]
  }

  input AssignmentInput {
    assignmentName: String!
    score: Int!
  }

  input CourseInput {
    courseName: String!
    inPerson: Boolean!
    students: [StudentInput]
  }

  type Mutation {
    createStudent(input: StudentInput!): Student
    createCourse(input: CourseInput!): Course
  }
`;

module.exports = typeDefs;

// input StudentInput {
//   firstName: String!
//   lastName: String!
//   githubUrl: String!
//   assignments: [AssignmentInput]
// }

// input AssignmentInput {
//   assignmentName: String!
//   score: Int!
// }

// input CourseInput {
//   courseName: String!
//   inPerson: Boolean!
//   students: [StudentInput]
// }

// type Mutation {
//   createStudent(input: StudentInput): Student,
//   createCourse(input: CourseInput)
// }
