import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

import AboutStudent from "../../AboutStudent";
import Card from "../../Card";
import List from "../../List";
import HeaderFirst from "../../TextHeaders/HeaderFirst";

import students from '../../../utils/api/students'
import Loader from "../../Loader";

export default function AboutStudentPage() {
    const {id} = useParams();
    const [content, setContent] = useState(<Loader/>);
    
    useEffect(() => {
        students.getStudent(id)
            .then(student => {
                setContent(
                    <React.Fragment>
                        <Card entityData={student} className="about_student_photo" clickable={false}/>
                        <AboutStudent student={student}/>
                    </React.Fragment>
                );
            })
    }, [setContent]);

    return (
        <div className="page about_student_container">
            <List className="about_student_photo_container">
                <HeaderFirst className="about_student_photo_container__header">О студенте</HeaderFirst>
                <List className="about_student_about_container">
                    { content }
                </List>
            </List>
        </div>
    )
}