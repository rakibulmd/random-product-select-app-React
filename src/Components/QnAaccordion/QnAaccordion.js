import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionItem from "../AccordionItem/AccordionItem";

const QnAaccordion = () => {
    let questionOne = "This is question one";
    let answerOne = "This is answer one";
    let answerTwo = "This is answer Two";
    let questionTwo = "This is question Two";
    let answerThree = "This is answer Three";
    let questionThree = "This is question Three";
    return (
        <div className="container my-5">
            <h2>QnA:</h2>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <AccordionItem
                    toggleKey={0}
                    question={questionOne}
                    answer={answerOne}
                ></AccordionItem>
                <AccordionItem
                    toggleKey={1}
                    question={questionTwo}
                    answer={answerTwo}
                ></AccordionItem>
                <AccordionItem
                    toggleKey={2}
                    question={questionThree}
                    answer={answerThree}
                ></AccordionItem>
            </Accordion>
        </div>
    );
};

export default QnAaccordion;
