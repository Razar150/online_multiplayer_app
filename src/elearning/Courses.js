import React from "react";
import Course from "./Course";



const Courses =({courses}) =>{
    return <>
    <div>Courses Component</div>
    <div>{courses.map(course => <Course key ={course.id} {...course} />)}
    </div>
    </>
}

export default Courses;