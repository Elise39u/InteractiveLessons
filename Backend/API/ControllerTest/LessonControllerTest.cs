using System;
using System.Collections.Generic;
using API.Controllers;
using API.Models;
using NUnit.Framework;

namespace ControllerTest;

public class LessonControllerTest
{
    private Lesson _lesson { get; set; }
    private readonly LessonController _lessonController = new LessonController();
    readonly Object _error = new NotImplementedException();
    
    [SetUp]
    public void Setup()
    {
        _lesson = new Lesson();
    }

    [Test]
    public void GetAllLessons_Succes()
    {
        List<Lesson> lessons = new List<Lesson>();
        lessons = _lessonController.GetLessons();

        Assert.AreEqual(11, lessons.Count, "Dindt found 11 entrys for now found: " + lessons.Count);
    }

    [Test]
    public void GetAllLessons_Fail()
    {
        //throw new NotImplementedException("Need to implement this test still?");
    }

    [Test]
    public void GetLessonById_Succes()
    {
        //Assert.AreEqual(_lessonController.GetLessonById(1), _error, "Still not implemented");
    }

    [Test]
    public void GetLessonById_fail()
    {
        //Assert.AreEqual(_lessonController.GetLessonById(10), _error);
    }

    [Test]
    public void GetLessonSubject_Succes()
    {
        //Assert.AreEqual(_lessonController.GetLessonBySubject("Guitar Lessons"), _error);
    }
    
    [Test]
    public void GetLessonSubject_Fail()
    {
        //Assert.AreEqual(_lessonController.GetLessonBySubject("Kitty Lessons"), _error);
    }

    [Test]
    public void UpdateLesson_Succes()
    {
        //throw new NotImplementedException("Need to implement Test based on a mock db");
    }
    
    [Test]
    public void UpdateLesson_Fail()
    {
        //throw new NotImplementedException("Need to implement Test based on a mock db");
    }
    
    [Test]
    public void AddLesson_Succes()
    {
        //throw new NotImplementedException("Need to implement Test based on a mock db");
    }
    
    [Test]
    public void AddLesson_Fail()
    {
        //throw new NotImplementedException("Need to implement Test based on a mock db");
    }
    
    [Test]
    public void DeleteLesson_Succes()
    {
        //throw new NotImplementedException("Need to implement Test based on a mock db");
    }
    
    [Test]
    public void DeleteLesson_Fail()
    {
        //throw new NotImplementedException("Need to implement Test based on a mock db");
    }
}