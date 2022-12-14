using System.Data;
using DALDTO;
using MySqlConnector;

namespace DALLayer;

public class AnswerDAL
{
    private DBConnection _dbConnection = new();
    private List<DALAnswerDTO> _dalAnswerDtos = new();

    public List<DALAnswerDTO> getAnswersByQuestion(int questionId)
    {
        _dbConnection.OpenConnection();

        MySqlCommand query = new MySqlCommand("SELECT * FROM answer WHERE questionId = " + questionId  
            , _dbConnection.Conn);

        var result = query.ExecuteReader();

        while (result.Read())
        {
            string answerValue = result.GetString(2);
            string imgLink = result.GetString(3);
            
            DALAnswerDTO answerDto = new DALAnswerDTO(result.GetInt32(0), result.GetInt32(1),
                answerValue, imgLink, Convert.ToBoolean(result.GetBoolean(4)));
            _dalAnswerDtos.Add(answerDto);
        }

        return _dalAnswerDtos;
    }
}