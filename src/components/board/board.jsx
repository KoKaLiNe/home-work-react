import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";

const Board = ({events}) => {
        return (
            <section className="board">
                <Sorting />
                <div className="board__events">
                    {events.map(event => <Card {...event} key={event._id} />)}
                    {/* <Card  */}
                </div>
                <LoadMore />
            </section>
        )
};

export default Board;