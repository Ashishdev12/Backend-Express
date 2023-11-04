import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
})

// app.get("/graphql", graphqlHTTP({
//   schema: ,
//   rootValue: {},
//   graphiql: true,
// }))

app.listen(9999, () => {
  console.log("Running on port 9999...");
})