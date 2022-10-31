namespace API.Models;

public class Hint
{
    private readonly int _hintId;
    private readonly int _questionId;
    private readonly string _hintTxT;

    private int HintId
    {
        get => _hintId; 
        init => _hintId = value;
    }

    private int QuestionId
    {
        get => _questionId;
        init => _questionId = value;
    }

    private string HintTxT
    {
        get => _hintTxT;
        init => _hintTxT = value;
    }

    public Hint(int hintId, int questionId, string hintTxT)
    {
        HintId = hintId;
        QuestionId = questionId;
        HintTxT = hintTxT;
    }
}