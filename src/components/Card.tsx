import React from 'react';
import {CharacterType} from "../page/character/characterReducer";

type CharacterPropsType = {
    itemCard: CharacterType,
}

export const Card = ({itemCard}: CharacterPropsType) => {
    return (
        <div>
            <img src={itemCard.image} alt=""/>
            <div>Name:{itemCard.name}</div>
            <div>Status:{itemCard.status}</div>
            <div>Species:{itemCard.species}</div>
        </div>
    );
};

