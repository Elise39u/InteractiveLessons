using System;
using API.Controllers;
using API.Models;
using NUnit.Framework;

namespace ControllerTest;

public class AnswerControllerTest
{
    private Answer _answer { get; set; }
    private readonly AnswerController _answerController = new AnswerController();

    [SetUp]
    public void Setup()
    {
        _answer = new Answer();
    }

    [Test]
    public void GetAllAnswers_Succes()
    {
        throw new NotImplementedException("Function needs to be coded");
    }
    
    [Test]
    public void GetAllAnswers_Fail()
    {
        throw new NotImplementedException("Function needs to be coded");
    }
    
    [Test]
    public void GetAnswerById_Succes()
    {
        //Needs an id
        throw new NotImplementedException("Function needs to be coded");
    }
    
    [Test]
    public void GetAnswerById_Fail()
    {
        //Needs an Id
        throw new NotImplementedException("Function needs to be coded");
    }
    
    [Test]
    public void UpdateAnswer_Succes()
    {
        /* Needs 
         * AnswerId => Int
         * QuestionId => Int
         * answerValue(AnswerTxT) => string
         * imgLink => string
         * isCorrect => bool
         */
        throw new NotImplementedException("Function needs to be coded with an mock DB");
    }
    
    [Test]
    public void UpdateAnswer_Fail()
    {
        /* Needs 
         * AnswerId => Int
         * QuestionId => Int
         * answerValue(AnswerTxT) => string
         * imgLink => string
         * isCorrect => bool
         */
        throw new NotImplementedException("Function needs to be coded with an mock DB");
    }
    
    [Test]
    public void AddAnswer_Succes()
    {
        /* Needs 
         * QuestionId => Int
         * answerValue(AnswerTxT) => string
         * imgLink => string
         * isCorrect => bool
         */
        throw new NotImplementedException("Function needs to be coded with an mock DB");
    }
    
    [Test]
    public void AddAnswer_Fail()
    {
        /* Needs
         * QuestionId => Int
         * answerValue(AnswerTxT) => string
         * imgLink => string
         * isCorrect => bool
         */
        throw new NotImplementedException("Function needs to be coded with an mock DB");
    }
    
    [Test]
    public void DeleteAnswer_Succes()
    {
        /* Needs 
         * AnswerId => Int
         */
        throw new NotImplementedException("Function needs to be coded with an mock DB");
    }
    
    [Test]
    public void DeleteAnswer_Fail()
    {
        /* Needs
         * AnswerId => Int
         */
        throw new NotImplementedException("Function needs to be coded with an mock DB");
    }
}