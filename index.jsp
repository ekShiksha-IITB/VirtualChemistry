<%-- 
    Document   : index
    Created on : Jun 27, 2017, 2:06:18 AM
    Author     : sid
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Virtual Chemistry Lab</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  .carousel-caption {
   text-align:center;
    top:90px;
    bottom: auto;
    right:30px;

}

.carousel-caption .label{font-size:50px;}

.quote{
font-size:50px;
padding:120px 0px 50px 0px;

}
a{
  cursor:pointer;
  color:black;
  text-decoration:none;}
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

  </style>
</head>
<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <!--<a class="navbar-brand" href="#">ekshiksha</a>-->
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
        
        <li><a href="#c1">About</a></li>
        <li><a href="#c2">Start here</a></li>
     </ul>
        <ul class="nav navbar-nav navbar-right">
             
        

        <% if (session.getAttribute("username") == null) { %>
            <li><a href="register.jsp">Login/Register</a></li> 
        <% } else {%>
            <li style="color:yellow; margin-top:15px">Welcome : ${username}</li>
            <li style="margin-top:12px">
                <form action="Logout">
                    <input type="submit" value="Logout">
                </form>
            </li>
            
        <% } %>    
            
            
        </ul>
      
    
    </div>
  </div>
</nav>
<div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top:50px">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="vir.jpeg" alt="Image" style="width:32%" height="">
        <div class="carousel-caption">
        <h1><span class="label label-primary">Virtual Chemistry Lab</span></h1>
     
        </div>      
      </div>

      <div class="item">
        <img src="stud.jpg" alt="Image" style="width:39%">
        <div class="carousel-caption">
         <ul style="font-size:22px;color:black;line-height:150%;">
         <li>Effort to move chemistry from labs to computers.</li>
         <li> Animations bringing life to content prepared in textbooks.</li>
         <li>Options to setup, perform and evaluate experiments.</li>
         <li>Enhancing understanding and role of chemistry.</li>
         </ul>

      
        </div>      
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
<div class="container text-center" style="height:100px;width:100%;">
<div class="quote"><sup><i class="fa fa-quote-left"></i></sup>Chemistry is like cooking, just dont lick the spoon.<sup><i class="fa fa-quote-right"></i></sup></div>

</div>

<div class="container text-center" style="height:500px;width:100%;color:white;background-color:rgba(12, 60, 96, 1);margin-top:200px" id="c1">

<h1 style="padding:50px 0px 50px 0px">About</h1>
<div class="row">
<div class="col-sm-6" style="font-size:22px">
The objective of this project is based on the idea that chemistry lab experiments for
class 11th and 12th can be taught using the animation through internet , more efficiently
and less expensively.A lot of government schools (and many private schools also) dont have a
Chemistry lab with well equipped equipments. This
could be due to variety of reasons viz: because of safety, expense of procuring chemicals, lack of knowledge amongst teachers, etc.The idea in this project, is to develop an interactive animations for learning.
</div>
<div class="col-sm-6" style="font-size:22px">
The aim is to illustrate the concepts of Chemistry Lab Experiments of class 11th and 12th(C.B.S.E) through a Virtual Chemistry Lab(VCL) using animations.The VCL will allow students to carry out class 11th and 12th chemistry lab experiments by utilization of standard equipments such as beakers,test tubes, burette with burette stand, flasks,bunsen burner, pipettes,etc. and common chemicals like acids, bases and indicators.The user will be allowed to perform experiments set up by the others or can set up his own experiment. The user is allowed to grade the experiments.
</div>
</div>
</div>
  
