INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용1', 1, '오윤석');
INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용2', 0, '오윤석');
INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용3', 1, '오윤석');
INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용4', 0, '오윤석');
INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용5', 1, '오윤석');
INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용6', 0, '오윤석');

DELETE FROM test;
ALTER TABLE test AUTO_INCREMENT=1;
SET @COUNT = 0;
UPDATE test SET id = @COUNT:=@COUNT+1;

CREATE DATABASE `testdb`

CREATE DATABASE shop DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;