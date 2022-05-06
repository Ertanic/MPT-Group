import React, { Suspense } from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./Header"
import HeaderItem from "./Header/HeaderItem"
import List from "./List"
import Footer from "./Footer"
import { DeviceProvider } from "./Contexts/DeviceContext";
import BlocksList from "./BlocksList"
import Loader from "./Loader";

//  Lazy loading
const MainPage = React.lazy(() => import("./Pages/Main"));
const StudentsPage = React.lazy(() => import("./Pages/StudentsPage"));
const TeachersPage = React.lazy(() => import("./Pages/TeachersPage"));
const AboutStudentPage = React.lazy(() => import("./Pages/AboutStudentPage"));
const NoFoundPage = React.lazy(() => import("./Pages/NoFoundPage"));
const ArtPage = React.lazy(() => import("./Pages/ArtPage"));

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
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<MainPage/>} exact />
                            <Route path="/students" element={<StudentsPage/>} exact />
                            <Route path="/teachers" element={<TeachersPage/>} exact />
                            <Route path="/art" element={<ArtPage/>} exact />
                            <Route path="/about-student/:id" element={<AboutStudentPage/>} exact />
                            <Route path="*" element={<NoFoundPage/>} exact />
                        </Routes>
                    </Suspense>
                </BlocksList>
                <Footer/>
            </List>
        </DeviceProvider>
    )
}