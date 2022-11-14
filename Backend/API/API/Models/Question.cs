namespace API.Models;

public class Question
{
    private readonly int _questionId;
    private readonly QuestionTypes _questionTypes;
    private readonly string _questionTxt;
    private List<Hint> QuestionHints { get; } = new List<Hint>();
    private List<KeyValuePair<int, string>> TeacherQuestionTxT { get; } = new List<KeyValuePair<int, string>>();

    public int QuesitonId
    {
        get => _questionId;
        private init => _questionId = value;
    }

    public QuestionTypes QuestionType
    {
        get => _questionTypes;
        private init => _questionTypes = value;
    }

    public string QuestionTxT
    {
        get => _questionTxt;
        private init => _questionTxt = value;
    }

    public Question(int questionId, QuestionTypes questionType, string questionTxt)
    {
        QuesitonId = questionId;
        QuestionType = questionType;
        QuestionTxT = questionTxt;
    }

    public Question()
    {
        
    }
    
    public List<Hint> AddHintToList(Hint hint)
    {
        QuestionHints.Add(hint);
        return QuestionHints;
    }

    public List<KeyValuePair<int, string>> AddTeacherTxt(int questionId, string teacherTxt)
    {
        TeacherQuestionTxT.Add(new KeyValuePair<int, string>(questionId, teacherTxt));
        return TeacherQuestionTxT;
    }
}

public enum QuestionTypes
{
    MULTIPLE_CHOICE = 0,
    TEXT = 1,
    LISTENING = 2,
    MUSIC_GUESSING = 3,
}