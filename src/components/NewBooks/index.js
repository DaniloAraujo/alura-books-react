import styled from "styled-components"
import RecomendCard from "../RecomendCard"
import { books } from "./NewBooksData"
import { TitleContainer } from "../Title"
import bookAngular from '../../assets/images/livro2.png'

const LastRealise = styled.section`
   background-color: #EBECEE;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function NewBooks() {
   return (
      <LastRealise>
         <TitleContainer
            color="#EB9B00"
            fontSize="36px"
         >
            Últimos Lançamentos
         </TitleContainer>
         <NewBooksContainer>
            {books.map((item) => (
               <img src={ item.src } />
            ))}
         </NewBooksContainer>
         <RecomendCard
            title={'Talvez você se interesse por...'}
            subtitle={'Angular 11'}
            description={'Construindo uma aplicação com a plataforma Google'}
            image={bookAngular}
         />
      </LastRealise>
   )
}

export default NewBooks
