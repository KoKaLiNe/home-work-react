import React from "react";
import { useParams } from "react-router-dom";

const Event = () => {
    const { id } = useParams();

    const eventHeader = () => {
        return id ? "Редактирование события" : "Добавление события";
    }
    const eventBtn = () => {
        return id ? "Сохранить" : "Добавить";
    }

    return (
        <form class="board__form">
            <h2 class="board__title">{eventHeader()}</h2>
            <fieldset class="board__field board__field--theme">
                <label for="theme" class="board__label board__label--theme">Тема:</label>
                <textarea
                    type="text"
                    class="board__input board__input--theme"
                    name="theme"
                    required
                ></textarea>
            </fieldset>
            <fieldset class="board__field board__field--comment">
                <label for="comment" class="board__label board__label--comment">Комментарий:</label>
                <textarea
                    type="text"
                    class="board__input board__input--comment"
                    name="comment"
                    required
                ></textarea>
            </fieldset>
            <fieldset class="board__field board__field--date">
                <label for="date" class="board__label board__label--date">Дата:</label>
                <input
                    type="datetime-local"
                    class="board__input board__input--date"
                    name="date"
                />
            </fieldset>
            <div class="btns">
                <button type="submit" class="btn-submit">{eventBtn()}</button>
                <button type="reset" class="btn-reset">Очистить</button>
            </div>
        </form>
    )
};

export default Event;