import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
text-align: center;`;

const Button = styled.button `
background: palevioletred;
border:none;
border-radius:3px;
color:white;
padding: 0.5em 1em;
cursor: pointer;

&:hover {
    background: darkviolet;
}

`

const SyledContainer = () => {
  return (
    <div>
        <Container>
            <h1>Hello, Styled-components!</h1>
            <Button>Click</Button>
        </Container>
    </div>
  )
}

export default SyledContainer