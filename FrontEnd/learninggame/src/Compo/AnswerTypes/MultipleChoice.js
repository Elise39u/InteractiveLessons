import React from "react"
import loadingGif from "../../Img/loading.gif";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import "../../CSS/MultipleChoice.css"

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: [],
            LoadingData: false
        }
    }

    componentDidMount() {
        this.getAnswersFromQuestion();
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

    render() {
        if(!this.state.LoadingData) {
            return <div> <h1> Please wait </h1>
                <img src={loadingGif} alt="we need to get the answers still"  />
                <p> Were checking your answer please hold on </p>
            </div>
        }

        return <div>
            <Container className={"marginContainer"}>
                <Row>
                    {
                        this.state.Answers.map((answer) => {
                            if(answer.answerId === parseInt(localStorage.getItem("answerUsed"))) {
                                const isCorrect = localStorage.getItem("isCorrectAnswer")
                                if(isCorrect === "false") {
                                    return <Col md={6}>
                                        <div className={"WrongAnswer"}>
                                            <img className={"answerImg"} src={answer.imgLink} alt={"The img for the answer"} />
                                        </div>
                                    </Col>
                                } else {
                                    return <Col  md={6}>
                                        <div className={"CorrectAnswer"}>
                                            <img className={"answerImg"} src={answer.imgLink} alt={"The img for the answer"} />
                                        </div>
                                    </Col>
                                }
                            }
                            else {
                                return <Col md={6}>
                                    <div className={"Answer"}>
                                        <img className={"answerImg"} src={answer.imgLink} alt={"The img for the answer"} />
                                    </div>
                                </Col>
                            }
                        })
                    }
                </Row>
            </Container>
        </div>
    }
}

export default MultipleChoice;