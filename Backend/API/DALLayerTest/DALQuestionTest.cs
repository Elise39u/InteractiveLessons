using System.Collections.Generic;
using DALDTO;
using DALLayer;
using NUnit.Framework;

namespace DALLayerTest;

public class DALQuestionTest
{
    private QuestionDAL _questionDal = new QuestionDAL();
    
    [SetUp]
    public void SetUp()
    {
        
    }

    [Test]
    public void Should_Success_Getting_All_Questions()
    {
        List<DALQuestionDTO> questionDTOS = _questionDal.getAllQuestions();
        
        Assert.AreEqual(5, questionDTOS.Count, "Dind`t found 5 questions but rather: " + questionDTOS.Count);
        Assert.AreEqual(QuestionTypes.MULTIPLE_CHOICE, questionDTOS[0].QuestionType, "Questions types dont match for question 0/1");
        Assert.AreEqual(QuestionTypes.TEXT, questionDTOS[3].QuestionType, "Questions types dont match for question 4/3");
    }

    [Test]
    public void Should_Success_Getting_Questions_For_LessonOne()
    {
        int lessonId = 1;

        List<DALQuestionDTO> questionDtos = _questionDal.getAllLessonQuestions(lessonId);
        Assert.AreEqual(5, questionDtos.Count, "Dind`t found 5 questions but rather: " + questionDtos.Count);
        Assert.AreEqual(QuestionTypes.MULTIPLE_CHOICE, questionDtos[0].QuestionType, "Questions types dont match for question 0/1");
        Assert.AreEqual(QuestionTypes.TEXT, questionDtos[3].QuestionType, "Questions types dont match for question 4/3");
    }

    [Test]
    public void Should_Fail_Getting_Questions_For_LessonFive()
    {
        int lessonId = 11;

        List<DALQuestionDTO> questionDtos = _questionDal.getAllLessonQuestions(lessonId);
        Assert.AreEqual(0, questionDtos.Count, "I found lessons for lesson 11 what a suprise: " + questionDtos.Count);
    }
}