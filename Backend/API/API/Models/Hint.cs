namespace API.Models;

public class Hint
{
    private readonly int _hintId;
    private readonly int _questionId;
    private readonly string _hintTxT;

    public int HintId
    {
        get => _hintId; 
        private init => _hintId = value;
    }

    public int QuestionId
    {
        get => _questionId;
        private init => _questionId = value;
    }

    public string HintTxT
    {
        get => _hintTxT;
        private init => _hintTxT = value;
    }

    public Hint(int hintId, int questionId, string hintTxT)
    {
        HintId = hintId;
        QuestionId = questionId;
        HintTxT = hintTxT;
    }
}