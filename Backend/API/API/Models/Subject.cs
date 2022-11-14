namespace API.Models;

public class Subject
{
    private readonly int _subjectId;
    private readonly string _subjectName;

    public int SubjectId
    {
        get => _subjectId; 
        private init => _subjectId = value;
    }
    public string SubjectName
    {
        get => _subjectName;
        private init => _subjectName = value;
    }

    public Subject(int subjectId, string subjectName)
    {
        SubjectId = subjectId;
        SubjectName = subjectName;
    }
}