import axios from 'axios';
import { Book, BookDetail, BookListResponse } from '../model/book';

export const fetchBookList = async (offset = 0, limit = 100): Promise<Book[]> => {
    const response = await axios.get(`https://stephen-king-api.onrender.com/api/books`)
    const data: BookListResponse = await response.data;
    return data.data;
};

export const fetchBookDetailById = async (id: string): Promise<Book> => {
    const response = await axios.get(`https://stephen-king-api.onrender.com/api/book/${id}`)
    const data: BookDetail = await response.data;
    return data.data;
}
