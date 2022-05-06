import React, {useState, useEffect} from "react";

import {getArts} from '../../../utils/api/arts';
import Loader from "../../Loader";
import List from "../../List";

import S from './ArtPage.module.scss';

export default function ArtPage() {
    const [content, setContent] = useState(<Loader/>);

    useEffect(() => {
        getArts()
            .then(json => {
                setContent(json.map((art, i) => <img key={art.id} src={art.photo.path} alt={`Art #${i}`} />));
            });
    }, [setContent]);

    return (
        <div className="page">
            <List className={S.arts_container}>
                {content}
            </List>
        </div>
    )
}