import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const HomeBtn = () => {
    return (
        <Link to={AppRoute.MAIN}>
            <button
                name="control"
                className="btn-home"
            >Вернуться на главную
            </button>
        </Link>
    )
};

export default HomeBtn;