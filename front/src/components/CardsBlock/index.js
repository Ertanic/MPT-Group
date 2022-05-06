import React from "react";
import Card from '../Card'
import { students } from "../../utils/api";
import { getTeachers } from "../../utils/api/teachers";
import Loader from "../Loader";

export default function CardsBlock({entity, filter, clickable = true}) {
    const [entiies, setEntities] = React.useState(null);

    React.useEffect(() => {
        if (entity == "students" && filter == "active")
            students.getActive().then(json => setEntities(json));
        else if (entity == "teachers")
            getTeachers().then(json => setEntities(json));
        else
            students.getStudents().then(json => setEntities(json));

    }, [setEntities]);

    const children = entiies ? entiies.map(entity => {
        return <Card key={entity.id} entityData={entity} clickable={clickable}/>
    }) : <Loader/>;

    return (
        <div className="cards-block">
            {children}
        </div>
    )
}