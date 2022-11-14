using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class QuestionController : ControllerBase
{
    [HttpGet("AllQuestions")]
    public List<Question> GetAllQuestions()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{questionId:int}")]
    public Question GetQuestionById(int questionId)
    {
        throw new NotImplementedException();
    }

    [HttpGet("{lessonId:int}")]
    public List<Question> GetQuestionsByLessonId(int lessonId)
    {
        throw new NotImplementedException();
    }
    
    [HttpGet("GetAnswers/{questionId:int}")]
    public dynamic GetAnswersForQuestion(int questionId)
    {
        throw new NotImplementedException();
    }

    [HttpGet("GetHints/{questionId:int}")]
    public dynamic GetHintsForQuestion(int questionId)
    {
        throw new NotImplementedException();
    }
    
    [HttpPut("update/{questionId:int}/{questionTxT}/{questionTypes:int}")]
    public string UpdateQuestion(int questionId, string questionTxT, QuestionTypes questionTypes)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("delete/{questionId:int}")]
    public string DeleteQuestion(int questionId)
    {
        throw new NotImplementedException();
    }

    [HttpPost("Add/{questionTxT}/{questionTypes:int}")]
    public string AddQuestion(string questionTxT, QuestionTypes questionTypes)
    {
        throw new NotImplementedException();
    }
}