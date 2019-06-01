Logs analysis project
(Document)

Makeing a summary for logs project by using sql database queries. Interacting with a database both from the command line and from the python code. This project is a part of the Udacity's Full Stack Web Developer Nanodegree (NTL).
-Project requirement:-
1. What are the most popular three articles of all time?
2. Who are the most popular article authors of all time?
3. On which days did more than 1% of requests lead to errors?

-System setup:-
This project use virtual machine (VM) configuration which includes all of the necessary software to run the application.We must:-
1. Download Vagrant and install.
2. Download Virtual Box and install.
3. Use Clone command to clone this repository to a directory.
4. Download the newsdata.sql and newsdata.py files from the respository and move them to your vagrant directory .

-Follow this steps to run vagrant VM and load data from newsdata :
1. vagrant up to start up the VM.
2. vagrant ssh to log into the VM.
3. cd /vagrant to change to your vagrant directory.
4. psql -d news -f newsdata.sql to load the data and create the tables.
5. python3 newsdata.py to run the reporting tool.

-Technologies used:-
1. Use Linux virtual machine (VM) Vagrant.
2. PostgreSQL for database used into project.
3. Writing Python code and connect database to python.

-Resourses :-
• PEP 8 -- Style Guide for Python Code
• PostgreSQL 9.5 Documentation
• Vagrant
• VirtualBox

 -out put :-
The reporting tool will answer the following questions
(1) What are the most popular three articles of all time? Which articles have been accessed the most? Present this information as a sorted list with the most popular article at the top
Example:
Top 3 articles of all time
"Candidate is jerk, alleges rival" -- 338647 views
"Bears love berries, alleges bear" -- 253801 views
"Bad things gone, say good people" -- 170098 views
(2) Who are the most popular article authors of all time? That is, when you sum up all of the articles each author has written, which authors get the most page views? Present this as a sorted list with the most popular author at the top.*
Top authors of all time
Ursula La Multa -- 507594 views
Rudolf von Treppenwitz -- 423457 views
Anonymous Contributor -- 170098 views
(3) On which days did more than 1% of requests lead to errors? The log table includes a column status that indicates the HTTP status code that the news site sent to the user's browser.
Example: (‘2016-07-017’ , ‘2.26% errors’)