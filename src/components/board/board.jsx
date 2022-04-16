import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import { AppRoute } from "../../const";

const Board = ({ mode }) => {
    if (mode === AppRoute.ARCHIVE) {
        return (
            <section className="board">
                <Sorting />
                <div className="board__events">
                    <Card />
                </div>
                <LoadMore />
            </section>
        )
    } else {
        return (
            <section className="board">
                <div className="board__events">
                    <Card />
                </div>
                <LoadMore />
            </section>
        )
    }
};

export default Board;