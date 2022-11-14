using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class TeacherController : ControllerBase
{
    [HttpGet("AllTeachers")]
    public List<Teacher> GetAllTeachers()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{teacherId:int}")]
    public Teacher GetTeacherById(int teacherId)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("{teacherId:int}")]
    public string DeleteTeacher(int teacherId)
    {
        throw new NotImplementedException();
    }

    [HttpPut("{teacherId:int}/{teacherImg}/{teacherName}")]
    public Teacher UpdateTeacher(int teacherId, string teacherImg, string teacherName)
    {
        throw new NotImplementedException();
    }

    [HttpPost("{teacherImg}/{teacherName}")]
    public string AddTeacher(string teacherImg, string teacherName)
    {
        throw new NotImplementedException();
    }
}