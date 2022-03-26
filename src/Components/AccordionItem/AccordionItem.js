import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionItem = ({ toggleKey, answer, question }) => {
    console.log(toggleKey);
    return (
        <Accordion.Item eventKey={toggleKey}>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
    );
};

export default AccordionItem;
