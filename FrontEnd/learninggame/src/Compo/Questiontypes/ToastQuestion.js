import Toast from "react-bootstrap/Toast";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {ToastContainer} from "react-bootstrap";

function useToastQuestion(){
    const questionText = localStorage.getItem("questionTexT")
    const [showToast, setToast] = useState(false)

    return ( <div>
      <ToastContainer className="p-3">
        <Toast
            onClose={() => setToast(false)}
            autohide
            show={showToast}
            delay={12200}
            className="d-inline-block m-1"
            bg={"warning"}
        >
            <Toast.Header>
                <strong className="me-auto">Question from Melissa</strong>
                <small>Just ago</small>
            </Toast.Header>
            <Toast.Body className={'Dark'}>
                {questionText}
            </Toast.Body>
        </Toast>
      </ToastContainer>

        <p><Button onClick={() => setToast(true)} className={"btn-primary"}> Show the question for you from me</Button></p>
    </div>
    )
}

export default useToastQuestion