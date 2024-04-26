INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용1', 1, '오윤석');
INSERT INTO testdb.test (question, answer, author) VALUES('퀴즈내용2', 1, '오윤석');
DELETE FROM test;
ALTER TABLE test AUTO_INCREMENT=1;
SET @COUNT = 0;
UPDATE test SET id = @COUNT:=@COUNT+1;











CREATE DATABASE `testdb`