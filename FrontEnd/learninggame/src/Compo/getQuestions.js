import React from "react";
import Button from "react-bootstrap/Button";
import  "../CSS/getQuestions.css"

class GetQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            Questions: []
        }
    }

    componentDidMount() {
        fetch("https://localhost:7033/Question/ByLesson/" + this.props.lessonId)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Questions: json,
                    LoadingData: true
                })
            })
    }

    setQuestionsInfo(Questions) {
        if(Questions === [] || Questions.length === 0) {
            return <p className={"centerP"}> An error occurred with the questions hold on! </p>
        } else {
            localStorage.setItem("Questions", JSON.stringify(Questions))
            localStorage.setItem("QuestionId", Questions[0].quesitonId)
            return <p className={"centerP"}> Questions has been loaded en set you can start the lesson now </p>
        }
    }

    startTheLesson(e) {
        e.preventDefault();
        if(localStorage.getItem("Questions") === null || localStorage.getItem("QuestionId") === "0") {
            alert("An error occurred while setting the question data. Our monkeys are looking into it ")
        } else {
            window.location  = "/Questions"
        }
    }

    render() {
        const {LoadingData, Questions} = this.state
        if (!LoadingData) {
            return <div>
                <h1> Please hold on {localStorage.getItem("username")}</h1>
                <p> Our monkeys works as fast as they can to get the questions</p>
            </div>
        }

        if (Questions === [] || Questions.length === 0) {
            return <div>
                <p> Hold on were doing some work with the monkeys <br/>
                    To set your questions ready for the lessons </p>
            </div>
        } else {
            return (
                <div>
                    <form onSubmit={this.startTheLesson.bind(this)}>
                        {this.setQuestionsInfo(Questions)}
                        <p className={"centerP"}><Button type={"submit"} className={"primary"}> Start the
                            Lesson </Button></p>
                    </form>
                </div>
            )
        }
    }
}

export default GetQuestions;