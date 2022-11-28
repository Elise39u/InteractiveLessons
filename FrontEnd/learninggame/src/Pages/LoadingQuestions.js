import React from "react";

class LoadingQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            Questions: [],
            lessonId: props.location.state
        }
    }

    render() {
        return(
            <div>
                <h1> Welcome loading questions </h1>
                <p> We found the following lessons id : {this.state.lessonId} </p>
            </div>
        )
    }
}

export default LoadingQuestions;