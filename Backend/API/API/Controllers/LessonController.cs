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
        Lesson lesson1 = new Lesson(1, "Welcome to tubas", new Subject(1, "Tuba Lessons"),
            false);
        
        Lesson lesson2 = new Lesson(2, "Tuba and Notes how do they work?", new Subject(1, "Tuba Lessons"),
            true);
        
        Lesson lesson3 = new Lesson(3, "How to play the Tuba?", new Subject(1, "Tuba Lessons"),
            true);
        
        Lesson lesson4 = new Lesson(4, "Your first tuba Test", new Subject(1, "Tuba Lessons"),
            true);
        
        Lesson lesson5 = new Lesson(5, "What do you remember about the Tuba?", new Subject(1, "Tuba Lessons"),
            true);
        
        Lesson lesson6 = new Lesson(6, "Secret ways to enhance your tuba", new Subject(1, "Tuba Lessons"),
            true);
        
        Lesson lesson7 = new Lesson(7, "How to tune the tuba", new Subject(1, "Tuba Lessons"),
            true);

        Lesson lesson8 = new Lesson(8, "Welcome to the saxophone", new Subject(2, "Saxophone Lessons"),
            false);
        
        Lesson lesson9 = new Lesson(9, "Saxophones how do you hold them", new Subject(2, "Saxophone Lessons"),
            true);
        
        Lesson lesson10 = new Lesson(10, "Playing the saxophone", new Subject(2, "Saxophone Lessons"),
            true);
        
        Lesson lesson11 = new Lesson(11, "Notes in the saxophone", new Subject(2, "Saxophone Lessons"),
            true);
        
        lessons.Add(lesson1);
        lessons.Add(lesson2);
        lessons.Add(lesson3);
        lessons.Add(lesson4);
        lessons.Add(lesson5);
        lessons.Add(lesson6);
        lessons.Add(lesson7);
        lessons.Add(lesson8);
        lessons.Add(lesson9);
        lessons.Add(lesson10);
        lessons.Add(lesson11);
        
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