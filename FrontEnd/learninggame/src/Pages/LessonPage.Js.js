import NavBarMenu from "../Compo/Menu";
import '../CSS/App.css';
import GetLessonCall from "../Compo/getLessonCall";

let userName = "";
if(localStorage.getItem("username") === null) {
    userName = "Hey Cheater go back to the home page and fill in the name \n Dont use the nav bar to go around <3"
} else {
    userName = localStorage.getItem("username")
}

function LessonPage() {
   return (
       <div className="LessonPage">
           <NavBarMenu />
           <div className={"appMainDiv"}>
               <h1 className={"txtApp"}> Welcome {userName} </h1>
               <GetLessonCall />
           </div>
       </div>
   )
}

export default LessonPage