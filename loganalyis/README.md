Logs Analysis
==============

Project3: Logs Analysis
------------------------

The project consist of 3 main functions as following:
 + function query and print the most popular three articles.
 + function query and print the most popular four article authors.
 + Days where more than 1% of user requests led to errors.

Requirements
------------

+ install[Python 3](https://www.python.org/downloads/).

+ install[install postgresql](https://www.postgresql.org/).

+ install pgAdmin.

query the most popular three articles
-------------------------------------
"select articles.title ,
	  count(*) as num_view
	  from  articles
	  inner join authors
	  on articles.author =authors.id
	  inner join log on
	  log.path = concat('/article/', articles.slug)
	  where log.status ='200 OK'
	  group by articles.title
	  order by num_view desc
	  limit 3"


query the most popular four article authors
-------------------------------------------
"select authors.name ,
	  count(*) as num_view
	  from  authors
	  inner join articles
	  on authors.id=articles.author
	  inner join log on
	  log.path = concat('/article/', articles.slug)
	  where log.status ='200 OK'
	  group by authors.name
	  order by num_view desc
	  limit 4"


query Days where more than 1% of user requests led to errors
------------------------------------------------------------
"create or replace view dataerror as "
		"select substring(cast(log.time as text), 0, 11)
		as date,
		count(log.status) as error
		from log
		where log.status like '%404%'
		group by date" 
		
"create or replace view  alldata as"
		"select substring(cast(log.time as text), 0, 11)
			as date ,
			count(log.status) as all from log
			group by date "
		
"create or replace view final_query as "
		"select alldata.date,"
			"((dataerror.error / alldata.all::float)*100) as all_error"
			"from alldata"
			"inner join dataerror on alldata.date=dataerror.date "
"select date,
			all_error
			from final_query
			where all_error>1"

Usage
-----

+Install the PostgreSQL and take the file newsdata.sql in the folder of BINor (Adjust environment Variables in Path) 

+ Install PgAdmin and Create new DB with name LogAnalysis

+Type the command C:\Program Files\PostgreSQL\9.6\bin>psql -U postgres -d LogAnalysis -a -f newsdata.sql

+database is ready to query

+run python loganalyis.py

