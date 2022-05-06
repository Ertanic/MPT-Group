import React from "react";
import {Routes, Route} from "react-router-dom";

import MainPage from "./Pages/Main"
import StudentsPage from "./Pages/StudentsPage"
import TeachersPage from "./Pages/TeachersPage"
import AboutStudentPage from "./Pages/AboutStudentPage"
import Header from "./Header"
import HeaderItem from "./Header/HeaderItem"
import List from "./List"
import Footer from "./Footer"
import { DeviceProvider } from "./Contexts/DeviceContext";
import BlocksList from "./BlocksList"
import ArtPage from "./Pages/ArtPage";
import NoFoundPage from "./Pages/NoFoundPage";

export default function App() {
    return (
        <DeviceProvider>
            <List className="content-list">
                <BlocksList>
                    <Header>
                        <HeaderItem link="/">Главная</HeaderItem>
                        <HeaderItem link="/students">Студенты</HeaderItem>
                        <HeaderItem link="/teachers">Преподователи</HeaderItem>
                        <HeaderItem link="/art">Творчество</HeaderItem>
                    </Header>
                    <Routes>
                        <Route path="/" element={MainPage()} exact />
                        <Route path="/students" element={<StudentsPage/>} exact />
                        <Route path="/teachers" element={<TeachersPage/>} exact />
                        <Route path="/art" element={<ArtPage/>} exact/>
                        <Route path="/about-student/:id" element={<AboutStudentPage/>} exact />
                        <Route path="*" element={<NoFoundPage/>} exact />
                    </Routes>
                </BlocksList>
                <Footer/>
            </List>
        </DeviceProvider>
    )
}