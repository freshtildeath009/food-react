import React from 'react'
import styled from 'styled-components'

const Team = () => {
    return (
        <>

            <TeamSection>
                <div className='team-title-container'>
                    <h4 id='team-cursive'>Team Members</h4>
                    <h4 id='team-title'>Our Master Chefs</h4>
                </div>
                <div className='team-chefs-container'>

                    {/* Chef Container */}
                    <div className='chef-container chef1'>
                        <div className='chef-info-container'>
                            <div className="photo-container">
                                <img id='chef-image' src="./images/team-1.jpg" alt="" />
                            </div>
                            <h1 id='chef-name'>Full Name</h1>
                            <h1 id='chef-designation'>Designation</h1>
                        </div>
                        <div className='chef-social-media-container'>
                            <i id='social-icon' className="fa-brands fa-facebook-f"></i>
                            <i id='social-icon' className="fa-brands fa-x-twitter"></i>
                            <i id='social-icon' className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    {/* Chef Container */}

                    {/* Chef Container */}
                    <div className='chef-container chef2'>
                        <div className='chef-info-container'>
                            <div className="photo-container">
                                <img id='chef-image' src="./images/team-2.jpg" alt="" />
                            </div>
                            <h1 id='chef-name'>Full Name</h1>
                            <h1 id='chef-designation'>Designation</h1>
                        </div>
                        <div className='chef-social-media-container'>
                            <i id='social-icon' className="fa-brands fa-facebook-f"></i>
                            <i id='social-icon' className="fa-brands fa-x-twitter"></i>
                            <i id='social-icon' className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    {/* Chef Container */}

                    {/* Chef Container */}
                    <div className='chef-container chef3'>
                        <div className='chef-info-container'>
                            <div className="photo-container">
                                <img id='chef-image' src="./images/team-3.jpg" alt="" />
                            </div>
                            <h1 id='chef-name'>Full Name</h1>
                            <h1 id='chef-designation'>Designation</h1>
                        </div>
                        <div className='chef-social-media-container'>
                            <i id='social-icon' className="fa-brands fa-facebook-f"></i>
                            <i id='social-icon' className="fa-brands fa-x-twitter"></i>
                            <i id='social-icon' className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    {/* Chef Container */}

                    {/* Chef Container */}
                    <div className='chef-container chef4'>
                        <div className='chef-info-container'>
                            <div className="photo-container">
                                <img id='chef-image' src="./images/team-4.jpg" alt="" />
                            </div>
                            <h1 id='chef-name'>Full Name</h1>
                            <h1 id='chef-designation'>Designation</h1>
                        </div>
                        <div className='chef-social-media-container'>
                            <i id='social-icon' className="fa-brands fa-facebook-f"></i>
                            <i id='social-icon' className="fa-brands fa-x-twitter"></i>
                            <i id='social-icon' className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    {/* Chef Container */}

                </div>

            </TeamSection >
        </>
    )
}

export default Team

const TeamSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3rem;
    font-family: var(--ff-general);
    flex-direction: column;
    margin: 8rem 3rem 3rem 3rem;

        .team-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-direction: column;
        }

        .team-title-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #team-cursive{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-1-25);
            font-family: var(--ff-cursive);
            color: var(--fc-200);   
            text-align: center;
        }

        #team-cursive::before{
            content: '';
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-right: 1rem;
        }

        #team-cursive::after{
            content: '';
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-left: 1rem;
        }
        #team-title{
            font-size: calc(1.025rem + 2vw);
            font-weight: var(--fw-600);
            white-space: nowrap;
        }

        .team-chefs-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .chef-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem;
        }

        .chef-info-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }

        .photo-container{
            overflow: hidden;  
            border-radius: 50%;
        }
        #chef-image{
            width: 250px;
            min-height: 200px;
            min-width: 200px;
            border-radius: 50%;
            transition: all ease-in-out 0.5s;
        }

        #chef-image:hover{
            transform: scale(1.1);
            vertical-align: middle;
        }

        #chef-name{
            font-size: var(--fs-1-1);
            font-weight: var(--fw-600);
        }

        #chef-designation{
            font-size: var(--fs-0-8);
            opacity: 0.6;
        }
        .chef-container:hover .chef-social-media-container{
            transition: ease-in-out 0.5s;
            opacity: 1;
        }

        .chef-social-media-container{
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: ease-in-out 0.5s;
        }

        #social-icon{
            font-size: va(--fs-1);
            margin: 1rem 0.2rem;
            padding: 1rem;
            background: var(--bg-100);
            border-radius: 50px 50px 0 0;
        }

        @media (min-width: 576px) and (max-width: 991px) {
            margin: 8rem 2rem 3rem 2rem;
            .team-chefs-container{
                display: grid;
                grid-template-column: 2fr;
                grid-template-rows: 2fr;
                grid-template-areas: 
                "chef1 chef2"
                "chef3 chef4";
            }

            .chef1{
                grid-area: chef1;
            }

            .chef2{
                grid-area: chef2;
            }

            .chef3{
                grid-area: chef3;
            }

            .chef4{
                grid-area: chef4;
            }
        }

        @media (max-width: 575px) {
            .team-chefs-container{
                display: flex;
                flex-direction: column;
            }
        }

        @media (max-width: 319px) {
            margin: 8rem 1rem 3rem 1rem;
            #chef-image{
                min-height: 0;
                min-width: 0;
            }
        }

`