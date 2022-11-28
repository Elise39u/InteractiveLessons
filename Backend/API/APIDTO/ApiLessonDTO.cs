namespace APIDTO;

public class ApiLessonDTO
{
    private readonly int _lessonId;
    private readonly string _lessonName;
    private readonly ApiSubjectDTO _lessonSubject;
    private readonly bool _isLocked;
    
    public int LessonId
    {
        get => _lessonId; 
        private init => _lessonId = value; 
    }

    public string LessonName
    {
        get => _lessonName;
        private init => _lessonName = value;
    }

    public ApiSubjectDTO LessonSubject
    {
        get => _lessonSubject;
        private init=> _lessonSubject = value;
    }

    public bool IsLocked
    {
        get => _isLocked;
        private init => _isLocked = value;
    }
    
    public ApiLessonDTO(int lessonId, string lessonName, ApiSubjectDTO lessonSubject, bool isLocked)
    {
        LessonId = lessonId;
        LessonName = lessonName;
        LessonSubject = lessonSubject;
        IsLocked = isLocked;
    }
}