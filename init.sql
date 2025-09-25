CREATE USER exercise_user WITH PASSWORD 'exercise_password';
GRANT ALL PRIVILEGES ON DATABASE exercise_tracker TO exercise_user;
ALTER USER exercise_user CREATEDB;

