// here we are going to create the schema for our graphql
import buildSchema from 'graphql';

const mySchema = buildSchema.buildSchema;

const schema = mySchema(`
    type Book{
        id: ID
        bookTitle: String
        bookAuthor: String
        bookGenre: String
        bookCost: Int
        bookImageUrl: String
    }

    input BookInput{
        bookTitle: String!
        bookAuthor: String
        bookGenre: String
        bookCost: Int!
        bookImageUrl: String
    }

    type Mutation {
        createBook(input: BookInput): [Book]
    }

    type Query{
        getBook(id: ID): Book
        getAllBooks: [Book]
    }
`)

export default schema;
// while creating we can create a 
// 1. type schema
//          this type schema can refer to a 
//              -model, 
//              -query(Fetch request)
//              -mutation(add, update and delete)
// 2. input schema