using APIDTO;
using DALDTO;
using DALLayer;

namespace LogicLayer;

public class AnswerLogic
{
    private readonly AnswerDAL _dalAnswer = new AnswerDAL();

    public List<ApiAnswerDTO> GetAnswersForQuestion(int questionId)
    {
        List<ApiAnswerDTO> apiAnswerDtos = new List<ApiAnswerDTO>();
        List<DALAnswerDTO> answerDtos = _dalAnswer.getAnswersByQuestion(questionId);

        for (int i = 0; i < answerDtos.Count; i++)
        {
            ApiAnswerDTO apiAnswerDto = new ApiAnswerDTO(answerDtos[i].AnswerId, answerDtos[i].QuestionId,
                answerDtos[i].AnswerValue, answerDtos[i].ImgLink, answerDtos[i].IsCorrect);
            
            apiAnswerDtos.Add(apiAnswerDto);
        }

        return apiAnswerDtos;
    }
}