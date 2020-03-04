import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/Saved";
import { Input, FormBtn } from "../components/Search";
import axios from 'axios';


function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  //Fetches books from Google API
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    // Ajax call to API using Axios
    let searchTerm = formObject.title
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    // Books result
    let title = result.items[0].volumeInfo.title
    let authors = result.items[0].volumeInfo.authors
    let description = result.items[0].volumeInfo.description
    let image = result.items.volumeInfo[0].imageLinks.smallThumbnail
    let link = result.items.volumeInfo[0].infoLink

    console.log(result.data);
    console.log(title)
    console.log(authors)
    console.log(description)
    console.log(image)
    console.log(link)
    
    // API.saveBook({
    //   title: title,
    //   authors: authors,
    //   description: description,
    //   image: image,
    //   link: link
    // })
      // .then(res => loadBooks())
      // .catch(err => console.log(err));
  }


  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    // Prevent browser refreshing after form submission
    event.preventDefault();
    // Call fetch books async function
    fetchBooks();
  
 

  
};

return (
  <Container fluid>
    <Row>
      <Col size="md-6">
        <Jumbotron>
          <h1>What Books Should I Read?</h1>
        </Jumbotron>
        <form>
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <FormBtn
            disabled={!(formObject.title)}
            onClick={handleFormSubmit}
          >
            Search
              </FormBtn>
        </form>
      </Col>
      <Col size="md-6 sm-12">
        <Jumbotron>
          <h1>Books On My List</h1>
        </Jumbotron>
        {books.length ? (
          <List>
            {books.map(book => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deleteBook(book._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Col>
    </Row>
  </Container>
);
  }


export default Search;
