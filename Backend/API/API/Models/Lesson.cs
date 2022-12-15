namespace API.Models;

public class Lesson
{
    private readonly int _lessonId;
    private readonly string _lessonName;
    private readonly Subject _lessonSubject;
    private readonly bool _isLocked;
    private List<Question> LessonQuestions { get; } = new List<Question>();
    
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

    public Subject LessonSubject
    {
        get => _lessonSubject;
        private init=> _lessonSubject = value;
    }

    public bool IsLocked
    {
        get => _isLocked;
        private init => _isLocked = value;
    }
    
    public Lesson(int lessonId, string lessonName, Subject lessonSubject, bool isLocked)
    {
        LessonId = lessonId;
        LessonName = lessonName;
        LessonSubject = lessonSubject;
        IsLocked = isLocked;
    }

    public Lesson()
    {
        
    }

    public List<Question> AddQuestionToList(Question question)
    {
        LessonQuestions.Add(question);
        return LessonQuestions;
    }
}
