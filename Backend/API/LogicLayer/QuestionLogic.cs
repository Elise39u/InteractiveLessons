using APIDTO;
using DALDTO;
using DALLayer;
using QuestionTypes = APIDTO.QuestionTypes;

namespace LogicLayer;

public class QuestionLogic
{
    private readonly QuestionDAL _questionDal = new QuestionDAL();

    public List<ApiQuestionDTO> GetAllLessonQuestionsById(int lessonId)
    {
        List<DALQuestionDTO> dalQuestionDtos = _questionDal.getAllLessonQuestions(lessonId);
        List<ApiQuestionDTO> apiQuestionDtos = new List<ApiQuestionDTO>();

        for (int i = 0; i < dalQuestionDtos.Count; i++)
        {
            ApiQuestionDTO apiQuestionDto = new ApiQuestionDTO(dalQuestionDtos[i].QuesitonId,
                (QuestionTypes)dalQuestionDtos[i].QuestionType, dalQuestionDtos[i].QuestionTxT);
            
            apiQuestionDtos.Add(apiQuestionDto);
        }

        return apiQuestionDtos;
    }
}