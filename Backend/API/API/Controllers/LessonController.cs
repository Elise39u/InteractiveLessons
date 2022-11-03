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
        for (int i = 0; i < 4; i++)
        {
            Lesson lesson = new Lesson(i, "Music" + i, new Subject(1, "Guitar Lessons"));
            lessons.Add(lesson);
        }

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