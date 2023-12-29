import React from 'react'
import styled from 'styled-components'

const Service = () => {
    return (
        <ServicesSection>
            <div className='content-container delay animation-reveal'>
                <div className='service-container'>
                    <i id='service-icon' className="fa-solid fa-user item-1"></i>
                    <h1 id='service-title'>Master Chefs</h1>
                    <p id='service-paragraph'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>

                <div className='service-container'>
                    <i id='service-icon' className="fa-solid fa-utensils item-2"></i>
                    <h1 id='service-title'>Quality Food</h1>
                    <p id='service-paragraph'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>

                <div className='service-container'>
                    <i id='service-icon' className="fa-solid fa-cart-shopping item-3"></i>
                    <h1 id='service-title'>Online Order</h1>
                    <p id='service-paragraph'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>

                <div className='service-container'>
                    <i id='service-icon' className="fa-solid fa-headset item-4"></i>
                    <h1 id='service-title'>24/7 Service</h1>
                    <p id='service-paragraph'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>

        </ServicesSection>
    )
}

export default Service

const ServicesSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: var(--ff-general);

        .content-container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5rem 2rem 0 2rem;
        }

        .service-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            padding: 1.5rem;
            margin: 1rem;
            transition: ease-in-out 0.5s;
            
        }

        .service-container:hover {
            background: var(--bg-100);
            color: var(--fc-100);
            border-radius: 5px;
            box-shadow: var(--box-shadow);
            #service-icon{
                color: var(--fc-100);
            }
        }

        #service-icon{
            overflow: hidden;
            font-size: var(--fs-3);
            color: var(--fc-200);
            transition: ease-in-out 0.5s;
        }

        #service-title{
            font-size: var(--fs-1-25);
            font-weight: var(--fw-600);
            margin: 0.5rem 0;
            white-space: nowrap;
        }

        #service-paragraph{
            font-size: var(--fs-1);
        }

        @media (max-width: 991px) and (min-width: 576px) {
            margin: 2.5rem 0;
            .content-container{
                display: grid;
                grid-template-rows: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                grid-template-areas: 
                "item1 item2"
                "item3 item4";
                gap: 1rem;
                margin: 5rem 2rem 0 2rem;
            }

            .item-1{
                grid-area: item1;
            }
            .item-2{
                grid-area: item2;
            }
            .item-3{
                grid-area: item3;
            }
            .item-4{
                grid-area: item4;
            }

            #service-paragraph{
                font-size: var(--fs-0-8);
            }
        }

        @media screen and (max-width: 575px) {
            .content-container{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 5rem 1rem 0 1rem;
                
            }

            #service-paragraph{
                font-size: var(--fs-0-8);
            }
        }

        @media screen and (max-width: 320px) {
            .content-container{
                margin: 5rem 0rem 0 0rem;
            }
        }
`