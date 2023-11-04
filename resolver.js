import {nanoid} from 'nanoid';

// this is model
class Book {
    constructor(id, { bookTitle, bookAuthor, bookGenre, bookCost, bookImageUrl }){
        this.id = id;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookCost = bookCost;
        this.bookImageUrl = bookImageUrl;
        this.bookGenre = bookGenre;
    }
}

// this is holder which is just an object( used instaed DB)
const bookHolder = {
  // Ashish: {bookTitle: 'Harry Potter', bookAuthor: 'J.K.Rowling', bookGenre: 'Fiction', bookCost:200, bookImageUrl: ""}
};

// now let us create the resolvers
const resolvers = {
    getBook: ({ id }) => {
        return new Book(id, bookHolder[id]); // this will return a book object with book id 
                                                        //and its info taken from bookHolder
    },
    getAllBooks: () => {
        let allBooks = [];
        for(var key in bookHolder){
            allBooks.push(new Book(key, bookHolder[key]))
        }
        return allBooks;
    },
    createBook: ({ input }) => {
        let id = nanoid();
        bookHolder[id] = input;
        let allBooks = [];
        for(var key in bookHolder){
            allBooks.push(new Book(key, bookHolder[key]))
        }
        return allBooks;
    }
}

export default resolvers;