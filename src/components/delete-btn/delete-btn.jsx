import React from "react";
import "./delete-btn.css"
import { events } from "../../store/index";

const Delete = () => {

    // console.log(events)
    // console.log(events.Event)

    const deletAllArchive = (evt) => {

        const confirm = window.confirm('Вы хотите удалить все данные в архиве?');
        
        if (confirm) {
            evt.preventDefault();
            events.deleteAllEvents();
        }
    }

    return (
        <button
            type="button"
            className="load-more  delete-btn"
            onClick={deletAllArchive}
        >Удалить весь архив
        </button>
    )
}

export default Delete;
