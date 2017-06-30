
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author sid
 */
public class ChemDetails {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql:///chemistry";
    //  Database credentials
    static final String USER = "siddharth";
    static final String PASS = "iiita";

    public String data(String name) {
        Connection conn = null;
        Statement stmt = null;
        String s = "";
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();;
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            stmt = conn.createStatement();
            String sqlA = "select * from chemicals where `name` = '" + name + "'";
            ResultSet rs = stmt.executeQuery(sqlA);
            if (rs.next()) {
                s += rs.getString("color");
                s += ",";
                s += rs.getString("nature");
                s += ",";
                s += rs.getString("nfactor");
                s += ",";
                s += rs.getString("chemFormula");
                s += ",";
                s += rs.getString("density");
                s += ",";
                s += rs.getString("molarMass");
                s += ",";
                s += rs.getString("colorInWater");
                s += ",";
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
