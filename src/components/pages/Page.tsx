import React from "react";
import { PagesType, dataState } from "../dataState/dataState";
import { useParams } from "react-router-dom";

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {
    const params = useParams();
    let content = props.pages[Number(params.id)];

    if (Number(params.id) === 0 || Number(params.id) === 1 || Number(params.id) === 2) {
        return (
            <div>
                <h1>{content.heading}</h1>
                <p>{content.about}</p>
            </div>
        )
    } else {
        return (
            <div>
                Error404
            </div>
        )
    }
}