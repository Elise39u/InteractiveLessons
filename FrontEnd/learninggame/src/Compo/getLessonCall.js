import React from "react";
import Button from "react-bootstrap/Button";
import '../CSS/getLessonCalls.css'

class GetLessonCall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            lessons: []
        }
    }

    componentDidMount() {
        fetch("https://localhost:7033/Lesson/AllLessons")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    lessons: json,
                    LoadingData: true
                })
            })
    }

    render() {
        const { LoadingData, lessons} = this.state
        if(!LoadingData) {
            return <div> <h1> Data is loading please wait </h1></div>
        }

        return (
            <div className={"GetLessonCall"}>
                <h1 className={"appMainDiv"}> Time too learn something new? </h1>
                 {
                      lessons.map((lesson) => {
                          if(lesson.isLocked === true) {
                            return <Button variant={"danger"} disabled> {lesson.lessonName} </Button>
                          }
                          else {
                            return <div className={"ButtonDiv"}> <Button variant={"warning"}> {lesson.lessonName} </Button> </div>
                          }
                      })
                    }
            </div>
        )
    }
}

export default GetLessonCall;