<div class="container text-center" style="height:600px;width:100%;background-color:#1FBEA6;margin-top:40px" id="c2">
  <h1 style="padding:20px 0px 50px 0px;color:white">What do you want to do?</h1>
  <div class="row">
    <div class="col-sm-3">
     <a data-toggle="modal" data-target="#myModal5"><p>Setup Experiment</p></a>
     <a data-toggle="modal" data-target="#myModal5"><img src="setup.jpg" class="img-responsive" style="width:100%" alt="Image"></a>
    <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Please fill the details before you proceed...</h4>
      </div>
      <div class="modal-body">
    <form>
  <div class="form-group">
    <input type="text" id="Etitle" class="form-control" placeholder="Title of the experiment" maxlength="150" title="Maximum 150 characters" required>
  </div>
  <div class="form-group">
    <input type="text" id="Eauthor" class="form-control" placeholder="Author" maxlength="50" title="Maximum 50 characters" required>
  </div>
  <div class="form-group">
    <input type="text" id="Eclass" class="form-control" placeholder="Class" maxlength="20" title="Maximum 20 characters"required>
  </div>
  <div class="form-group">
    <input type="text" id="Eaim" class="form-control" placeholder="Aim of the experiment" title="Maximum 500 characters" maxlength="500" required>
  </div>
   <div class="form-group">
    <input type="text" id="Emarks" class="form-control" placeholder="Maximum marks" required>
  </div>
  <div class="form-group">
    <textarea id="Eins" class="form-control" placeholder="Instructions" required></textarea>
  </div>
  
  <button id="superSubmit" type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
   </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
  
  </div>
    <div class="col-sm-3"> 
      <a data-toggle="modal" data-target="#myModal4"><p>Perform Experiment</p></a>
      <a data-toggle="modal" data-target="#myModal4"><img src="perform.jpg" class="img-responsive" style="width:100%" alt="Image"></a>
    </div>
  
     <!--FOR PERFORM-->
  <div class="modal fade" id="myModal4" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">List of Experiments</h4>
        </div>
        <div class="modal-body">
            <div style="height:550px; overflow:scroll;">
            <table class="TableDetails">


            </table>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
      
  <!--myModel5 for Setup-->
  <div class="modal fade" id="myModal5" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Create New Experiments or Edit a previously created one</h4>
        </div>
        <div class="modal-body">
            <div style="height:550px; overflow:scroll;">
            <td><button data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="cccc()" >Create NEW Experiment</button></td>
            <script>
                function cccc(){
                    $('#myModal5').modal('hide');
                }
            </script>
            <br><br>
            <table class="SetupTableDetails">
                <!--<tr><th>Sr.No.</th><th>Experiment Name</th><th>Actions</th></tr>;-->

            <!--BE CAREFUL TABLE ENDING ATTACHED WITH THE AJAX CALL-->
            </table>
            <span class="SetupTableDetailsDiv"></span>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  <!--ends-->
  
  <!--myModel6 for DEMO DDDDDDDDDEEEEEEEEEEEMMMMMMMMMOOOOOOOOOOOO-->
  <div class="modal fade" id="myModal6" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Select Demo to Play and see how Experiment works and how to perform it</h4>
        </div>
        <div class="modal-body">
            <div style="height:550px; overflow:scroll;">

            <table class="DemoTableDetails">
                <!--<tr><th>Sr.No.</th><th>Experiment Name</th><th>Actions</th></tr>;-->

                <!--BE CAREFUL TABLE ENDING ATTACHED WITH THE AJAX CALL-->
            </table>
                
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  <!--ends ===================================-->
  
  
  <!--myModel7 for EVALUATE-->
  
  <div class="modal fade" id="myModal7" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Select to view how others performed the experiments you have setup</h4>
        </div>
        <div class="modal-body">
            <div style="height:550px; overflow:scroll;">

            <table class="EvalTableDetails">
                <!--<tr><th>Sr.No.</th><th>Experiment Name</th><th>Actions</th></tr>;-->

                <!--BE CAREFUL TABLE ENDING ATTACHED WITH THE AJAX CALL-->
            </table>
                
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
  <!--End of Evaluate=========================================-->
  
  

    <div class="col-sm-3"> 
      <a data-toggle="modal" data-target="#myModal6"><p>Demo Experiment</p></a>
      <a data-toggle="modal" data-target="#myModal6"><img src="demo.jpg" class="img-responsive" style="width:100%" alt="Image"></a>

      <!--<a href="demo.jsp"><p>Demo Experiment</p></a>-->
      <!--<a href="demo.jsp"><img src="demo.jpg" class="img-responsive" style="width:100%" alt="Image"></a>-->
    </div>
   <div class="col-sm-3"> 
      <a data-toggle="modal" data-target="#myModal7"><p>Evaluate Experiment</p></a>
      <a data-toggle="modal" data-target="#myModal7"><img src="evaluate.jpg" class="img-responsive" style="width:100%" alt="Image"></a>
<!--      <a href="evaluate.jsp"><p>Evaluate Experiment</p></a>
      <a href="evaluate.jsp"><img src="evaluate.jpg" class="img-responsive" style="width:100%" alt="Image"></a>-->
    </div>
   
  </div>
</div><br>


<footer class="container-fluid text-center">
<h3>Share us@
  <a href="https://www.facebook.com/facebook"><i class="fa fa-facebook"></i></a>   
  <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram"></i></a>
  <a href="https://mobile.twitter.com/i/guest"><i class="fa fa-twitter"></i></a>  
</h3>   
</footer>

