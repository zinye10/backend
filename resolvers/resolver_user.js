// src/index.js
const { ApolloServer, gql } = require('@apollo/server');
const User = require('../models/user');
const bcrypt = require('../node_modules/bcrypt/bcrypt');
const jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        users: async () => User.findAll(),
        user: async(parent, args) => {
            const { count, rows } = await User.findAndCountAll({
                where: {
                    user_id: Number(args.id)
                }
            });

            return rows;
        }
    },

    Mutation: {
        createUser: async(parent, args) => {
            console.log("password");
            console.log(args.input.password);
            const newUser = await User.create(args.input);
            return newUser;
        },
        login: async (_, { username, password }) => {
            const user = await User.findByPk(username);
            if (!user) {
              throw new Error('No user found with this username');
            }
      
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
              throw new Error('Invalid password');
            }

            const token = jwt.sign({ userId: user.username }, 'YOUR_SECRET_KEY');
      
            return {
              token,
              user,
            } 
        }    
    }
};

module.exports = resolvers;
