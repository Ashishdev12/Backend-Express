import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js';
import resolvers from './resolver.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const root = resolvers;

// here we are creating a graphql endpoint and integrating the schema and resolvers
app.use("/graphql", graphqlHTTP({
  schema: schema ,
  rootValue: root,
  graphiql: true,
}))

app.listen(9999, () => {
  console.log("Running on port 9999...");
})


// type these quesries in http://localhost:9999/graphql

// query {
//     getBook(id: "OW85rYiUfbDH_ES2d83Mk"){
//       id, bookTitle
//     }
//   }
  
//   mutation {
//     createBook(input: {
//       bookTitle: "The Slay Dargon",
//       bookAuthor: "Geronimo Stilton",
//       bookGenre:"Comedy",
//       bookCost:333,
//       bookImageUrl: ""
//     }){
//       id, bookTitle, bookAuthor
//     }
//   }
  
//   query {
//     getAllBooks{
//       bookTitle, bookGenre
//     }
//   }

// # query with variables

// # query GetBookById($bookId: ID){
// #   getBook(id: $bookId){
// #     id, bookTitle, bookGenre, bookCost, bookAuthor, bookImageUrl
// #   }
  
// # }

// # mutation with variables

// mutation CreateNewBook(
//   $bookTitle: String!, 
//   $bookAuthor: String, 
//   $bookGenre: String, 
//   $bookCost: Int!, 
//   $bookImageUrl: String){
    
//   createBook(input: {
//     bookTitle: $bookTitle
//     bookAuthor: $bookAuthor
//     bookGenre: $bookGenre
//     bookCost: $bookCost
//     bookImageUrl: $bookImageUrl
//   }){
//     id,bookTitle
//   }
// }

// -----
// {
//   "bookTitle": "The World of Faries",
//   "bookAuthor": "Geronimo",
//   "bookGenre":  "Comedy",
//   "bookCost":  304,
//   "bookImageUrl":  ""
// }