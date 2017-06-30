<!DOCTYPE html>
<html lang="en">
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
    <script src="libs/dat.gui.min.js"></script>
    <script src="libs/TrackballControls.js"></script>  
    <script src="Objects/Chemicals.js"></script>
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
  .navbar-inverse{
    width:300px;height:150px;margin-left:auto;
      background:#7f7f7f;
  background:rgba(255,255,255,0);
    /*opacity: 0;*/
    /*overflow:scroll;*/
    top:50px;
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

<!--<li><select id="selectbox2">
        
</select></li>-->
<li>
<div class="btn btn-group">
<button class="btn btn-primary" id='Save'>Save</button>
<button class="btn btn-primary" id='Restore'>Restore</button>
<button class="btn btn-primary" id='NewTable'>New table</button>

</div>
</li>
<li><button class="btn btn-primary" style="margin-top:8px"><i class="fa fa-undo"></i></button></li>
<li><button class="btn btn-default" id='b0' style="margin-top:8px;margin-left:10px;"><i class="glyphicon glyphicon-hand-up"></i></button></li>    
    <li>
    <div class="btn btn-group">
    <button class="btn btn-default" id='b1' title="Bottle"><img class="objects" src="Photos/bottle.jpeg" ></button>
    <button class="btn btn-default" id='b2'  title="Beaker"><img class="objects" src="Photos/beaker.jpg" ></button>
    <button class="btn btn-default" id='b3'  title="Flask"><img class="objects" src="Photos/flask.jpg" ></button>
    <button class="btn btn-default" id='b4'  title="Test tube"><img class="objects" src="Photos/testtube.jpg" ></button>
    <button class="btn btn-default" id='b5'  title="Burette"><img class="objects" src="Photos/burette.jpeg" ></button>
    <button class="btn btn-default" id='b6'  title="Pipette"><img class="objects" src="Photos/pipette.jpg" ></button>
    <button class="btn btn-default" id='b7'  title="Petridish"><img class="objects" src="Photos/petridish.jpeg" ></button>
    <button class="btn btn-default" id='b8'  title="BunsenBurner"><img class="objects" src="Photos/bunsenburner.jpeg" ></button>
    <button class="btn btn-default" id='b9'  title="Weighing machine"><img class="objects" src="Photos/weighingmachine.jpeg" ></button>
    <button class="btn btn-default" id='b10'   title="Watch glass"><img class="objects" src="Photos/watchglass.jpeg" ></button>
    <button class="btn btn-default" id='b11'   title="Test tube stand"><img class="objects" src="Photos/testtubestand.jpeg" ></button>
    <button class="btn btn-default" id='b12'   title="Funnel"><img class="objects" src="Photos/funnel.jpeg" ></button>
    <button class="btn btn-default" id='b13'   title="Phmeter"><img class="objects" src="Photos/phmeter.jpeg" ></button>
    </div>
    </li>
    
      </ul>
    </div>
 
</nav>
<nav class="navbar navbar-inverse navbar-fixed-top">
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
<!--<script>
$("#selectbox2").change(function () {
    if ($(this).val() == "#consumer_goods") {
        $('#consumer_goods').modal('show');
      }
});
</script>-->
<div class="modal fade" id="consumer_goods" data-target="#consumer_goods">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header orange">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>

        </button>
        <p><h4 class="modal-title">Provide details</h4></p>
        <form action="#" method="$POST">
    <input type="text" class="form-control" id="text1" placeholder="Enter volume in mL">
    <input type="text" class="form-control" id="text2" placeholder="Enter Normality" style="margin-top:20px"><br>
    <button type="button" class="btn btn-primary"  action="#">Submit</button>
    
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<div id="vcl"></div>
<script type="text/javascript">
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
    var curdisp=0;  
    var dirLight;
    var journal=[];
    var isclick=1;
    var dragControls;
    var controls;
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var cur=0;
    var table_n=0;
    var ajournal=[];
    //var strr="addTable()#instantiate(new Beaker(150,new Mixture([])),new THREE.Vector3(-22.158028558432914,0,0))#instantiate(new Beaker(100,new Mixture([])),new THREE.Vector3(10.515346564102044,0,0))#instantiate(new Bottle(250,new Mixture([new Chemical('Ferric Chloride','light brown',-1,0,'FeCl3',0.16,2.9,162,'brown',undefined),new Chemical('Water','transparent',0,1,'H2O',10.38072,1,18,'transparent',undefined)])),new THREE.Vector3(-12.5,34.16666666666667,-21.5))#move(objects[2],-9.311587411220874,0,0)#move(objects[2],-9.311587411220874,0,0)#instantiate(new Pipette(10,new Mixture([])),new THREE.Vector3(26.78286846198826,0,0))#objects[3].pick(3)#move(objects[3],33.727779805688535,0,0)#objects[3].drop(3)#move(objects[3],33.727779805688535,0,0)#pourF(2,1,30)#objects[3].pick(3)#PlaceF(3,1,0)#PressFor(3,6062)#Dethrone(3,1,0)#PlaceF(3,1,0)#Dethrone(3,1,0)#PlaceF(3,0,0)#PressFor(3,5673)#Dethrone(3,0,0)#move(objects[3],28.869823396369494,0,0)#objects[3].drop(3)#move(objects[3],28.869823396369494,0,0)#instantiate(new Bottle(250,new Mixture([new Chemical('Ferric Chloride','light brown',-1,0,'FeCl3',0.16,2.9,162,'brown',undefined),new Chemical('Water','transparent',0,1,'H2O',10.38072,1,18,'transparent',undefined)])),new THREE.Vector3(-12.5,34.16666666666667,-21.5))#instantiate(new Beaker(250,new Mixture([])),new THREE.Vector3(38.75228712241902,0,0))#objects[3].pick(3)#PlaceF(3,0,0)#PressFor(3,6059)#Dethrone(3,0,0)#PlaceF(3,5,0)#PressFor(3,5582)#Dethrone(3,5,0)#move(objects[3],21.05343757052756,0,0)#objects[3].drop(3)#move(objects[3],21.05343757052756,0,0)";
    //ajournal=strr.split('#');
    //This has to be taken from DB
    //DB Begins
    var UIDD = '<%= session.getAttribute("DemoUID") %>';
    var WAYD = '<%= session.getAttribute("DemoWAY") %>';
    var EIDD = '<%= session.getAttribute("DemoEID") %>';
    
    var DemoLoader = function() {
        console.log("Preparing Demo");
        console.log(UIDD);
        console.log(WAYD);
        console.log(EIDD);
        $.ajax({
                method: "GET",
                url: "GetDemo",
//                url: "RetriveObjects?uid=" + UID +"&&way=" + WAY +"&&eid=" + eid,
                data:{
                    'uid':UIDD,
                    'way':WAYD,
                    'eid':EIDD
                },
                async: false,
                success: function(response) {
                    console.log(response);
//                    alert("success");
                    var data = response.split("#");
                    var n = data.length;
                    console.log(n);
                    for(var i = 0;i<n;i++){
                        console.log(data[i]);
                        ajournal.push(data[i]);
                    }
                    
                },
                error : function(){
                          alert("Error Occured");
                }
        });
                /* response will be saved to data_obj*/
    }();
    
    //ENDING  
    // Ends
    // for(var i=0;i<ajournal.length;i++){
    // 	console.log(ajournal[i]);
    //   var temp=ajournal[i].split('(');
    // 	if(isanimated[temp[0]]){
    // 		ajournal[i]='A'+ajournal[i];
    // 	}
    // }
    for(var i=0;i<ajournal.length;i++){
      //console.log(ajournal[i]);
      var temp=ajournal[i].split('(');
      if(isanimated[temp[0]]){
        ajournal[i]='A'+ajournal[i];
      }
    }
    var callback=function(){
    	while(cur<ajournal.length && ajournal[cur][0]!='A'){
    		//console.log("THIS "+ajournal[cur]);
        eval(ajournal[cur]);
    		cur++;
    	}
    	if(cur<ajournal.length){
        //console.log("THIS "+ajournal[cur]);
    		cur++;
    		eval(ajournal[cur-1]);
    	}
    }
    function updateDisplay(i){
      document.getElementById('dtext').innerHTML='';
      if(i!=null){
        curdisp=i;
        document.getElementById('dtext').innerHTML+='Name: '+omap[objects[i].id]+'<br>';
        if(iscontainer[objects[i].id]){
          document.getElementById('dtext').innerHTML+='Total Volume: '+objects[i].volume+'<br>';
          document.getElementById('dtext').innerHTML+='Chemical Volume: '+Number((objects[i].Mixture.volume).toFixed(3))+'<br>';
          if(objects[i].Slots!=null){
            for(var x=0;x<objects[i].Slots.length;x++){
              if(objects[i].Slots[x].Slave!=null && omap[objects[objects[i].Slots[x].Slave].id]=='PhMeter')
                document.getElementById('dtext').innerHTML+='Ph: '+Number((objects[i].Mixture.Ph).toFixed(3))+'<br>';                
            }
          }
        }
        if(objects[i].label!=undefined){
            document.getElementById('dtext').innerHTML+='Label: '+objects[i].label+'<br>'; 
        }
        else if(omap[objects[i].id]=='PhMeter'){
          if(objects[i].Master!=null){
            document.getElementById('dtext').innerHTML+='Ph: '+Number((objects[objects[i].Master].Mixture.Ph).toFixed(3))+'<br>';
          }
        }
        //document.getElementById('dtext').innerHTML+='Name: '+omap[i]+'<br>';
      }
    }
    function init() {
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
        //addTable();
		//instantiate(new Bottle(250,new Mixture([new Chemical('Hydrochloric acid','red',-1,1,'Hcl',0.075,1.00,98.00,'white'),new Chemical('Water','transparent',0,1,'H2O',7.9170750000000005,1,18,'transparent')])),nextShelfSlot());
        // var nmix=new Mixture([new Chemical('Hydrochloric Acid','green',0,1,'HCl',12,1,18,'green')]);
        // var base=new Mixture([new Chemical('Sodium Hydroxide','red',0,1,'NaOH',12,1,18,'red')]);
        // instantiate(new Flask(250,nmix),nextShelfSlot());
        // instantiate(new Bottle(250,base),nextShelfSlot());
        //End
        camera.position.set(0,table_height,table_height*4);
        function updateDisplay(i){
          document.getElementById('dtext').innerHTML='';
          if(i!=null){
            document.getElementById('dtext').innerHTML+='Name: '+omap[objects[i].id]+'<br>';
            if(iscontainer[objects[i].id]){
              document.getElementById('dtext').innerHTML+='Total Volume: '+objects[i].volume+'<br>';
              document.getElementById('dtext').innerHTML+='Chemical Volume: '+Number((objects[i].Mixture.volume).toFixed(3))+'<br>';
              if(objects[i].Slots!=null){
                for(var x=0;x<objects[i].Slots.length;x++){
                  if(objects[i].Slots[x].Slave!=null && omap[objects[objects[i].Slots[x].Slave].id]=='PhMeter')
                    document.getElementById('dtext').innerHTML+='Ph: '+Number((objects[i].Mixture.Ph).toFixed(3))+'<br>';                
                }
              }
            }
            else if(omap[objects[i].id]=='PhMeter'){
              if(objects[i].Master!=null){
                document.getElementById('dtext').innerHTML+='Ph: '+Number((objects[objects[i].Master].Ph).toFixed(3))+'<br>';
              }
            }
            //document.getElementById('dtext').innerHTML+='Name: '+omap[i]+'<br>';
          }
        }
        
        var presstate=null;
        renderScene();
        var date=new Date();
        var st=date.getTime();
        var ct=st;
        var dt=0;
        var et;
        document.getElementById('b0').click();
        callback();
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
            controls.update();
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        }
    }
    window.onload = init;
</script>
</body>
</html>