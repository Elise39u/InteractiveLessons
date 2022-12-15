using System.Data;
using DALDTO;
using MySqlConnector;

namespace DALLayer;
// https://www.csharp-examples.net/string-to-enum/ used on the converter 

public class QuestionDAL
{
    private DBConnection _dbConnection = new DBConnection();
    private List<DALQuestionDTO> _questions = new List<DALQuestionDTO>();

    public List<DALQuestionDTO> getAllQuestions()
    {
        _questions.Clear();
        _dbConnection.OpenConnection();
        
        MySqlCommand query = new MySqlCommand(
            "SELECT * FROM question"
            , _dbConnection.Conn);
        var result = query.ExecuteReader();
        while (result.Read())
        {
            DALQuestionDTO question = new DALQuestionDTO(result.GetInt32(0), 
                (QuestionTypes)Enum.Parse(typeof(QuestionTypes), result.GetString(1)),
                result.GetString(2));
            _questions.Add(question);
        }

        _dbConnection.CloseConnection();
        return _questions;
    }

    public List<DALQuestionDTO> getAllLessonQuestions(int lessonId)
    {
        _questions.Clear();
        _dbConnection.OpenConnection();

        MySqlCommand query = new MySqlCommand(
            "SELECT * FROM lesson_questions lq LEFT JOIN question q on lq.questionId = q.questionId WHERE lq.lessonId = " + lessonId  
            , _dbConnection.Conn);
        var result = query.ExecuteReader();
        while (result.Read())
        {
            DALQuestionDTO question = new DALQuestionDTO(result.GetInt32(2), 
                (QuestionTypes)Enum.Parse(typeof(QuestionTypes), result.GetString(3)),
                result.GetString(4));
            _questions.Add(question);
        }

        _dbConnection.CloseConnection();
        return _questions;
    }
}