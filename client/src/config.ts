import dotenv from "dotenv";
dotenv.config();

module.exports = {
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
  },
};
