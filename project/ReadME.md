**Udacity Project - Logs _Analysis_**
________________________________________________________________
###### In this project SQL is used to make sense of a request logs table and draw reports on popular news articles.
###### MY task is to create a reporting tool that prints out reports (in plain text) using [psycopg2](http://initd.org/psycopg/docs/usage.html#query-parameters) based on the data in the database. This reporting tool is a Python program using the psycopg2 module to connect to the database.
# So ,what are we reporting, anyway?
###### Here are the questions the reporting tool should answer. The example answers given aren't the right ones, though!
## Install & Run
____________________________________________________________________________

#### To  run this app inside your computer you should follow this instruction install [vagrant](https://www.vagarnt.com) and run
````
vagrant up 
vagrant ssh
````
### inside vm hell go to the synced folde:
```
cd \vagrant
cd project
```
and the download the data 
##### Download the data, [newsdata.zip](https://d17h27t6h515a5.cloudfront.net/topher/2016/August/57b5f748_newsdata/newsdata.zip), and unzip newsdata.sql in the repository root. 
####### And run psql commend to connect and seed database from **newsdata.sql**

Run the  `psql` commands to seed the database from `newsdata.sql`
````
reatedb news       # if news database not created already

````

#####  Open new terminal and run vm again instruction i below it before 
- What are the most popular three articles of all time? Which articles have been          

    accessed the most? Present this information as a sorted list with the most        
	  popular article at the top.

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

 - out put:
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