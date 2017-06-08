function Burette(h,fp){
    this.height=h;
    this.radius=h/24;
    this.fillp=fp;
    var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.3});
    var c1= new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,32);
    c1=new THREE.Mesh(c1,m);
    var c2= new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height,32,32);
    c2=new THREE.Mesh(c2,m);
    var s1=new THREE.CylinderGeometry(this.radius,this.radius*0.2,this.radius*3,32,1);
    s1=new THREE.Mesh(s1,m);
    s1.position.set(0,-1*(this.height+3*this.radius)/2,0);
    var s2=new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.18,this.radius*3,32,1);
    s2=new THREE.Mesh(s2,m);
    s2.position.set(0,-1*(this.height+3*this.radius)/2,0);
    var c3=new THREE.CylinderGeometry(this.radius*1.2,this.radius*1.2,this.radius*3.0,32,1);
    c3= new THREE.Mesh(c3,m);
    c3.rotation.z+=Math.PI/2;
    c3.position.set(0,-h/2,0);
    var b1=new ThreeBSP(c1);
    var b2=new ThreeBSP(c2);
    var b3=new ThreeBSP(s1);
    var b4=new ThreeBSP(s2);
    var b5=new ThreeBSP(c3);
    b3=b3.subtract(b4);
    b1=b1.union(b3);
    var r=b1.subtract(b2);
    var pivot =new THREE.Object3D();  
    r=r.toGeometry();
    r=new THREE.Mesh(r,m);
}
function Bottle(h,fp){
    this.height=h;
    this.radius=h/2;
    this.fillp=fp;
    this.xoff=0;
    this.yoff=h/2;
    this.zoff=0;
    var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.5});
    var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,1);
    c1=new THREE.Mesh(c1,m);
    var c2=new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.95,32,1);
    c2=new THREE.Mesh(c2,m);
    var c3= new THREE.CylinderGeometry(this.radius*0.3,this.radius,this.height*0.2,32,1);
    c3=new THREE.Mesh(c3,m);
    c3.position.set(0,this.height*0.6,0);
    var c4= new THREE.CylinderGeometry(this.radius*0.2,this.radius*0.9,this.height*0.2,32,1);
    c4=new THREE.Mesh(c4,m);
    c4.position.set(0,this.height*0.6,0);
    var c5= new THREE.CylinderGeometry(this.radius*0.3,this.radius*0.3,this.height*0.3,32,1);
    c5=new THREE.Mesh(c5,m);
    c5.position.set(0,this.height*0.7,0);
    var c6= new THREE.CylinderGeometry(this.radius*0.25,this.radius*0.25,this.height*0.5,32,1);
    c6=new THREE.Mesh(c6,m);
    c6.position.set(0,this.height*0.7,0);
    var t=new THREE.TorusGeometry(this.radius,this.radius*0.05,16,32);
    t=new THREE.Mesh(t,m);
    t.rotation.x+=Math.PI/2;
    t.position.set(0,this.height/2,0);
    c2.position.set(0,this.height*0.049,0);
    c1.position.set(0,0,0);
    var b1=new ThreeBSP(c1);
    var b2=new ThreeBSP(c2);
    var b3=new ThreeBSP(t);
    var b4=new ThreeBSP(c3);
    var b5=new ThreeBSP(c4);
    var b6=new ThreeBSP(c5);
    var b7=new ThreeBSP(c6);
    var r=b1.union(b4);
    r=r.subtract(b2);
    r=r.subtract(b5);
    r=r.union(b6);
    r=r.subtract(b7);
    r=r.toGeometry();
    r=new THREE.Mesh(r,m);
    r.position.set(0,this.height/2,0);
    var temp = new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.9*1,64,1);
    this.fl=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color: "blue"}));
    this.fl.position.set(0,this.height*0.9*fp*0.5-this.height*0.45,0);
    this.fl.scale.y=fp;
    r.add(this.fl);
    this.Mesh=r;
    this.Fill=Fillb;
    this.setPosition=setPosition;
    this.x=_x;
    this.y=_y;
    this.z=_z;
}
function Fillb(fp){
    this.fillp=fp;
    this.fl.scale.y=fp;
    this.fl.position.set(0,this.height*0.9*fp*0.5-this.height*0.45,0);
}
function Petridish(h,fp){
    this.height=h;
    this.radius=h*2;
    this.fillp=fp;
    var m=new THREE.MeshLambertMaterial({color: "white"});
    var s1=new THREE.SphereGeometry(this.radius,32,32);
    s1=new THREE.Mesh(s1,m);
    var s2=new THREE.SphereGeometry(this.radius*0.9,32,32);
    s2=new THREE.Mesh(s2,m);
    s2.position.set(0,this.radius,0);
    s1.position.set(0,this.radius,0);
    var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,1);
    c1=new THREE.Mesh(c1,m);
    c1.position.set(0,this.height/2,0);
    var b1=new ThreeBSP(s1);
    var b2=new ThreeBSP(c1);
    var b3=new ThreeBSP(s2);
    b1=b1.subtract(b3);
    var r=b1.intersect(b2);
    r=r.toGeometry();
    r=new THREE.Mesh(r,m);
    this.Mesh=r;
   
}

