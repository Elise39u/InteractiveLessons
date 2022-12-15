import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import loadingGif from "../../Img/loading.gif";
import Button from "react-bootstrap/Button";

class Open extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: [],
            LoadingData: false,
            GivenAnswer: "",
        }
    }

    componentDidMount() {
        this.getAnswersFromQuestion()
    }

    handleInputChange(e) {
        this.setState({GivenAnswer: e.target.value})
    }

    // {this.state.Answers[0].imgLink}
    checkOpenAnswer(e) {
        const {GivenAnswer} = this.state
        const answerCheck = this.state.Answers.filter(answer => {return (answer.imgLink === GivenAnswer)})

        if(answerCheck.length === 0) {
            this.state.Answers.map((answer) => {
                if(answer.isCorrect === false) {
                    this.goToTheAnswerView(false, answer)
                }
            })
        } else {
            this.state.Answers.map((answer) => {
                if(answer.isCorrect === true) {
                    this.addScoreToCorrectAnswers();
                    this.goToTheAnswerView(true, answer)
                }
            })
        }
        e.preventDefault()
    }

    addScoreToCorrectAnswers() {
        if(parseInt(localStorage.getItem("correctAnswers")) === 0 || isNaN(parseInt(localStorage.getItem("correctAnswers")))) {
            localStorage.setItem("correctAnswers", 1)
        } else {
            const count1Up = parseInt(localStorage.getItem("correctAnswers")) + 1;
            localStorage.setItem("correctAnswers", count1Up)
        }
    }

    goToTheAnswerView(correctAnswer, answer) {
        const nextQuestionNumber = parseInt(localStorage.getItem("QuestionId")) +1
        localStorage.setItem("nextQuestionId", nextQuestionNumber)
        localStorage.setItem("isCorrectAnswer", correctAnswer)
        localStorage.setItem("answerTeacher", answer.answerValue)
        localStorage.setItem("givenAnswer", this.state.GivenAnswer)

        window.location.href = "/Answer"
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
        if (!this.state.LoadingData) {
            return <div><h1> Please wait </h1>
                <img src={loadingGif} alt="we need to get the answers still"/>
                <p> Were tyring to get the answers of the questions for you </p>
            </div>
        }

        return <div>
            <Container className={"marginContainer"}>
                <Row>
                    <h3> Fill in your answer </h3>
                    <form onSubmit={this.checkOpenAnswer.bind(this)}>
                        <div className={"centerForm"}>
                            <input type={"text"} alt={"Your answer"} onChange={ this.handleInputChange.bind(this)} value={this.state.GivenAnswer}/>
                            <Button type={"submit"} className={"btn-primary"}>Submit answer</Button>
                        </div>
                    </form>
                </Row>
            </Container>
        </div>
    }
}

export default Open