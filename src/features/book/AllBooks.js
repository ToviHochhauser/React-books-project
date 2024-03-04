import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import SingleBook from './SingleBook';
import { Grid } from '@mui/material';
import { getAllBooks } from './bookApi'; // Import only the necessary function
import { useSelector } from 'react-redux'; // Import the useSelector hook to access Redux store state
import { getSearchTerm } from '../navigation/searchSlice';

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const searchTerm = useSelector(getSearchTerm);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getAllBooks(searchTerm); // Pass the search term to getAllBooks function
        setAllBooks(books);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBooks();
  }, [searchTerm]); // Fetch books whenever the search term changes

  useEffect(() => {
    console.log(allBooks);
  }, [allBooks]);

 
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {allBooks.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SingleBook book={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AllBooks;
