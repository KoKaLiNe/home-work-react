import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { events } from "../../store/index";
import { observer } from "mobx-react-lite";

const Main = observer(() => {

    const { filteredData } = events;
    
    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={filteredData}/>
            </section>
        </React.Fragment>
    )
});

export default Main;

