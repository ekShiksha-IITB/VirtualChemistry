<!DOCTYPE html>
<html lang="en">
    <%
        if(session.getAttribute("currentSessionUser")==null){
            response.sendRedirect("register.jsp");
        }
    
    %>
<head>
  <title>ekshikhsha</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <script type="text/javascript" src="libs/three.js"></script>
    <script type="text/javascript" src="Objects/Objects.js"></script>
    <script type="text/javascript" src="Objects/Interactions.js"></script>    
    <script type="text/javascript" src="libs/ThreeBSP.js"></script>
    <script src="libs/OrbitControls.js"></script>  
    <script src="libs/DragControls.js"></script>
    <script src="libs/threex.dynamictexture.js"></script>
    <script src="libs/TrackballControls.js"></script>
    <script src="Objects/Chemicals.js"></script>
    <script src="libs/decimal.js"></script>
    <script src="Objects/fetch.js"></script>
    <script type="text/javascript" src="Objects/backend.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Add a gray background color and some padding to the footer */
    .footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
    
    .jumbotron{
    background-image:url("chem.jpg");
    }
    .largebox{
      width:1300px;
      height:900px;
      top:-20px;
      margin-left:-80px;
       position:relative;
        border:1px solid black;
        border-radius:3px;
        margin-top:50px;
        background-color:#343436;
         box-shadow: 2px 2px 4px black;

        }
      .largebox2{
      width:400px;
      height:300px;
      border:1px solid black;
      border-radius:3px;
      margin-left:75px;
      margin-top:80px;
      background-color:white;
      box-shadow: 2px 2px 4px black;
    
      }
      #canvas1{
      border:1px solid black;
      margin-left:75px;
      margin-top:20px;
      border-radius:3px;
      background-color:white;
       box-shadow: 2px 2px 4px black;

      }
      #selectbox{
      width:200px;
      height:30px;
      margin-left:100px;
      margin-top:10px;
      }
      #canvas2{
      border:1px solid black;
      border-radius:3px;
      position:relative;
      top:-728px;
      margin-left:520px;
      background-color:white;
       box-shadow: 2px 2px 4px black;

      }
      
       #selectbox2{
      width:200px;
      height:30px;
      margin-left:10px;
      margin-top:10px;
      }
      #add{
      margin-left:348px;
      margin-bottom:-104px;
     
      }
    .equip{
    width:650px;
    height:50px;
    background-color:white;
   text-align:center;
   border-radius:4px;

    float:right;
    margin-left:40px;
    }
    .objects{
      width:20px;
      height:20px;
border: 1px solid #ddd;
    border-radius: 4px;

    }
    .active {
  background-color: green !important;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  #dtext{
    position: absolute;
    color:red;
    font-size: 150%;
    font-family: "Times New Roman", Times, serif;
}
  .EQInf{
    width:300px;height:150px;margin-left:auto;
    background:#7f7f7f;
    background:rgba(255,255,255,0);
    /*opacity: 0;*/
    /*overflow:scroll;*/
    top:50px;
  }
    
  a{cursor:pointer;}
  #overlay{
  position:fixed;
  width:30%;
  height:30%;
  margin-top:100px;
  right:0;
  
  background-color:rgba(0,0,0,0.5);
  z-index:2;

  }

  .overlay {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: rgb(0,0,0);
      overflow-x: hidden;
      transition: 0.5s;
  }

  .overlay-content {
      position: relative;
      top: 10%;
      width: 100%;
      text-align: center;
      margin-top: 30px;
      color:white;
  }
  .overlay .closebtn {
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 60px;
  }
  </style>
</head>
<body>

<nav class="navbar navbar-fixed-top" style="background-color:black;">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
     <a href="#" class="navbar-brand" style="color:white">ekshiksha</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li ><a href="#" style="color:white">Home</a></li>
        <li><a href="#" style="color:white">About</a></li>
        <li><a href="#" style="color:white">Join us</a></li>

<li><select id="selectbox2" class="hifi">
  <!-- <option selected hidden>Choose chemicals</option>
  <optgroup label="Acids">
  <option value="#consumer_goods">Hydrochloric acid</option>
  <option value="#consumer_goods">Sulphuric acid</option>
  <option value="#consumer_goods">Phosphoric acid</option>
  <optgroup label="Bases">
  <option value="#consumer_goods">Sodium Hydroxide</option>
  <option value="#consumer_goods">Ammonium Hydroxide</option>
  <optgroup label="Indicators">
  <option>Methyl orange</option>
  <option>Phenolphthalein</option>
  <option>Red litmus</option>
  <option>Blue litmus</option> -->
    
