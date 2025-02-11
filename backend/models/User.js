const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to generate a JWT token
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id }, // Payload: Include user ID
    process.env.JWT_SECRET, // Secret key (store this in your .env file)
    { expiresIn: '7d' } // Token expiration time (e.g., 7 days)
  );
  return token;
};

// Method to compare passwords
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;