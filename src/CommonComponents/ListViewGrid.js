import React, { useState, useEffect } from 'react';

import "./ListViewGrid.css";


export default function ListViewGrid () {
    const [ViewClass, setViewClass] = useState("ListView");

    function handlListClick(){
        setViewClass("GridView");
    } 
    function handlGridClick(){
        setViewClass("ListView");
    }
return (
    

    <div id="container">
    <div className="buttons">
        <button onClick={handlListClick} className="grid">Grid View</button>
        <button onClick={handlGridClick} className="list">List View</button>
    </div>
    
    <ul className={ViewClass}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
    </ul>
</div>  
)

}