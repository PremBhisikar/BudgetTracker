const mongoose = require("mongoose");
const User = require("../models/user");

const users = [
  {
    _id: new mongoose.Types.ObjectId("68e22e18b04cd93e25621dac"),
    name: "John Doe",
    email: "john@example.com",
    password: "$2a$10$9RAqfYx5Y7y03xBSpLBh4uaTBrndbK8TTG.MXERpXF4eJrgeqIqDm",
  },
  {
    _id: new mongoose.Types.ObjectId("68e74ed9631738788a6dff5e"),
    name: "Jane Doe",
    email: "jane@example.com",
    password: "$2a$10$9RAqfYx5Y7y03xBSpLBh4uaTBrndbK8TTG.MXERpXF4eJrgeqIqDm",
  },
];

const seedUser = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("✅ Users seeded successfully");
  } catch (err) {
    console.error("❌ Error seeding users:", err);
    throw err;
  }
};

module.exports = { users, seedUser };
