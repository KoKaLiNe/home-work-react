import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board />
            </section>
        </React.Fragment>
    )
};

export default Main;

