import React from "react";
import CardsBlock from "../../CardsBlock";
import ContentBlock from "../../ContentBlock";
import Text from "../../Text";

export default function StudentsPage(){
    return (
        <div className="page">
            <ContentBlock header="Преподовательский состав">
                <Text>У группы БИ50-3-19 в настоящее время преподают преподовательский состав, представленный в списке ниже:</Text>
                <CardsBlock entity="teachers" clickable={false} />
            </ContentBlock>
        </div>
    )
}