</select></li>
<li>
<div class="btn btn-group">
<button class="btn btn-primary" id='Save'>Save</button>
<button class="btn btn-primary" id='Restore'>Restore</button>
<button class="btn btn-primary" id='NewTable'>New table</button>

</div>
</li>
<li><button class="btn btn-primary" style="margin-top:8px" id="Undo" onclick="UndoButt()"><i class="fa fa-undo"></i></button></li>
<li><button class="btn btn-default" onclick="changeState(0)" id='b0' style="margin-top:8px;margin-left:10px;"><i class="glyphicon glyphicon-hand-up"></i></button></li>    
    <li>
    <div class="btn btn-group">
    <button class="btn btn-default" id='b1'  onclick="changeState(1)" title="Bottle"><img class="objects" src="Photos/bottle.jpeg" ></button>
    <button class="btn btn-default" id='b2'  onclick="changeState(2)" title="Beaker"><img class="objects" src="Photos/beaker.jpg" ></button>
    <button class="btn btn-default" id='b3'  onclick="changeState(3)" title="Flask"><img class="objects" src="Photos/flask.jpg" ></button>
    <button class="btn btn-default" id='b4'  onclick="changeState(4)" title="Test tube"><img class="objects" src="Photos/testtube.jpg" ></button>
    <button class="btn btn-default" id='b5'  onclick="changeState(5)" title="Burette"><img class="objects" src="Photos/burette.jpeg" ></button>
    <button class="btn btn-default" id='b6'  onclick="changeState(6)" title="Pipette"><img class="objects" src="Photos/pipette.jpg" ></button>
    <button class="btn btn-default" id='b7'  onclick="changeState(7)" title="Petridish"><img class="objects" src="Photos/petridish.jpeg" ></button>
    <button class="btn btn-default" id='b8'  onclick="changeState(8)" title="BunsenBurner"><img class="objects" src="Photos/bunsenburner.jpeg" ></button>
    <button class="btn btn-default" id='b9'  onclick="changeState(9)" title="Weighing machine"><img class="objects" src="Photos/weighingmachine.jpeg" ></button>
    <button class="btn btn-default" id='b10' onclick="changeState(10)"  title="Watch glass"><img class="objects" src="Photos/watchglass.jpeg" ></button>
    <button class="btn btn-default" id='b11' onclick="changeState(11)"  title="Test tube stand"><img class="objects" src="Photos/testtubestand.jpeg" ></button>
    <button class="btn btn-default" id='b12' onclick="changeState(12)"  title="Funnel"><img class="objects" src="Photos/funnel.jpeg" ></button>
    <button class="btn btn-default" id='b13' onclick="changeState(13)"  title="Phmeter"><img class="objects" src="Photos/phmeter.jpeg" ></button>
    </div>
    </li>
    
      </ul>
    </div>
 
</nav>
<nav class="navbar EQInf navbar-fixed-top">
<div id="dtext">
Item : Bottle<br>
Volume: 250 ml
</div>
</nav>
<script>
$("#selectbox").change(function () {
    if ($(this).val() == "#consumergoods") {
        $('#consumergoods').modal('show');
      }
    if ($(this).val() == "#consumergoods2") {
        $('#consumergoods2').modal('show');
      }
    
 });

</script>


<script>
$(".btn-default").click(function(){
  $(".btn-default").removeClass("active");
  $(this).addClass("active");
});

</script>

<div class="modal fade" id="consumergoods" data-target="#consumergoods">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header orange">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>

        </button>
        <h4 class="modal-title">Provide details</h4>
        <p><input type="text" class="form-control" id="text1" placeholder="Enter number">
    <input type="text" class="form-control" id="text2" placeholder="Enter volume in mL" style="margin-top:20px">
    </p>
    <button type="button" class="btn btn-primary"  action="#">Submit</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="consumergoods2" data-target="#consumergoods2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header orange">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>

        </button>
        <h4 class="modal-title">Provide details</h4>
        <p><input type="text" class="form-control" id="text1" placeholder="Enter number">
    </p>
    <button type="button" class="btn btn-primary"  action="#">Submit</button>
    </div>
  </div>
</div>

</div>
<script>
$("#selectbox2").change(function () {
    if ($(this).val() == "#consumer_goods") {
        $('#consumer_goods').modal('show');
      }
});
</script>
<div class="modal fade" id="consumer_goods" data-target="#consumer_goods">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header orange">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>

        </button>
        <p><h4 class="modal-title">Provide details of Chemical to be added</h4></p>
        <form action="#" method="$POST">
            <center><select id="ChemForm"><option>Liquid Form</option><option>Pure Solid</option></select></center><br>
    <input type="text" class="form-control" id="ChemV" placeholder="Enter volume in mL (less than 250ml) ">
    <input type="text" class="form-control" id="ChemC" placeholder="Enter Concentration" style="margin-top:20px"><br>
    <input type="text" id="Chemtxt" class="form-control" placeholder="Attach a label (optional)"><br>;
    <button type="button" id="ChemSub" data-dismiss="modal" class="btn btn-primary">Submit</button>
    
    </form>
      </div>
    </div>
  </div>
