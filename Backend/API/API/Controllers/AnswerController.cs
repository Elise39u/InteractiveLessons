using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class AnswerController
{
    [HttpGet("AllAnswers")]
    public List<Answer> GetAllAnswers()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{answerId:int}")]
    public Answer GetAnswerById(int answerId)
    {
        throw new NotImplementedException();
    }

    [HttpPut("UpdateAnswer/{answerId:int}/{questionId:int}/{answerValue}/{imgLink}/{isCorrect:bool}")]
    public string UpdateAnswer(int answerId, int questionId, string answerValue, string imgLink, bool isCorrect)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("{answerId:int}")]
    public string DeleteAnswer(int answerId)
    {
        throw new NotImplementedException();
    }

    [HttpPost("AddAnswer/{questionId:int}/{answerValue}/{imgLink}/{isCorrect:bool}")]
    public string AddAnswer(int questionId, string answerValue, string imgLink, Boolean isCorrect)
    {
        throw new NotImplementedException();
    }
}