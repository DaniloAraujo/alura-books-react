import { Link } from "react-router-dom"
import styled from "styled-components"

const OptionsContainer = styled.ul`
   display: flex;
`

const OptionContainer = styled.li`
   min-width: 120px;
   font-size: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100%;
   padding: 0 5px;
   cursor: pointer;
`

const optionsText = [
  'CATEGORIAS',
  'FAVORITOS',
  'ESTANTE'
]

function OptionsHeader() {
   return (
      <OptionsContainer>
         {optionsText.map((item) => (
            <Link to={`/${item.toLowerCase()}`}>
               <OptionContainer>{item}</OptionContainer>
            </Link>
         )) }
      </OptionsContainer>
   )
}

export default OptionsHeader