</div>
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div id='myModal' class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Choose a size</h4>
      </div>
      <div id='inserthere' class="modal-body">
        <p>Some text in the modal.</p>
        <div class="form-group"><br><input type="text" id="ltxt" class="form-control" placeholder="Attach a label (optional)"> </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<div id="vcl"></div>
<script type="text/javascript">
  function addEquipment(v,label){
    if(v!=0){
      var str='instantiate(';
      str+='new ';
      str+=omap[state-1];
      str+='(';
      str+=v.toString()+',new Mixture([])),';
      str+='new THREE.Vector3(';
      str+=intersects[0].point.x.toString()+',';
      str+='0,';
      str+='0)'
      if(ltxt.value!=null && ltxt.value!=undefined && ltxt.value.length>0){
          str+=','+'\''+ltxt.value+'\'';
      }
      str+=')';
      eval(str);
    }
    document.getElementById('b0').click();
  }
  function changeState(x){
    if(x==state)
      return;
    state=x;
    if(x==0)
      dragControls.activate();
    else{
      dragControls.deactivate();
    }
  } 
    var curdisp=0;
    var callback=undefined;
    var state=0;
    var drag=1;
    var tablesM=[];
    var intersects=[];
    var pressobjects=[];
    var pressmap=[];
    var prevcor;
    var prevmaster;
    var prevslot;
    var scene,camera,renderer;
    var basin_width=30;
    var objects=[];
    var objectsM=[];
    var objectsC=[];
    var table_n;
    var table_height=50;
    var basin_height=50;
    var shelf_height=table_height;
    var tables=[];
    var basins=[];
    var shelves=[];
    var spotLight=[];
    var dobject=null;
    var pobject=null;
    var dirLight;
    var cursz=0;
    var journal=[];
    var isclick=1;
    var dragControls;
    var controls;
    var flagtask=0;
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var UNDOval = null;
//    FetchReaction();
//    FetchChemical();
    
    function init() {
        FetchChemical();
        FetchReaction();
        //console.log(cdata['Sodium sulphate']);
        scene = new THREE.Scene();
        // create a camera, which defines where we're looking at.
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        // create a render and set the size
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0x232323));
        //renderer.setClearColorHex(new THREE.Color(0x000000, 1));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x0c0c0c,4);
        scene.add(ambientLight);
        // add spotlight for the shadows
        document.body.appendChild(renderer.domElement);
        controls = new THREE.OrbitControls( camera, renderer.domElement );
        //This data has to be taken from the database
        shelves.push(new Shelf(shelf_height));
        shelves[0].setPosition(0,0,-table_height*2/5);
        table_n=0;
        
        // var nmix=new Mixture([new Chemical('Hydrochloric Acid','green',0,1,'HCl',12,1,18,'green')]);
        // var base=new Mixture([new Chemical('Sodium Hydroxide','red',0,1,'NaOH',12,1,18,'red')]);
        // instantiate(new Flask(250,nmix),nextShelfSlot());
        // instantiate(new Bottle(250,base),nextShelfSlot());
        //End
        camera.position.set(0,table_height,table_height*4);
        dragControls =new THREE.DragControls(objectsM,camera,renderer.domElement);
        dragControls.addEventListener('dragstart',function (event){
            cursz=journal.length;
            isclick=1;
            drag=1;
            intersects = _raycaster.intersectObjects( pressobjects ); 
            if (intersects.length>0) {
              for(var i=0;i<pressobjects.length;i++){
                if(pressobjects[i]==intersects[0].object){
                  if(typeof objects[pressmap[i]].canBePressed == 'function'){
                    if(objects[pressmap[i]].canBePressed()){
                      drag=0;
                    }
                  }
                  else{
                    drag=0;
                  }
                    break;                  
                }
              }
            }
            controls.enabled=false;
            for(var i=0;i<objects.length;i++){
                if(_selected==objectsM[i]){
                    pobject=i;
                    prevcor=new THREE.Vector3(objects[i].x(),objects[i].y(),objects[i].z());
                    prevmaster=objects[i].Master;
                    if(prevmaster!=null){
                      prevslot=objects[i].Masterslot;
                      if(drag)
                        Dethrone(i,prevmaster,prevslot);
                    }
                    break;
                }
            }
            updateDisplay(pobject);
            if(drag==1){
              if(objects[pobject].Master==null && typeof objects[pobject].pick =='function'){
                objects[pobject].pick(pobject);
              }
            }
        });
        function onDocumentMouseMove( event ){
            isclick=0;
        }
        function onDocumentMouseUp(event){
            event.preventDefault();
            if(state==0)
              return;
            mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
            mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
            raycaster.setFromCamera( mouse, camera );
            intersects=raycaster.intersectObjects(tablesM);
            if(intersects.length>0){
              var flag=1;
              for(var i=0;i<objects.length;i++){
                if(objects[i].z()==0 && Math.abs(objects[i].x()-intersects[0].point.x) < objects[i].half_width+maxhw[state-1]){
                  flag=0;
                }
                if(intersects[0].point.x < (-table_height+maxhw[state-1])){
                  flag=0;
                }
              }
              if(flag){
                if(iscontainer[state-1]){
                  if(choices[state-1].length>1){
                  document.getElementById('inserthere').innerHTML='';

                    for(var j=0;j<choices[state-1].length;j++){
                      document.getElementById('inserthere').innerHTML+='<button type=\'button\' onclick=\'addEquipment(this.value)\' value='+choices[state-1][j]+ ' class=\'btn btn-primary\' data-dismiss=\'modal\'>'+choices[state-1][j]+' ml'+'</button>&nbsp;&nbsp;&nbsp;';
                    }
                    document.getElementById('inserthere').innerHTML+='<div class="form-group"><br><input type="text" id="ltxt" class="form-control" placeholder="Attach a label (optional)"> </div>';
                    $('#myModal').modal('show');
                  }
                  else{
                    addEquipment(choices[state-1][0]);
                  }
                }
                else{
                  var str='instantiate(';
                  str+='new ';
                  str+=omap[state-1];
                  str+='(';
                  str+='),';
                  str+='new THREE.Vector3(';
                  str+=intersects[0].point.x.toString()+',';
                  str+='0,';
                  str+='0))';
                  eval(str);
                }
              }
            }
        }
        renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
        renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
        dragControls.addEventListener('dragend',function (event){
            controls.enabled=true;
            if(drag==1){
              dobject=pobject;
            }
            objects[pobject].restrict(-table_height+objects[pobject].half_width,-table_height+basin_width*table_n+table_height*2*table_n-objects[pobject].half_width,0,table_height*2,0,0);
                  updatePos(objects[pobject]);
            pobject=null
            flagtask=1;
        });
        document.getElementById('NewTable').addEventListener('click',addTable);
        //older
