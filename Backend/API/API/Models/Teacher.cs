namespace API.Models;

public class Teacher
{
    private readonly int _teacherId;
    private readonly string _teacherImg;
    private readonly string _teacherName;

    public int TeacherId
    {
        get => _teacherId;
        private init => _teacherId = value;
    }

    public string TeacherImg
    {
        get => _teacherImg;
        private init => _teacherImg = value;
    }

    public string TeacherName
    {
        get => _teacherName;
        private init => _teacherName = value;
    }

    public Teacher(int teacherId, string teacherImg, string teacherName)
    {
        TeacherId = teacherId;
        TeacherImg = teacherImg;
        TeacherName = teacherName;
    }
}