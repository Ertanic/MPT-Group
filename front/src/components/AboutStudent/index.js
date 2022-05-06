import React from "react";
import Text from "../Text";
import HeaderFirst from "../TextHeaders/HeaderSecond";

export default function AboutStudent({student}) {
    if (student == null)
        return;

    const teacher = student.likedTeacher;
    const teacherName = `${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`;

    return (
        <div className="about_student_about_container__data">
            <HeaderFirst>Любимая еда:</HeaderFirst>
            <Text points={true}>{student.likedFood}</Text>

            <HeaderFirst>Любимая дисциплина:</HeaderFirst>
            <Text points={true}>{student.likedSubject.name}</Text>

            <HeaderFirst>Любимый преподователь:</HeaderFirst>
            <Text points={true}>{teacherName}</Text>
        </div>
    )
}