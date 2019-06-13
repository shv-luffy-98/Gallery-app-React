import React, { useState } from "react";
import "./pictures.css";

export default ({ pictureLinks, changeBgsFlag, selected, changeSelected }) => {
    let pictureClick = (index) => {
        changeSelected(() => {
            if (selected == index) {
                changeBgsFlag(true);
                return -1;
            }
            else {
                changeBgsFlag(false);
                return index;
            }
        })
    }
    return (
        <div className="Pictures">
            {pictureLinks.map((item, index) => (
                <img src={item} key={index} className="Image" onClick={() => pictureClick(index)} />
            ))}
        </div>
    );
}