import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Character} from "../../page/character/Character";

export const Body = () => {
    return (
        <div>
<Routes>
    <Route path={'/character'} element={<Character/>}/>
</Routes>
        </div>
    );
};

