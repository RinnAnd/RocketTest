import { gql } from 'apollo-server';

export const typeDefs = gql`
  input UserInput {
    name: String
    middle_name: String
    last_name: String
    second_last_name: String
    birth_date: String
    email: String
    phone: String
  }

  type User {
    name: String
    middle_name: String
    last_name: String
    second_last_name: String
    birth_date: String
    email: String
    phone: String
  }
  
  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: UserInput!): User
  }
`;