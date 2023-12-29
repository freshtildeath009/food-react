import React from 'react'
import styled from 'styled-components'
import Booking from '../component/Booking'

const BookingPage = () => {
    return (
        <BookingDiv>
            <Booking />
        </BookingDiv>
    )
}

export default BookingPage

const BookingDiv = styled.div`
    margin: 5rem 0;
`
