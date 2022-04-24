import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../moсks";
import moment from "moment";

const Event = () => {

    const { id } = useParams();

    const eventHeader = () => {
        return id ? "Редактирование события" : "Добавление события";
    }

    const eventBtn = () => {
        return id ? "Сохранить" : "Добавить";
    }

    const currentCard = events.find(x => x._id === id);

    const [form, setForm] = React.useState({
        theme: `${id && currentCard.theme || ''}`,
        comment: `${id && currentCard.comment || ''}`,
        date: `${id && moment(currentCard.date).format('YYYY-MM-DDThh:mm') || moment(new Date()).format('YYYY-MM-DDThh:mm')}`
    });

    const handleFieldChange = (evt) => {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit form', form);
    }

    return (
        <form className="board__form" onSubmit={handleSubmit}>
            <h2 className="board__title">{eventHeader()}</h2>
            <fieldset className="board__field board__field--theme">
                <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>

                <textarea
                    type="text"
                    onChange={handleFieldChange}
                    className="board__input board__input--theme"
                    name="theme"
                    defaultValue={form.theme}
                    required
                ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
                <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
                <textarea
                    type="text"
                    onChange={handleFieldChange}
                    className="board__input board__input--comment"
                    name="comment"
                    defaultValue={form.comment}
                    required
                ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
                <label htmlFor="date" className="board__label board__label--date">Дата:</label>
                <input
                    type="datetime-local"
                    onChange={handleFieldChange}
                    className="board__input board__input--date"
                    value={form.date}
                    name="date"
                />
            </fieldset>
            <div className="btns">
                <button type="submit" className="btn-submit">{eventBtn()}</button>
                <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    )
};

export default Event;