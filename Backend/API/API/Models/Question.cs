namespace API.Models;

public class Question
{
    private readonly int _questionId;
    private readonly QuestionTypes _questionTypes;
    private readonly string _questionTxt;
    private List<Hint> QuestionHints { get; } = new List<Hint>();

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

    public List<Hint> AddHintToList(Hint hint)
    {
        QuestionHints.Add(hint);
        return QuestionHints;
    }
    
    
}

public enum QuestionTypes
{
    MULTIPLE_CHOICE = 0,
    TEXT = 1,
    LISTENING = 2,
    MUSIC_GUESSING = 3,
}