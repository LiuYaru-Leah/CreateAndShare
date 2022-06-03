const mongoose = require('mongoose');
const User = require('../models/user');

const controller = {
  /**
   * Login Interface
   */
  login: async (req, res, next) => {
    const { username, password } = req.body;
    const hasUser = await User.findOne({ username });
    if (!hasUser) {
      res.status(200).json({
        success: false,
        data: null,
        message: 'Username does not exist',
      });
      return;
    }

    if (!hasUser.isLocked()) {
      let rets = await hasUser.comparePassword(password, hasUser.password);
      if (rets) {
        const { password, ...userInfo } = hasUser;
        // Write the login id to the cookie
        res.cookie('uid', hasUser._id, {
          maxAge: 1000 * 3600000,
        });
        res.status(200).json({
          success: true,
          data: {
            userInfo: {
              username: hasUser.username,
              meta: hasUser.meta,
              id: hasUser._id,
              avatar: hasUser.avatar,
            },
          },
          message: 'Login successful',
        });
      } else {
        await hasUser.incLoginAttempts(hasUser);
        res.status(200).json({
          success: false,
          data: null,
          message: 'Wrong password',
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: {
          lockUntil: hasUser.lockUntil,
          loginAttempts: hasUser.loginAttempts,
        },
        message: 'The password has been entered incorrectly more than 5 times, the user has been locked out, please log in again after 5 minutes',
      });
    }
  },
  /**
   * Registration Interface
   */
  register: async (req, res, next) => {
    const { username, password } = req.body;
    let newUser = new User({
      _id: mongoose.Types.ObjectId(),
      username,
      password,
    });
    const hasUser = await User.findOne({ username });
    if (hasUser) {
      res.status(200).json({
        success: false,
        data: hasUser,
        message: 'This username has been registered, try another one',
      });
      return;
    }

    newUser.save().then(
      () => {
        res.status(200).json({
          success: true,
          data: newUser,
          message: 'Register successfully',
        });
      },
      (err) => {
        res.status(200).json({
          success: false,
          data: {},
          message: 'Registration failed',
        });
      }
    );
  },
};

module.exports = controller;
