import React from "react";
import Menu from "../Compo/Menu"
import MellisaIdle from "../Img/teacher/Melissa/MelissaIdle.png"
import textBulb from "../Img/textbulb.png"
import QuestionTypes  from "../Compo/Questiontypes/QuestionTypes";
import MultipleChoiceQuestion from "../Compo/Questiontypes/MultipleChoice";
import OpenQuestion from "../Compo/Questiontypes/Open"
import ListingQuestion from "../Compo/Questiontypes/Listening"
import "../CSS/QuestionPage.css"

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: null,
            questionType: "",
            answerId: 0,
            showMCQ: false,
            showOPQ: false,
            showLSQ: false,
        }
    }

    componentDidMount() {
        this.changeQuestionDataStates()
        this.loadQuestionComponent()
    }

    changeQuestionDataStates() {
        const questions = JSON.parse(localStorage.getItem("Questions"))
        const questionId = localStorage.getItem("QuestionId")

        this.state.question = questions[questionId - 1]
        this.state.questionType = QuestionTypes[questions[questionId - 1 ].questionType]
    }

    loadQuestionComponent() {
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

    loadAnswerComponent() {
        //Todo: Load answer component if button is clicked
        // Also add current question id with a next one to load in after the answer
    }

    render() {
        //  <!-- <p>{console.log(question.questionTxT)}</p>  Error because on render its zero -->
      const {showMCQ, showOPQ, showLSQ, question} = this.state
      function checkQuestion() {
            if (question) {
                return <p> Question is empty or undefinded in its state </p>
            } else {
                return question
            }
        }

      return <div>
                <Menu />
                {checkQuestion()}
                <img className={"TeacherImg"} src={MellisaIdle} alt={"teacher idle Mellisa"}/>
                <img className={"textBulb"} src={textBulb} alt={"Text Bulb for teacher"}>
                </img>
                {showMCQ && <MultipleChoiceQuestion />}
                {showOPQ && <OpenQuestion />}
                {showLSQ && <ListingQuestion />}
             </div>
    }
}

export default QuestionPage