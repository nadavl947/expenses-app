
-- create users table

CREATE TABLE expenses_users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_id VARCHAR(255) NOT NULL UNIQUE
);

-- insert into users

INSERT INTO expenses_users(first_name, last_name, user_email, user_id) VALUES
 ('nadav', 'levin', 'nadavl947@gmail.com', '116877331765938388136');
 
																											 -- create bills table NOT IN USE
																											 
																											 CREATE TABLE bills(
																												id INT AUTO_INCREMENT PRIMARY KEY,
																												sub_title VARCHAR(255) NOT NULL,
																												amount DECIMAL(7, 2),
																												created_at TIMESTAMP DEFAULT NOW(),
																												bill_date DATE,
																												user_email VARCHAR(255) NOT NULL,
																												FOREIGN KEY(user_email) REFERENCES expenses_users(user_email)
																											 );
																											 
																											 -- insert into bills NOT IN USE
																											 INSERT INTO bills(sub_title, amount, bill_date, user_email) VALUES
																											 ('electricity', 300.50, '2019-06-30', 'nadavl947@gmail.com');
																											 
																											 
																											  -- create groceries table NOT IN USE
																											 
																											 CREATE TABLE groceries(
																												id INT AUTO_INCREMENT PRIMARY KEY,
																												sub_title VARCHAR(255) NOT NULL,
																												amount DECIMAL(7, 2),
																												created_at TIMESTAMP DEFAULT NOW(),
																												groceries_date DATE,
																												user_email VARCHAR(255) NOT NULL,
																												FOREIGN KEY(user_email) REFERENCES expenses_users(user_email)
																											 );
																											 
																											 -- insert into groceries NOT IN USE
																											 INSERT INTO groceries(sub_title, amount, groceries_date, user_email) VALUES
																											 ('diapers', 50.75, '2019-07-10', 'nadavl947@gmail.com');
 
 
 -- create incom table
 CREATE TABLE incomes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    incom_source VARCHAR(200),
    amount DECIMAL(8, 2),
    created_at TIMESTAMP DEFAULT NOW(),
    incom_date DATE,
    color VARCHAR(200),
    user_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY(user_id) REFERENCES expenses_users(user_id)
 );
 
 -- insert into incomes
 INSERT INTO incomes(incom_source, amount, incom_date, color, user_id) VALUES 
 ('nadav salary', 6180.00, '2019-07-01', 'red', '116877331765938388136');
 
 
 -- select data from incomes
 SELECT 
	id, 
    incom_source, 
    amount, 
    DATE_FORMAT(incom_date, '%M %D %Y') As incom_date, 
    color,
    user_id 
    FROM incomes;
 
 -- delete income
 DELETE FROM incomes WHERE id=1;
 
 -- all expenses
 CREATE TABLE all_expenses(
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    sub_title VARCHAR(255) NOT NULL,
    amount DECIMAL(7, 2),
    created_at TIMESTAMP DEFAULT NOW(),
    expense_date DATE,
    user_id VARCHAR(255) NOT NULL,
    table_coler VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES expenses_users(user_id)
 );
 
 
 -- insert a new expenes
 INSERT INTO all_expenses(title, sub_title, amount, expense_date, user_id, table_coler) VALUES
 ('groceries', 'diapers', 50.75, '2019-07-10', '116877331765938388136', 'green'),
 ('bills', 'electricity', 300.50, '2019-06-30', '116877331765938388136', 'red')
 ;
 
 -- select data from expenses table
 SELECT 
	title, 
	sub_title, 
    amount, 
    expense_date, 
    user_id 
 FROM all_expenses WHERE user_id="116877331765938388136" ORDER BY title;
 
 -- select statistic by title
 SELECT 
	title, 
    COUNT(sub_title) AS number_of_items, 
    SUM(amount) as money_from_title, 
    table_coler as color 
FROM all_expenses WHERE user_email= '116877331765938388136' GROUP BY title;

-- delete item from Table
DELETE FROM all_expenses WHERE id=1;
 
 -- delete table
 DELETE FROM all_expenses WHERE title='bills' && user_id='';
 
 
 
 
 