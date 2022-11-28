using API.Models;
using APIDTO;
using LogicLayer;
using Microsoft.AspNetCore.Mvc;
using QuestionTypes = API.Models.QuestionTypes;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class QuestionController : ControllerBase
{
    private readonly QuestionLogic _questionLogic = new QuestionLogic();
    [HttpGet("AllQuestions")]
    public List<Question> GetAllQuestions()
    {
        throw new NotImplementedException();
    }

    [HttpGet("ById/{questionId:int}")]
    public Question GetQuestionById(int questionId)
    {
        throw new NotImplementedException();
    }

    [HttpGet("ByLesson/{lessonId:int}")]
    public List<Question> GetQuestionsByLessonId(int lessonId)
    {
        List<Question> questions = new List<Question>();
        List<ApiQuestionDTO> apiQuestionDtos =  _questionLogic.GetAllLessonQuestionsById(lessonId);

        for (int i = 0; i < apiQuestionDtos.Count; i++)
        {
            Question question = new Question(apiQuestionDtos[i].QuesitonId, (QuestionTypes)apiQuestionDtos[i].QuestionType,
                apiQuestionDtos[i].QuestionTxT);
            
            questions.Add(question);
        }

        return questions;
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