import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionItem from "../AccordionItem/AccordionItem";

const QnAaccordion = () => {
    let questionOne = "How does React work?";
    let answerOne =
        "React uses virtual DOM and when the browser DOM needs to be updated Reacts diff algorithm checks the most efficient way to update the browser DOM with the help of React virtual DOM which is faster to manipulate. This is why react is also very fast. This way React can update DOM element without fully reloading the page.  React application is made of many components which is like building blocks of a React application. Components can be re-used and small small component can be created and then joined together to create complex application. Depending on data changes, react can efficiently update and render the right component. It also helps to keep the complexity lower. ";
    let questionTwo = "What is the differences between props & state?";
    let answerTwo =
        "Props is the short name of properties which are used to pass data from component to component. Props are read only means it's value can not be changed. While state is something that likely to be changed. State stores data and the data can be changed at any time. Changing this data using useState is an asynchronous task. Also, where props can be accessed by child component, state value can not be accessed by it child components.  ";
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
