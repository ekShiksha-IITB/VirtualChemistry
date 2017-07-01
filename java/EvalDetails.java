import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
/**
 *
 * @author sid
 */
public class EvalDetails {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql:///chemistry";
	//  Database credentials
	static final String USER = "siddharth";
	static final String PASS = "iiita";

	public String data(String uid) {
		Connection conn = null;
		Statement stmt = null;
		String s = "";
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();;
			conn = DriverManager.getConnection(DB_URL, USER, PASS);
			stmt = conn.createStatement();
			String sqlA = "select distinct Expid from experiment_data where Uid=" + uid + " and way= " + "'setup'";
			ResultSet rs = stmt.executeQuery(sqlA);

			while (rs.next()) {

				String eid = rs.getString("Expid");
				String sqlB = "select * from experiment_data where Expid = " + eid + " and way='perform' and Uid <> " + uid;
				Statement stmt1 = conn.createStatement();
				ResultSet rss = stmt1.executeQuery(sqlB);
//                        throw new java.lang.RuntimeException(sqlB);
				String PUid = "";
				String ExpName = "";
				String UName = "";
				while (rss.next()) {
					PUid = rss.getString("Uid");
					String sqlC = "select * from experiment_details where Expid = " + eid;
					Statement stmt2 = conn.createStatement();
					ResultSet rss2 = stmt2.executeQuery(sqlC);
					if (rss2.next()) {
						ExpName = rss2.getString("title");
					}
					String sqlD = "select * from users where Uid = " + PUid;
					Statement stmt3 = conn.createStatement();
					ResultSet rss3 = stmt3.executeQuery(sqlD);
					if (rss3.next()) {
						UName = rss3.getString("username");
					}
					s += ExpName;
					s += ",";
					s += UName;
					s += ",";
					s += PUid;
					s += ",";
					s += eid;
					s += ",";

				}
//                        rss.close();

			}

			//s=s.substring(0, s.length()-1);
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
