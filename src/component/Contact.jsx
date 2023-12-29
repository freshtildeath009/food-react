import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <>
            <ContactSection className='animation-reveal'>
                <div className='contact-text-container'>
                    <div className='title-container'>
                        <h4 id='contact-cursive'>Contact Us</h4>
                        <h1 id='contact-title'>Contact For Any Query</h1>
                    </div>
                    <div className='email-content-container'>
                        <div className='email-container'>
                            <h4 id='contact-cursive'>Booking</h4>
                            <h5><i className="fa-solid fa-envelope"></i>book@exmple.com</h5>
                        </div>
                        <div className='email-container'>
                            <h4 id='contact-cursive'>General</h4>
                            <h5><i className="fa-solid fa-envelope"></i>book@exmple.com</h5>
                        </div>
                        <div className='email-container'>
                            <h4 id='contact-cursive'>Technical</h4>
                            <h5><i className="fa-solid fa-envelope"></i>book@exmple.com</h5>
                        </div>
                    </div>
                </div>
                <div className='contact-container'>
                    <div className='left-container'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123767.87216408261!2d120.98895625!3d14.209645049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d5fead78983f%3A0x1ef1f6de9b810218!2sSilang%2C%20Cavite!5e0!3m2!1sen!2sph!4v1703821984317!5m2!1sen!2sph"
                            width="600"
                            height="450"
                            allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='My map'></iframe>
                    </div>
                    <div className='right-container'>
                        <div className='input-container'>
                            <input id='input' type="text" placeholder='Your Name' />
                            <input id='input' type="text" placeholder='Your Email' />
                        </div>
                        <input id="input" className='input-margin' type="text" placeholder='Subject' />
                        <textarea name="" id="textarea" cols="30" rows="10" placeholder='Message'></textarea>
                    </div>
                </div>
            </ContactSection>
        </>
    )
}

export default Contact

const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--ff-general);
    margin: 5rem 3rem;

        .contact-text-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }

        .title-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }

        #contact-cursive{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-1-25);
            font-family: var(--ff-cursive);
            font-weight: var(--fw-600);
            color: var(--fc-200);
        }

        .title-container #contact-cursive::before{
            content: "";
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-right: 1rem;
        }

        .title-container #contact-cursive::after{
            content: "";
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-left: 1rem;
        }

        #contact-title{
            font-size: calc(1.25rem + 2vw);
            font-weight: var(--fw-600);
        }

        .email-content-container{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            width: 100%;
        }

        .email-container{  
            margin: 1rem 0;    
        }

        .email-container #contact-cursive::after{
            content: "";
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-left: 1rem;
        }

        .email-container h5{
            font-size: var(--fs-1);
            opacity: 0.7;
        }

        .email-container i{
            color: var(--fc-200);
            margin-right: 0.5em;
        }

        .contact-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 450px;
            width: 100%;
            gap: 1rem;
            margin-top: 2rem;
            
        }

        .contact-container .left-container{
            height: 100%;
            width: 100%;
        }

        .left-container iframe{
            height: 100%;
            width: 100%;
            border-radius: 5px;
            box-shadow: var(--box-shadow-light);
        }

        .contact-container .right-container{
            width: 100%;
        }

        .right-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-shadow: var(--box-shadow-light);
        }

        .input-margin{
            margin: 1rem 0;
        }

        .input-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 1rem;
            
        }

        #input{
            padding: 1rem;
            width: 100%;
            outline: none;
            border: 2px solid rgba(24, 26, 27, 0.3);
            border-radius: 5px;
        }

        #textarea{
            height: 100%;
            width: 100%;
            outline: none;
            border: 2px solid rgba(24, 26, 27, 0.3);
            padding: 1rem;
            border-radius: 5px;
        }

        @media (max-width: 768px) {
            .contact-container{
                flex-direction: column;
                height: 700px;
                // margin: 5rem 0;
            }
        }
        @media(max-width: 576px){
            margin: 5rem 2rem;
        }

        @media(max-width: 320px){
            margin: 5rem 1rem;
        }
`
