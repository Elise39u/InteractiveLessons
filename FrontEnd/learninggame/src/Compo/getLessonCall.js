import React from "react";
import Button from "react-bootstrap/Button";
import '../CSS/getLessonCalls.css'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

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
        let subjectId = 0;

        const { LoadingData, lessons} = this.state
        if(!LoadingData) {
            return <div> <h1> Data is loading please wait </h1></div>
        }

        return (
            <div className={"GetLessonCall"}>
                <h1 className={"appMainDiv"}> Time too learn something new? </h1>
                <Container>
                    <Row>
                     {
                          lessons.map((lesson) => {
                              if(subjectId !== lesson.lessonSubject.subjectId) {
                                  subjectId = lesson.lessonSubject.subjectId;
                                  return [ <h1> {lesson.lessonSubject.subjectName} </h1>,
                                      <Col md={3}> <Button variant={"warning"}> {lesson.lessonName} </Button> </Col>  ]
                              } else {
                                  if (lesson.isLocked === true) {
                                      return  <Col md={3}>   <Button variant={"danger"} disabled> {lesson.lessonName} </Button> </Col>
                                  } else {
                                      return <Col md={3}>   <Button variant={"warning"}> {lesson.lessonName} </Button> </Col>
                                  }
                              }
                          })
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GetLessonCall;