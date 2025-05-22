// src/index.js
const { gql } = require('@apollo/server');

const typeDefs = `#graphql

type User {
    user_id: ID
    username: String
    password: String
    age: Int
    description: String
}

type AuthPayload {
  token: String
  user: User
}

type Query {
    users: [User]
    user(id: ID): [User]
}

input CreateUserInput {
    username: String
    password: String
    age: Int
    description: String
}

type Mutation {
    createUser(input: CreateUserInput): User
    login(username: String!, password: String!): AuthPayload
}
`;

module.exports = typeDefs;

