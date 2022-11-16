using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class LessonController : ControllerBase
{
        
    [HttpGet("AllLessons")]
    public List<Lesson> GetLessons()
    {
        List<Lesson> lessons = new List<Lesson>();
        Lesson lesson1 = new Lesson(1, "Welcome to tubas", new Subject(1, "instrument lessons"),
            false);
        
        Lesson lesson2 = new Lesson(2, "Tuba and Notes how do they work?", new Subject(1, "instrument lessons"),
            true);
        
        Lesson lesson3 = new Lesson(3, "How to play the Tuba?", new Subject(1, "instrument lessons"),
            true);
        
        Lesson lesson4 = new Lesson(4, "Your first tuba Test", new Subject(1, "instrument lessons"),
            true);

        Lesson lesson5 = new Lesson(1, "Welcome to the saxophone", new Subject(1, "instrument lessons"),
            false);
        
        Lesson lesson6 = new Lesson(1, "Saxophones how do you hold them", new Subject(1, "instrument lessons"),
            true);
        
        Lesson lesson7 = new Lesson(1, "Playing the saxophone", new Subject(1, "instrument lessons"),
            true);
        
        Lesson lesson8 = new Lesson(1, "Notes in the saxophone", new Subject(1, "instrument lessons"),
            true);
        
        lessons.Add(lesson1);
        lessons.Add(lesson2);
        lessons.Add(lesson3);
        lessons.Add(lesson4);
        lessons.Add(lesson5);
        lessons.Add(lesson6);
        lessons.Add(lesson7);
        lessons.Add(lesson8);
        
        return lessons;
    }

    [HttpGet("{lessonId:int}")]
    public Lesson GetLessonById(int lessonId)
    {
        throw new NotImplementedException();
    }

    [HttpGet("{lessonSubject}")]
    public dynamic GetLessonBySubject(string lessonSubject)
    {
        throw new NotImplementedException();
    }

    [HttpPut("update/{lessonId:int}/{lessonName}/{lessonSubject}")]
    public string UpdateLesson(int lessonId, string lessonName, string lessonSubject)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("delete/{lessonId:int}")]
    public string DeleteLesson(int lessonId)
    {
        throw new NotImplementedException();
    }

    [HttpPost("Add/{lessonName}/{lessonSubject}")]
    public string AddNewLesson(string lessonName, string lessonSubject)
    {
        throw new NotImplementedException();
    }
}