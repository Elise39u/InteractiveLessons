import '../CSS/App.css';
import NavBarMenu from "../Compo/Menu";
import MelisaIdle from "../Img/teacher/Melissa/MelissaIdle.png";
import React from "react";
import "../CSS/QuestionPage.css"
import "../CSS/EndLessonPage.css"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


function EndLessonPage() {
    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.removeItem("correctAnswers")
        localStorage.removeItem("QuestionId")
        localStorage.removeItem("questionTxT")
        localStorage.removeItem("nextQuestionId")
        localStorage.removeItem("answerUsed")
        localStorage.removeItem("givenAnswer")
        localStorage.removeItem("answerTeacher")
        localStorage.removeItem("Questions")
        localStorage.removeItem("isCorrectAnswer")

        window.location = "/Lessons"
    }

    function calculateLessonScoreGoodAnswers() {
        return percentage(parseInt(localStorage.getItem("correctAnswers")), getLessonsLength())
    }

    function calculateLessonScorePercentageAnswers() {
        let goodPercentage = calculateLessonScoreGoodAnswers();
        let returnText;

        switch (true) {
            case goodPercentage >= 0 && goodPercentage <= 10:
                returnText = "F"
                break;
            case goodPercentage >= 11 && goodPercentage <= 30:
                returnText =  "D"
                break;
            case goodPercentage >= 31 && goodPercentage <= 40:
                returnText = "C"
                break;
            case goodPercentage >= 40 && goodPercentage <= 50:
                returnText = "C+"
                break;
            case goodPercentage >= 51 && goodPercentage <= 55:
                returnText = "B-"
                break;
            case goodPercentage >= 56 && goodPercentage <= 75:
                returnText = "B"
                break;
            case goodPercentage >= 76 && goodPercentage <= 80:
                returnText = "TB+"
                break;
            case goodPercentage >= 81 && goodPercentage <= 85:
                returnText = " A-"
                break;
            case goodPercentage >= 86 && goodPercentage <= 95:
                returnText = "A"
                break;
            case goodPercentage >= 96:
                returnText = "A+"
                break;
            default:
                returnText = "your score couldn't be calculated :("
        }

        return returnText;
    }

    function calculateLessonScoreWrongAnswers() {
        const lessonLength = getLessonsLength();
        const correctAnswers  = parseInt(localStorage.getItem("correctAnswers"));

        let numberOfWrongAnswers = lessonLength - correctAnswers
        return percentage(numberOfWrongAnswers, lessonLength)
    }

    function getWrongAnswersCount() {
        const lessonLength = getLessonsLength();
        const correctAnswers  = parseInt(localStorage.getItem("correctAnswers"));

        return lessonLength - correctAnswers
    }

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    function getLessonsLength() {
        return  JSON.parse(localStorage.getItem("Questions")).length 
    }

    let score = calculateLessonScorePercentageAnswers();
    return (
        <div className={"App"}>
            <NavBarMenu />
            <img className={"TeacherImg"} src={MelisaIdle} alt={"teacher idle Mellisa"}/>
            <Container className={"containerEnd"}>
                <Row className={"endRow"}>
                    <Col className={"endCol"}>
                        <p> Oh look at the its the end of the lesson. <br />
                            If your interested {localStorage.getItem("username")} then here are your stats</p>

                        <p>Lessons length was: <span className={"boldBlack"}> {getLessonsLength()} </span> questions long</p>
                        <p>Times you answered correctly <span className={"greenSpan"}> {localStorage.getItem("correctAnswers")} </span>
                            during this lesson</p>
                        <p>Here is the percentage amount of correct answers <span className={"greenSpan"}> {calculateLessonScoreGoodAnswers()}% </span>
                            during this lesson</p>
                        <p>Times you answered wrong <span className={"redSpan"}> {getWrongAnswersCount()} </span>
                            during this lesson </p>
                        <p>Here is the percentage amount of wrong answers <span className={"redSpan"}> {calculateLessonScoreWrongAnswers()}% </span>
                            during this lesson</p>
                        <p>Grade for the lesson: {
                            score.includes("C") || score.includes("D") ? <span className={"redSpan"}>{score}</span>
                                : <span className={"greenSpan"}> { score } </span>
                        } </p>
                    </Col>
                </Row>
                <form onSubmit={handleSubmit}>
                    <Button type={"submit"} className={"btn-warning"}> Go back to the lesson page</Button>
                </form>
            </Container>
        </div>
    )
}

export default EndLessonPage