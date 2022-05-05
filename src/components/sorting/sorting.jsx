import React from "react";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Sorting = observer(({handleSorted}) => {

    const { pathname } = useLocation();

    if (pathname === AppRoute.MAIN) {
        return (
            <div className="board__filter-list">
                <span className="board__filter--title">Сортировка:</span>

                <input
                    type="radio"
                    id="board__filter-default"
                    className="board__filter visually-hidden"
                    name="board-filter"
                    value={"sortDefault"}
                    onClick={handleSorted}
                />
                <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
                <input
                    type="radio"
                    id="board__filter-new"
                    className="board__filter visually-hidden"
                    name="board-filter"
                    value={"sortNewToOld"}
                    onClick={handleSorted}
                />
                <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
                <input
                    type="radio"
                    id="board__filter-old"
                    className="board__filter visually-hidden"
                    name="board-filter"
                    value={"sortOldToNew"}
                    onClick={handleSorted}
                />
                <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
            </div>
        )
    }
});

export default Sorting;