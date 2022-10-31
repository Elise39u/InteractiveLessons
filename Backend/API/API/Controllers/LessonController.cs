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
        throw new NotImplementedException();
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