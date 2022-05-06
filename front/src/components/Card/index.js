import React from "react";
import { Link } from "react-router-dom";

export default function Card({entityData, className = null, clickable}) {
    const entityName = `${entityData.lastName} ${entityData.firstName} ${entityData.middleName}`;
    const photoPath = entityData.photo ? entityData.photo.path : '/public/Photos/no_photo.jpg';

    const content = clickable
        ? <React.Fragment>
            <Link className="card__name card__link" to={`/about-student/${entityData.id}`}>
                {entityName}
            </Link>
            <span className="card__function">{entityData.function ? entityData.function.name : ""}</span>
        </React.Fragment> 

        : <React.Fragment>
            <span className="card__name">{entityName}</span>
            <span className="card__function">{entityData.function ? entityData.function.name : ""}</span>
        </React.Fragment>;

    return (
        <div className={`card${ className ? ' ' + className : '' }`}>
            <img src={photoPath} alt={`Фото ${entityName}`} />
            {content}
        </div>
    )
}