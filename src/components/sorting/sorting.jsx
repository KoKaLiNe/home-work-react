import React from "react";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Sorting = () => {
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
                checked
                />
            <label for="board__filter-default" className="board__filter-label">По умолчанию</label>
            <input
                type="radio"
                id="board__filter-new"
                className="board__filter visually-hidden"
                name="board-filter"
                />
            <label for="board__filter-new" className="board__filter-label">Сначала новые</label>
            <input
                type="radio"
                id="board__filter-old"
                className="board__filter visually-hidden"
                name="board-filter"
                />
            <label for="board__filter-old" className="board__filter-label">Сначала старые</label>
        </div>
    )
}
};

export default Sorting;