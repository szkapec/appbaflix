import React, { Component } from 'react'
import OneSection from './OneSection/OneSection';
import SliderFilms from './Slider/SliderFilms';
import Images from './Slider/Images';
import styled from 'styled-components';
import IndexSlider from './SliderSmall/IndexSlider';
import axios from 'axios';
import HightSlider from './HightSlider/HightSlider';
import SliderChoice from './SliderChoice/SliderChoice';
import Footer from '../pages/tabComponents/Footer/Footer';
import { description, pictures, picturesTwo, picturesThree, hightSlider, hightSliderNew } from './db';
export default class Index extends Component {
    state = {
        description: 'Błąd danych',
        pictures: '',
        picturesTwo: '',
        picturesThree: '',
        largeImage: '',
        hightSlider: '',
        hightSliderNew: '',
    }
    componentDidMount() {
        this.setState({
            description: description,
            pictures: pictures,
            picturesTwo,
            picturesThree,
            hightSlider,
            hightSliderNew
        })
    }
    render() {
        const { description, pictures, picturesTwo, picturesThree, hightSlider } = this.state;
        return (
            <>
                <OneSection Views />
                <SliderChoice description={description.one} picture={pictures}></SliderChoice>
                <IndexSlider description={description.one} picture={pictures} baflix />
                <IndexSlider description={description.two} picture={picturesTwo} />
                <IndexSlider description={description.four} picture={picturesThree} />
                <SliderFilms picture={Images} />
                <IndexSlider description={description.two} picture={picturesTwo} />
                <IndexSlider description={description.four} picture={picturesThree} /> */}
                <HightSlider picture={hightSlider} />
                <Footer />
            </>
        )
    }
}
