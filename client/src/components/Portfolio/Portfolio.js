import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import lotustracker from './images/lotustracker.PNG';
import tcgdeckbuilder from './images/tcgdeckbuilder.PNG';
import getoutdoors from './images/getoutdoors.PNG';
import clickygame from './images/clickygame.PNG';
import './portfolio.css';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        maxWidth: 1000,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: lotustracker,
        title: 'Lotus Tracker',
        tools: 'React, Node, CSS Grid',
    },
    {
        img: tcgdeckbuilder,
        title: 'TCG Deck Builder',
        tools: '...',
    },
    {
        img: getoutdoors,
        title: 'Get Outdoors',
        tools: '...',
    },
    {
        img: clickygame,
        title: 'Cat Clicky Game',
        tools: '...',
    },
];

const GridListExampleSimple = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >
            {tilesData.map((tile) => (
                <GridTile
                    className="gridtile"
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>Tools: <b>{tile.tools}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSimple;