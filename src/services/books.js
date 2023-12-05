import axios from "axios"

const apiBooks = axios.create({ baseURL: "http://localhost:8000/livros" })

async function getBooks() {
   const response = await apiBooks.get('/')

   return response.data
}

export {
   getBooks
}