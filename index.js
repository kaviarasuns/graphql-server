const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db.js");
const PORT = process.env.PORT;

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
  `/graphql`,
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));