function BuretteStand(h,fp){
    this.height=h;
    this.radius=h/50;
    this.fillp=fp;
    var m=new THREE.MeshStandardMaterial({color: 0x121212});
    var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,1);
    c1=new THREE.Mesh(c1,m);
    var c2=new THREE.BoxGeometry(this.height/2,this.radius*3,this.height/3);
    c2=new THREE.Mesh(c2,m);
    c2.position.set((this.radius*4-this.height/2)/2,-this.height/2,0);
    var c3=new THREE.CylinderGeometry(this.radius/2,this.radius/2,this.height/6,32,1);
    c3=new THREE.Mesh(c3,m);
    c3.rotation.z+=Math.PI/2;
    c3.position.set(-this.height/12,this.height/8,0);
    var t1=new THREE.TorusGeometry(this.radius*2,this.radius/2,16,32);
    t1=new THREE.Mesh(t1,m);
    t1.rotation.x+=Math.PI/2;
    t1.position.set(-this.height/6-this.radius*2,this.height/8,0);
    var r=c1;
    r.add(c2);
    r.add(c3);
    r.add(t1);
    this.Mesh=r;
}
function Table(h){
    this.height=h;
    this.wood=h/10;
    this.xoff=0;
    this.yoff=h-this.wood/2;
    this.zoff=0;
    var m=new THREE.MeshStandardMaterial({color: 0x663300});
    var r=new THREE.BoxGeometry(h*2,this.wood,h*6/5);
    r=new THREE.Mesh(r,m);
    var p1=new THREE.BoxGeometry(this.wood,h*0.9,this.wood);
    p1=new THREE.Mesh(p1,m);
    p1.position.set(-h*0.9,-h*0.9/2,h*3*0.85/5);
    var p2=new THREE.BoxGeometry(this.wood,h*0.9,this.wood);
    p2=new THREE.Mesh(p2,m);
    p2.position.set(h*0.9,-h*0.9/2,h*3*0.85/5);
    var p3=new THREE.BoxGeometry(this.wood,h*0.9,this.wood);
    p3=new THREE.Mesh(p3,m);
    p3.position.set(-h*0.9,-h*0.9/2,-h*3*0.85/5);
    var p4=new THREE.BoxGeometry(this.wood,h*0.9,this.wood);
    p4=new THREE.Mesh(p4,m);
    p4.position.set(h*0.9,-h*0.9/2,-h*3*0.85/5);
    r.add(p1);
    r.add(p2);
    r.add(p3);
    r.add(p4);
    this.Mesh=r;
    this.Mesh.position.set(0,h-this.wood/2,0);
    this.setPosition=setPosition;
}

