import styled from "styled-components";

    export const StyleHero=styled.header `
    width: 100%;
    min-height: 550px;
    position: relative;
    display: flex;justify-content: center;
    align-items: center;
    background: url(${props=>props.img}) no-repeat center;
    background-size: cover;
    @media(max-width:578px){
        min-height:300px;
    }
   
    `
    export const StyledPageHero=styled.div `
        width: 100%;
        min-height: 550px;
        position: relative;
        display:flex;align-items: center;
        justify-content: center;
        background: url(${props=>props.img}) no-repeat center;
        background-size: cover;
        &:before{
            content:"";
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(3,3,3,.2);
        }
         
        @media(max-width:578px){
            min-height:300px;
        }
    `
