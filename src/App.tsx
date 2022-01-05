import React, {useEffect, useState} from 'react';
import DashBoard from "./pages/DashBoard";
import {GlobalStyle} from "./style/global-style";


function App() {
    return (
        <>
            <GlobalStyle/>
            <DashBoard/>
        </>
    );
}

export default App;
