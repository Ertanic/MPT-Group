import React from "react";
import CardsBlock from "../../CardsBlock";
import ContentBlock from "../../ContentBlock";
import Text from "../../Text";

export default function StudentsPage(){
    return (
        <div className="page">
            <ContentBlock header="Студенческий состав">
                <Text>В группе БИ50-3-19 в настоящее время обучаются студенты, представленные в списке ниже:</Text>
                <CardsBlock entity="students"/>
            </ContentBlock>
        </div>
    )
}