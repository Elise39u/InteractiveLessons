namespace API.Models;

public class Subject
{
    private readonly int _subjectId;
    private readonly string _subjectName;

    private int SubjectId
    {
        get => _subjectId; 
        init => _subjectId = value;
    }
    private string SubjectName
    {
        get => _subjectName;
        init => _subjectName = value;
    }

    public Subject(int subjectId, string subjectName)
    {
        SubjectId = subjectId;
        SubjectName = subjectName;
    }
}