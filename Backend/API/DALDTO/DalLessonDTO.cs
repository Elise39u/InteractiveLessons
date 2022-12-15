namespace DALDTO;

public class DalLessonDTO
{
    private readonly int _lessonId;
    private readonly string _lessonName;
    private readonly DalSubjectDTO _lessonSubject;
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

    public DalSubjectDTO LessonSubject
    {
        get => _lessonSubject;
        private init=> _lessonSubject = value;
    }

    public bool IsLocked
    {
        get => _isLocked;
        private init => _isLocked = value;
    }
    
    public DalLessonDTO(int lessonId, string lessonName, DalSubjectDTO lessonSubject, bool isLocked)
    {
        LessonId = lessonId;
        LessonName = lessonName;
        LessonSubject = lessonSubject;
        IsLocked = isLocked;
    }
}