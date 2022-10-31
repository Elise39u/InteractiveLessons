namespace API.Models;

public class Lesson
{
    private readonly int _lessonId;
    private readonly string _lessonName;
    private readonly Subject _lessonSubject;
    private readonly List<Question> _lessonQuestions;
    
    //TODO: Add Questions List to this model class

    private int LessonId
    {
        get => _lessonId; 
        init => _lessonId = value; 
    }

    private string LessonName
    {
        get => _lessonName;
        init => _lessonName = value;
    }

    private Subject LessonSubject
    {
        get => _lessonSubject;
        init => _lessonSubject = value;
    }

    public Lesson(int lessonId, string lessonName, Subject lessonSubject)
    {
        LessonId = lessonId;
        LessonName = lessonName;
        LessonSubject = lessonSubject;
    }
}
