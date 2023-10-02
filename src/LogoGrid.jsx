import styled from "styled-components";
import { useState } from "react";
import React from "react";

// Import your logo images
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
// ... import other logos
const initialDisplayCount = screen.width >= 1025 ? 21 : 9;

const logos = [
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
]; // Add other logo variables to this array

const LogoGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100%;
    max-width: 500px;
    margin: auto;

    @media (min-width: 1025px) {
        max-width: 100%;
    }
`;
const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 100%;
    @media (min-width: 1025px) {
        box-shadow: 0px 3px 15px 0px rgba(221, 221, 221, 1);
        background-color: #fafafa;
        padding: 2em;
        border-radius: 30px;
    }
`;
const calculateRows = (count, perRow) => Math.ceil(count / perRow);
const Grid = styled.div`
    display: grid;
    width: 90%;
    background-color: #dddc;
    grid-template-columns: repeat(3, 33fr); /* Adjust the width of each logo */
    grid-template-rows: repeat(
        ${(props) => calculateRows(props.itemamount, 3)},
        auto
    ); /* Adjust the height of each logo */
    gap: 2px; /* Adjust the gap between logos */

    @media (min-width: 1025px) {
        width: 100%;
        grid-template-columns: repeat(
            7,
            14.2fr
        ); /* Adjust the width of each logo */
        grid-template-rows: repeat(3, auto);
    }
`;

const Logo = styled.div`
    background-color: white;
    background-image: url(${(props) => props.image});
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    aspect-ratio: 3/2;

    @media (min-width: 1025px) {
        background-color: #fafafa;
    }
`;

const H4 = styled.h4`
    font-size: 1em;
    color: #0d316f;
    @media (min-width: 1025px) {
        font-size: 1.6em;
    }
`;

const DownTriangle = styled.div`
    position: relative;
    top: -5px;
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    border-right: 0.2em solid #0d316f;
    border-top: 0.2em solid #0d316f;
    transform: rotate(135deg);
    margin-right: 0.5em;
    margin-left: 1em;
`;

const UpTriangle = styled.div`
    position: relative;
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    border-right: 0.2em solid #0d316f;
    border-top: 0.2em solid #0d316f;
    transform: rotate(-45deg);
    margin-right: 0.5em;
    margin-left: 1em;
`;
const ShowMoreButton = styled.a`
    align-self: flex-start;
    margin-top: 3px;
    margin-left: 1em;
    padding: 10px;
    font-size: 0.9em;
    color: #0d316f;
    border: none;
    cursor: pointer;

    &:hover {
        color: #2980b9;
        div {
            border-color: #2980b9;
        }
    }

    @media (min-width: 1025px) {
        display: none;
    }
`;

export default function LogoGrid() {
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);

    const handleShowMore = () => {
        setDisplayCount(logos.length); // Show all logos
    };
    const handleShowLess = () => {
        setDisplayCount(9); // Show all logos
    };

    return (
        <LogoGridContainer>
            <H4>İş Ortaklarımız</H4>
            <GridContainer>
                <Grid itemamount={displayCount}>
                    {logos.slice(0, displayCount).map((logo, index) => (
                        <React.Fragment key={index}>
                            <Logo image={logo} />
                        </React.Fragment>
                    ))}
                </Grid>
            </GridContainer>
            {displayCount < logos.length && (
                <ShowMoreButton onClick={handleShowMore}>
                    Daha Fazla Göster
                    <DownTriangle></DownTriangle>
                </ShowMoreButton>
            )}
            {displayCount == logos.length && (
                <ShowMoreButton onClick={handleShowLess}>
                    Daha Az Göster
                    <UpTriangle></UpTriangle>
                </ShowMoreButton>
            )}
        </LogoGridContainer>
    );
}