<script type="text/javascript">
//    var id = prompt("Enter User Id");
//    var id = session.getAttribute("currentSessionUser");
//    var id = null;
    document.getElementById('superSubmit').addEventListener('click',function(){
        console.log("IN SuperSumbit");
        if(document.getElementById("Etitle").value!="" && document.getElementById("Eauthor").value!="" && document.getElementById("Eclass").value!="" &&document.getElementById("Eaim").value!="" &&document.getElementById("Emarks").value!="" &&document.getElementById("Eins").value!=""){
            var Etitle = document.getElementById("Etitle").value;
            var Eauthor = document.getElementById("Eauthor").value;
            var Eclass = document.getElementById("Eclass").value;
            var Eaim = document.getElementById("Eaim").value;
            var Emarks = document.getElementById("Emarks").value;
            var Eins = document.getElementById("Eins").value;
//            console.log( "hi89898989" + Etitle + Eins);
            //haveFun(id,"setup",Etitle,Eauthor,Eclass,Eaim,Emarks,Eins);
             <% if ( session.getAttribute("currentSessionUser")==null ) { %>
//                response.sendRedirect("register.jsp");
                  window.location.href = 'register.jsp';
            <% } else {%>
                var setSetupVal = function() {
//                    session.setAttribute("title",Etitle);
//                    session.setAttribute("way","setup");
//                    session.setAttribute("author",Eauthor);
//                    session.setAttribute("Eclass",Eclass);
//                    session.setAttribute("aim",Eaim);
//                    session.setAttribute("marks",Emarks);
//                    session.setAttribute("ins",Eins);
                    console.log("STUCKED-SETUP");
                    $.ajax({
                        type: "POST",
                        url: "SetSetupVal",
                        data:{
                              'title':Etitle,
                              'way':"setup",
                              'author':Eauthor,
                              'Eclass':Eclass,
                              'aim':Eaim,
                              'marks':Emarks,
                              'ins':Eins,
                        },
                        async: false,
                        success: function(response) {
                            console.log(response);
                            window.location.href = 'perform.jsp';
                        },
                        error : function(){
                            alert("error in index");
                        }
                    });
                }();

            <% } %>

        }
    });
    console.log("IN===");
    
        <% if(session.getAttribute("currentSessionUser")!=null){ %>
            var ExperimentSetupEditList = function() {
            var EdataS;
            var num1 = 1;
            var UID1 = '<%= session.getAttribute("currentSessionUser") %>';
            $.ajax({

                    method: "GET",
                    url: "GetSetupEdit?uid=" + UID1,
//                        dataType: "HTML",
//                        data : {
//                            'uid' : UID1,
//                        },
//                        async: false,
                    success: function(response) {
                        console.log(response);
                        console.log(response==0);
                        if(response!=0){
                            EdataS = response.split(",");
                            displayS = "<tr><th>Sr.No.</th><th>Experiment Name</th><th>Actions</th></tr>";
                            for (var i = 0;i<EdataS.length-1;i+=2){
                                displayS += "<tr>";
                                displayS += "<td>" + num1 + "</td>";num1++;
                                displayS += "<td>" + EdataS[i] + "</td>";
                                displayS += "<td><button class =\"btn btn-primary\"  onclick=\"EditSub( "+ EdataS[i+1] + " )\"  >" + "Edit" + "</button></td>";
                                displayS += "</tr>";
                            }
                            console.log(displayS);
                            $(".SetupTableDetails").html(displayS);
                        }
                        else{
                            displayS1 = "<p style=\"color:red\"> No Previously created Experiment </p>";
                            $(".SetupTableDetailsDiv").html(displayS1);
                        }
                    },
                    error : function(){
                              alert("Error Occured");
                    }
                });
        /* response will be saved to data_obj*/
            }();
        <%  }else{ %>
            displayS2 = "<p style=\"color:red\"> No Previously created Experiment </p>";
            $(".SetupTableDetailsDiv").html(displayS2);
        <% } %>
    
    var ExperimentList = function() {
        //console.log("Retriving");
            var Edata;
            var num = 1;
            $.ajax({

                    method: "GET",
                    url: "GetExperimentDetails",
                    dataType: "HTML",               
                    //async: false,
                    success: function(response) {
                       console.log(response);
                        Edata = response.split(",");
                        display = "<tr><th>Sr.No.</th><th>Experiment Name</th><th>Actions</th></tr>";
                        for (var i = 0;i<Edata.length-1;i+=2){
                            display += "<tr>";
                            display += "<td>" + num + "</td>";num++;
                            display += "<td>" + Edata[i] + "</td>";
                            display += "<td><button class=\"btn btn-primary\" onclick=\"performSub( "+ Edata[i+1] + ",\'" + Edata[i] +"\' )\" >" + "Perform" + "</button></td>";
                            display += "</tr>";
                        }
                        console.log(display);
                        $(".TableDetails").html(display);
                    },
                    error : function(){
                              alert("Error Occured");
                    }
        });
        /* response will be saved to data_obj*/
    }();
    
    function performSub(eid,tit){
        console.log(eid);
        console.log(tit);
        <% if ( session.getAttribute("currentSessionUser")==null ) { %> 
//            response.sendRedirect("register.jsp");
            window.location.href = 'register.jsp';
        <% } else {%>
            var setVal = function() {
                console.log("STUCKED");
                $.ajax({
                    type: "POST",
                    url: "SetSend",
                    data:{
//                          'title':tit,
                          'way':"perform",
                          'eid':eid
                    },
                    async: false,
                    success: function(response) {
                        console.log(response);
                        window.location.href = 'perform.jsp';
                    },
                    error : function(){
                        alert("Error in setVal");
                    }
                });
            }();
//                response.sendRedirect("perform.jsp");
        <% } %>
//        if(fl==1)
//        window.location.href = 'perform.jsp';
//        window.location.href = 'perform.jsp?uid='+id+'&way='+"perform"+'&eid='+eid+'&title='+tit;
        console.log("end "+eid);
    }
    
    var DemoList = function() {
        //console.log("Retriving");
            var EdataD;
            var num = 1;
            $.ajax({

                    method: "GET",
                    url: "GetDemoDetails",
                    dataType: "HTML",               
                    //async: false,
                    success: function(response) {
                       console.log(response);
                       console.log("=======================================================================");
                        EdataD = response.split(",");
                        displayD = "<tr><th>Sr.No.</th><th>Experiment Name</th><th>Actions</th></tr>";
                        for (var i = 0;i<EdataD.length-1;i+=3){
                            displayD += "<tr>";
                            displayD += "<td>" + num + "</td>";num++;
                            displayD += "<td>" + EdataD[i] + "</td>";
                            displayD += "<td><button class=\"btn btn-primary\" onclick=\"demoSub( \'"+ EdataD[i] +"\'," + EdataD[i+1] + "," + EdataD[i+2] + " )\"  >" + "View Demo" + "</button></td>";
                            displayD += "</tr>";
                        }
                        console.log(displayD);
                        $(".DemoTableDetails").html(displayD);
                    },
                    error : function(){
                              alert("Error Occured");
                    }
        });
        /* response will be saved to data_obj*/
    }();
    
     function demoSub(tit,Deid,Duid){
        console.log(Deid);
//        console.log(tit);
        console.log(Duid);
        var setVal1 = function() {
            console.log("Working on Demo button");
            $.ajax({
                type: "POST",
                url: "demoSend",
                data:{
                      'uid':Duid,
                      'way':"perform",
                      'eid':Deid
                },
                async: false,
                success: function(response) {
                    console.log(response);
                    window.location.href = 'demo.jsp';
                },
                error : function(){
                    alert("Error in setVal");
                }
            });
        }();
    }
    
    function EditSub(eid){
        console.log(eid);
        <% if ( session.getAttribute("currentSessionUser")==null ) { %> 
//            response.sendRedirect("register.jsp");
            window.location.href = 'register.jsp';
        <% } else {%>
            var setEditVal = function() {
                console.log("STUCKED-EDIT");
                $.ajax({
                    type: "POST",
                    url: "SetSend",
                    data:{
//                          'title':tit,
                          'way':"edit",
                          'eid':eid
                    },
                    async: false,
                    success: function(response) {
                        console.log(response);
                        window.location.href = 'perform.jsp';
                    },
                    error : function(){
                        alert("Error in setEditVal");
                    }
                });
            }();
            
        <% } %>
            
        console.log("edit "+eid);
    }
    
    
    var EvaluateList = function() {
        //console.log("Retriving");
            var uuid1 = '<%= session.getAttribute("currentSessionUser") %>';
            console.log("hohohohohohohoohohoho");
            console.log(uuid1);
            var EdataE;
            var num = 1;
            $.ajax({
                    method: "GET",
                    url: "GetEvalDetails?uidS="+uuid1,
                    async: false,
                    success: function(response) {
                       console.log(response);
                       console.log(response.length);
                       console.log("Thats the fucking shit");
                       console.log("=======================================================================");
                        EdataE = response.split(",");
                        displayE = "<tr><th>Sr.No.</th><th>Experiment Name</th><th>UserName</th><th>Actions</th></tr>";
                        for (var i = 0;i<EdataE.length-1;i+=4){
                            displayE += "<tr>";
                            displayE += "<td>" + num + "</td>";num++;
                            displayE += "<td>" + EdataE[i] + "</td>";
                            displayE += "<td>" + EdataE[i+1] + "</td>";
                            displayE += "<td><button class=\"btn btn-primary\" onclick=\"demoSub( \'"+ EdataE[i] +"\'," + EdataE[i+3] + "," + EdataE[i+2] + " )\"  >" + "View Conduct" + "</button></td>";
                            displayE += "</tr>";
                        }
                        console.log(displayE);
                        $(".EvalTableDetails").html(displayE);
                    },
                    error : function(){
                              alert("Error Occured");
                    }
        });
        /* response will be saved to data_obj*/
    }();
</script>


</body>
</html>