import React from 'react'
import styled from 'styled-components'
import Service from '../component/Service'

const ServicesPage = () => {
    return (
        <ServiceDiv>
            <Service />
            <Service />
        </ServiceDiv>
    )
}

export default ServicesPage
const ServiceDiv = styled.div`
    margin: 5rem 0;

        .content-container{
            margin: 0rem 2rem 0 2rem;
        }
`
