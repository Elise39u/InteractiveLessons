import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import loadingGif from "../../Img/loading.gif";
import "../../CSS/Open.css"
import successSound from "../../Inc/crowd_small_chil_ec049202.mp3";
import failSound from "../../Inc/a-a-and-you-fail.mp3";

class Open extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: [],
            LoadingData: false,
        }
    }

    playCheerSound() {
        let audio = new Audio(successSound)
        audio.play()
    }

    playFailSound() {
        let audio = new Audio(failSound)
        audio.play()
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
                    LoadingData: true,
                })
            })
    }


    render() {
        const Answer = localStorage.getItem("givenAnswer")
        const isCorrect = localStorage.getItem("isCorrectAnswer")

        if (!this.state.LoadingData) {
            return <div><h1> Please wait </h1>
                <img src={loadingGif} alt="we need to get the answers still"/>
                <p> Were tyring to get the answers of the questions for you </p>
            </div>
        }

            if(isCorrect === "true") {
                return <div>
                    <Container className={"marginContainer"}>
                        <Row>
                            <form>
                                <div className={"centerForm"}>
                                    {this.playCheerSound()}
                                    <input className={"OpenCorrectAnswer"} type={"text"} alt={"Your answer"} value={Answer}
                                           disabled={true}/>
                                </div>
                            </form>
                        </Row>
                    </Container>
                </div>
            } else {
                return <div>
                    <Container className={"marginContainer"}>
                        <Row>
                            <form>
                                <div className={"centerForm"}>
                                    {this.playFailSound()}
                                    <input className={"OpenWrongAnswer"} type={"text"} alt={"Your answer"} value={Answer}
                                           disabled={true}/>
                                </div>
                            </form>
                        </Row>
                    </Container>
                </div>
            }
        }
    }

export default Open