import React from "react";
import Courses from "./Courses";
import Home from "./Home";
import Blog from "./Blog";
import Webinars from "./Webinars";
import ElearningRouter from "./ElearningRouter";

const MainElearning = () =>{
    const courses = [
        { name: "Java", Id: 1, Desc:"This is java", durationInMonths:3},
        { name: "Python", Id: 2, Desc:"This is python", durationInMonths:6},
    ]
    const heading = "MainElearning Component"
    return <>
    <div>MainElearning Component</div>
    <Home/>
    <Courses courses={courses}/>
    <Blog/>
    <Webinars/>
    <main>
            <ElearningRouter />
        </main>
    </>
}

export default MainElearning;