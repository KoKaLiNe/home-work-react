import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Board />
            </section>
        </React.Fragment>
    )
};

export default Archive;
