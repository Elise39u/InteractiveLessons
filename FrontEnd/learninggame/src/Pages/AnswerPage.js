import React from "react";
import Menu from "../Compo/Menu"
import MellisaOhYes from "../Img/teacher/Melissa/MellisaOhYes.png"
import MellisaOhNo from "../Img/teacher/Melissa/MelissaOhno.png"
import QuestionTypes  from "../Compo/Questiontypes/QuestionTypes";
import MultipleChoiceQuestion from "../Compo/AnswerTypes/MultipleChoice";
import OpenQuestion from "../Compo/AnswerTypes/Open"
import ListingQuestion from "../Compo/AnswerTypes/Listening"
import Button from "react-bootstrap/Button";
import Sound from "../Inc/HitSound.mp3";
import "../CSS/Answer.css"

class useAnswerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showToast: false,
            question: null,
            questionType: "",
            answerId: 0,
            showMCQ: false,
            showOPQ: false,
            showLSQ: false,
        }
    }

    componentDidMount() {
        this.changeAnswerDataStates()
        this.loadAnswerComponent()
    }


    changeAnswerDataStates() {
        const questions = JSON.parse(localStorage.getItem("Questions"))
        const questionId = localStorage.getItem("QuestionId")

        this.state.question = questions[questionId - 1]
        this.state.questionType = QuestionTypes[questions[questionId - 1 ].questionType]
    }

    loadAnswerComponent() {
        const { questionType } = this.state
        switch(questionType) {
            case "MULTIPLE_CHOICE":
                this.setState({showMCQ: !this.state.showMCQ});
                break;
            case "TEXT":
                this.setState({showOPQ: !this.state.showOPQ});
                break;
            case "LISTENING":
                this.setState({showLSQ: !this.state.showMCQ});
                break;
            default:
                break;
        }
    }

    playHitSound() {
        const audio = new Audio(Sound)

        audio.play();

        const hitSoundScore = parseInt(localStorage.getItem("hitScore"))

        if(isNaN(hitSoundScore)) {
            localStorage.setItem("hitScore", 0)
        }
        else if(hitSoundScore >= 10) {
            localStorage.removeItem("hitScore")
            localStorage.setItem("special", "You thought hitting me was fun well im ending the lesson")
            window.location.href = "/EndLesson"
        }
        else {
            localStorage.setItem("hitScore", parseInt(hitSoundScore + 1))
        }
    }

    goToTheNextQuestion(e) {
        e.preventDefault()
        const questions = JSON.parse(localStorage.getItem("Questions"))
        if(questions.length <= parseInt(localStorage.getItem("nextQuestionId")) - 1) {
            window.location.href = "/EndLesson"
        } else {
            localStorage.setItem("QuestionId", parseInt(localStorage.getItem("nextQuestionId")))
            window.location.href = "/Questions"
        }
    }

    render() {
        const {showMCQ, showOPQ, showLSQ, question} = this.state
        const teacherTxt = localStorage.getItem("answerTeacher")

        if(question === null) {
            return  <div> <p> Answer is still calculated hold on  </p></div>
        } else {
            const isCorrect = localStorage.getItem("isCorrectAnswer")
                if(isCorrect === "true") {
                    return <div>
                        <Menu/>
                        <img onClick={this.playHitSound} className={"TeacherImg"} src={MellisaOhYes} alt={"teacher idle Mellisa"}/>
                        <p className={"teacherTxt"}> {teacherTxt}  </p>
                        <form onSubmit={this.goToTheNextQuestion.bind(this)}>
                            <p><Button type={"submit"} className={"btn-warning"}> Go to the next question </Button></p>
                        </form>
                        {showMCQ && <MultipleChoiceQuestion/>}
                        {showOPQ && <OpenQuestion/>}
                        {showLSQ && <ListingQuestion/>}
                    </div>
                } else {
                    return <div>
                        <Menu/>
                        <img onClick={this.playHitSound} className={"TeacherImg"} src={MellisaOhNo} alt={"teacher idle Mellisa"}/>
                        <p className={"teacherTxt"}> {teacherTxt}  </p>
                        <form onSubmit={this.goToTheNextQuestion.bind(this)}>
                            <p><Button type={"submit"} className={"btn-warning"}> Go to the next question </Button></p>
                        </form>
                        {showMCQ && <MultipleChoiceQuestion/>}
                        {showOPQ && <OpenQuestion/>}
                        {showLSQ && <ListingQuestion/>}
                    </div>
                }
        }
    }
}

export default useAnswerPage