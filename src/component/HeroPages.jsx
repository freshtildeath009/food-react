import React from 'react'
import styled from 'styled-components'

const HeroPages = (props) => {
    return (
        <>
            <HeroDiv>
                <div className='text-container'>
                    <h1 id='title'>{props.title}</h1>
                </div>
            </HeroDiv>
        </>
    )
}

export default HeroPages

const HeroDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-image: url("./images/bg-hero.jpg");
    box-shadow: var(--box-shadow);
    font-family: var(--ff-general);
    border-radius: 10px;

        .text-container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 3rem;
            background: rgba(24, 26, 27, 0.8);
            width: 100%;
            height: 100%;
        }

        #title{
            font-size: calc(1.25rem + 3vw);
            font-weight: var(--fw-600);
            color: var(--fc-100);
            text-shadow: 1px 1px 2px var(--fc-300), 1px 1px 2px var(--fc-300), 1px 1px 2px var(--fc-300);
            opacity: 0.8;
        }
        
        @media (max-width: 575px) {
            .text-container{
                margin: 0 2rem;
            }
        }

        @media (max-width: 320px) {
            .text-container{
                margin: 0 1rem;
            }
        }
`
