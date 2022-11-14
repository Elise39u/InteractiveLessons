namespace API.Models;

public class Lesson
{
    private readonly int _lessonId;
    private readonly string _lessonName;
    private readonly Subject _lessonSubject;
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

    public Lesson(int lessonId, string lessonName, Subject lessonSubject)
    {
        LessonId = lessonId;
        LessonName = lessonName;
        LessonSubject = lessonSubject;
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