//        var url = document.location.href,
//            params = url.split('?')[1].split('&'),
//            dataT = {}, tmp;
//            for (var i = 0, l = params.length; i < l; i++) {
//                 tmp = params[i].split('=');
//                 dataT[tmp[0]] = tmp[1];
//            }
            //window.location.href = 'perform.html?title='+Etitle+'&author='+Eauthor+'&Eclass='+Eclass+'&aim='+Eaim+'&marks='+Emarks+'&ins='+Eins+'&uid='+id+'&way='+"setup";
//        var UID = dataT.uid;
        var UID = '<%= session.getAttribute("currentSessionUser") %>';
        var WAY = '<%= session.getAttribute("way") %>';
        var Etitle = '<%= session.getAttribute("title") %>';
        var Eauthor = '<%= session.getAttribute("author") %>';
        var Eclass = '<%= session.getAttribute("Eclass") %>';
        var Eaim = '<%= session.getAttribute("aim") %>';
        var Emarks = '<%= session.getAttribute("marks") %>';
        var Eins = '<%= session.getAttribute("ins") %>';

//        
//        var UID = 9;
//        var WAY = "perform";
        
//        //older
//        var WAY = dataT.way;
//        var Etitle = dataT.title;
//        var Eauthor = dataT.author;
//        var Eclass = dataT.Eclass;
//        var Eaim = dataT.aim;
//        var Emarks = dataT.marks;
//        var Eins = dataT.ins;
//        var tempror = 0;
//        if(UNDOval == 1){
//            UndoButt();
//            tempror = 1;
//            
//            var n = dataUndo.length;
//            console.log(n);
//            journal = [];
//            for(var i = 0;i<n;i++){
//                console.log(dataUndo[i]);
//                eval(dataUndo[i]);
//            }
//            journal = [];
//            for(var i = 0;i<n;i++){
//                journal.push(dataUndo[i]);
//            }
//        }
        if( (WAY=="perform" || WAY=="edit") ){
            var eid = '<%= session.getAttribute("eid") %>';
//            var eid = 14;
            var TempPrev = WAY;
            if(WAY=="edit"){
                console.log("Eid:"+eid + " " + "Uid:"+UID );
//                var happiness = prompt("HAPPY");
                WAY = "setup";
            }
            var ExpLoader = function() {
                    console.log("RetrivingExperiment");
                    console.log(UID);
                    console.log(WAY);
                    console.log(eid);
                    console.log(Etitle);
                    console.log(Eauthor);
                        $.ajax({
                                method: "GET",
                                url: "RetriveObjects",
//                                url: "RetriveObjects?uid=" + UID +"&&way=" + WAY +"&&eid=" + eid,
                                data:{
                                    'uid':UID,
                                    'way':WAY,
                                    'eid':eid
                                },
                                async: false,
                                success: function(response) {
                                    alert("IN");
                                    console.log(response);
                                    var data = response.split("#");
                                    var n = data.length;
                                    console.log(n);
                                    journal = [];
                                    for(var i = 0;i<n;i++){
                                        console.log(data[i]);
                                        eval(data[i]);
                                    }
                                    journal = [];
                                    for(var i = 0;i<n;i++){
                                        journal.push(data[i]);
                                    }
                                },
                                error : function(){
                                          alert("Error Occured");
                                }
                    });
                /* response will be saved to data_obj*/
            }();
            var InfoLoader = function() {
                    console.log("RetrivingInformation");
                    console.log(eid);
                    
                        $.ajax({
                                method: "GET",
                                url: "RetriveInfo",
//                                url: "RetriveObjects?uid=" + UID +"&&way=" + WAY +"&&eid=" + eid,
                                data:{
                                    'eid':eid
                                },
                                async: false,
                                success: function(response) {
                                    console.log(response);
                                    var dataIn = response.split("##@%");
                                    
                                    Etitle = dataIn[0];
                                    Eauthor = dataIn[1];
                                    Eclass = dataIn[2];
                                    Eaim = dataIn[3];
                                    Emarks = dataIn[4];
                                    Eins = dataIn[5];
                                },
                                error : function(){
                                          alert("Error Occured");
                                }
                    });
                /* response will be saved to data_obj*/
            }();
        }
        document.getElementById('exp_title').innerHTML = Etitle;
        document.getElementById('exp_aim').innerHTML = Eaim;
        document.getElementById('exp_instruction').innerHTML = Eins;
        document.getElementById('exp_class').innerHTML = Eclass;
        document.getElementById('exp_marks').innerHTML = Emarks;
        document.getElementById('exp_author').innerHTML = Eauthor;
        
