import React from "react";

const date = new Date();
const currYear = date.getFullYear();

function Footer(){
    return <p>copyright @ {currYear}</p>
}

export default Footer;