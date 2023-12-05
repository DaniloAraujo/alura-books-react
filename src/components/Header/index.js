import styled from 'styled-components'
import Logo from '../../components/Logo'
import OptionsHeader from '../../components/OptionsHeader'
import IconsHeader from '../../components/IconsHeader'

const HeaderContainer = styled.header`
   background-color: #FFF;
   display: flex;
   justify-content: center;
`

function Header() {
   return (
      <HeaderContainer>
         <Logo />
         <OptionsHeader />
         <IconsHeader />
      </HeaderContainer>
   )
}

export default Header