//        UNDOval = 0;
        if(table_n==0)
            addTable();
        document.getElementById('Save').addEventListener('click',function(){
            var mystring = "";
//            for(var i=0;i<objects.length;i++){
//                mystring += "instantiate(new " + omap[objects[i].id] + "(" + objects[i].volume + "," + objects[i].Mixture.toString() + "))";
//                mystring += "#";
//                mystring += "move(objects[" + i + "]," + objects[i].x() + ',' + objects[i].y() + ',' + objects[i].z() + ")"; 
//                mystring += "#";
//            }
            
//            mystring += "table_n=" + table_n.toString();
            if(WAY=="edit"){
                WAY = "setup";
            }
            mystring += journal[0].toString();
            for(var i=1;i<journal.length;i++){
                mystring += "#";
                mystring+=journal[i].toString();
            }
//            console.log(EEtitle);
//            console.log(EEauthor);
            var addFunc = function() {
                  console.log(UID);
                  console.log(WAY);
                  console.log(Etitle);
                  console.log(Eauthor);
                  console.log(Eclass);
                  console.log(Eaim);
                  console.log(Emarks);
                  console.log(Eins);
                  $.ajax({
                      type: "POST",
                      url: "UploadSevlet",
                              data:{
                                    'uid':UID,
                                    'data':mystring,
                                    'way':WAY,
                                    'title':Etitle,
                                    'author':Eauthor,
                                    'class':Eclass,
                                    'aim':Eaim,
                                    'marks':Emarks,
                                    'ins':Eins
                              },
                              error : function(){
                                  alert("Error Occured");
                              },
                              success: function(response) {
                                  alert("Successfull Entry of data");
                              }
                });
            }();
            console.log(mystring);
//            addFunc();
          
        });
        document.getElementById('Restore').addEventListener('click',function(){
            location.reload();
            //window.open('perform2.html')
//            var dataLoader1 = function() {
//                        console.log("Retriving");
//                            $.ajax({
//
//                                    method: "GET",
//                                    url: "RetriveObjects?uid=" + uid +"&&way=" + way +"&&eid=" + eid,
//                                    async: false,
//                                    success: function(response) {
//                                        console.log(response);
//                                        var data = response.split("#");
//                                        var n = data.length;
//                                        console.log(n);
//                                        for(var i = 0;i<n;i++){
//                                            console.log(data[i]);
//                                            eval(data[i]);
//                                        }
//                                    },
//                                    error : function(){
//                                              alert("Error Occured");
//                                    }
//                        });
//
//                /* response will be saved to data_obj*/
//                }();
        });
