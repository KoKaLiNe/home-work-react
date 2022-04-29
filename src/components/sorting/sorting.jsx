import React from "react";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";
import { events } from "../../store";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import moment from "moment";

const Sorting = observer(() => {

    const { pathname } = useLocation();

    const defaultSorting = action(() => {
        events.filteredData.sort((a, b) => parseInt(a._id, 16) - parseInt(b._id, 16))
    })

    const sortNewToOld = action(() => {
     events.filteredData.sort((a, b) => moment(a.date) - moment(b.date))
    })

    const sortOldToNew = action(() => {
        events.filteredData.sort((a, b) => moment(b.date) - moment(a.date))

    })

    if (pathname === AppRoute.MAIN) {
        return (
            <div className="board__filter-list">
                <span className="board__filter--title">Сортировка:</span>

                <input
                    type="radio"
                    id="board__filter-default"
                    className="board__filter visually-hidden"
                    name="board-filter"
                    onClick={defaultSorting}
                />
                <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
                <input
                    type="radio"
                    id="board__filter-new"
                    className="board__filter visually-hidden"
                    name="board-filter"
                    onClick={sortNewToOld}
                />
                <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
                <input
                    type="radio"
                    id="board__filter-old"
                    className="board__filter visually-hidden"
                    name="board-filter"
                    onClick={sortOldToNew}
                />
                <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
            </div>
        )
    }
});

export default Sorting;