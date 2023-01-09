-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 09 jan 2023 om 09:35
-- Serverversie: 5.7.36
-- PHP-versie: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lessongame`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `answerId` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `answerValue` varchar(1024) DEFAULT NULL,
  `answerImg` varchar(1024) DEFAULT NULL,
  `isCorrect` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`answerId`),
  KEY `Answer_question_questionId_fk` (`questionId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `answer`
--

INSERT INTO `answer` (`answerId`, `questionId`, `answerValue`, `answerImg`, `isCorrect`) VALUES
(1, 1, 'That is correct. This how an average tuba should look to the public eye.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yamaha_Bass_tuba_YFB-822.tif/lossy-page1-1200px-Yamaha_Bass_tuba_YFB-822.tif.jpg', 1),
(2, 1, 'This is not correct unfortunately. What you pressed is known as a piano ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkj3fJBFCipAcC4cmTlyRyYvL_hulW1IDWAPph6wc6xfJ5KdaQu6Oqtme9cD1InQ8kiN4&usqp=CAU', 0),
(3, 1, 'Well not quite yet there. This is a guitar or a electric one.', 'https://static.vecteezy.com/system/resources/previews/001/207/404/non_2x/electric-guitar-png.png', 0),
(4, 1, 'I could get you on the shape of the instrument. But no this is known as a Clarinet in the music world', 'https://sc1.musik-produktiv.com/pic-010088906xl/leblanc-cl655.jpg', 0),
(5, 2, 'Sweetheart i know the memes around here. But do you think really that its a proper way to hold the tuba like this. ', 'https://i.kym-cdn.com/entries/icons/facebook/000/032/431/Screen_Shot_2020-01-14_at_2.17.22_PM.jpg', 0),
(6, 2, 'This is a proper way to hold the tuba. Its also the most common way to play the tuba. There are more ways to hold the tuba. Do you know a few of these ways?', 'https://dynamicmusicroom.com/wp-content/uploads/2022/04/how-to-play-the-tuba-louder.jpg', 1),
(7, 2, 'Its considerd a correct way to hold the tuba. Only in the long run it causes a bad posture. Or you cant get enough breath to play certain notes. So its considered a good answer but not the best', 'https://www.uh.edu/kgmca/music/tmf/about-the-festival/orchestra-fellows/2018/profiles/_images/carter-loud.jpg', 1),
(8, 2, 'I mean its holding the tuba right? But if you play it like this and hold it like that. It will result in notes that are not tuned or sound right in the long run!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCXUFnJjiSn-SlsWXeq7xp4xWkNYz9kUsbQ&usqp=CAU', 0),
(9, 3, 'So its not right but your close you know why? Let me tell you. Its because this answer is a mouthpiece for the saxophone', 'https://m.media-amazon.com/images/I/61hy1h2xsdL.jpg', 0),
(10, 3, 'Listen were gonna need a talk. Like to be honest why you thought a coke cola bottle cap was a mouth piece? Im amazed', 'https://us.123rf.com/450wm/werbeatelier_jbk/werbeatelier_jbk1109/werbeatelier_jbk110900015/10559396-m%C3%A3%C2%BCnster-duitsland-10-september-2011-foto-laat-coca-cola-dop-van-de-fles-op-rode-achtergrond-.jpg', 0),
(11, 3, 'This is correct. What you pressed is a more common mouthpiece for the tuba ', 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/236766/10662511_800.jpg', 1),
(12, 3, 'Oehhh this is not correct. You wanna know why? Its a clarinet mouthpiece not the one for the tuba', 'http://t2.gstatic.com/images?q=tbn:ANd9GcSAypA5TPlLGI2IsEGPgeP-BLwI7LY34zESrJOh6hOXX7ISZHgj', 0),
(13, 4, 'This is correct and impressive. It was hard to find data on whats the highest note that an BB tuba can play. There are too many factors who play into this subject. But most still say C notes is the starter highest.', 'C', 1),
(14, 4, 'Its was a hard question i can get that. But i have to say something honest. It was hard to determine a highest note. Too many factors that play a roll to choose this. Like experience, the tuba you have, mouthpiece etc. But one thing came back regular and that was the C note on average. Hands down why this answer', '\"\"', 0),
(15, 5, 'Impressive really impressive. Also here were quite some factors that had something to say. https://dynamicmusicroom.com/what-is-the-lowest-note-a-tuba-can-play by the Dynamic music room has a nice article on this topic. They even give the answer that i used in this test. E1 is this the 100% correct answer. No as i said a lot of factors go into what a tubas lowest note is.', 'E1', 1),
(16, 5, 'Ahh too bad. Its was also a hard last question of the lesson. So i can understand you had it wrong. Here were also quite some factors that had something to say. https://dynamicmusicroom.com/what-is-the-lowest-note-a-tuba-can-play/ Dynamic musicroom Has a nice article on this topic. ', '\"\"', 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `lesson`
--

DROP TABLE IF EXISTS `lesson`;
CREATE TABLE IF NOT EXISTS `lesson` (
  `lessonId` int(11) NOT NULL,
  `lessonName` varchar(1024) DEFAULT NULL,
  `lessonSubject` int(11) NOT NULL,
  `isLocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`lessonId`),
  KEY `lesson_to_subject` (`lessonSubject`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `lesson`
--

INSERT INTO `lesson` (`lessonId`, `lessonName`, `lessonSubject`, `isLocked`) VALUES
(1, 'Welcome to the Tuba', 1, 0),
(2, 'Tubas and Notes, How do they work?', 1, 1),
(3, 'How to play the tuba', 1, 1),
(4, 'Your first tuba test!', 1, 1),
(5, 'What do you remeber about the tuba?', 1, 1),
(6, 'Ways to enchance your tuba', 1, 1),
(7, 'How to tune the tuba', 1, 1),
(8, 'Saxophones introduction', 2, 0),
(9, 'How do you hold a saxophone', 2, 1),
(10, 'Playing the saxophone', 2, 1),
(11, 'Notes in the saxophone. How do we recognize them?', 2, 1),
(12, 'Welcome to the Dutch Language ', 3, 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `lesson_questions`
--

DROP TABLE IF EXISTS `lesson_questions`;
CREATE TABLE IF NOT EXISTS `lesson_questions` (
  `lessonId` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  KEY `lesson_questions_lesson_lessonId_fk` (`lessonId`),
  KEY `lesson_questions_question_questionId_fk` (`questionId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `lesson_questions`
--

INSERT INTO `lesson_questions` (`lessonId`, `questionId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `questionId` int(11) NOT NULL,
  `questionTypes` enum('MULTIPLE_CHOICE','TEXT','LISTENING','MUSIC_MAKING','QUICK_ANSWERING') NOT NULL,
  `questionTxT` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `question`
--

INSERT INTO `question` (`questionId`, `questionTypes`, `questionTxT`) VALUES
(1, 'MULTIPLE_CHOICE', 'Can you tell me how a tuba looks?'),
(2, 'MULTIPLE_CHOICE', 'Now that you know how the tuba looks. Can you tell me how you think how you should hold the tuba?'),
(3, 'MULTIPLE_CHOICE', 'So we learend how to hold a tuba and how one looks. Question now is how does the mouthpiece for a tuba look?'),
(4, 'TEXT', 'Next question is a special one. What do you think is the highest note that a tuba can play on average? If we consider the BB tuba the more common and average tuba out there'),
(5, 'TEXT', 'So to go further on the last question. What is the lowest note you think an average tuba can play? Also consider here that we talk about the BB tuba');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `subject`
--

DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `subjectId` int(11) NOT NULL,
  `subjectName` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`subjectId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `subject`
--

INSERT INTO `subject` (`subjectId`, `subjectName`) VALUES
(1, 'Tuba Lessons'),
(2, 'Saxophone Lessons'),
(3, 'Nederlands ');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `teacherID` int(11) NOT NULL,
  `teacherName` varchar(1024) DEFAULT NULL,
  `teacherImg` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`teacherID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
