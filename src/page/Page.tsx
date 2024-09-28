import React from 'react';
import {Header} from "../components/header/Header";
import {Body} from "../components/body/Body";
import {Aside} from "../components/aside/Aside";

export const Page = () => {
    return (
        <div>
            <Header/>
            <Aside/>
            <Body/>
        </div>
    );
};

