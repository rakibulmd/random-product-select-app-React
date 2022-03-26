import React from "react";
import { Accordion } from "react-bootstrap";
import "./AccordionItem.css";

const AccordionItem = ({ toggleKey, answer, question }) => {
    console.log(toggleKey);
    return (
        <Accordion.Item eventKey={toggleKey}>
            <Accordion.Header>
                <span className="fw-bold">{question}</span>
            </Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
    );
};

export default AccordionItem;
