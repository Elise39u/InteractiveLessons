using API.Models;
using APIDTO;
using LogicLayer;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class AnswerController
{
    private AnswerLogic _answerLogic = new AnswerLogic();
    
    [HttpGet("AllAnswers")]
    public List<Answer> GetAllAnswers()
    {
        throw new NotImplementedException();
    }

    [HttpGet("GetAnswerQuestions/{questionId:int}")]
    public List<Answer> GetAnswersById(int questionId)
    {
        List<Answer> answers = new List<Answer>();
        List<ApiAnswerDTO> apiAnswerDtos = _answerLogic.GetAnswersForQuestion(questionId);

        for (int i = 0; i < apiAnswerDtos.Count; i++)
        {
            Answer answer = new Answer(apiAnswerDtos[i].AnswerId, apiAnswerDtos[i].QuestionId,
                apiAnswerDtos[i].AnswerValue, apiAnswerDtos[i].ImgLink, apiAnswerDtos[i].IsCorrect);
            
            answers.Add(answer);
        }

        return answers;
    }
    
    [HttpGet("GetAnswerById/{answerId:int}")]
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