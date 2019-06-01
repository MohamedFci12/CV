#!/usr/bin/python


#database details
hostname = 'localhost'
username = 'postgres'
password = 'sakr'
database = 'loganalyis'


# function query and print the most popular three articles
def doQuery1( conn ) :
    cur = conn.cursor()
    cur.execute( '''select articles.title ,
                      count(*) as num_view
                      from  articles
                      inner join authors
                      on articles.author =authors.id
                      inner join log on
                      log.path = concat('/article/', articles.slug)
                      where log.status ='200 OK'
                      group by articles.title
                      order by num_view desc
                      limit 3''')

    views = cur.fetchall()
    print("")
    print("query one the most popular three articles: ")
    for view in views:
        print(view)
    conn.commit()


# function query and print the most popular four article authors
def doQuery2( conn ) :
    cur = conn.cursor()
    cur.execute( '''select authors.name ,
                      count(*) as num_view
                      from  authors
                      inner join articles
                      on authors.id=articles.author
                      inner join log on
                      log.path = concat('/article/', articles.slug)
                      where log.status ='200 OK'
                      group by authors.name
                      order by num_view desc
                      limit 4''' )

    views = cur.fetchall()
    print("")
    print("query tow the most popular four article authors: ")
    for view in views:
        print(view)
    conn.commit()


# function query and print three the days which have more than 1% percentage errors
def doQuery3( conn ) :
    cur = conn.cursor()

    cur.execute('''create or replace view dataerror as
                      select substring(cast(log.time as text), 0, 11)
                      as date,
                      count(log.status) as error
                      from log
                      where log.status like '%404%'
                      group by date '''
                   )
    cur.execute('''create or replace view  alldata as
                select substring(cast(log.time as text), 0, 11)
                as date ,
                count(log.status) as all from log
                group by date '''
                   )
    cur.execute('''create or replace view final_query as
                select alldata.date,
                ((dataerror.error / alldata.all::float)*100) as
                all_error
                from alldata
                inner join dataerror on alldata.date=dataerror.date '''
                   )

    cur.execute(''' select date,
                all_error
                from final_query
                where all_error>1'''
                   )
    view1 = cur.fetchall()
    print("")
    print("query three the days which have more than 1% percentage errors: ")
    print(view1)
    conn.commit()


# connect to database
print ("connect to database…")
import psycopg2
myConnection = psycopg2.connect( host=hostname, user=username, password=password, dbname=database )
doQuery1( myConnection )
doQuery2( myConnection )
doQuery3( myConnection )
myConnection.close()


