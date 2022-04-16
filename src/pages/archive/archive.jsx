import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";

const Archive = () => {
    return (
        <React.Fragment>
            <Header mode={AppRoute.ARCHIVE} />
            <section className="main__wrapper">
                <Board />
            </section>
        </React.Fragment>
    )
};

export default Archive;
