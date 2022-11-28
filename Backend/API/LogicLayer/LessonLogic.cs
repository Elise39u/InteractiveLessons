using APIDTO;
using DALDTO;
using DALLayer;

namespace LogicLayer;

public class LessonLogic {
    
    private readonly LessonDAL _lessonDal = new LessonDAL();
    
    public List<ApiLessonDTO> GetAllLessons()
    {
        List<ApiLessonDTO> apiLessonDtos = new List<ApiLessonDTO>();
        List<DalLessonDTO> dalLessonDtos = _lessonDal.GetAllLessons();
        
        for (int i = 0; i < dalLessonDtos.Count; i++)
        {
            ApiLessonDTO apiLessonDto = new ApiLessonDTO(dalLessonDtos[i].LessonId, dalLessonDtos[i].LessonName,
            new ApiSubjectDTO(dalLessonDtos[i].LessonSubject.SubjectId, dalLessonDtos[i].LessonSubject.SubjectName),
                dalLessonDtos[i].IsLocked);
            
            apiLessonDtos.Add(apiLessonDto);
        }

        return apiLessonDtos;
    } 
}