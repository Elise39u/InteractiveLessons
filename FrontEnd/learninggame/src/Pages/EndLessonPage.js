import '../CSS/App.css';
import NavBarMenu from "../Compo/Menu";
import MelisaIdle from "../Img/teacher/Melissa/MelissaIdle.png";
import React from "react";
import "../CSS/QuestionPage.css"
import Button from "react-bootstrap/Button";


function EndLessonPage() {
    function calculateLessonScoreGoodAnswers() {

    }

    function calculateLessonScorePercentageAnswers() {

    }

    function calculateLessonScoreWrongAnswers() {

    }

    return (
        <div className={"App"}>
            <NavBarMenu />
            <img className={"TeacherImg"} src={MelisaIdle} alt={"teacher idle Mellisa"}/>
            <h1>The end of the lesson</h1>
            <p> Oh look at that we have reached the end of the lesson. <br />
            Here are you scores for the lesson: </p>
            <ul>
                <li>Total Answers: </li>
                <li>Good Answers: </li>
                <li>Wrong Answers: </li>
                <li>Score in %: </li>
            </ul>
            <form>
                <Button type={"submit"} className={"btn-primary"}> Go back to the lesson page</Button>
            </form>
        </div>
    )
}

export default EndLessonPage