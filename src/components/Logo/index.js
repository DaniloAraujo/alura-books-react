import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const LogoContainer = styled.div`
   display: flex;
   font-size: 30px;
`

const LogoImgContainer = styled.img`
   margin-right: 10px;
`

function Logo() {
   return (
      <LogoContainer>
         <LogoImgContainer
            src={logo}
            alt='logo'
         />
         <p><strong>Alura</strong>Books</p>
      </LogoContainer>
   )
}

export default Logo