import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Hero = () => {
    return (
        <HeroComponent>
            <div className='content-container'>
                <div className='left-container animation-scale'>
                    <h1 id='title'>Enjoy OUR <br /> Delicious Meal</h1>
                    <p id='paragraph'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className='button-container'>
                        <Button />
                    </div>
                </div>
                <br />
                <div className='right-container'>
                    <img id='hero-image' className='rotate' src="./images/hero.png" alt="" />
                </div>
            </div>
        </HeroComponent>
    )
}

export default Hero

const HeroComponent = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./images/bg-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    color: var(--fc-100);
    font-family: var(--ff-general);
    overflow-y: hidden;
    border-radius: 0 0 10px 10px;
    box-shadow: var(--box-shadow);
    
        .content-container{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin: 0 3rem;
            background: rgba(24, 26, 27, 0.8);
            box-shadow: 1px 1px 20px 1px black;
            overflow-x: clip;
        }   

        .left-container{
            display: center;
            justify-content: flex-start;
            align-items: center;
            margin: 0 2rem;
            width: 100%;
        }

        #title{
            font-size: calc(1rem + 3vw);
            font-weight: var(--fw-900);
            white-space: nowrap;
        }

        #paragraph{
            font-size: var(--fs-1);
            margin: 1rem 0;
        } 

        .button-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        
        .right-container{
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: clip;
            min-width: 610px;
            min-height: 600px;
            padding: 0 2rem 0 0;
        }  

        #hero-image{
            height: auto;
            width: 100%;
            animation: rotation 30s infinite linear;
        }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }  

    @media (max-width: 1250px) {
            .left-container{
                margin: 0 1rem;
            }

            .right-container{
                min-width: 500px;
                min-height: 450px;
                padding: 0 1rem 0 0;
            }
    }

    @media (max-width: 991px) {
        height: auto;
        
        .content-container{
            flex-direction: column;
            padding-bottom: 2rem;
        }

        .left-container{
            text-align: center;
            padding: 0 2rem;
            margin: 9rem 0 3rem 0;
        }

        .right-container{
            min-width: 230px;
            min-height: 230px;
            margin: 0 2rem;
            padding-right: 0rem;
        }
        
        .button-container{
            justify-content: center;
        }
    }   

    @media (max-width: 991px) {
        height: auto;
        #paragraph{
            font-size: var(--fs-0-8);
        }
    } 

    @media (max-width: 991px) {
        height: auto;
        #paragraph{
            font-size: var(--fs-0-8);
        }
    } 
    
    @media (max-width: 575px) {
        .content-container{
            margin: 0 2rem;
            padding: 5rem 0;
        }  

        .left-container{

            margin: 0 1.5rem;
        }
    }

    @media (max-width: 320px) {
        .content-container{
            margin: 0 1rem;
        } 

        .left-container{
            margin: 0 1rem;
        }
        #title{
            font-size: calc(0.7rem + 3vw);
        }

    }   
`