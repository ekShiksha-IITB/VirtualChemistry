import java.sql.*;

/**
 *
 * @author sid
 */
public class HelloWorld {
  // JDBC driver name and database URL
  static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
  //static final String DB_URL = "jdbc:mysql://localhost:3306/server";
  static final String DB_URL = "jdbc:mysql:///chemistry";
  //  Database credentials
  static final String USER = "siddharth";
  static final String PASS = "iiita";

  public String data() {
    Connection conn = null;
    Statement stmt = null;
    // REsult set for Acids
    String re = "empty";
    // REsult set for Bases
    String reB = "empty";
    String reN = "empty";
    try {
      //STEP 2: Register JDBC driver
      Class.forName("com.mysql.jdbc.Driver");
      // conn = DriverManager.getConnection("jdbc:mysql:///chemistry", "siddharth", "iiita");
      //Class.forName("com.mysql.jdbc.Driver").newInstance();;

      //STEP 3: Open a connection
      conn = DriverManager.getConnection(DB_URL, USER, PASS);
      stmt = conn.createStatement();

      String sql = "SELECT name,nature FROM `chemicals`";
      ResultSet rs = stmt.executeQuery(sql);
      //int flag = 0;
      while (rs.next()) {
        //String first = rs.getString("Category");
        String first = rs.getString("name");
        String sec = rs.getString("nature");
        if (sec.equalsIgnoreCase("Acid")) {
          if (re == "empty") {
            re = "Acid,";
            re += first;
          } else {
            re += "," + first;
          }
        } else if (sec.equalsIgnoreCase("Base")) {
          if (reB == "empty") {
            reB = "Base,";
            reB += first;
          } else {
            reB += "," + first;
          }
        } else if (sec.equalsIgnoreCase("Neutral")) {
          if (reN == "empty") {
            reN = "Neutral,";
            reN += first;
          } else {
            reN += "," + first;
          }
        }
        //re+=","+first;
      }
      rs.close();
      return (re + "," + reB + "," + reN);
      //======================================================================================================
      /*
      if(category.equals("")&&object.equals(""))
      {
        String sql = "SELECT DISTINCT Category FROM `category-object`";
          ResultSet rs = stmt.executeQuery(sql);
        if(rs.next())
        {
          String first = rs.getString("Category");
          re+= first;
        }
            while(rs.next()){
               String first = rs.getString("Category");
               re+=","+first;
            }
            rs.close();
      }
      else if(object.equals(""))
      {
        String sql = "SELECT Object FROM `category-object`  WHERE Category='"+category+"'";
      ResultSet rs = stmt.executeQuery(sql);
      if(rs.next())
      {
        String first = rs.getString("object");
        re+= first;
      }
          while(rs.next()){
             String first = rs.getString("object");
             re+=","+first;
          }

          rs.close();
      }
      else if(category.equals(""))
      {
        String sql = "SELECT atrr FROM `object-list` WHERE object='" +object+"'";
              ResultSet rs = stmt.executeQuery(sql);
              if(rs.next())
              {
                String first = rs.getString("atrr");
                re+= first;
              }
                  while(rs.next()){
                     String first = rs.getString("atrr");
                     re+=","+first;
                  }

                  rs.close();
      }
      */
      //=========================================================================================================

      //STEP 5: Extract data from result set


    } catch (SQLException se) {
      //Handle errors for JDBC
      se.printStackTrace();
      return "";
    } catch (Exception e) {
      //Handle errors for Class.forName
      e.printStackTrace();
      return "";
    } finally {
      //finally block used to close resources
      try {
        if (conn != null)
          conn.close();
      } catch (SQLException se) {
        se.printStackTrace();
      }//end finally try
    }//end try
  }//end data fn
}//end JDBCExample