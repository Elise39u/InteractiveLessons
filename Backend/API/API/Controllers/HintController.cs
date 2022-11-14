using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class HintController : ControllerBase
{
    [HttpGet]
    public List<Hint> GetAllHints()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{hintId:int}")]
    public Hint GetHintById(int hintId)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("{hintId:int}")]
    public string DeleteHintById(int hintId)
    {
        throw new NotImplementedException();
    }

    [HttpPut("update/{hintId:int}/{questionId:int}/{hintTxT}")]
    public string UpdateHint(int hintId, int questionId, string hintTxT)
    {
        throw new NotImplementedException();
    }

    [HttpPost("Add/{questionId:int}/{hintTxT}")]
    public string AddHint(int questionId, string hintTxT)
    {
        throw new NotImplementedException();
    }
}