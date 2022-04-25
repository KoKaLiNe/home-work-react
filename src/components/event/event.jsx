import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../store/index";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Event = () => {

    const { id } = useParams();

    const eventHeader = () => {
        return id ? "Редактирование события" : "Добавление события";
    }

    const eventBtn = () => {
        return id ? "Сохранить" : "Добавить";
    }

    const currentCard = events.data.find(x => x._id === id);

    const [form, setForm] = React.useState({
        theme: `${(id && currentCard.theme) || ''}`,
        comment: `${(id && currentCard.comment) || ''}`,
        date: `${(id && moment(currentCard.date).format('YYYY-MM-DDThh:mm')) || moment(new Date()).format('YYYY-MM-DDThh:mm')}`
    });

    const handleFieldChange = (evt) => {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    const hist = useHistory();

    const handleSubmit = (evt) => {
        if (id) {
            evt.preventDefault();
            events.editEvent({
                id: id,
                theme: form.theme,
                comment: form.comment,
                date: form.date,
                archive: currentCard.archive,
                favorite: currentCard.favorite,
            })
            hist.goBack();
        } else if (!id) {
            evt.preventDefault();
            events.addEvent({
                theme: form.theme,
                comment: form.comment,
                date: form.date,
                favorite: false,
                archive: false,
            })
            hist.goBack();
        }
    }

    return (
        <form className="board__form" >
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
                <button
                    type="submit"
                    className="btn-submit"
                    onClick={handleSubmit}
                >
                    {eventBtn()}
                </button>
                <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    )
};

export default Event;