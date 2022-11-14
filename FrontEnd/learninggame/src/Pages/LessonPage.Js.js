import NavBarMenu from "../Compo/Menu";
import '../CSS/App.css';
import LessonButtons from "../Compo/LessonButtons";

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
               <h1 className={"txtApp"}> Welcome {userName} to tuba lessons! </h1>
               <LessonButtons />
           </div>
       </div>
   )
}

export default LessonPage