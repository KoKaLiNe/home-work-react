import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import DeleteBtn from "../deleteBtn/deleteBtn";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";
import "./board.css";
import { observer } from "mobx-react-lite";


const Board = observer(({ events }) => {

    const { pathname } = useLocation();

    const deletArchiveBtn = () => {
        return (pathname === AppRoute.ARCHIVE) ? <DeleteBtn events={events} /> : '';
    }

    const [step, setStep] = React.useState(15)

    const handleLoadMore = () => {
        events.length >= step ? setStep(step + 5) : setStep(events.length);
    }

    return (
        <section className="board">
            <Sorting />
            <div className="board__events">
                {events.slice(0, step).sort().map(event => <Card event={event} key={event._id} />)}
            </div>
            <div className="board__btn">
                <LoadMore handleLoadMore={handleLoadMore} />
                {deletArchiveBtn()}
            </div>
        </section>
    )
});

export default Board;