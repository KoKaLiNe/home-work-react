import React from "react";
import Header from "../../components/header/header";
import HomeBtn from "../../components/home-btn/home-btn";

const Error404 = () => {
    return (
        <React.Fragment>
            <Header />
            <p className="error404__text">404. Страница не найдена</p>
            <HomeBtn />
        </React.Fragment>

    )
};

export default Error404;