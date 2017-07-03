import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author sid
 */
@WebServlet(urlPatterns = {"/FetchRC"})
public class FetchRC extends HttpServlet {

    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql:///chemistry";
    //  Database credentials
    static final String USER = "siddharth";
    static final String PASS = "iiita";
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String x = data();
            out.println(x);
        }
    }

    public String data() {
        Connection conn = null;
        Statement stmt = null;
        String s = "";
        try {
            //STEP 2: Register JDBC driver
            Class.forName("com.mysql.jdbc.Driver").newInstance();;

            //STEP 3: Open a connection
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            stmt = conn.createStatement();
            String sqlA = "SELECT * FROM chemicals";
            ResultSet rs = stmt.executeQuery(sqlA);
            int i = 0;
            while (rs.next()) {
                i++;
                s += rs.getString("name");
                s += ',';
                s += rs.getString("nature");
                s += ',';
                s += rs.getString("chemFormula");
                s += ',';
                s += rs.getString("color");
                s += ',';
                s += rs.getString("states");
                s += ',';
                s += rs.getString("odour");
                s += ',';
                s += rs.getString("nfactor");
                s += ',';
                s += rs.getString("density");
                s += ',';
                s += rs.getString("molarMass");
                s += ',';
                s += rs.getString("colorInWater");
                s += ',';
            }
            String s1 = Integer.toString(i) + ',' + s;
            rs.close();
            return s1;
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

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
