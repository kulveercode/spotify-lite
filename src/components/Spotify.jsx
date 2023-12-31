import React from 'react';
import styled from 'styled-components';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";


const Spotify = () => {
  return (
    <Container>
        <div className="spotify__body">
            <Sidebar />
            <div className="body">
            <Navbar />
                <div className="body__contents"></div>
                <Body />
            </div>
        </div>
        <div className="spotify_footer">
            <Footer />
        </div>
    </Container>
  )
}

export default Spotify;

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .spotify__body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent, rgba(0, 0, 0, 1));
        background-color: rgb(32, 87, 100);
    }
    .body {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
`;

