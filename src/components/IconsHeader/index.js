import styled from 'styled-components'
import perfil from '../../assets/images/perfil.svg'
import sacola from '../../assets/images/sacola.svg'

const IconsContainer = styled.ul`
   display: flex;
   align-items: center;
   `

const IconContainer = styled.li`
   margin-right: 40px;
   width: 25px;
   cursor: pointer;
`

const icons = [
  perfil,
  sacola
]

function IconsHeader() {
   return (
      <IconsContainer>
         {icons.map((item) => (
            <IconContainer><img src={item} /></IconContainer>
         )) }
      </IconsContainer>
   )
}

export default IconsHeader