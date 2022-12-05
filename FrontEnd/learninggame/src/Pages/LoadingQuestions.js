import React from "react";
import Menu from "../Compo/Menu"
import GetQuestions from "../Compo/getQuestions"

class LoadingQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonId: 0
        }
    }

    componentDidMount() {
        this.checkForLessonId()
    }

    checkForLessonId() {
        if(localStorage.getItem("lessonId") === null || localStorage.getItem("lessonId") === "0") {} else {
            const lessonFoundId = localStorage.getItem("lessonId")
            this.setState({lessonId: lessonFoundId})
        }
    }

    render() {
        return(
            <div>
                <Menu />
                <h1> Welcome loading questions for the lessons </h1>
                <GetQuestions lessonId={this.state.lessonId}/>
            </div>
        )
    }
}

export default LoadingQuestions;