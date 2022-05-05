import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { events } from "../../store/index";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import moment from "moment";

const Main = observer(() => {

    const { filteredData } = events;

    const [index, setIndex] = React.useState(1);

    const handleSorted = action((e) => {
        if (e.target.value === "sortDefault") {
            filteredData.sort((a, b) => parseInt(a._id, 16) - parseInt(b._id, 16));
            setIndex(1);
        } else if (e.target.value === "sortNewToOld") {
            filteredData.sort((a, b) => moment(a.date) - moment(b.date))
            setIndex(2);
        } else if (e.target.value === "sortOldToNew") {
            filteredData.sort((a, b) => moment(b.date) - moment(a.date))
            setIndex(3);
        }
    })

    const handleFiltered = action((e) => {
        if (index === 1) {
            events.filteredData = events[e.target.value].sort((a, b) => parseInt(a._id, 16) - parseInt(b._id, 16));
        } else if (index === 2) {
            events.filteredData = events[e.target.value].sort((a, b) => moment(a.date) - moment(b.date));
        } else if (index === 3) {
            events.filteredData = events[e.target.value].sort((a, b) => moment(b.date) - moment(a.date))
        }

    });

    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Filter
                    handleFiltered={handleFiltered}
                />
                <Board
                    events={filteredData}
                    handleSorted={handleSorted}
                />
            </section>
        </React.Fragment>
    )
});

export default Main;

