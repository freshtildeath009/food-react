import React from 'react';
import styled from 'styled-components';

const Menu = () => {
    return (
        <MenuSection>
            <div className='content-container animation-reveal'>
                <h4 id='menu-cursive'>Food Menu</h4>
                <h1 id='menu-title'>Most Popular items</h1>
                <div className='menu-category-container'>
                    <div id='break-fast' className="menu-category menu">
                        <i id='menu-icon' className="fa-solid fa-mug-saucer"></i>
                        <p id='menu-category-text'>Popular <br /> <span id='food-span'>Breakfast</span></p>
                    </div>
                    <div id='launch' className="menu-category menu">
                        <i id='menu-icon' className="fa-solid fa-burger"></i>
                        <p id='menu-category-text'>Special <br /> <span id='food-span'>Launch</span></p>
                    </div>
                    <div id='dinner' className="menu-category menu">
                        <i id='menu-icon' class="fa-solid fa-utensils"></i>
                        <p id='menu-category-text'>Lovely <br /> <span id='food-span'>Dinner</span></p>
                    </div>
                </div>
                <div className='menu-main-container'>

                    <div className='food-left-container'>
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-1.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-2.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-3.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-4.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                    </div>

                    <div className='food-right-container'>
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-5.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-6.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-7.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                        {/* Single item */}
                        <div className='food-item-container'>
                            <img id='food-image' src="./images/menu-8.jpg" alt="" />
                            <div className='food-info-container'>
                                <div className='food-name-container'>
                                    <h3 id='food-name'>Chicken Burger</h3>
                                    <h3 id='food-price'>$113</h3>
                                </div>
                                <p id='food-info'>Ipsum ipsum clita erat amet dolor justo diam</p>
                            </div>
                        </div>
                        {/* Single item */}
                    </div>

                </div>
            </div>
        </MenuSection>
    )
}

export default Menu

const MenuSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general);
    margin: 5rem 3rem;

        .content-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }

        #menu-cursive{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-1-25);
            font-family: var(--ff-cursive);
            position: relative;
            white-space: nowrap;
            color: var(--fc-200);
        }

        #menu-cursive::before{
            content: "";
            display: inline-block;
            height: 2px;
            width: 50px;
            background: var(--bg-100);
            margin-right: 1rem;
        }

        #menu-cursive::after{
            content: '';
            display: inline-block;
            width: 50px;
            height: 2px;
            background: var(--bg-100);
            margin-left: 1rem;
        }
        #menu-title{
            font-size: calc(1.025rem + 2vw);
            font-weight: var(--fw-600);
            white-space: nowrap;
        }
        .menu-category-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 2rem; 
        }

        .menu-category{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            padding: 1rem 0rem;
            cursor: pointer;
            // border-bottom: 1px solid rgba(24, 26, 27, 0.2);
        }

        .active{
            border-bottom: 2px solid rgba(218, 165, 32, 1);
        }
        #menu-icon{
            font-size: calc(1rem + 2vw);
            color: var(--fc-200);
            margin: 0 0.5rem;
            overflow: hidden;
        }
        
        #menu-category-text{
            font-size: var(--fs-0-8);
        }

        #food-span{
            font-weight: var(--fw-700);
        }
        .menu-main-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 1rem;
            margin: 2rem 0 0 0;
        }

        .food-left-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            gap: 1rem;
        }

        .food-right-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            gap: 1rem;
        }

        .food-item-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 1rem;
        }

        #food-image{
            height: 80px;
            width: 110px;
            border-radius: 5px;
        }

        .food-info-container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
        }

        .food-name-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: solid 2px rgba(24, 26, 27, 0.2);
        }

        #food-price,
        #food-name{
            font-size: var(--1-25);
            font-weight: var(--fw-700);
        }

        #food-price{
            color: var(--fc-200);
        }
        #food-info{
            font-size: var(--fs-1);
        }

        @media (max-width: 991px){
            .menu-main-container{
                flex-wrap: wrap;
            }

            #food-info{
                font-size: var(--fs-0-8);
            }
        }
        
        @media (max-width: 576px){
            margin: 5rem 2rem;
        }

        @media (max-width: 320px){
            margin: 5rem 1rem;
        }
`