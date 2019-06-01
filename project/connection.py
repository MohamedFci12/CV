#!/user/env/bin  python3
from datetime import datetime
import psycopg2
def articel():
   try:
     Connection = psycopg2.connect(database="news")
     C  = Connection.cursor()
   except KeyboardInterrupt :
        print("press^c,error data not found ")
   query = """         select articles.title ,count(log.status) as v
                       from articles join log
                       on log.status='200 OK'
                       and articles.slug = substr(log.path, 10)
                       group by articles.title
                       order by v desc
                       limit 3;
                  """
   C.execute(query)
   res = C.fetchall()
   print("Most Popular articles:")
   for row in res:
       print(row[0] +"--"+ str(row[1])+ " views")    
   Connection.close()
    
articel()
#this function for author 
def Author():
    db = psycopg2.connect(database="news")
    try:
     C = db.cursor()
    except:
        print("data not found ")
    query = """        select authors.name ,count(articles.slug) as s 
                       from (authors join  articles
                       on authors.id = articles.author)
                       join log 
                       on articles.slug = substr(log.path, 10)
                       group by authors.name
                       order by s desc
                       limit 4;
                       
            """
    C.execute(query)
    res2 =  C.fetchall()
    print("Top 4 author are :-")
    #row[0] to return the first column && row[1] to return the second column
    num = 1
    for row in res2:
        print(str(num) + "-" + row[0] + "-" + str(row[1]) + " View")
        num += 1
    db.close()   
Author()
#on which days make 1% requests
def http_error():
     connection_code = psycopg2.connect(database="news")
     try:
       C = connection_code.cursor()
     except:
        print("data not found")
        
     quer = """   select date, total, client_error, (client_error*100 / total) as error_percent
                    from log_daily_status
                    where (client_error*100.0 / total) > 1.0
                    order by error_percent desc;

                """
     #select days more than 1% client error
   
     C.execute(quer)
    # C.execute(quer2)
     res =  C.fetchall()
     print("error percentage : ")
     for row in res:
        print(row[0].strftime('%B%d,%Y') + "-" + str(row[3]) + "%" + "errors")
     connection_code.close()   
http_error()

