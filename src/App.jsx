import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { MainPage } from "./components/MainPage/MainPage"
import "./assets/style/App.scss"

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <MainPage />
            </div>
        </BrowserRouter>
    )
}

export default App