function testTube(h,fp){
    this.height=h;
    this.radius=h/6;
    this.fillp=fp;
    var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.3});
    var c1= new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,32);
    c1=new THREE.Mesh(c1,m);
    var c2= new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height,32,32);
    c2=new THREE.Mesh(c2,m);
    var s1=new THREE.SphereGeometry(this.radius,32,32);
    s1=new THREE.Mesh(s1,m);
    s1.position.set(0,-1*this.height/2,0);
    var s2=new THREE.SphereGeometry(this.radius*0.9,32,32);
    s2=new THREE.Mesh(s2,m);
    s2.position.set(0,-1*this.height/2,0);
    var b1=new ThreeBSP(c1);
    var b2=new ThreeBSP(c2);
    var b3=new ThreeBSP(s1);
    var b4=new ThreeBSP(s2);
    b3=b3.subtract(b4);
    b1=b1.union(b3);
    var r=b1.subtract(b2);
    r=r.toGeometry();
    r=new THREE.Mesh(r,m);
    this.Mesh=r;
}
function testTubeStand(h,fp){
    this.height=h;
    this.wood=h/10;
    this.fillp=fp;
    this.radius=h/8;
    var m=new THREE.MeshStandardMaterial({color: 0x663300});
    var r=new THREE.BoxGeometry(h,h/2,h/3);
    var s=new THREE.BoxGeometry(h/1.08,h/2.2,h/3);
    var c1= new THREE.CylinderGeometry(this.radius,this.radius,h/4,32,1);
    c1=new THREE.Mesh(c1,m);
    var c2= new THREE.CylinderGeometry(this.radius,this.radius,h/4,32,1);
    c2=new THREE.Mesh(c2,m);
    var c3= new THREE.CylinderGeometry(this.radius,this.radius,h/4,32,1);
    c3=new THREE.Mesh(c3,m);
    c1.position.set(-h/3,h/4,0);
    c2.position.set(h/3,h/4,0);
    c3.position.set(0,h/4,0);
    r=new THREE.Mesh(r,m);
    s=new THREE.Mesh(s,m);
    var b1=new ThreeBSP(r);
    var b2=new ThreeBSP(s);
    var b3=new ThreeBSP(c1);
    var b4=new ThreeBSP(c2);
    var b5=new ThreeBSP(c3);
    var x=b1.subtract(b2);
    x=x.subtract(b3);
    x=x.subtract(b4);
    x=x.subtract(b5);
    x=x.toGeometry();
    x=new THREE.Mesh(x,m);
    this.Mesh=x;
}
function shelf(h){
    this.height=h;
    this.wood=h/10;
    var m=new THREE.MeshStandardMaterial({color: 0x663300});
    var r=new THREE.BoxGeometry(h,h,h/3);
    var s1=new THREE.BoxGeometry(h/1.1,h/3.5,h/3);
    var s2=new THREE.BoxGeometry(h/1.1,h/3.5,h/3);
    var s3=new THREE.BoxGeometry(h/1.1,h/3.5,h/3);
    s2.translate(0,h/3.15,0);
    s3.translate(0,-h/3.15,0);
    var b1=new ThreeBSP(r);
    var b2=new ThreeBSP(s1);
    var b3=new ThreeBSP(s2);
    var b4=new ThreeBSP(s3);
    var x=b1.subtract(b2);
    x=x.subtract(b3);
    x=x.subtract(b4);
    x=x.toGeometry();
    x=new THREE.Mesh(x,m);
    this.Mesh=x;
}
function _x(){
    return this.Mesh.position.x-this.xoff;
}
function _y(){
    return this.Mesh.position.y-this.yoff;
}
function _z(){
    return this.Mesh.position.z-this.zoff;
}
function setPosition(x,y,z){
    this.Mesh.position.set(x+this.xoff,y+this.yoff,z+this.zoff);
}
function tellpi(){
    return Math.PI;
}