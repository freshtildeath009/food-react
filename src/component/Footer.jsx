
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <section className='footer-content-container'>
                    <div className='footer-1-container'>
                        <div className='footer-title'>
                            <h4 id='footer-cursive'>Company</h4>
                        </div>
                        <a href=''>About Us</a>
                        <a href=''>Contact Us</a>
                        <a href=''>Reservation</a>
                        <a href=''>Privacy Policy</a>
                        <a href=''>Term & Condition</a>
                    </div>
                    <div className='footer-2-container'>
                        <div className='footer-title'>
                            <h4 id='footer-cursive'>Contact</h4>
                        </div>
                        <h4><i className="fa-solid fa-location-dot">123 STREET, NEW YORK, USA</i></h4>
                        <h4><i className="fa-solid fa-phone"></i>+012 345 67890</h4>
                        <h4><i className="fa-solid fa-envelope"></i>info@example.com</h4>
                        <div className='social-media-icon-container'>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className='footer-3-container'>
                        <div className='footer-title'>
                            <h4 id='footer-cursive'>Opening</h4>
                        </div>
                        <h4>Monday- Saturday</h4>
                        <h4>09AM - 09PM</h4>
                        <h4>Sunday</h4>
                        <h4>10AM - 08PM</h4>
                    </div>
                    <div className='footer-4-container'>
                        <div className='footer-title'>
                            <h4 id='footer-cursive'>Newsletter</h4>
                        </div>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className='footer-input-container'>
                            <input id='footer-input' type="text" placeholder='Your Email' />
                            <button id='sign-up-btn'>SIGN UP</button>
                        </div>
                    </div>
                </section>
            </FooterSection>
        </>
    )
}

export default Footer

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general);
    background: var(--bg-200);
    color: var(--fc-100);
    border-radius: 10px 10px 0 0;
    box-shadow: var(--box-shadow-top);
        .footer-content-container{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin: 5rem 3rem 3rem 3rem;
            gap: 1rem;
            width: 100%;
        }

        .footer-2-container > h4,
        .footer-3-container > h4,
        .footer-4-container > h4{
            padding: 0.2rem;
        }
        
        .footer-2-container,
        .footer-3-container,
        .footer-4-container,
        .footer-1-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
        }

        .social-media-icon-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
        }
        .social-media-icon-container > a{
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--fc-100);
            padding: 1rem;
            border: solid 1px white;
            border-radius: 50px;
            margin: 1rem 1rem 0 0;
            transition: ease-in-out 0.5s;
        }

        .social-media-icon-container > a:hover{
            color: var(--fc-200);
            border: solid 1px var(--bg-100);
        }
        #footer-cursive{
            font-family: var(--ff-cursive);
            font-size: var(--fs-1-25);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            color: var(--fc-200);
        }
        .footer-1-container > a{
            color: var(--fc-100);
        }

        .footer-1-container > a:hover{
            color: var(--fc-200);
            transition: ease-in-out 0.5s;
        }


        #footer-cursive::after{
            content: '';
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-left: 1rem;
        }

        .footer-input-container{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            width: 100%;
            min-width: 210px;
            margin-top: 1rem;
        }

        #footer-input{
            padding: 1rem;
            width: 100%;
            border-radius: 5px;
            outline: none;
        }

        #sign-up-btn{
            padding: 0 1rem;
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            bottom: 0.5rem;
            background: var(--bg-100);
            color: var(--fc-100);
            font-weight: var(--fw-600);
            border: none;
            border-radius: 5px;
            transition: ease-in-out 0.5s;
        }

        #sign-up-btn:hover{
            background: var(--bg-400);
        }
        @media(max-width: 991px) {
            .footer-content-container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                grid-template-areas: 
                "item1 item2"
                "item3 item4";
            }

            .footer-1-container{
                grid-area: item1;
                width: 100%;
            }

            .footer-2-container{
                grid-area: item2;
                width: 100%;
            }

            .footer-3-container{
                grid-area: item3;
                width: 100%;
            }

            .footer-4-container{
                grid-area: item4;
                width: 100%;
            }
        }

        @media (max-width: 575px){
            .footer-content-container{
                display: flex;
                flex-direction: column;
                margin: 5rem 2rem 3rem 2rem;
                width: 100%;
            }
        }

        @media (max-width: 320px){
            .footer-content-container{
                margin: 5rem 1rem 3rem 1rem;
            }
        }
`