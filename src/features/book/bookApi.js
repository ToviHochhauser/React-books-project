// bookApi.js
import axios from 'axios';

const baseURL = 'http://localhost:4500/api'; // Update this with your actual backend URL

const bookApi = axios.create({
  baseURL,
});

export const getAllBooks = async (searchTerm) => {
  try {

    console.log("the search: " + searchTerm); // Log the retrieved search term
    const response = await bookApi.get(`/books/?txt=${searchTerm}`); // Use the retrieved search term in the URL
    return response.data;
  } catch (error) {
    console.error('Error fetching all books:', error);
    throw error;
  }
};


export const getBookById = async (bookId) => {
  try {
    const response = await bookApi.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
};

export const addBook = async (newBookData) => {
  try {
    const response = await bookApi.post('/books', newBookData);
    return response.data;
  } catch (error) {
    console.error('Error adding new book:', error);
    throw error;
  }
};

export const updateBook = async (bookId, updatedBookData) => {
  try {
    const response = await bookApi.put(`/books/${bookId}`, updatedBookData);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with ID ${bookId}:`, error);
    throw error;
  }
};

export const deleteBook = async (bookId) => {
  try {
    const response = await bookApi.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${bookId}:`, error);
    throw error;
  }
};

export default bookApi;
