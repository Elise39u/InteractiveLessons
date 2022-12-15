using API.Models;
using APIDTO;
using LogicLayer;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class LessonController : ControllerBase
{
    private LessonLogic _lessonLogic = new LessonLogic();
        
    [HttpGet("AllLessons")]
    public List<Lesson> GetLessons()
    {
        List<Lesson> lessons = new List<Lesson>();
        List<ApiLessonDTO> lessonDtos = _lessonLogic.GetAllLessons();

        for (int i = 0; i < lessonDtos.Count; i++)
        {
            Lesson lesson = new Lesson(lessonDtos[i].LessonId, lessonDtos[i].LessonName, new Subject(
                    lessonDtos[i].LessonSubject.SubjectId, lessonDtos[i].LessonSubject.SubjectName),
                lessonDtos[i].IsLocked);
            
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