import styled from 'styled-components'
import Logo from '../../components/Logo'
import OptionsHeader from '../../components/OptionsHeader'
import IconsHeader from '../../components/IconsHeader'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
   background-color: #FFF;
   display: flex;
   justify-content: center;
`

function Header() {
   return (
      <HeaderContainer>
         <Link to={'/'}>
            <Logo />
         </Link>
         <OptionsHeader />
         <IconsHeader />
      </HeaderContainer>
   )
}

export default Header