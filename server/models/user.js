const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'http://localhost:8088/default-avatar.png', // TODO
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  pseudonym: {
    type: String,
  },
  checkedNotifications: { type: Array },
  unCheckedNotifications: { type: Array },
  followList: [ObjectId],
  followerList: [ObjectId],
  lockUntil: {
    type: Number,
    default: 0,
  },
  loginAttempts: {
    type: Number,
    default: 0,
  },
});

const SALT_WORK_FACTOR = 10; // salt
const MAX_ATTEMPT_TIMES = 5; // 5 times
const LOCKED_TIME = 5 * 60 * 1000; // 5mins

// Login password encryption
User.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, (err1, salt) => {
    if (err1) return next(err1);

    bcrypt.hash(this.password, salt, (err2, hash) => {
      if (err2) return next(err2);
      this.password = hash;
      next();
    });
  });
});

User.methods = {
  // Verify whether the user is locked out
  isLocked() {
    return (
      this.lockUntil &&
      this.lockUntil > Date.now() &&
      this.loginAttempts >= MAX_ATTEMPT_TIMES
    );
  },
  // Compare two passwords to see if they match
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) {
          resolve(isMatch);
        } else {
          reject(err);
        }
      });
    });
  },
  // When the password is entered incorrectly, the number of errors is recorded
  // Lock out the user when the maximum number of errors is exceeded LOCKED_TIME Time
  incLoginAttempts: (user) => {
    return new Promise((resolve, reject) => {
      if (user.lockUntil < Date.now()) {
        let updates = {
          $set: {
            loginAttempts: 1,
            lockUntil: Date.now() + LOCKED_TIME,
          },
        };

        user.update(updates, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(false);
          }
        });
      } else {
        let updates = { $inc: { loginAttempts: 1 } };

        if (user.loginAttempts + 1 > MAX_ATTEMPT_TIMES) {
          if (!user.isLocked()) {
            updates = {
              $set: { lockUntil: Date.now() + LOCKED_TIME },
            };
          } else {
            resolve(true);
          }
        }

        user.update(updates, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(false);
          }
        });
      }
    });
  },
};

module.exports = mongoose.model('User', User);
