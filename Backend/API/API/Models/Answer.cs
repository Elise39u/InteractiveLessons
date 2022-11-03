namespace API.Models;

public class Answer
{
    private readonly int _answerId;
    private readonly int _questionId;
    private readonly string _answerValue;
    private readonly string _imgLink;
    private readonly bool _isCorrect;

    public int AnswerId
    {
        get => _answerId; 
        private init => _answerId = value;
    }

    public int QuestionId
    {
        get => _questionId; 
        private init => _questionId = value;
    }

    public string AnswerValue
    {
        get => _answerValue;
        private init => _answerValue = value;
    }

    public string ImgLink
    {
        get => _imgLink; 
        private init => _imgLink = value;
    }

    public bool IsCorrect
    {
        get => _isCorrect;
        private init => _isCorrect = value;
    }

    public Answer(int answerId, int questionId, string answerValue, string imgLink, bool isCorrect)
    {
        AnswerId = answerId;
        QuestionId = questionId;
        AnswerValue = answerValue;
        ImgLink = imgLink;
        IsCorrect = isCorrect;
    }
}