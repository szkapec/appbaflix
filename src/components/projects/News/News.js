import React, { Component } from "react";
import OneSection from "../OneSection/OneSection";
import IndexSlider from "../SliderSmall/IndexSlider";
import axios from "axios";
import Footer from "../../pages/tabComponents/Footer/Footer";
import SliderChoice from "../SliderChoice/SliderChoice";
import { description, picturesThree, picturesTwo, pictures } from "../db";

export default class News extends Component {
  state = {
    description: "",
    picturesThree: "",
    picturesTwo: "",
    pictures: "",
  };

  componentDidMount() {
    this.setState({
      description,
      picturesThree,
      picturesTwo,
      pictures,
    });

  }

  render() {
    const { description, picturesThree, picturesTwo, pictures } = this.state;
    return (
      <div>
        <OneSection />
        <SliderChoice description={description.one} picture={pictures} />
        <IndexSlider
          baflix
          News
          description={description.four}
          picture={picturesThree}
        />
        <IndexSlider description={description.two} picture={picturesTwo} />
        <IndexSlider description={description.four} picture={picturesThree} />
        <IndexSlider description="Sitcomy" picture={picturesTwo} />
        <IndexSlider
          News
          description="Najczęściej oglądane"
          picture={picturesThree}
        />
        <IndexSlider
          description="Thrillery telewizyjne"
          picture={picturesTwo}
        />
        <IndexSlider description="Filmy akcji" picture={picturesThree} />
        <IndexSlider
          description="Top 10 w Polsce dzisiaj"
          picture={picturesTwo}
        />
        <Footer />
      </div>
    );
  }
}
