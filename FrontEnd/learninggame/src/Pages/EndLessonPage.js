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
        localStorage.removeItem("special")

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
                returnText = "B+"
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
                returnText = "Idk what happened but by default you get a F"
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
    let changeTxt;
    if(localStorage.getItem("special") !== null) {
        changeTxt = true
    } else {
        changeTxt = false;
    }

    return (
        <div className={"App"}>
            <NavBarMenu />
            <img className={"TeacherImg"} src={MelisaIdle} alt={"teacher idle Mellisa"}/>
            <Container className={"containerEnd"}>
                <Row className={"endRow"}>
                    <Col className={"endCol"}>
                        <p> {changeTxt ? <span> {localStorage.getItem("special")} how about that {localStorage.getItem("username")} </span> : <span> Oh look at the its the end of the lesson. <br />
                            If your interested {localStorage.getItem("username")} then here are your stats</span>} </p>

                        <p>Lessons length was: <span className={"boldBlack"}> {getLessonsLength()} </span> questions long</p>
                        <p>Times you answered correctly <span className={"greenSpan"}> {changeTxt ?
                            <span> You cheated or try to hit me too much {localStorage.getItem("username")} </span> : localStorage.getItem("correctAnswers")} </span>
                            during this lesson</p>
                        <p>Here is the percentage amount of correct answers <span className={"greenSpan"}> {changeTxt ?
                            <span> Trying to hit me he. That doesnt work or you cheated either one of the two?</span> : calculateLessonScoreGoodAnswers()}% </span>
                            during this lesson</p>
                        <p>Times you answered wrong <span className={"redSpan"}> {changeTxt ?
                            <span> Hitting me he that doesnt get you through the lesson. Or cheating even worse </span> : getWrongAnswersCount} </span>
                            during this lesson </p>
                        <p>Here is the percentage amount of wrong answers <span className={"redSpan"}> {changeTxt ?
                            <span>Hitting a teacher doesnt work for you. It only works against you. Or you cheated but it is on the same level</span> : calculateLessonScoreWrongAnswers()}% </span>
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