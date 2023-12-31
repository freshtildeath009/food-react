import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from "../component/Button"
const Header = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false)
    console.log(dropDownMenu);
    const _handleDropDownMenu = () => {
        setDropDownMenu(!dropDownMenu)
    }

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
                    <div className='drop-down-container'>
                        <button id='btn-pages' onClick={_handleDropDownMenu}>PAGES</button>
                        <UL className='drop-down-menu-container' show={dropDownMenu}>
                            <li><Link to="/team">TEAM</Link></li>
                            <li><Link to="/booking">BOOKING</Link></li>
                            <li><Link to="/testimonial">TESTIMONIAL</Link></li>
                        </UL>
                    </div>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <Button text="BOOK A TABLE" />
                </ul>
                <div className='menu-container'>
                    <i id='menu' className="fa-solid fa-bars"></i>
                </div>
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
    box-shadow: var(--box-shadow);

        .nav-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 80px;
            position: fixed;
            background: var(--bg-200);
            border-radius: 0 0 10px 10px;
            z-index: 1;
            box-shadow: var(--box-shadow-light);
        }
        
        .left-container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 3rem; 
        }
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

        .right-container{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-1);
            font-weight: var(--fw-700);
            gap: 1rem;
            margin-right: 3rem;
        }
    
        a{
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
            color: var(--fc-200);
        }
        
        .menu-container{
            display: none;
            justify-content: center;
            align-items: center;
            margin-right: 5rem;
        }

        #menu{
            overflow-y: hidden;
            font-size: calc(0.9rem + 2vw);
        }
        
        .drop-down-container{
            position: relative;
        }

       

        #btn-pages{
            border: none;
            font-size: (--fs-1);
            font-weight: var(--fw-600);
            color: var(--fc-200);
            background: var(--bg-200);
        }

        @media (max-width: 991px){
            .menu-container{
                display: block;
                justify-content: center;
                align-items: center;
                margin-right: 5rem;
            }
            .right-container{
                display: none;
            }

            .menu-container{
                margin-right: 3rem;
            }
        }

        @media (max-width: 768px){
            .left-container{
                margin-left: 3rem; 
            }

            .menu-container{
                margin-right: 3rem;
            }
        }

        @media (max-width: 575px){
            .left-container{
                margin-left: 2rem; 
            }

            .menu-container{
                margin-right: 2rem;
            }
        }
        
        @media (max-width: 320px){
            .left-container{
                margin-left: 1rem; 
            }

            .menu-container{
                margin-right: 1rem;
            }
        }
`

const UL = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    right: 277px;
    background: var(--bg-200);
    margin-top: 1.5rem;
    padding: 2rem 1rem;
    border-radius: 0 0 10px 10px;
`