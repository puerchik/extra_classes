import React from 'react';
import { useNavigate } from 'react-router-dom';

type ContentTypeProps = {
    heading: string,
    pages: string
}

export const Content = (props: ContentTypeProps) => {
    const { heading, pages } = props
    const navigate = useNavigate()

    const onClickMainPageHandler = () => {
        navigate('/page/0')
    }

    const onClickComeBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>{heading}</h1>
            <div>{pages}</div>
            <button onClick={onClickMainPageHandler}>Главная страница</button>
            <button onClick={onClickComeBackHandler}>Назад</button>
        </div>
    );
};