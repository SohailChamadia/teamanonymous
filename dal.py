import pyodbc
from sqlalchemy import create_engine
import urllib
import pandas as pd

def update_approval(emp_id, approval):
    try:
        conn_string = """Driver={ODBC Driver 17 for SQL Server};Server=skillenza.database.windows.net,1433;
                        Database=skillenza;Uid=anonymous@skillenza;Pwd=test_user123;Encrypt=yes;TrustServerCertificate=no;
                        Connection Timeout=30;"""
        conn = pyodbc.connect(conn_string)
        
        cursor = conn.cursor()
        cursor.execute("UPDATE treatment_details SET approval_status = ? WHERE emp_id = ?", approval, emp_id)

        cursor.commit()
        cursor.close()
        conn.close()

    except Exception as e:
        raise e

def get_approval_list():
    try:
        conn_string = """Driver={ODBC Driver 17 for SQL Server};Server=skillenza.database.windows.net,1433;
                        Database=skillenza;Uid=anonymous@skillenza;Pwd=test_user123;Encrypt=yes;TrustServerCertificate=no;
                        Connection Timeout=30;"""
        conn = pyodbc.connect(conn_string)
        
        df = pd.read_sql("SELECT * FROM treatment_details", conn)

        conn.close()

        return df

    except Exception as e:
        raise e


def insert_treatment(emp_id, emp_name, treatment):
    try:
        conn_string = """Driver={ODBC Driver 17 for SQL Server};Server=skillenza.database.windows.net,1433;
                        Database=skillenza;Uid=anonymous@skillenza;Pwd=test_user123;Encrypt=yes;TrustServerCertificate=no;
                        Connection Timeout=30;"""
        conn = pyodbc.connect(conn_string)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO treatment_details (emp_id, emp_name, treatment, approval_status) VALUES (?,?,?,'pending')", emp_id, emp_name, treatment)

        cursor.commit()
        cursor.close()
        conn.close()

    except Exception as e:
        raise e

def insert_emp(df):
    try:
        conn_string = """Driver={ODBC Driver 17 for SQL Server};Server=skillenza.database.windows.net,1433;
                        Database=skillenza;Uid=anonymous@skillenza;Pwd=test_user123;Encrypt=yes;TrustServerCertificate=no;
                        Connection Timeout=30;"""

        params = urllib.parse.quote_plus(conn_string)
        engine = create_engine('mssql+pyodbc:///?odbc_connect=%s' % params)

        df.to_sql('emp_details', con=engine, if_exists='append', index =False)

        engine.dispose()
    except Exception as e:
        raise e
    

