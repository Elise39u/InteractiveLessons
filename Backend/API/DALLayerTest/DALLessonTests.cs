using System.Collections.Generic;
using DALDTO;
using DALLayer;
using NUnit.Framework;

namespace DALLayerTest;

public class DALLessonTests
{
    private LessonDAL _lessonDal = new LessonDAL();
    
    [SetUp]
    public void SetUp()
    {
            
    }

    [Test]
    public void Get_All_Lessons_Succes()
    {
        List<DalLessonDTO> lessonDtos = _lessonDal.GetAllLessons();
        Assert.AreEqual(11, lessonDtos.Count, "No 11 lessons founds instead found: " + lessonDtos.Count);
    }
}