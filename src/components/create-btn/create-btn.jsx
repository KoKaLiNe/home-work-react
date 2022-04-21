import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const CreateBtn = () => {
    return (
        <Link to={AppRoute.ADD}>
            <button
                name="control"
                className="btn-add"
            >Создать
            </button>
        </Link>
    )
};

export default CreateBtn;