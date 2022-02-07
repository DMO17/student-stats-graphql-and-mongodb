const { gql } = require("apollo-server");

const typeDefs = gql`
  type Student {
    firstName: String
    lastName: String
    githubUrl: String
    assignments: [Assignment]
  }

  type Assignment {
    assignmentName: String
    score: Int
  }

  type Course {
    courseName: String
    inPerson: Boolean
    students: [Student]
  }
`;

module.exports = typeDefs;