//instantiate(new Bottle(250,new Mixture(new Chemical(Water,blue,undefined,1,H2O,4,1,18,blue,undefined)),new THREE.Vector3(0,34.16666666666667,-20))
        $("#ChemForm").change(function(){
//            alert('Selected value: ' + $(this).val());
        });
        
        document.getElementById('ChemSub').addEventListener('click',function(){
                    console.log("FUN");
                    if(document.getElementById('ChemV').value!="" && document.getElementById('ChemC').value!=""){
                        console.log(document.getElementById('ChemV').value + "22" + document.getElementById('ChemC').value );
                        var t = document.getElementById('selectbox2');
                        var chemName = t.options[t.selectedIndex].text;
                        var t1 = document.getElementById('ChemForm');
                        var Cform = t1.options[t1.selectedIndex].text;
                        var labelC = document.getElementById('Chemtxt').value;
                        console.log(chemName);
                        var mystring = "";
                        //mystring += "instantiate(new Bottle (" + 250 + "," + myMix(document.getElementById('ChemV').value,document.getElementById('ChemC').value,chemName) + "),nextShelfSlot()" + ")";
                        //instantiate(new Bottle(250,base),nextShelfSlot());
                        if(Cform=="Pure Solid")
                            mystring += "instantiate(new WatchGlass(30,";
                        else
                            mystring += "instantiate(new Bottle(250,";
                        var str=myMix(document.getElementById('ChemV').value,document.getElementById('ChemC').value,chemName,Cform) + "),nextShelfSlot()";
                        if(Chemtxt.value!=null && Chemtxt.value!=undefined && Chemtxt.value.length>0){
                            str+=','+'\''+labelC+'\'';
                        }
                        str+= ')';
                        mystring+=str;
                        console.log(mystring);
                        eval(mystring);
                        alert("Chemical Added Successfully");
                        document.getElementById('ChemV').value = "";
                        document.getElementById('ChemC').value = "";
                        document.getElementById('Chemtxt').value = "";
                    }
        });
        function myMix(vol,concn,name,fr){
            //new Mixture("H2O","blue",80,[],[],[],[],[])
            //new Mixture([new Chemical('Water','blue',0,1,'H2O',4,1,18,'blue')])
            var temArr;
            var s="";
            var dataLoader2 = function() {
                    //console.log("Retriving");
                    // new Mixture([new Chemical('Water','red',0,1,'H2O',4,1,18,'blue')])
                    $.ajax({
                            method: "GET",
                            url: "GetChemDetails?name=" + name,
                            async: false,
                            success: function(response) {
                                console.log(response);
                                temArr = response.split(",");
                                s='new Mixture([new Chemical(';
                                s+= "\'" + name + "\'";
                                s+=',';
                                s+= "\'" + temArr[0]  + "\'";
                                s+=',';
                                if(temArr[1]=="Acid")
                                    s+= 1 ;
                                else if(temArr[1]=="Base")
                                    s+= -1 ;
                                else
                                    s+= 0;
                                s+=',';
                                s+= temArr[2]  ;
                                s+=',';
                                s+= "\'" + temArr[3] + "\'" ;
                                s+=',';
                                s+= (concn*vol)/1000; 
                                s+=',';
                                s+= temArr[4];
                                s+=',';
                                s+= temArr[5];
                                s+=',';
                                s+= "\'" + temArr[6];
                                s+= '\')';
                                
                                var mol = (( vol - (concn*vol)/1000 * parseFloat(temArr[5]) / parseFloat(temArr[4]) ))/18;
                                var molS = mol.toString();
                                if(fr == "Pure Solid")
                                    s+= '])';
                                else
                                    s+=",new Chemical('Water','transparent',0,1,'H2O'," + molS + ",1,18,'transparent')" + '])';
                                console.log(molS);
                                console.log(molS/55500);
                                //console.log(s);
                                
                            },
                            error : function(){
                                      alert("Error Occured");
                            }
                    });
            }();
            console.log(s);
            return s;
        }
        var presstate=null;
        renderScene();
        var date=new Date();
        var st=date.getTime();
        var ct=st;
        var dt=0;
        var et;
        document.getElementById('b0').click();
        function onDocumentMouseDown(event){
            event.preventDefault();
            mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
            mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
            raycaster.setFromCamera( mouse, camera );
            intersects=raycaster.intersectObjects(objectsM);
            var pobject=null;
            if(intersects.length>0){
              for(var i=0;i<objects.length;i++){
                if(objects[i].Mesh == intersects[0].object){
                  pobject=i;
                }
              }
              if(pobject!=null){
                updateDisplay(pobject);           
              }
            }
        }
        renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
        function renderScene() {
            date=new Date();
            var temp=date.getTime();
            dt=temp-ct;
            ct=temp;
            if(pobject!=null){
                if(drag){
               		objects[pobject].restrict(-table_height+objects[pobject].half_width,-table_height+basin_width*table_n+table_height*2*table_n-objects[pobject].half_width,0,table_height*2,0,0);
                  updatePos(objects[pobject]);
                }
                else{
                  if(presstate==null){
                    date=new Date();
                    st=date.getTime();
                    objects[pobject].onPress(presstate);
                  }
                  presstate=pobject;
                  objects[pobject].duringPress(presstate,dt);
                  objects[pobject].setPosition(prevcor);
                  updateDisplay(pobject);
                }
            }
            if(presstate!=null && pobject==null){
              date=new Date();
              et=date.getTime();
              objects[presstate].setPosition(prevcor);
              var str='PressFor('+presstate.toString()+','+(et-st).toString()+')';
              journal.push(str);
              console.log(str);
              objects[presstate].onPressEnd(presstate);
              updateDisplay(presstate); 
              presstate=null;
            }
            if(dobject!=null && drag && !isclick){
                var sobject=-1;
                var flag=0;
                if(!flag){
                  for(var i=0;i<table_n;i++){
                    if(Math.abs(objects[dobject].x()-basins[i].x())<basins[i].half_width){
                      wash(dobject,i);
                      flag=1;
                      break;
                    }
                  }
                }
                if(!flag){
                  var lobject=-1;
                  for(var i=0;i<objects.length;i++){
                      //console.log()
                      if(!isSlave(i,dobject) &&objects[i]!=objects[dobject] &&(objects[i].z()==0)&& (Math.abs(objects[dobject].x()-objects[i].x())<= objects[i].half_width+objects[dobject].half_width)){
                          //console.log("here");
                          if(Place(dobject,i)){
                            flag=1;
                            break;
                          }
                      }
                  }
                }
                if(!flag){
                  var lobject=-1;
                  for(var i=0;i<objects.length;i++){
                      if(objects[i]!=objects[dobject] && !isSlave(i,dobject) &&(objects[i].z()==0)&& (Math.abs(objects[dobject].x()-objects[i].x())<= objects[i].half_width+objects[dobject].half_width)){
                          if((map[objects[dobject].id][objects[i].id]!=0)){
                            if(objects[i].Master!=null){
                              if(map[objects[dobject].id][objects[objects[i].Master].id]!=0){
                                sobject=objects[i].Master;
                                flag=1;
                                break;
                              }
                            }
                            sobject=i;
                            flag=1;
                            break;
                          }
                          else{
                            flag=1;
                            lobject=i;
                          }
                      }
                  }
                  if(sobject>=0){
                    operate(dobject,sobject);
                    //var str="operate("+dobject.toString()+','+sobject.toString()+')';
                    //journal.push(str);
                    //console.log("operate("+dobject.toString()+','+sobject.toString()+')');
                  }
                  else if(lobject>=0){
                    resetPosition(dobject);
                  }
                  else if(typeof objects[dobject].droppable=='function' && !objects[dobject].droppable()){
                    resetPosition(dobject);
                    flag=1;
                  }
                }
                if(!flag){
                  var s="";
                  s+="move(";
                  s+='objects[';
                  s+=dobject.toString();
                  s+='],';
                  s+=(objects[dobject].x()).toString();
                  s+=',0,0)';
                  if(typeof objects[dobject].drop == 'function'){
                    objects[dobject].drop(dobject);
                  }
                  console.log(s);
                  journal.push(s);
                  objects[dobject].sety(0);
                  objects[dobject].setz(0);
                  updatePos(objects[dobject]);
                }
                objects[dobject].update();
                objects[dobject].updateMaster();
                objects[dobject].updateSlaves();
                if(prevmaster!=null){
                  objects[prevmaster].update();
                  objects[prevmaster].updateMaster();
                  objects[prevmaster].updateSlaves();
                }
                dobject=null;
                pobject=null;
            }
            if(dobject!=null && drag && isclick){
              resetPosition(dobject);
              if(typeof objects[dobject].onClick == 'function'){
                objects[dobject].onClick();
              }
              pobject=null;
              dobject=null;
            }
            if(flagtask ==1 && cursz!=null && journal.length>cursz){
              for(var i=cursz+1;i<journal.length;i++){
                journal[cursz]+=';'+journal[i];
              }
              while(journal.length > cursz+1)
              journal.pop();
              cursz=null;
              console.log(journal[journal.length-1]);
              flagtask=0;
            }
            controls.update();
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
            console.log(journal.length);
        }
    }
    window.onload = init;
