import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import loadingGif from "../../Img/loading.gif";
import "../../CSS/Open.css"

class Open extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: [],
            LoadingData: false,
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