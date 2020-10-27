import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pictures } from "../db";

export default class Film extends Component {
  state = {
    data: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    pictures.map((item) => {
      if (item.id == this.props.match.params.id) {
        this.setState({
          data: item,
        });
      }
    });

  }

  render() {
    const { data } = this.state;
    // console.log(data)
    return (
      <StyledFirstPages>
          <StyledNameMovie>{data.alt}</StyledNameMovie>
        <StyledDescription>{data.description}</StyledDescription>
        <StyledImg>
          <img src={data.img} alt={data.alt} />
          <span className="one">
            <Link to="/watch">
              <i className="far fa-play-circle"></i>
            </Link>
          </span>
          <span className="two">
            <a href={data.presage}>
              <i className="fas fa-info"></i>
            </a>
          </span>
        </StyledImg>

        <StyledSeasonAndType>
          {data.seasons === 0 ? "Czas filmu: " : "Ilość sezonów:"}{" "}
          <span>{data.seasons === 0 ? data.time : data.seasons}</span>{" "}
          <b className="block"></b> typ filmu:<span> {data.type}</span>
        </StyledSeasonAndType>
        <div>
          {/* typ filmu: {data.type}
             <ResponsivePlayer></ResponsivePlayer> */}
        </div>
      </StyledFirstPages>
    );
  }
}

const StyledFirstPages = styled.div`
  color: white;
  padding-top: 50px;
  background-color: pink;
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  min-height: 100vh;
`;

const StyledNameMovie = styled.div`
  font-family: 'Henny Penny', cursive;
  text-align:center;
  text-transform:uppercase;
  letter-spacing: 3px;
  color: red;
  font-size: 20px;
  font-weight: 700;
  margin: 30px auto;
  @media (min-width: 450px) {
    font-size: 30px;
  }
`;

const StyledDescription = styled.div`
  width: 100%;
  margin: 30px auto 10px;
  text-align: center;
  max-width: 700px;
  width: 80%;
  line-height: 28px;
  letter-spacing: 2px;
 @media(min-width: 1000px){
  letter-spacing: 3px;
 }
`;
const StyledImg = styled.div`
  position: relative;
  margin: 50px auto 20px;
  max-width: 650px;

  img {
    display: block;
    margin: 10px auto;
    width: 80%;
    border-radius: 20px;
  }
  span {
    position: absolute;
    bottom: 10%;
  }
  .one {
    left: 20%;
    bottom: 25px;
    svg {
      color: white;
      width: 30px;
      height: 30px;
      :hover {
          color: #95a5a6;
        }
    }
  }
  .two {
    left: 35%;
    bottom: 25px;
    svg {
      color: white;
      width: 30px;
      height: 30px;
      :hover {
          color: #95a5a6;
        }
    }
  }
  @media (min-width: 800px) {
 
    .one {
      svg {
        width: 40px;
        height: 40px;
        color: white;
        :hover {
          color: #95a5a6;
        }
      }
    }
    .two {
      svg {
       
        width: 40px;
        height: 40px;
        color: white;

      }
    }
  }
`;
const StyledSeasonAndType = styled.div`
  margin-left: 30px;
  margin-top: 40px;

  span {
    color: red;
    text-transform: uppercase;
    margin: 15px 8px;
    font-size: 20px;
    border: 1px solid red;
    padding: 2px 8px;
  }
  .block {
    display: block;
    margin: 20px;
    @media (min-width: 390px) {
      display: inline;
      margin: 10px;
    }
  }
  @media(min-width: 700px) {
    text-align: center;
    max-width: 500px;
    margin: 40px auto;
  }
`;