</script>

<nav class="navbar navbar-inverse navbar-fixed-bottom" style="width:15%">
<span style="font-size:30px;cursor:pointer;color:white" onclick="openNav()">&#9776; Info</span>
</nav>
  <div id="sidenav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
    <h3>Title:- </h3>
    <h4 style="color : red"><div id="exp_title"></div></h4><hr>
    <h3>Aim of the Experiment:- </h3>
    <h4 style="color : red"><div id="exp_aim"></div></h4><hr>
    <h3> Author:-</h3>
    <h4 style="color : red"><div id="exp_author"></div></h4><hr>
    <h3>Class:-</h3>
    <h4 style="color : red"><div id="exp_class"></div></h4><hr>
    <h3>Maximum mark:-</h3>
    <h4 style="color : red"><div id="exp_marks"></div></h4><hr>
    <h3> Instructions:-</h3>
    <h4 style="color : yellow"><div id="exp_instruction"></div></h4><hr>
 </div> 
  
 <script>
function openNav() {
    document.getElementById("sidenav").style.width = "50%";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0%";
}
</script>

<script>
      
    var id;
    var volume = 0;
    var normality;
    var data;
    var data_cat = "";
    var data_obj = "";
    var data_attr = "";
    var dataLoader = function() {
      $.ajax({
        type: "GET",
        url: "MyServlet",
        success: function(response) {
          //    console.log(response);
          data = response.split(",");
          data_obj = "<option>Choose</option>";
          //data_obj = "<option value='#consumer_goods'>" + "Hydrochloric acid" + "</option>";
          for (obj1 in data){
              if(data[obj1] == "Acid" || data[obj1] == "Base" || data[obj1] == "Neutral" ){
                  data_obj += "<optgroup label="+data[obj1]+">"
              }
              else{
                  data_obj += "<option value=\"#consumer_goods\">" + data[obj1] + "</option>";
              }
          }

          $(".hifi").html(data_obj);
        }
      });

      /* response will be saved to data_obj*/
    };
    var addFunc = function() {
      /* ajax request to add data into db */
      $.ajax({
        type: "POST",
        url: "Upload",
        data:{
          'vol':volume,
          'norm':normality,
//            'val':$('.attr>form').serialize()
        },
        error : function(){
          alert("Error Occured");
        },
        success: function(response) {
          dataLoader();
          id+=1;
          $(".attr").html("");
          $(".cat-main").html(selectedCategory);
          $(".categories").hide();
        }
        /**/

      });
    };
    dataLoader();
    
    function UndoButt(){
        emptyScene();
        var dataUndo = [];
        console.log(journal.length);
        for(var i = 0;i<journal.length-1;i++){
            dataUndo[i] = journal[i];
        }
//        console.log(journal[journal.length-2]);
//        console.log(journal[journal.length-1]);

        journal = [];
        for(var i = 0;i<dataUndo.length;i++){
            console.log(dataUndo[i]);
            eval(dataUndo[i]);
        }
        journal = [];
        
        for(var i = 0;i<dataUndo.length;i++){
            journal.push(dataUndo[i]);
        }

    }
//function UndoButt(){
//    var PresentJ = journal[0].toString();
//    for(var i=1;i<journal.length-1;i++){
//        PresentJ += "#";
//        PresentJ +=journal[i].toString();
//    }
//    if(UNDOval == 1){
//        var setUndo1 = function() {
//            console.log("STUCKED");
//            $.ajax({
//                type: "POST",
//                url: "UndoSet",
//                data:{
//                      'UNDOval':UNDOval,
//                },
//                async: false,
//                success: function(response) {
//                    console.log(response);
//                    
////                    location.reload(true);
//                },
//                error : function(){
//                    alert("Error in setUndo1");
//                }
//            });
//        }();
//    }
//    else{
//        var setUndo = function() {
//            console.log("STUCKED");
//            $.ajax({
//                type: "POST",
//                url: "UndoSet",
//                data:{
//                      'JOURNAL':PresentJ,
//                      'UNDOval':UNDOval,
//                },
//                async: false,
//                success: function(response) {
//                    console.log(response);
//                    location.reload(true);
//                },
//                error : function(){
//                    alert("Error in setUndo");
//                }
//            });
//        }();
//    }
//}

      
</script>

</body>
</html>