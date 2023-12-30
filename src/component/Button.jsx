import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

    return (
        <ButtonComponent>
            <button id='btn'>{props.text}{props.space ? props.space : ""} {props.arrow ? props.arrow : ""} </button>
        </ButtonComponent>
    )
}

export default Button

const ButtonComponent = styled.div`
        #btn{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 1rem;
            border-radius: 5px;
            border: none;
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
            color: var(--fc-100);
            background: var(--bg-100);
            font-family: var(--ff-general);
            letter-spacing: var(--ls-100);
            transition: ease-in-out 0.5s;
            box-shadow: var(--box-shadow-light);
        }

        #btn:hover{
            background: var(--bg-400);
        }

        @media (max-width: 567px) {
            #btn{
                padding: 0.775rem 0.75rem;
                font-size: var(--fs-0-8);
            }
        }
    
`
