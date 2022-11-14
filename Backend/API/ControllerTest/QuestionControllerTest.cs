using System;
using API.Controllers;
using API.Models;
using NUnit.Framework;

namespace ControllerTest;

public class QuestionControllerTest
{
    private Question _question { get; set; }
    private readonly QuestionController _questionController = new QuestionController();
    
    [SetUp]
    public void Setup()
    {
        _question = new Question();
    }

    [Test]
    public void GetAllQuestions_Succes()
    {
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetAllQuestions_Fail()
    {
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetQuestionById_Succes()
    {
        //Needs an Id of the Question 
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetQuestionById_Fail()
    {
        //Needs an Id of the Question
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetQuestionAnswers_Succes()
    {
        //Needs an ID of the question
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetQuestionAnswers_Fail()
    {
        // Needs an ID of the question
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetQuestionHints_Succes()
    {
        //Needs Question Id
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void GetQuestionHints_Fail()
    {
        //Need Question Id
        throw new NotImplementedException("Test has yet to been made after coding the function");
    }
    
    [Test]
    public void UpdateQuestion_Succes()
    {
        //Need Question Id, Question TXT, Question Type
        throw new NotImplementedException("Test has yet to been made after coding the function and a mock DB");
    }
    
    [Test]
    public void UpdateQuestion_Fail()
    {
        //Need Question Id, Question TXT, Question Type
        throw new NotImplementedException("Test has yet to been made after coding the function and a mock DB");
    }
    
    [Test]
    public void AddQuestion_Succes()
    {
        //Need Question TXT, Question Type as int 
        throw new NotImplementedException("Test has yet to been made after coding the function and a mock DB");
    }
    
    [Test]
    public void AddQuestion_Fail()
    {
        //Need Question TXT, Question Type as int 
        throw new NotImplementedException("Test has yet to been made after coding the function and a mock DB");
    }
    
    [Test]
    public void DeleteQuestion_Succes()
    {
        //Need Question Id,
        throw new NotImplementedException("Test has yet to been made after coding the function and a mock DB");
    }
    
    [Test]
    public void DeleteQuestion_Fail()
    {
        //Need Question Id,
        throw new NotImplementedException("Test has yet to been made after coding the function and a mock DB");
    }
}