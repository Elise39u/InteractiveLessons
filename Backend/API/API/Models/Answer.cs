namespace API.Models;

public class Answer
{
    private readonly int _answerId;
    private readonly int _questionId;
    private readonly string _answerValue;
    private readonly string _imgLink;
    private readonly bool _isCorrect;

    private int AnswerId
    {
        get => _answerId; 
        init => _answerId = value;
    }

    private int QuestionId
    {
        get => _questionId; 
        init => _questionId = value;
    }

    private string AnswerValue
    {
        get => _answerValue;
        init => _answerValue = value;
    }

    private string ImgLink
    {
        get => _imgLink; 
        init => _imgLink = value;
    }

    private bool IsCorrect
    {
        get => _isCorrect;
        init => _isCorrect = value;
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