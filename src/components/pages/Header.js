import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import logs from '../../assets/images/baflix2.png';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import {Button} from './tabComponents/Button.css';

class Header extends Component {
    render() {
        return (
            <StyledHeader className="header containers">
                
                <div className="header-top">
                        
                    <NavLink to="/login" className="sugnIn-btn">Zaloguj się</NavLink>
                </div>
                <div className="header-content">
                    <StyledTitle>Witamy</StyledTitle>
                    <StyledSubTitle>Nieograniczona oferta filmów, seriali, programów i nie tylko.</StyledSubTitle>
                    <Link to="/choose-plan">
                        <Button to="/choose-plan" className="main-offer-btn" primary>
                            Zapisz się
                            <Icon className="icon" icon={ic_keyboard_arrow_right} size={37}></Icon>
                        </Button>
                    </Link>
                    
                </div>
            </StyledHeader>
        )
    }
}

export default Header;



const StyledTitle = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 50px;
    font-weight: 700;
    @media(max-width:736px){
        font-size: 2.6rem;
           margin: 20px;
    }

`
const StyledSubTitle = styled.h2`
    font-weight: 400;
    font-size: 28px;
    margin: 0 0 28px;
    text-transform: uppercase;
    @media(max-width:736px){
        font-size: 1.4rem;
           margin: 0;
    }

`
const StyledLogo = styled.img`
 width: 200px;
    position: absolute;
    top: 25%;
    left: 100px;
    transform: translate(-50%,-50%);
    margin-left: 0;
    @media(min-width: 500px){
        width: 350px;
        height: 80px;
        left: 150px;
    }

`
const StyledHeader = styled.div`
    height: 70vh;
    position: relative;
    margin: 0;
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('https://cdn.pixabay.com/photo/2019/02/17/03/17/sunset-4001481_960_720.jpg') no-repeat;
      height: 80vh;
      width: 100%;
      background-size: cover;
      background-position: center;
      overflow: hidden;
    @media(min-width: 1200px) {
        background-size: 100%;
    }

    ::after {
        content: '',;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        box-shadow: inset 4.3rem 3.2rem 11.3rem #000,  inset -4.3rem -3.2rem -11.3rem #000;
    }
    
    .sugnIn-btn {
        right: 0;
        margin: 10px 3% 0;
        padding: 5px 15px;
        font-weight: 400;
        line-height: normal;
        border-radius: 5px;
        font-size:16px;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        text-decoration: none;
        color: white;
        &:hover {
            background: var(--main-red-hover)
        }
        @media(max-width:1150px){
            margin-top: 1.25rem;
            right: 5%;
    }

    }

    .header-top {
        position: relative;
        height: 160px;
        z-index: 1;
    }
    .header-content {
        width: 65%;
        position: relative;
        margin: 10px auto 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        color: white;
        width: 100%;
        z-index: 1;
        @media(max-width:736px){
            display: grid;
            grid-template-rows: repeat(3, 60px);
            margin-top: 0px;
            grid-row-gap: 60px;
    }

    }

    .main-offer-btn {
        display: inline-block;
        background: var(--main-red);
        text-transform: uppercase;
        border: none;
        outline: none;
        margin: 10px 33%;
        padding: 10px 35px;
        border-radius: 5px;
        font-size: 24px;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0,0,0.4);
        cursor: pointer;
        color:white;
        &:hover {
            background: var(--main-red-hover);
        }
        @media(max-width:1150px){
            margin: 0 25%;
            font-size: 20px;
        }
        @media(max-width:960px){
            margin: 0 20%;
            font-size: 14px;
    }
    }
    .icon svg {
        vertical-align: bottom;
        margin-left: 5px;
        @media(max-width:736px){
            display: none !important
    }


    }
`