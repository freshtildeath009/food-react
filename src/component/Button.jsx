import React from 'react'
import styled from 'styled-components'

const Button = () => {
    return (
        <ButtonComponent>
            <button id='btn'>BOOK A TABLE &nbsp;<i class="fa-solid fa-arrow-right"></i></button>
        </ButtonComponent>
    )
}

export default Button

const ButtonComponent = styled.div`
        #btn{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;
            border-radius: 5px;
            border: none;
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
            color: var(--fc-100);
            background: var(--bg-100);
            font-family: var(--ff-general);
            letter-spacing: var(--ls-100);
        }
    
`
