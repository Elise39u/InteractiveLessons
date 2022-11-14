using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class SubjectController : ControllerBase
{
    [HttpGet("AllSubjects")]
    public List<Subject> GetAllSubjects()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{subjectId:int}")]
    public Subject GetSubjectById(int subjectId)
    {
        throw new NotImplementedException();
    }

    [HttpGet("{subjectName}")]
    public Subject GetSubjectByName(string subjectName)
    {
        throw new NotImplementedException();
    }

    [HttpPut("update/{subjectId:int}/{subjectName}")]
    public string UpdateSubject(int subjectId, string subjectName)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("{subjectId:int}")]
    public string DeleteSubject(int subjectId)
    {
        throw new NotImplementedException();
    }

    [HttpPost("Add/{subjectName}")]
    public string AddNewSubject(string subjectName)
    {
        throw new NotImplementedException();
    }
}