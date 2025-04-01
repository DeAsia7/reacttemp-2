import React from 'react';

function Footer() {
    return (
        <footer style={Styles.footer}>

        <p> @Copyright 2025 - DeAsia Mallory
        </p>
        </footer>
    )
}
const Styles = {
    footer: {
        backgroundColor: "purple",
        color: "white",
        padding: "10px",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
    }
};

export default Footer;

