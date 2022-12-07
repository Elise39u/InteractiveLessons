import React from "react";
import Menu from "../Compo/Menu"
import MelisaWondering from "../Img/teacher/Melissa/MelissaWondering.png"
//import textBulb from "../Img/textbulb.png"
import QuestionTypes  from "../Compo/Questiontypes/QuestionTypes";
import MultipleChoiceQuestion from "../Compo/Questiontypes/MultipleChoice";
import OpenQuestion from "../Compo/Questiontypes/Open"
import ListingQuestion from "../Compo/Questiontypes/Listening"
import "../CSS/QuestionPage.css"
import ToastQuestion from "../Compo/Questiontypes/ToastQuestion";

class useQuestionPage extends React.Component {
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
        this.changeQuestionDataStates()
        this.loadQuestionComponent()
    }


    changeQuestionDataStates() {
        const questions = JSON.parse(localStorage.getItem("Questions"))
        const questionId = localStorage.getItem("QuestionId")

        this.state.question = questions[questionId - 1]
        this.state.questionType = QuestionTypes[questions[questionId - 1 ].questionType]

        localStorage.setItem("questionTexT", questions[questionId - 1].questionTxT)
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
      const {showMCQ, showOPQ, showLSQ, question} = this.state

        if(question === null) {
            return  <div> <p> Question is still missing some answers hold on </p></div>
        } else {
            return <div>
                <Menu/>
                <img className={"TeacherImg"} src={MelisaWondering} alt={"teacher idle Mellisa"}/>
                <p> Hi there im Melissa Click the button below here to see the question</p>
                <ToastQuestion></ToastQuestion>
                {showMCQ && <MultipleChoiceQuestion/>}
                {showOPQ && <OpenQuestion/>}
                {showLSQ && <ListingQuestion/>}
            </div>
        }
    }
}

export default useQuestionPage