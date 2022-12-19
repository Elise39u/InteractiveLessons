import React from "react"
import loadingGif from "../../Img/loading.gif";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import "../../CSS/MultipleChoice.css"
import successSound from "../../Inc/crowd_small_chil_ec049202.mp3"
import failSound from "../../Inc/a-a-and-you-fail.mp3"

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

    playCheerSound() {
        let audio = new Audio(successSound)
        audio.play()
    }

    playFailSound() {
        let audio = new Audio(failSound)
        audio.play()
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
                                        {this.playFailSound()}
                                        <div className={"WrongAnswer"}>
                                            <img className={"answerImg"} src={answer.imgLink} alt={"The img for the answer"} />
                                        </div>
                                    </Col>
                                } else {
                                    return <Col  md={6}>
                                        {this.playCheerSound()}
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