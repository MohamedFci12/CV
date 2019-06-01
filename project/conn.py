# -*- coding: utf-8 -*-
"""
Created on Mon Dec  3 19:13:47 2018

@author: abdo
"""
#!/usr/bin/env python3
import psycopg2


#connection between python and database
def query(sqll):
    conn = psycopg2.connect("dbname=news")
    cursor = conn.cursor()
    cursor.execute(sqll)
    results = cursor.fetchall()
    conn.close()
    return results

# query 1: What are the three most popular articles of all time
articles = """select articles.title, count(*) as viewss
            from log, articles
            where log.status='200 OK'
            and articles.slug = substr(log.path, 10)
            group by articles.title
            order by viewss desc
            limit 3;"""
            
#query 2: Who are the most popular article authors of all time
authors = """select authors.name, count(*) as viewss
            from articles, authors, log
            where log.status='200 OK'
            and authors.id = articles.author
            and articles.slug = substr(log.path, 10)
            group by authors.name
            order by viewss desc
            limit 3;
            """
#query 3: On which day did more than 1% of requests lead to errors
errors = """ select to_char(date, 'FMMonth FMDD, YYYY'),
        (err/total) * 100 as ratio
        from (select time::date as date,
        count(*) as total,
        sum((status != '200 OK')::int)::float as err
        from log group by date) as errors
        where err/total > 0.01;
            """
            
# functio print title
def print_title(title):
    print ("\n\t\t" + title + "\n")

# function Print the top three articles of all time
def top_three_articles():
    TopThreeArticles = query(articles)
    print_title("Top 3 articles of all time")
    for title, viewss in TopThreeArticles:
        print(" \"{}\" -- {} views".format(title, viewss))
        
# function Print the top authors of all time
def top_three_authors():
    top_three_authors = query(authors)
    print_title("Top authors of all time")

    for name, viewss in top_three_authors:
        print(" {} -- {} views".format(name, viewss))

# function Print the days in which there were more than 1% bad requests
def high_error_days():
    higherrordays = query(errors)
    print_title("Days with more than one percentage of bad requests")

    i = 1
    res=[]
    for result in higherrordays:
        temp = str(result[0]) + "' -- " + str(round(result[1], 1))
        obj = "\n" + str(i) + " ) '" + temp + " %"
        res.append(obj)
        i += 1
    s=res
    print(s)
    return s

top_three_articles()
top_three_authors()
high_error_days()
       