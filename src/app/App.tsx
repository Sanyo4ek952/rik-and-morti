import React, {useEffect} from 'react';
import {CharacterType, fetchCharacter} from "../page/character/characterReducer";
import {AppRootStateType, useAppDispatch} from "./store";
import {useSelector} from "react-redux";
import {Card} from "../components/Card";
import {Page} from "../page/Page";

function App() {





    return (
        <div className="App">
            <Page/>

        </div>
    );
}

export default App;
