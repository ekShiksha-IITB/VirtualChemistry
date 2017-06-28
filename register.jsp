<%-- 
    Document   : register
    Created on : Jun 27, 2017, 2:06:18 AM
    Author     : sid
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
        if(session.getAttribute("currentSessionUser")!=null){
            response.sendRedirect("index.jsp");
        }    
%>
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
.form-control{width:500px;}

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
      <a class="navbar-brand" href="#">ekshiksha</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
        
        <li><a href="#c1">About</a></li>
        <li><a href="#c2">Start here</a></li>
        <li><a href="register.html">Login/Register</a></li>
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
         <li>Animations bringing life to content prepared in textbooks.</li>
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

<div style="padding:50px 50px 50px 50px">
<div class="row">

<div class="col-sm-6" style="padding:30px">
<form action="Login" class="form-horizontal" style="background-color: #F7F7F7;padding:30px 30px 30px 30px">
<h2>LOGIN</h2>
<h4><div style="color: #FF0000;">${errorMessage}</div></h4>
<input type="text" name="uname" id="UserId" class="form-control" placeholder="Enter user id" required><br>
<input type="password" name="pass" id="UserPass" class="form-control"  placeholder="Enter password" required><br>
<input type="checkbox">Remember me <br><br>
<button formmethod="post" class="btn btn-primary" >Login</button>
</form>
</div>

<div class="col-sm-6" style="padding:30px">
<form action="Register" class="form-horizontal" style="background-color: #F7F7F7;padding:30px 30px 30px 30px">
<h2>Create your account</h2>
<input type="text" name="unameR" class="form-control" placeholder="Userename" required><br>
<input type="password" name="passR" class="form-control" placeholder="Password" required><br>
<input type="password" name="pass1R" class="form-control"  placeholder="Password confirm" required><br>
<input type="email" name="emailR" class="form-control" placeholder="Email" required><br>
<h4><div style="color: #FF0000;">${errorMessageR}</div></h4>
<h4><div style="color: #27AE60;">${SuccessR}</div></h4>
<button formmethod="post" class="btn btn-primary">Register</button>
</form>
</div>

</div>
</div>
    
<!--<script type="text/javascript">
    document.getElementById('LoginButt').addEventListener('click',function(){
        console.log("FROM LOGINBUTT");
        if(document.getElementById("").value!="" && document.getElementById("Eauthor").value!="" && document.getElementById("Eclass").value!="" &&document.getElementById("Eaim").value!="" &&document.getElementById("Emarks").value!="" &&document.getElementById("Eins").value!=""){
            var Etitle = document.getElementById("Etitle").value;
            var Eauthor = document.getElementById("Eauthor").value;
            var Eclass = document.getElementById("Eclass").value;
            var Eaim = document.getElementById("Eaim").value;
            var Emarks = document.getElementById("Emarks").value;
            var Eins = document.getElementById("Eins").value;
            console.log( "hi89898989" + Etitle + Eins);
            //haveFun(id,"setup",Etitle,Eauthor,Eclass,Eaim,Emarks,Eins);
            window.location.href = 'perform.html?title='+Etitle+'&author='+Eauthor+'&Eclass='+Eclass+'&aim='+Eaim+'&marks='+Emarks+'&ins='+Eins+'&uid='+id+'&way='+"setup";
        }
    });

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
        window.location.href = 'perform.html?uid='+id+'&way='+"perform"+'&eid='+eid+'&title='+tit;
        console.log(eid);
    }
</script>-->
</body>
</html>