import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderNav>
            <nav className='nav-container'>
                <div className='left-container'>
                    <i id='logo' className="fa-solid fa-utensils"></i>
                    <h1 id='text-logo'>FoodTrip</h1>
                </div>
                <ul className='right-container'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/service">SERVICE</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </HeaderNav>
    )
}

export default Header

const HeaderNav = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-family: var(--ff-general);
    background: var(--bg-200);

        .nav-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 80px;
            position: fixed;
            background: var(--bg-200);
            border-radius: 0 0 5px 5px;
            z-index: 1;
            
                .left-container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 5rem; 
                    
                        #logo{
                            font-size: calc(1rem + 2.5vw);
                            font-weight: 900;
                            color: var(--fc-200);
                            overflow-y: hidden;
                        }

                        #text-logo{
                            font-size: calc(1rem + 2.5vw);
                            font-weight: var(--fw-900);
                            color: var(--fc-200);
                            overflow-y: hidden;
                        }
                }
        }

        .right-container{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-1);
            font-weight: var(--fw-700);
            gap: 1rem;
            margin-right: 5rem;

                a{
                    font-size: var(--fs-1);
                    font-weight: var(--fw-600);
                    color: var(--fc-200);
                }
        }

        
`
