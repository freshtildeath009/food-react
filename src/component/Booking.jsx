import React from 'react'
import styled from 'styled-components'

const Booking = () => {
    return (
        <>
            <BookingSection>
                <div className='booking-container animation-reveal'>
                    <div className='booking-left-container'>
                        <img id='booking-image' src="./images/video.jpg" alt="" />
                    </div>
                    <div className='booking-right-container'>
                        <div className='booking-content-container'>
                            <div className='input-text-container'>
                                <h4 id='booking-cursive'>Reservation</h4>
                                <h1 id='booking-title'>Book A Table Online</h1>
                            </div>
                            <form className='booking-input-container'>
                                <div className='input-container'>
                                    <div className='input-group-1'>
                                        <input type="text" name="" id="input" placeholder='Your name' />
                                        <input type="text" name="" id="input" placeholder='Your email' />
                                    </div>
                                    <div className='input-group-1'>
                                        <input type="date" name="" id="input" placeholder='Your name' />
                                        <select name="sad" id="input">
                                            <option value="">1</option>
                                            <option value="">1</option>
                                            <option value="">1</option>
                                        </select>
                                    </div>
                                    <div className='input-group-3'>
                                        <textarea name="" id="textarea" rows="5" placeholder='Message Us'></textarea>
                                        <button id='booking-btn'>BOOK NOW</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </BookingSection>
        </>
    )
}

export default Booking

const BookingSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 3rem;
    font-family: var(--ff-general);
    box-shadow: var(--box-shadow);
     
        .booking-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        #booking-cursive{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
            font-size: var(--fs-1-25);
            font-weight: var(--fw-700);
            font-family: var(--ff-cursive);
            color: var(--fc-200);
            position: relative;
            
        }

        #booking-cursive::after{
            content: '';
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-left: 1rem;
        }

        #booking-title{
            font-weight: var(--fw-600);
            font-size: calc(1.25rem + 2vw);
            color: var(--fc-100);
        }
        .booking-left-container{
            overflow-x: clip;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            border-radius: 10px 0 0 10px;   
        }

        #booking-image{
            min-height: 600px;
            min-width: 100%;
        }

        .booking-right-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            height: 600px;
            width: 100%;
            
        }

        .booking-content-container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0rem 2rem;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: var(--bg-200);
            border-radius: 0 10px 10px 0;  
        }

        .input-group-1,
        .input-group-2{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            white-space: nowrap;
        }

        #input{
            font-size: var(--fs-1);
            padding: 1rem;
            margin: 0.5rem 0;
            width: 50%;
            border: none;
            border-radius: 2px;
            outline: none;
        }

        .input-group-3{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }

        #textarea{
            margin: 0.5rem 0;
            padding: 1rem;
            width: 100%;
            border: none;
            border-radius: 2px;
            outline: none;
        }

        #booking-btn{
            margin: 0.5rem 0;
            padding: 1rem;
            width: 100%;
            border: none;
            border-radius: 5px;
            color: var(--fc-100);
            background: var(--bg-100);
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
            box-shadow: var(--box-shadow);
            transition: ease-in-out 0.5s;
        }

        #booking-btn:hover{
            background: var(--bg-400);
        }

        @media (max-width: 1400px) {
            margin: 0rem 0rem;
        }

        @media (max-width: 768px) {
            .booking-container{
                flex-wrap: wrap;
            }

            .booking-left-container{
                border-radius: 10px 10px 0 0;   
            }
            
            .booking-content-container{
                padding: 0rem 3rem;
                border-radius: 0 0 10px 10px;  
            }
        }

        @media (max-width: 576px) {
            .booking-content-container{
                padding: 0rem 2rem;
            }
        }
           
        @media (max-width: 468px) {
            #booking-image{
                min-height: 400px;
                min-width: 400px;
            }
            #textarea,
            #input{
                font-size: var(--fs-0-8);
            }

            #booking-btn{
                font-size: var(--fs-0-8);
            }
        }

        @media (max-width: 320px) {
            .booking-content-container{
                padding: 0rem 1rem;
            }
        }
`