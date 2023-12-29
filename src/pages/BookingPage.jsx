import React from 'react'
import styled from 'styled-components'
import Booking from '../component/Booking'
import HeroPages from '../component/HeroPages'
const BookingPage = () => {
    return (
        <>
            <HeroPages title="BOOK NOW!" />
            <BookingDiv>
                <Booking />
            </BookingDiv>
        </>
    )
}

export default BookingPage

const BookingDiv = styled.div`
    margin: 5rem 0;
`
