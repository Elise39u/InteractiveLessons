import React from "react";
//import Button from "react-bootstrap/Button";
import '../CSS/getLessonCalls.css'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import loadingGif from "../Img/loading.gif"
import {Link} from "react-router-dom";

class GetLessonCall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            lessons: [],
            lessonId: 0
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
            return <div> <h1> Please wait </h1>
                <img src={loadingGif} alt="were getting your lessons hold on"  />
                <p> were getting your data as fast as we can </p>
            </div>
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
                                      <Col md={3}> <Link to={{ pathname: "/LoadingQuestions", state: { lessonId: lesson.lessonId}}}
                                                         className={"btn btn-warning"}> {lesson.lessonName} </Link> </Col>  ]
                              } else {
                                  if (lesson.isLocked === true) {
                                      return  <Col md={3}>   <Link className={"btn btn-danger disabled-link"} > {lesson.lessonName} </Link> </Col>
                                  } else {
                                      return <Col md={3}>   <Link className={"btn btn-danger disabled-link"}> {lesson.lessonName} </Link> </Col>
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