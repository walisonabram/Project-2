import axios from 'axios';

const BASE_URL =  'https://ironrest.herokuapp.com/MyPersonalLibrary'

class IronRestAPI {
    constructor() {
      this.api = axios.create({
        baseURL: BASE_URL,
      })
    }
    getUsers() {
        return this.api.get()
    }
    postUser() {
        return this.api.post()
    }
    getUser(id) {
        return this.api.get(`/${id}`)
    }
    async addReadBook(bookName, userId) {
        try {
            const user = await this.getUser(userId)
            const userBooks = user.data.books ? [...user.data.books] : []
            // verificar se o livro já existe no array
            userBooks.push(bookName)
            await this.api.put(`/${userId}`, {books: userBooks})
        } catch (error) {
            throw error
        }
    }
    async addReadingBook(bookName, userId) {
        try {
            const user = await this.getUser(userId)
            const userBooks = user.data.booksReading ? [...user.data.booksReading] : []
            // verificar se o livro já existe no array
            userBooks.push(bookName)
            await this.api.put(`/${userId}`, {booksReading: userBooks})
        } catch (error) {
            throw error
        }
    }
    async addWantBook(bookName, userId) {
        try {
            const user = await this.getUser(userId)
            const userBooks = user.data.booksWant ? [...user.data.booksWant] : []
            // verificar se o livro já existe no array
            userBooks.push(bookName)
            await this.api.put(`/${userId}`, {booksWant: userBooks})
        } catch (error) {
            throw error
        }
    }
}


const usersApi = new IronRestAPI();
export default usersApi;
 