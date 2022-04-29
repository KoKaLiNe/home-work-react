import React from "react";
import "./deleteBtn.css"
import { events } from "../../store/index";

const DeleteBtn = () => {

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

export default DeleteBtn;
