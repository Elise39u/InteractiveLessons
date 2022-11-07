import Button from "react-bootstrap/Button";

function lessonButtons() {
    return (
        <div className={"buttonDiv"}>
            <Button variant={"success"}> Lesson 1 basic Tuba lessons</Button>
            <Button variant={"danger"} disabled> Lesson 2 Tuba and notes </Button>
            <Button variant={"danger"} disabled> Lesson 3 Tuba and songs </Button>
            <Button variant={"danger"} disabled> Lesson 4 Test your tuba knowledge </Button>
        </div>
    );
}

export default lessonButtons