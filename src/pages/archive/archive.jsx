import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = ({events}) => {

    const  archiveEvents = events.filter(x => x.archive);

    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Board events={archiveEvents}/>
            </section>
        </React.Fragment>
    )
};

export default Archive;
