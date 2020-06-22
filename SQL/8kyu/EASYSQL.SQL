-- there are a number of simple challenges on codewars for SQL starting with "Easy SQL", I will put them all in one file


-- order by employees from least to greatest
SELECT * FROM companies ORDER BY employees DESC;

--https://www.codewars.com/kata/594a691720ac16a544000075
-- Square Root and Log
  SELECT 
    SQRT(number1) AS root,
    LOG(number2) AS log
  FROM decimals

--https://www.codewars.com/kata/594a6133704e4daf5d00003d/train/sql
-- Easy SQL: Rounding Decimals
SELECT 
  FLOOR(number1) AS number1,
  CEIL(number2) AS number2
FROM decimals


-- https://www.codewars.com/kata/594a50bafd3b7031c1000013/train/sql
-- Easy SQL: Convert to HexaDecimal
SELECT 
  TO_HEX(legs) AS legs,
  TO_HEX(arms) AS arms
FROM monsters;
