import React from "react";

import ContentBlock from "../../ContentBlock"
import Text from "../../Text"

import Logo from "../../Logo"
import CardsBlock from "../../CardsBlock"

export default function MainPage() {
    return (
        <div className="page">
            <Logo/>
            <ContentBlock header="Назначение сайта">
                <Text>Данный сайт используется в качестве информационного портала, содержащего подробную информацию о учебной группы Московского Приборостроительного Техникума им. Плеханова - БИ50-3-19, а также об студентах, входящих в эту группу.</Text>
            </ContentBlock>
            <ContentBlock header="Описание группы">
                <Text>Группа БИ50-3-19 - мечта любого студента, ведь именно здесь люди могут позволить себе отдыхать. В группе царит спокойствие и умиротворенние, присущие аду.</Text>
                <Text>Данная группа обучается по специальности 10.02.05 «Обеспечение информационной безопасности автоматизированных систем». По окончанию учебного плана, студенды будут иметь среднее профессиональное образование и квалификацию «техников по защите информации».</Text>
            </ContentBlock>
            <ContentBlock header="Актив группы">
                <Text>В актив группы БИ50-3-19 входят студенты, представленные ниже. Остальной состав группы представлен на странице «<a className="link" href="/students">Студенты группы</a>».</Text>
                <CardsBlock entity="students" filter="active" />
            </ContentBlock>
        </div>
    )
}