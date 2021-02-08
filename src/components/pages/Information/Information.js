import React from 'react'
import styled from 'styled-components';

export default function Information() {
    return (
        <StyledAll>
            <div> Informacje o stronie</div>
            <br />
            <div>Korzystałem z:</div>
            <ul>
                <li><a href="https://pixabay.com/pl/">pixabay</a></li>
                <li><a href="https://www.bootstrapcdn.com/">bootstrap</a></li>
                <li><a href="https://fontawesome.com/">Fontawesome</a></li>
                <li><a href="https://fonts.google.com/">Google fonts</a></li>
                <li><a href="https://www.flaticon.com/">Flaticon</a></li>
                <li><a href="https://placeimg.com/">Placeimg</a></li>
                <li><a href="https://cdnjs.com/libraries/font-awesome">Cdnjs</a></li>
            </ul>
            <div>Informacje o technologii</div>
            <ul>
                <li>React</li>
                <li>Styled-Components</li>
                <li>React Hook</li>
                <li>React Tabs</li>
                <li>Context API</li>
                <li>Swiper slide</li>

                <li>Axios</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mongo DB</li>
            </ul>
        </StyledAll>
    )
}


const StyledAll = styled.div`
    margin-top: 100px;
    margin-left: 40px;
    color:white;
`