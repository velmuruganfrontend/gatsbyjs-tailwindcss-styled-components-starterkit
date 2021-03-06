import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Footer = styled.div`
${tw`font-sans bg-blue hover:bg-blue-dark text-white p-2 rounded`};
` 
const Heading = styled.div`
${tw`text-center text-3xl`};
`


const FooterComponent = () => {
    return(
        <Footer>
           <Heading>Footer</Heading>
        </Footer>
    )
}

export default FooterComponent