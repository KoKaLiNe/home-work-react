import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import Delete from "../delete-btn/delete-btn";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";
import "./board.css";

const Board = ({ events }) => {

    const { pathname } = useLocation();

    const deletArchiveBtn = () => {
        return (pathname === AppRoute.ARCHIVE) ? <Delete events={events}/> : '';
    }

    return (
        <section className="board">
            <Sorting />
            <div className="board__events">
                {events.map(event => <Card {...event} key={event._id} />)}
            </div>
            <div className="board__btn">
                <LoadMore />
                {deletArchiveBtn()}
            </div>
        </section>
    )
};

export default Board;