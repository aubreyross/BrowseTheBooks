const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

//resolvers implement the api
const resolvers = {
  Query: {
    //arg carries the parameters for the query to be fetched
    //context is for resolvers to communicate and share info
    me: async (parent, args, context) => {
      if (context.user) {
        //finds user
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    //add user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    //user login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      //if it cannot locate user by associated email, alert error.
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      //if password is incorrect, alert error.
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        //save books to user account associated by ID
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: input } },
          { new: true }
        );
        return updatedUser;
      }
      //user must be logged in to save a book
      throw new AuthenticationError('Please login to continue');
    },
    //remove a book
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      //user must be logged in to remove a book
      throw new AuthenticationError('Please login to continue');
    },
  },
};

module.exports = resolvers;
