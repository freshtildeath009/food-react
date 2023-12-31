import React from 'react'
import styled from 'styled-components'
import Button from "./Button"
const About = () => {
    return (
        <AboutSection>
            <div className='content-container animation-reveal'>
                <div className='left-container'>
                    <img className='big-photo item1' src="./images/about-1.jpg" alt="" />
                    <div className='item2-photo-container'>
                        <img className='small-photo item2' src="./images/about-2.jpg" alt="" />
                    </div>
                    <div className='item3-photo-container'>
                        <img className='small-photo item3' src="./images/about-3.jpg" alt="" />
                    </div>
                    <img className='big-photo item4' src="./images/about-4.jpg" alt="" />
                </div>
                <div className='right-container'>
                    <h4 id='about-cursive'>About Us</h4>
                    <h1 id='about-title'>Welcome to <i className="fa-solid fa-utensils"></i>FoodTrip</h1>
                    <br />
                    <p id='about-paragraph'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                    <br />
                    <p id='about-paragraph'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <br />
                    <div className='stats-container'>
                        <div className='stats-left-container'>
                            <h1 className='stats-number'>15</h1>
                            <p id='stats-info'>Years of <br /><span className='stats-span'>EXPERIENCE</span></p>
                        </div>
                        <div className='stats-right-container'>
                            <h1 className='stats-number'>50</h1>
                            <p id='stats-info'>Popular <br /><span className='stats-span'>MASTER CHEFS</span></p>
                        </div>
                    </div>
                    <br />
                    <Button text="READ MORE" />
                </div>
            </div>
        </AboutSection>
    )
}

export default About

const AboutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general); 
    margin: 5rem 3rem;
    height: 100%;
    overflow-x: clip;

        .content-container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

        .left-container{
            display: grid;
            grid-template-columns: repeat(2, 0.9fr);
            grid-template-rows: repeat(2, 0.9fr);
            min-height: 570px;
            min-width: 600px;
            gap: 1rem;
        }

        .big-photo,
        .small-photo{
            height: 100%;
            width: 100%;
            border-radius: 5px;
            box-shadow: var(--box-shadow-light);   
        }

        .item2-photo-container{
            display: flex;
            align-items: flex-end;
            .item2{
                height: 70%;
                width: 70%;
            }
        }

        .item3-photo-container{
            display: flex;
            justify-content: flex-end;

            .item3{
                height: 70%;
                width: 70%;
            }
        }

        .right-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
        }

        #about-cursive{
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: var(--ff-cursive);
            font-size: var(--fs-1-25);
            color: var(--fc-200);
            position: relative;
            overflow: hidden;
        }

        #about-cursive::after {
            content: '';
            display: inline-block;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 2px;
            background: var(--bg-100);
            margin-left: 1rem;
        }

        #about-title{
            font-size: calc(0.9rem + 2vw);
            font-weight: var(--fw-600);
            white-space: nowrap;
        }

        #about-paragraph{
            font-size: var(--fs-1);
        }

        .stats-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .stats-left-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-left: 5px solid var(--fc-200);
            width: 100%;
        }

        .stats-right-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-left: 5px solid var(--fc-200);
            width: 100%;
        }

        .stats-number{
            font-size: calc(1.025rem + 2vw);
            font-weight: var(--fw-600);
            padding: 0 0.5rem;
        }

        .stats-span{
            font-size: var(--fs-1);
            font-weight: var(--fw-700);
        }

        #stats-info{
            white-space: nowrap;
        }

        @media (max-width: 1200px) {
            .left-container{
                min-height: 450px;
                min-width: 450px;
            }
        }
        @media  (max-width: 992px) {
            margin: 5rem 3rem;
            .left-container{
                width: 0;
                min-height: 400px;
                min-width: 400px;
   
                .item2,
                .item3{
                    height: 70%;
                    width: 70%;
                }
            }

            .right-container{
                #about-title{
                    font-size: calc(0.9rem + 2vw);
                    font-weight: var(--fw-600);
                }
            }
        }

        @media (max-width: 991px) {
        
            .content-container{
                flex-wrap: wrap;
            }

            .left-container{
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                width: 100%;
                min-height: 500px;
                min-width: 500px;
                .item3,
                .item2{
                    height: 70%;
                    width: 70%;
                }
            }
            
            .right-container{
                #about-title{
                    font-size: calc(0.9rem + 2vw);
                    font-weight: var(--fw-600);
                }
            }
    
            #about-paragraph{
                font-size: var(--fs-0-8);
            }
        }

        @media (max-width: 767px) {
            .left-container{
                min-height: 250px;
                min-width: 250px;
            }

        }

        @media screen and (max-width: 576px) {
            margin: 5rem 2rem;
            .stats-container{
                flex-wrap: wrap;
                gap: 1rem;
            }

            .left-container{
                min-height: 0px;
                min-width: 0px;
            }
        }
        
        @media (max-width: 320px) {
            margin: 5rem 1rem;
            #about-title{
                font-size: calc(1.025rem + 2vw);
            }
        }

`