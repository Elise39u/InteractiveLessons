namespace API.Models;

public class Question
{
    private readonly int _questionId;
    private readonly QuestionTypes _questionTypes;
    private readonly string _questionTxt;
    private List<Hint> _questionHints;

    private int QuesitonId
    {
        get => _questionId;
        init => _questionId = value;
    }

    private  QuestionTypes QuestionType
    {
        get => _questionTypes;
        init => _questionTypes = value;
    }

    private string QuestionTxT
    {
        get => _questionTxt;
        init => _questionTxt = value;
    }

    public Question(int questionId, QuestionTypes questionType, string questionTxt)
    {
        QuesitonId = questionId;
        QuestionType = questionType;
        QuestionTxT = questionTxt;
    }
}

public enum QuestionTypes
{
    MULTIPLE_CHOICE = 0,
    TEXT = 1,
    LISTENING = 2,
    MUSIC_GUESSING = 3,
}