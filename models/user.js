const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'User email address required'],
    unique: true,
    validate: {
        //regex for email is the same as the one for 17
      validator: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
  toJSON: { virtuals: true, getters: true },
  id: false,
});

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = model('User', UserSchema);
