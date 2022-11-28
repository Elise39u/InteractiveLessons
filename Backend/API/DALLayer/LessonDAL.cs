using DALDTO;
using MySqlConnector;

namespace DALLayer;

public class LessonDAL
{
    private DBConnection _dbConnection = new DBConnection();
    private List<DalLessonDTO> _dalLessonDtos = new List<DalLessonDTO>();

    public List<DalLessonDTO> GetAllLessons()
    {
        _dbConnection.OpenConnection();

        MySqlCommand query = new MySqlCommand(
            "SELECT * FROM lesson LEFT JOIN subject on lesson.lessonSubject = subject.subjectId"
            , _dbConnection.Conn);
        var result = query.ExecuteReader();
        while (result.Read())
        {
            DalLessonDTO lesson = new DalLessonDTO(result.GetInt32(0), result.GetString(1),
                new DalSubjectDTO(result.GetInt32(2), result.GetString(5)),
                result.GetBoolean(4));
            _dalLessonDtos.Add(lesson);
        }

        _dbConnection.CloseConnection();
        return _dalLessonDtos;
    }
}