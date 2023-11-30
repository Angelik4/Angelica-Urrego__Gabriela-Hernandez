import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    return (
        <>
            <main>
                <div className="content_form">
                    <h1>Want to know more?</h1>
                    <p>Send us your questions and we will contact you</p>
                    <Form />
                </div>
            </main>
        </>
    );
};

export default Contact;
