import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author sid
 */
public class ExpInfo {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql:///chemistry";
    //  Database credentials
    static final String USER = "siddharth";
    static final String PASS = "iiita";

    public String data(String eid) {
        Connection conn = null;
        Statement stmt = null;
        String s = "";
        try {
            //STEP 2: Register JDBC driver
            Class.forName("com.mysql.jdbc.Driver").newInstance();;

            //STEP 3: Open a connection
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            stmt = conn.createStatement();
            String sqlA = "select * from experiment_details where Expid = " + eid;
            ResultSet rs = stmt.executeQuery(sqlA);
            String sql = "";
            if (rs.next()) {
                s += rs.getString("title");
                s += "##@%";
                s += rs.getString("author");
                s += "##@%";
                s += rs.getString("class");
                s += "##@%";
                s += rs.getString("AIM");
                s += "##@%";
                s += rs.getString("MaxMarks");
                s += "##@%";
                s += rs.getString("Instructions");
                s += "##@%";
            }
            rs.close();
            return s;
        } catch (SQLException se) {
            //Handle errors for JDBC
            se.printStackTrace();
            return null;
        } catch (Exception e) {
            //Handle errors for Class.forName
            e.printStackTrace();
            return null;
        } finally {
            //finally block used to close resources
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }//end finally try
        }//end try

    }
}
