import React from "react";
import Button from "react-bootstrap/Button";
import '../CSS/getLessonCalls.css'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import loadingGif from "../Img/loading.gif"

class GetLessonCall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            lessons: [],
            lessonId: 0
        }
    }

    setLessonId() {
        if(this.state.lessonId === 0) {} else {
            localStorage.setItem("lessonId", this.state.lessonId)
            window.location = "/LoadingQuestions"
        }
    }

    changeLessonIdState(e, name) {
        localStorage.removeItem("lessonId")
        e.preventDefault();
        const lessonIdInArray = this.state.lessons.find(element => element.lessonName === name )
        this.setState({lessonId: lessonIdInArray.lessonId})
        this.setLessonId()
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
        let subjectId = 0;

        if(!this.state.LoadingData) {
            return <div> <h1> Please wait </h1>
                <img src={loadingGif} alt="were getting your lessons hold on"  />
                <p> were getting your data as fast as we can </p>
            </div>
        }
        return (
            <div className={"GetLessonCall"}>
                <h1 className={"appMainDiv"}> Time too learn something new? </h1>
                <form onSubmit={this.setLessonId.bind(this)}>
                <Container>
                    <Row>
                     {
                          this.state.lessons.map((lesson) => {
                              if(subjectId !== lesson.lessonSubject.subjectId) {
                                  subjectId = lesson.lessonSubject.subjectId;
                                  return [ <h1> {lesson.lessonSubject.subjectName} </h1>,
                                      <Col md={3}> <Button type={"submit"} onClick={(e) => this.changeLessonIdState(e, lesson.lessonName)}
                                                           className={"btn btn-warning"}> {lesson.lessonName} </Button> </Col>  ]
                              } else {
                                  if (lesson.isLocked === true) {
                                      return  <Col md={3}>   <Button className={"btn btn-danger"} disabled > {lesson.lessonName} </Button> </Col>
                                  } else {
                                      return <Col md={3}>   <Button  className={"btn btn-warning"} onClick={(e) => this.changeLessonIdState(e, lesson.lessonName)}>
                                          {lesson.lessonName} </Button> </Col>
                                  }
                              }
                          })
                        }
                    </Row>
                </Container>
                </form>
            </div>
        )
    }
}

export default GetLessonCall;