-- a script that lists all the cities of California that can be found in the database hbtn_0d_usa
-- The states table contains only one record where name = California (but the id can be different, as per the example)
-- Results must be sorted in ascending order by cities.id
SELECT cities.id, cities.name
FROM cities
WHERE cities.state_id = (SELECT id
			 FROM states
			 WHERE states.name = 'California')
ORDER BY cities.id;
