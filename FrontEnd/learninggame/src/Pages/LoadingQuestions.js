import React from "react";
import Menu from "../Compo/Menu"
import GetQuestions from "../Compo/getQuestions"

class LoadingQuestions extends React.Component {
    render() {
        return(
            <div>
                <Menu />
                <h1> Welcome loading questions for the lessons </h1>
                <GetQuestions lessonId={localStorage.getItem("lessonId")}/>
            </div>
        )
    }
}

export default LoadingQuestions;