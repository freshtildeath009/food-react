import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';


const Testimonial = () => {

    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        speed: 500,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    centerPadding: "170px",
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    centerPadding: "90px",
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    centerPadding: "20px",
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 568,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "30px",
                    slidesToShow: 1,
                    speed: 500,
                    dots: true
                }
            },
            {
                breakpoint: 468,
                settings: {
                    className: "",
                    centerMode: false,
                    infinite: true,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    speed: 500,
                    dots: true
                }
            },
        ]
    };
    return (
        <Carousel>
            <div className='carousel-text-container'>
                <h6>Testimonial</h6>
                <h1>Our Client Say!!!</h1>
            </div>
            <Slider className='slider' {...settings}>
                <div className='testimonial-container'>
                    <i id='qoute' className="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, earum labore? Nesciunt quos vel.</p>
                    <div className='client-info'>
                        <img src="./images/testimonial-1.jpg" alt="" />
                        <div>
                            <h5>Client Name</h5>
                            <h6>Profession</h6>
                        </div>
                    </div>
                </div>
                <div className='testimonial-container'>
                    <i id='qoute' className="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, earum labore? Nesciunt quos vel.</p>
                    <div className='client-info'>
                        <img src="./images/testimonial-2.jpg" alt="" />
                        <div>
                            <h5>Client Name</h5>
                            <h6>Profession</h6>
                        </div>
                    </div>
                </div>
                <div className='testimonial-container'>
                    <i id='qoute' className="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, earum labore? Nesciunt quos vel.</p>
                    <div className='client-info'>
                        <img src="./images/testimonial-3.jpg" alt="" />
                        <div>
                            <h5>Client Name</h5>
                            <h6>Profession</h6>
                        </div>
                    </div>
                </div>
                <div className='testimonial-container'>
                    <i id='qoute' className="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, earum labore? Nesciunt quos vel.</p>
                    <div className='client-info'>
                        <img src="./images/testimonial-4.jpg" alt="" />
                        <div>
                            <h5>Client Name</h5>
                            <h6>Profession</h6>
                        </div>
                    </div>
                </div>
            </Slider>
        </Carousel>
    )
}

export default Testimonial

const Carousel = styled.section`
    margin: 5rem 4rem 5rem 3rem;
    overflow-x: clip;
    font-family: var(--ff-general);

        .carousel-text-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            width: 100%;
            margin: 0 0 3rem 0;
        }

        .carousel-text-container h6{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-1-25);
            font-weight: var(--fw-600);
            font-family: var(--ff-cursive);
            color: var(--fc-200);
        }

        .carousel-text-container h6::after{
            content: "";
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-left: 1rem;
        }

        .carousel-text-container h6::before{
            content: "";
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-right: 1rem;
        }

        .carousel-text-container h1{
            font-size: calc(1.025rem + 2vw);
            font-weight: var(--fw-700);
        }
        .testimonial-container{
            border: 2px solid rgba(24, 26, 27, 0.2);
        }

        .testimonial-container i{
            font-size: var(--fs-2-5);
            color: var(--fc-200);
        }

        .testimonial-container p{
            font-size: var(--fs-1);
        }

        .client-info img{
            border-radius: 50%;
            width: 60px;
        }
        .client-info img{
            border-radius: 50%;
            width: 60px;
        }
        
        .client-info{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .client-info h5{
            font-size: var(--fs-1-25);
            font-weight: var(--fw-600);
        }

        .client-info h6{
            font-size: var(--fs-0-8);
            font-weight: var(--fw-600);
            opacity: 0.5;
        }

        .slick-slide div {
            padding: 0.5rem;
            background: var(--bg-300);
            border-radius: 5px; 
        }
        
        .slick-center div{
            border: 1px solid rgba(218, 165, 32, 1);
            color: var(--fc-100);
            background: var(--bg-100);
            
        }

        .slick-center div i{
            color: var(--fc-100);
        }
        
        .slick-center div div h6{
            opacity: 0.8;
        }

        .slick-dots li button:before{
            border: 1px solid black;
            border-radius: 5px;
            background: white;
            opacity: 0.7;
            content: "";
        }
        .slick-dots li.slick-active button:before{
            border: 1px solid var(--bg-100);
            background: var(--bg-100);
            opacity: .75;
        }
        @media (max-width: 576px){
            margin: 5rem 3rem 5rem 2rem;
        }

        @media (max-width: 468px){
            margin: 5rem 2rem 5rem 2rem;

            .slick-slide div div{
                border: none;
            }

            .slick-slide div{
                border: none;
                background: var(--bg-100);
                color: var(--fc-100);
            }

            .slick-slide div i{
                color: var(--fc-100);
            }
        }

        @media (max-width: 320px){
            margin: 5rem 1rem 5rem 1rem;
            
            
        }
`
