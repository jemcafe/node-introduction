const books = [];
let id = 0;

// module.export - is how node exports modules
// similar to   export default ______   in Reactjs
module.exports = {
    create (req, res) {
        // console.log('You sent me this data: ', req.body);
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author
        });
        id++
        // console.log('books: ', books);
        res.status(200).json(books);
    },
    read (req, res) {
        res.status(200).json(books);
    },
    update (req, res) {
        let index = books.findIndex( book => book.id == req.params.id );

        books[ index ] = {
            id: books[ index ].id,
            title: req.body.title || books[ index ].title,
            author: req.body.author || books[ index ].author
        }

        res.status(200).json(books);
    },
    delete (req, res) {
        let bookID = books.findIndex( book => book.id == req.params.id );

        books.splice( bookID, 1);
        res.status(200).json(books);
    }
}



// :id   is a variable in the endpoint which is the   id   in the response (res)
// app.delete('/api/books/:id', (req, res) => {
//     const bookId = res.params.id;
//     const bookIndex = books.findIndex( book => book.id === parseInt(bookId, 10) );
//     books.splice(bookIndex, 1);
//     res.json(books);
// });