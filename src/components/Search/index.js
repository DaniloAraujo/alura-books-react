import { useState } from "react"
import styled from "styled-components"
import InputContainer from "../Input"
import { books } from "./searchData"

const SearchContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 270px;
   width: 100%;
`

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`

const Subtitle = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
      width: 200px;
   }
   img {
      width: 100px;
   }
   &:hover {
      border: 1px solid white;
   }
`

function Search() {
   const [searchBooks, setSearchBooks] = useState([])

   const booksData = (event) => {
      const inputText = event.target.value
      const resultSearch = books.filter(item => item.name.includes(inputText))
      return setSearchBooks(resultSearch)
   }

   return (
      <SearchContainer>
         <Title>Já sabe por onde começar?</Title>
         <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
         <InputContainer
            type="text"
            placeholder="Escreva sua próxima leitura"
            onBlur={ booksData }
         />
         {searchBooks.map((item) => (
            <Result>
               <img src={item.src} alt="book" />
               <p>{ item.name }</p>
            </Result>
         )) }
      </SearchContainer>
   )
}

export default Search
