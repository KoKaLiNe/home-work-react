import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Board = () => {
    const { pathname } = useLocation();
    if (pathname === AppRoute.ARCHIVE) {
        return (
            // Страница с сортировкой
            <section className="board">
                <div className="board__events">
                    <Card />
                </div>
                <LoadMore />
            </section>
        )
    } else {
        return (
            // Страница без сортировки
            <section className="board">
                <Sorting />
                <div className="board__events">
                    <Card />
                </div>
                <LoadMore />
            </section>
        )
    }
};

export default Board;