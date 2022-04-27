import { observer } from "mobx-react-lite";
import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { events } from "../../store/index";

const Archive = observer(() => {

    const { archiveData } = events;

    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Board events={archiveData} />
            </section>
        </React.Fragment>
    )
});

export default Archive;
