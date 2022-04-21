import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";

const Form = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <section class="board">
                    <Event />
                </section>
            </section>
        </React.Fragment>
    )
};

export default Form;