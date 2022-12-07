import React from "react";
import "../../CSS/MultipleChoice.css"
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import loadingGif from "../../Img/loading.gif";

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: [],
            LoadingData: false
        }
    }


    componentDidMount() {
        this.getAnswersFromQuestion()
    }

    getAnswersFromQuestion() {
        fetch("https://localhost:7033/Answer/GetAnswerQuestions/" + localStorage.getItem("QuestionId"))
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Answers: json,
                    LoadingData: true
                })
            })
    }

    setNextQuestionStorage(answer) {
        const nextQuestionNumber = parseInt(localStorage.getItem("QuestionId")) +1
        localStorage.setItem("nextQuestionId", nextQuestionNumber)
        localStorage.setItem("isCorrectAnswer", answer.isCorrect)
        localStorage.setItem("answerUsed", answer.answerId)
        /*
            TODO: Add the next questionId to storage
             So for a example on Question 1 we store -> 1 as current questionID
             2 becomes the next one. Dont forget that the Question array in local storage starts with 0
         */
    }

    render() {
        if(!this.state.LoadingData) {
            return <div> <h1> Please wait </h1>
                <img src={loadingGif} alt="we need to get the answers still"  />
                <p> Were tyring to get the answers of the questions for you </p>
            </div>
        }

        return <div>
            <Container className={"marginContainer"}>
                <Row>
                    <h3> Choose your answer </h3>
                    {
                        this.state.Answers.map((answer) => {
                            return <Col md={6}>
                                <div onClick={this.setNextQuestionStorage.bind(this, answer)} className={"Answer"}>
                                    <img className={"answerImg"} src={answer.imgLink} alt={"The img for the answer"} />
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>;
    }
}

export default MultipleChoice