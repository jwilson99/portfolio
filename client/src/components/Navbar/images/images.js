import React, {Component} from 'react';

import html from './html.png';
import css from './css.png';
import js from './js.png';
import jquery from './jquery.png';
import reactjs from './reactjs.png';
import nodejs from './nodejs.png';
import expressjs from './expressjs.png';
import mongodb from './mongodb.png';
import mysql from './mysql.png';
import git from './git.png';
import mocha from './mocha.png';
import chai from './chai.png';

class icons extends Component {
    render() {

        const array = [
            {
                name: "h t m l",
                img: html
            },
            {
                name: "c s s",
                img: css
            },
            {
                name: "javascript",
                img: js
            },
            {
                name: "j query",
                img: jquery
            },
            {
                name: "react js",
                img: reactjs
            },
            {
                name: "node js",
                img: nodejs
            },
            {
                name: "express js",
                img: expressjs
            },
            {
                name: "mongo d b",
                img: mongodb
            },
            {
                name: "my sql",
                img: mysql
            },
            {
                name: "git",
                img: git
            },
            {
                name: "mocha",
                img: mocha
            },
            {
                name: "chai",
                img: chai
            }
        ];

        const images = array.map ( (image) => {
            return <img src={image.img} alt={image.name} className="skillIcon"/>
        });

        return (
            <div className="icons">
                {images}
            </div>
        )
    }
}



export default icons;

