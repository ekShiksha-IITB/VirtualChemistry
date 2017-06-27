var expo;
var geoCache=new Array(17);
for(var i=0;i<17;i++){
    geoCache[i]=new Array(1000);
}
class Equipment{
    constructor(xoff=0,yoff=0,zoff=0,id=undefined){
        this.height;
        this.half_width;
        this.xoff=xoff;
        this.yoff=yoff;
        this.zoff=zoff;
        this.id=0;
        this.setPosition=setPosition;
        this.x=_x;
        this.y=_y;
        this.z=_z;
        this.sety=sety;
        this.setz=setz;
        this.setx=setx;
        this.restrict=restrict;
        this.Master=null;
        this.Masterslot=null;
        this.Slots=null;
        this.getPosition=getPosition;
        this.tag=null;
        this.update=function(){};
        this.updateSlaves=function(){
        	if(this.Slots==null)
        		return;
        	for(var i=0;i<this.Slots.length;i++){
        		if(this.Slots[i].Slave!=null){
        			objects[this.Slots[i].Slave].update();
        			objects[this.Slots[i].Slave].updateSlaves();
        		}
        	}
        }
        this.updateMaster=function(){
        	if(this.Master==null)
        		return;
        	objects[this.Master].update();
        	objects[this.Master].updateMaster();
        }
    }
}

function BuretteStand(h,fp){
    this.height=h;
    this.radius=h/50;
    var m=new THREE.MeshStandardMaterial({color: 0x121212});
    var m2=new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,1);
    c1=new THREE.Mesh(c1,m);
    c1.position.set(0,this.height/2,(this.radius*4-this.height/2)/2)
    var c2=new THREE.BoxGeometry(this.height/3,this.radius*1.5,this.height/2);
    c2=new THREE.Mesh(c2,m2);
    var c3=new THREE.CylinderGeometry(this.radius/2,this.radius/2,this.height/6,32,1);
    c3=new THREE.Mesh(c3,m);
    c3.rotation.x+=Math.PI/2;
    c3.position.set(0,this.height/8,this.height/12);
    var t1=new THREE.TorusGeometry(this.radius*2,this.radius/2,16,32);
    t1=new THREE.Mesh(t1,m);
    t1.rotation.x+=Math.PI/2;
    t1.position.set(0,this.height/8,this.height/6+this.radius*2);
    c1.add(c3);
    c1.add(t1);
    var r=c2;
    r.add(c1);
    this.Mesh=r;
}
class Burette extends Equipment{
    constructor(v,mixt){
        super();
        this.Mixture=mixt;
        this.id=4;
        var h=Math.pow((24*24*v/Math.PI),1/3)*1.2;
        this.volume=v;
        this.sh=h+17;
        this.height=h;
        this.radius=h/24;
        this.bs=new BuretteStand(this.sh);
        var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.5});
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
        r=r.union(b5);
        r=r.toGeometry();
        r=new THREE.Mesh(r,m);
        r.add(c3);
        this.press=c3;
        this.bs.Mesh.position.set(0,-this.sh+this.height/2,0);
        this.Mesh=r;
        this.Mesh.add(this.bs.Mesh);
        this.yoff=this.sh*203/200-this.height/2;
        this.fl=null;   
        this.Fill=function(){
            if(this.Mixture.volume==0 && this.fl!=null){
                this.fl.parent.remove(this.fl);
                this.fl=null;
            }
            else if(this.fl!=null){
                this.fl.material.color.set(this.Mixture.Color);
                this.fl.position.set(0,(this.height*0.9*this.Mixture.volume*0.5)/this.volume-this.height*0.45,0);
                this.fl.scale.y=this.Mixture.volume/this.volume;
            }
            else if(this.Mixture.volume!=0){
                var temp = new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.9,64,1);
                this.fl=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color: this.Mixture.Color}));
                this.fl.position.set(0,(this.height*0.9*this.Mixture.volume*0.5)/this.volume-this.height*0.45,0);
                this.fl.scale.y=v=this.Mixture.volume/this.volume;
                this.Mesh.add(this.fl);
            }
        };
        this.Fill();
        this.Slots=new Array(2);
        this.Slots[0]=new Slot(null,new THREE.Vector3(0,Math.max(0,this.sh-8),0),17);
        this.Slots[1]=new Slot(null,new THREE.Vector3(0,this.sh*6/200,0),17);
        this.Slotpos=Slotpos;
        this.half_width=this.sh/6;
        this.stream=null;
        this.onPress=function(){
            if(this.Mixture.volume!=0){
                this.stream=new THREE.CylinderGeometry(this.radius*0.2,this.radius*0.2,17);
                this.stream=new THREE.Mesh(this.stream,new THREE.MeshBasicMaterial({color: this.Mixture.Color}));
                this.stream.position.set(0,-(this.height+15)/2,0);
                this.Mesh.add(this.stream);
            }
        }
        this.onPressEnd=function(fi){
            if(this.stream!=null){
                this.stream.parent.remove(this.stream);
                this.stream=null;
            }
        }
        this.duringPress=function(fi,dt){
            if(this.stream!=null){
	            var trans=Math.min(dt/100,this.Mixture.volume);
	            var trans2=0;
	            if(this.Slots[1].Slave!=null){
	            	trans2=Math.min(trans,objects[this.Slots[1].Slave].volume-objects[this.Slots[1].Slave].Mixture.volume);
	            }
	            trans-=trans2;
		        if(trans2!=0){
		            pourF(fi,this.Slots[1].Slave,trans2);
		        }
		        this.Mixture.Reduce(trans);
		        this.Fill();
                if(this.Mixture.volume==0){
                    this.stream.parent.remove(this.stream);
                    this.stream=null;
                }
            }
        }
        this.PressFor=function(fi,dt){
            var trans=Math.min(dt/100,this.Mixture.volume);
            var trans2=0;
            if(this.Slots[1].Slave!=null){
            	trans2=Math.min(trans,objects[this.Slots[1].Slave].volume-objects[this.Slots[1].Slave].Mixture.volume);
            }
            trans-=trans2;
	        if(trans2!=0){
	            pourF(fi,this.Slots[1].Slave,trans2);
	        }
	        this.Mixture.Reduce(trans);
	        this.Fill();
        }
    }
}
class Bottle extends Equipment{
    constructor(v,mixt){
        super();
        var h= Math.pow(v/(Math.PI*0.25),1/3);
        this.volume=v;
        this.height=h;
        this.radius=this.height/2;
        this.yoff=this.height/2;
        this.id=0;
        this.Mixture=mixt;
        var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.5});
        var r;
        if(geoCache[this.id][this.volume]!=null){
            r=geoCache[this.id][this.volume];
        }
        else{
            var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,1);
            c1=new THREE.Mesh(c1,m);
            var c2=new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.95,32,1);
            c2=new THREE.Mesh(c2,m);
            var c3= new THREE.CylinderGeometry(this.radius*0.3,this.radius,this.height*0.2,32,1);
            c3=new THREE.Mesh(c3,m);
            c3.position.set(0,this.height*0.6,0);
            var c4= new THREE.CylinderGeometry(this.radius*0.3,this.radius*0.9,this.height*0.2,32,1);
            c4=new THREE.Mesh(c4,m);
            c4.position.set(0,this.height*0.6,0);
            var c5= new THREE.CylinderGeometry(this.radius*0.4,this.radius*0.4,this.height*0.3,32,1);
            c5=new THREE.Mesh(c5,m);
            c5.position.set(0,this.height*0.7,0);
            var c6= new THREE.CylinderGeometry(this.radius*0.35,this.radius*0.35,this.height*0.5,32,1);
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
            r=b1.union(b4);
            r=r.subtract(b2);
            r=r.subtract(b5);
            r=r.union(b6);
            r=r.subtract(b7);
            r=r.toGeometry();
            geoCache[this.id][this.volume]=r;
        }
        r=new THREE.Mesh(r,m);
        this.height*=1.5;
        this.fl=null;
        this.Mesh=r;
        this.Fill=Fillb;
        this.Fill(this.Mixture.volume);
        this.half_width=this.radius;
        this.Slots=Array(2);
        this.Slots[0]=new Slot(null,new THREE.Vector3(0,0,this.radius*0.3),this.height);
        this.Slots[1]=new Slot(null,new THREE.Vector3(0,Math.max(0,this.height-8),0),this.height);
        this.Slotpos=Slotpos;
    }
}
function Fillb(volumef){
    if(this.Mixture.volume==0 && this.fl!=null){
        this.fl.parent.remove(this.fl);
        this.fl=null;
    }
    else if(this.fl!=null){
        this.fl.material.color.set(this.Mixture.Color);
        this.fl.position.set(0,(this.height*0.9*this.Mixture.volume*0.5/1.5)/this.volume-this.height*0.45/1.5,0);
        this.fl.scale.y=this.Mixture.volume/this.volume;
    }
    else if(this.Mixture.volume!=0){
        var temp = new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.9/1.5,64,1);
        this.fl=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color: this.Mixture.Color}));
        this.fl.position.set(0,(this.height*0.9*this.Mixture.volume*0.5/1.5)/this.volume-this.height*0.45/1.5,0);
        this.fl.scale.y=v=this.Mixture.volume/this.volume;
        this.Mesh.add(this.fl);
    }
}
class Petridish extends Equipment{ 
    constructor(v,mix){
        super();
        var h=v*3/20;
        this.Mixture=mix;
        this.volume=v;
        this.height=h;
        this.radius=h*2;
        this.id=9;
        this.xoff=0;
        this.zoff=0;
        this.yoff=h/2;
        var m=new THREE.MeshLambertMaterial({color: "white"});
        var s1=new THREE.SphereGeometry(this.radius,32,32);
        s1=new THREE.Mesh(s1,m);
        var s2=new THREE.SphereGeometry(this.radius*0.95,32,32);
        s2=new THREE.Mesh(s2,m);
        s2.position.set(0,this.radius,0);
        s1.position.set(0,this.radius,0);
        var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,1);
        c1=new THREE.Mesh(c1,m);
        c1.position.set(0,this.height/2,0);
        var b1=new ThreeBSP(s1);
        var b2=new ThreeBSP(c1);
        var b3=new ThreeBSP(s2);
        b2=b2.intersect(b1);
        var r=b2.subtract(b3);
        r=r.toGeometry();
        r=new THREE.Mesh(r,m);
        this.Mesh=r;
        this.half_width=this.radius*Math.sqrt(3)/2;
        this.Fill=function(){
            if(this.fl!=null){
                this.fl.parent.remove(this.fl);
                this.fl=null;
            }
            if(this.Mixture.volume!=0){
                var th=(Math.PI/3) * this.Mixture.volume/this.volume;
                this.fl=new THREE.CylinderGeometry(this.radius*0.95*Math.sin(th),this.radius*0.95*Math.sin(th),0.001,32,1);
                this.fl=new THREE.Mesh(this.fl,new THREE.MeshBasicMaterial({color:this.Mixture.Color}));
                this.fl.position.set(0,this.radius-this.height/2-this.radius*Math.cos(th),0);
                this.Mesh.add(this.fl);
            }
        }
    }
}
class Pipette extends Equipment{
    constructor(v,mix){
		super();
		this.Mixture=mix;
		this.volume=v;
		this.id=5;
		this.radius=Math.pow(3*v/(4*Math.PI),1/3)*1.5;
		var h=this.radius*8;
		this.height=h;
		this.sradius=this.radius/5;
		this.xoff=0;
		this.zoff=0;
		this.yoff=this.radius;
		this.x=_x;
		this.y=_y;
		this.z=_z;
		this.sety=sety;
		this.setx=setx;
		this.setz=setz;
		this.setPosition=setPosition;
		this.restrict=restrict;
		var c3=new THREE.CylinderGeometry(this.sradius,this.sradius,this.radius*1.5,32,1);
		var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.3});
		var c1= new THREE.CylinderGeometry(this.sradius*1.0001,this.sradius*1.0001,this.height,32,1);
		c1=new THREE.Mesh(c1,m);
		var c2= new THREE.CylinderGeometry(this.sradius*0.9,this.sradius*0.9,this.height,32,1);
		c2=new THREE.Mesh(c2,m);
		var s1=new THREE.SphereGeometry(this.radius,32,32);
		s1=new THREE.Mesh(s1,m);
		s1.position.set(0,0,0);
		var b1=new ThreeBSP(c1);
		var b2=new ThreeBSP(c2);
		var b3=new ThreeBSP(s1);
		var b4=new ThreeBSP(c3);
		b1=b1.union(b3);
		var r=b1.subtract(b2);
		b4=b4.subtract(b2);
		c3=b4.toGeometry();
		this.press=new THREE.Mesh(c3,new THREE.MeshStandardMaterial({color: "gray",transparent:true,opacity:0.3}));
		this.press.position.set(0,3.25*this.radius,0);	
		r=r.toGeometry();
		r=new THREE.Mesh(r,m);
		r.rotation.x-=Math.PI/2;
		this.Mesh=r;
		this.Mesh.add(this.press);
		this.half_width=this.radius;
		this.fl=null;
        this.Fill=function(){
            if(this.fl!=null){
                this.fl.parent.remove(this.fl);
                this.fl=null;
            }
            if(this.Mixture.volume!=0){
                var v1,v2,v3;
                v3=this.Mixture.volume;
                v1=Math.min(this.volume/10,v3);
                v3-=v1;
                v2=Math.min(this.volume*85/100,v3);
                v3-=v2;
                var c=new THREE.MeshBasicMaterial({color: this.Mixture.Color});
               	var c1=new THREE.CylinderGeometry(this.sradius*0.9,this.sradius*0.9,this.radius*3.13*v1/(this.volume/10),32,1);
               	c1=new THREE.Mesh(c1,c);
               	c1.position.set(0,-this.height/2+this.radius*3.13*v1/(this.volume/10)/2,0);
               	var temp=new THREE.SphereGeometry(0.0000001);
               	temp=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color:"white",transparent:true,opacity:0}));
               	temp.add(c1);
               	if(v3!=0){
               		var c2=new THREE.CylinderGeometry(this.sradius*0.9,this.sradius*0.9,this.radius*3.13*v3/(this.volume/10),32,1);
               		c2=new THREE.Mesh(c2,c);               		
               		c2.position.set(0,this.radius*0.87+this.radius*3.13*v3/(this.volume/10)/2,0);
               		temp.add(c2);
               	}
                if(v2!=0){
                	var sp=new THREE.SphereGeometry(this.radius*0.9,8,6,0,Math.PI*2,Math.PI-Math.PI*v2/(this.volume*85/100),Math.PI*v2/(this.volume*85/100));
                	sp=new THREE.Mesh(sp,c);
                	temp.add(sp);
                }
                this.fl=temp;
                this.Mesh.add(this.fl);
            }
        };
        this.Fill();
        this.droppable=function(){
        	if(this.Mixture.volume==0)
        		return 1;
        	return 0;
        }
        this.canBePressed=function(){
        	if(this.Mesh.rotation.x==0){
        		return 1;
        	}
        	return 0;
        }
        this.pick=function(s){
        	if(this.yoff==this.height/2)
        		return;
            this.Mesh.position.y+=(this.height/2 - this.radius);
            this.yoff=this.height/2;
            this.Mesh.rotation.x+=Math.PI/2;
            console.log("objects["+s.toString()+']'+".pick()");
            journal.push("objects["+s.toString()+']'+".pick()");       
        }
        this.drop=function(s){
            this.yoff=this.radius;
            this.Mesh.position.y-=(this.height/2 - this.radius);
            this.Mesh.rotation.x-=Math.PI/2;
            console.log("objects["+s.toString()+']'+".drop()");
            journal.push("objects["+s.toString()+']'+".drop()");
        }
        this.dir=1;
        this.onPress=function(){
        	if(this.Mixture.volume<this.volume && objects[this.Master].Mixture.volume!=0){
        		this.dir=1;
        	}
        	else{
        		this.dir=0;
        	}
        }
        this.onPressEnd=function(){

        }
        this.duringPress=function(fi,dt){
        	if(this.dir==1){
        		var x=Math.min(dt/500,this.volume*105/100 - this.Mixture.volume);
        		x=Math.min(x,objects[this.Master].Mixture.volume);
        		pourF(this.Master,fi,x);
        	}
        	else{
        		var x=Math.min(dt/500,this.Mixture.volume);
        		var y=Math.min(x,objects[this.Master].volume-objects[this.Master].Mixture.volume);
        		x-=y;
        		pourF(fi,this.Master,y);
        		this.Mixture.Reduce(x);
        	}
        }
        this.PressFor=this.duringPress;
    }
}
function Table(h){
    this.height=h;
    this.wood=h/10;
    this.xoff=0;
    this.yoff=h-this.wood/2;
    this.zoff=0;
    var m=new THREE.MeshStandardMaterial({color: 0x774400});
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
    this.x=_x;
    this.y=_y;
    this.z=_z;
    this.Mesh=r;
    this.Mesh.position.set(0,h-this.wood/2,0);
    this.setPosition=setPosition;
}
class TestTube extends Equipment{
	constructor(v,mix){
		super();
		this.id=3;	
	    var h=Math.pow((v*36/Math.PI),1/3)*1.2;
	    this.height=h;
	    this.radius=h/6;
	    this.Mixture=mix;
	    this.volume=v;
	    var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.4});
	    var c1= new THREE.CylinderGeometry(this.radius,this.radius,this.height,32,32);
	    c1=new THREE.Mesh(c1,m);
	    var c2= new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height,32,32);
	    c2=new THREE.Mesh(c2,m);
	    var s1=new THREE.SphereGeometry(this.radius,16,16,0,Math.PI*2,Math.PI/2,Math.PI/2);
	    s1=new THREE.Mesh(s1,m);
	    s1.position.set(0,-1*this.height/2,0);
	    var b1=new ThreeBSP(c1);
	    var b2=new ThreeBSP(c2);
	    var r=b1.subtract(b2);
	    r=r.toGeometry();
	    r=new THREE.Mesh(r,m);
	    r.add(s1);
	    this.Mesh=r;
	    this.xoff=0;
	    this.yoff=this.radius;
	    this.zoff=0;
	    this.x=_x;
	    this.y=_y;
	    this.z=_z;
	    this.setx=setx;
	    this.sety=sety;
	    this.setz=setz;
	    this.setPosition=setPosition;
	    this.half_width=this.radius;
	    this.Mesh.rotation.x-=Math.PI/2;
	    this.pick=function(s){
        	if(this.yoff==(this.height/2 + this.radius))
        		return;
            this.Mesh.position.y+=(this.height/2);
            this.yoff=this.height/2+this.radius;
            this.Mesh.rotation.x+=Math.PI/2;
            console.log("objects["+s.toString()+']'+".pick()");
            journal.push("objects["+s.toString()+']'+".pick()");       
        }
        this.drop=function(s){
            this.yoff=this.radius;
            this.Mesh.position.y-=(this.height/2);
            this.Mesh.rotation.x-=Math.PI/2;
            console.log("objects["+s.toString()+']'+".drop()");
            journal.push("objects["+s.toString()+']'+".drop()");
        }
        this.Fill=function(){
            if(this.Mixture.volume==0 && this.fl!=null){
                this.fl.parent.remove(this.fl);
                this.fl=null;
            }
            else if(this.fl!=null){
                this.fl.material.color.set(this.Mixture.Color);
                this.fl.scale.y=this.Mixture.volume/this.volume;
                this.fl.position.set(0,this.height*0.9*this.Mixture.volume*0.5/this.volume-this.height*0.45,0);
            }
            else if(this.Mixture.volume!=0){
                var temp = new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.9,64,1);
                this.fl=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color: this.Mixture.Color}));
                this.fl.position.set(0,this.height*0.9*this.Mixture.volume*0.5/this.volume-this.height*0.45*1.1,0);
                this.fl.scale.y=this.Mixture.volume/this.volume;
                this.Mesh.add(this.fl);
            }
        };
        this.droppable=function(){
        	if(this.Mixture.volume==0)
        		return 1;
        	return 0;
        }
        this.pourable=function(){
        	if(this.Master!=null)
        		return 1;
        	return 0;
        }	
	}
}
class TestTubeStand extends Equipment{
	constructor(){
		super();
		var h=10;
		this.id=10;
	    this.height=h;
	    this.wood=h/10;
	    this.radius=h/7;
	    var m=new THREE.MeshStandardMaterial({color: 0x663300});
	    var r=new THREE.BoxGeometry(this.radius*2.5,h/2,h/3);
	    var s=new THREE.BoxGeometry(this.radius*2.5/1.08,h/2.2,h/3.1);
	    var c1= new THREE.CylinderGeometry(this.radius,this.radius,h/4,32,1);
	    c1=new THREE.Mesh(c1,m);
	    var c2= new THREE.CylinderGeometry(this.radius,this.radius,h/4,32,1);
	    c2=new THREE.Mesh(c2,m);
	    var c3= new THREE.CylinderGeometry(this.radius,this.radius,h/4,32,1);
	    c3=new THREE.Mesh(c3,m);
	    c3.position.set(0,h/4,0);
	    r=new THREE.Mesh(r,m);
	    s=new THREE.Mesh(s,m);
	    s.position.set(0,0,((h/3)-(h/3.1))/2);
	    var b1=new ThreeBSP(r);
	    var b2=new ThreeBSP(s);
	    var b5=new ThreeBSP(c3);
	    var x=b1.subtract(b2);
	    x=x.subtract(b5);
	    x=x.toGeometry();
	    x=new THREE.Mesh(x,m);
	    this.Mesh=x;
	    this.half_width=this.radius*2.5/2;    
		this.yoff=h/4;
		this.Slots=Array(1);
		this.Slots[0]=new Slot(null,new THREE.Vector3(0,((h/3-h/3.1)/2),0));
		this.Slotpos=Slotpos;
	}
}
function Shelf(h){
    this.id=13;
    this.getPosition=getPosition;
    this.Slots=new Array(9);
    this.radius=h/2;
    this.height=h;
    this.wood=h/10;
    this.xoff=0;
    this.yoff=h/2;
    this.zoff=0;
    this.setPosition=setPosition;
    this.x=_x;
    this.y=_y;
    this.z=_z;
    this.sety=sety;
    this.setz=setz;
    this.setx=setx;
    var m=new THREE.MeshStandardMaterial({color: 0x774400});
    var r=new THREE.BoxGeometry(h,h,h/3);
    var s1=new THREE.BoxGeometry(h*0.9,h*0.8/3,h/3);
    var s2=new THREE.BoxGeometry(h*0.9,h*0.8/3,h/3);
    var s3=new THREE.BoxGeometry(h*0.9,h*0.8/3,h/3);
    s2.translate(0,h*0.05+h*0.8/3,0);
    s3.translate(0,-h*0.05-h*0.8/3,0);
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
    this.Slotpos=function(n){
        var x0=this.x(),y0=this.y();
        var xd,yd;
        x0-=this.height/4;
        y0+=this.height*0.15+2*this.height*0.8/3;
        xd=this.height/4;;
        yd=-this.height*0.05-this.height*0.8/3;
        return new THREE.Vector3(x0+(n%3)*xd,y0+Math.floor(n/3)*yd,this.z());
    }
}
class Beaker extends Equipment{
    constructor(v,mix){
        super();
        this.id=1;
        this.Mixture=mix;
        var h= Math.pow(v/(Math.PI*0.25),1/3);
        this.volume=v;
        this.height=h;
        this.radius=this.height/2;
        this.xoff=0;
        this.yoff=this.height/(2*0.9);
        this.zoff=0;
        this.setPosition=setPosition;
        this.x=_x;
        this.y=_y;
        this.z=_z;
        this.sety=sety;
        this.setz=setz;
        this.setx=setx;
        this.restrict=restrict;
        var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.5});
        var r;
        if(geoCache[this.id][this.volume]!=null){
            r=geoCache[this.id][this.volume];
        }
        else{
            var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height/0.9,32,1);
            c1=new THREE.Mesh(c1,m);
            var c2=new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.95/0.9,32,1);
            c2=new THREE.Mesh(c2,m);
            c2.position.set(0,this.height*0.049,0);
            c1.position.set(0,0,0);
            var b1=new ThreeBSP(c1);
            var b2=new ThreeBSP(c2);
            r=b1;
            r=r.subtract(b2);
            r=r.toGeometry();
            geoCache[this.id][this.volume]=r;
        }
        r=new THREE.Mesh(r,m);
        r.position.set(0,this.height*1.1/2,0);
        this.fl=null;
        this.Mesh=r;
        this.height*=1/0.9;
        this.Fill=function(){
            if(this.Mixture.volume==0 && this.fl!=null){
                this.fl.parent.remove(this.fl);
                this.fl=null;
            }
            else if(this.fl!=null){
                this.fl.material.color.set(this.Mixture.Color);
                this.fl.scale.y=this.Mixture.volume/this.volume;
                this.fl.position.set(0,this.height*0.9*this.Mixture.volume*0.5/this.volume-this.height*0.45,0);
            }
            else if(this.Mixture.volume!=0){
                var temp = new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.9,64,1);
                this.fl=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color: this.Mixture.Color}));
                this.fl.position.set(0,this.height*0.9*this.Mixture.volume*0.5/this.volume-this.height*0.45*1.1,0);
                this.fl.scale.y=this.Mixture.volume/this.volume;
                this.Mesh.add(this.fl);
            }
        };
        this.Fill();
        this.half_width=this.radius;
        this.Slots=Array(2);
        this.Slots[0]=new Slot(null, new THREE.Vector3(0,0,0),this.height);
    	this.Slots[1]=new Slot(null, new THREE.Vector3(0,0,this.radius*0.9),this.height);
    	this.Slotpos=Slotpos;
    }
}
class WatchGlass extends Equipment{
    constructor(v,mixt){
        super();
        this.Mixture=mixt;
        this.id=9;
        var h= Math.pow(v/(Math.PI*4),1/3);
        this.volume=v;
        this.height=h;
        this.radius=this.height*2;
        this.xoff=0;
        this.yoff=this.height/(2*0.9);
        this.zoff=0;
        this.setPosition=setPosition;
        this.x=_x;
        this.y=_y;
        this.z=_z;
        this.sety=sety;
        this.setz=setz;
        this.setx=setx;
        this.restrict=restrict;
        var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.5});
        var r;
        if(geoCache[this.id][this.volume]!=null){
            r=geoCache[this.id][this.volume];
        }
        else{
            var c1=new THREE.CylinderGeometry(this.radius,this.radius,this.height/0.9,32,1);
            c1=new THREE.Mesh(c1,m);
            var c2=new THREE.CylinderGeometry(this.radius*0.9,this.radius*0.9,this.height*0.95/0.9,32,1);
            c2=new THREE.Mesh(c2,m);
            c2.position.set(0,this.height*0.049,0);
            c1.position.set(0,0,0);
            var b1=new ThreeBSP(c1);
            var b2=new ThreeBSP(c2);
            r=b1;
            r=r.subtract(b2);
            r=r.toGeometry();
            geoCache[this.id][this.volume]=r;
        }
        r=new THREE.Mesh(r,m);
        r.position.set(0,this.height*1.1/2,0);
        this.fl=null;
        this.Mesh=r;
        this.Fill=Fillb;
        this.Fill(this.Mixture.volume);
        this.height*=1/0.9;
        this.half_width=this.radius;
    }
}
class Flask extends Equipment{
    constructor(v,mixt){
        super();
        var h=Math.pow(v*3/(Math.PI*0.2),1/3);
        this.Mixture=mixt;
        this.height=h;
        this.radius=h/2;
        this.x=0;
        this.y=0;
        this.z=0;
        this.xoff=0;
        this.yoff=h*2/5;
        this.zoff=0;
        this.volume=v;
        this.id=2;
        var h1,h2;
        h1=h*0.8;
        h2=h*0.2;
        var m=new THREE.MeshStandardMaterial({color: "white",transparent:true,opacity:0.3});
        var c1= new THREE.CylinderGeometry(this.radius*0.3,this.radius,h1,32,1);
        c1=new THREE.Mesh(c1,m);
        c1.position.set(0,h1/2,0);
        var c2= new THREE.CylinderGeometry(this.radius*0.25,this.radius*0.90,h1*0.95,32,1);
        c2=new THREE.Mesh(c2,m);
        c2.position.set(0,h1/2+h1/20,0);
        var c3= new THREE.CylinderGeometry(this.radius*0.3,this.radius*0.3,h2,32,1);
        var c4= new THREE.CylinderGeometry(this.radius*0.25,this.radius*0.25,h2,32,1);
        c3=new THREE.Mesh(c3,m);
        c4=new THREE.Mesh(c4,m);
        c3.position.set(0,h1+h2/2,0);
        c4.position.set(0,h1+h2/2,0);
        var b1=new ThreeBSP(c1);
        var b2=new ThreeBSP(c2);
        var b3=new ThreeBSP(c3);
        var b4=new ThreeBSP(c4);
        var r=b1;
        r=r.subtract(b2);
        b3=b3.subtract(b4);
        r=r.union(b3);
        r=r.toGeometry();
        r=new THREE.Mesh(r,m);
        this.x=_x;
        this.z=_z;
        this.y=_y;
        this.sety=sety;
        this.setz=setz;
        this.setx=setx;
        this.restrict=restrict;
        this.setPosition=setPosition;
        this.fl=null;
        this.Fill=ffill;
        this.Mesh=r;
        this.Fill();
        var v1=0.3*0.3*0.3;
        var hr=1-(this.Mixture.volume*(1-v1)/this.volume);
        hr=Math.pow(hr,1/3);
        this.half_width=this.radius;
        this.Slots=Array(2);
        this.Slots[0]=new Slot(null,new THREE.Vector3(0,0,this.radius*0.25),this.height);
        this.Slots[1]=new Slot(null,new THREE.Vector3(0,Math.max(this.height-8,0),0),this.height);
        this.Slotpos=Slotpos;
    }
}
function ffill(){
    var v1=0.3*0.3*0.3;
    var hr=1-(this.Mixture.volume*(1-v1)/this.volume);
    hr=Math.pow(hr,1/3);
    if(this.Mixture.volume==0 && this.fl!=null){
        this.fl.parent.remove(this.fl);
        this.fl=null;
    }
    else if(this.Mixture.volume!=0){
        if(this.fl!=null)
        	this.fl.parent.remove(this.fl);
        var temp=new THREE.CylinderGeometry(hr*this.radius*0.9,this.radius*0.9,this.height*0.95*(1-hr),32,1);
        temp=new THREE.Mesh(temp,new THREE.MeshBasicMaterial({color: this.Mixture.Color}));
        this.fl=temp;
        this.fl.position.set(0,this.height*(1-hr)/2-this.height*0.8/2,0);
        this.Mesh.add(this.fl);
    }
}
function Basin(w){
    this.radius=w/2;
    var hp;
    hp=w*7/6;
    this.xoff=0;
    this.yoff=w*7/12;
    this.zoff=0;
    var m1=new THREE.MeshLambertMaterial({color:0xf1f4f6});
    var m2=new THREE.MeshStandardMaterial({color:"gray"});
    var m3=new THREE.MeshStandardMaterial({color:"white"});
    var basin=new THREE.BoxGeometry(w,w/2,w);
    var pole=new THREE.CylinderGeometry(w/4,w/4,hp,32,1);
    basin=new THREE.Mesh(basin,m1);
    var extrude=new THREE.BoxGeometry(w*0.9,w/3,w*0.7);
    extrude=new THREE.Mesh(extrude,m1);
    extrude.position.set(0,w/12,w/10);
    var b1=new ThreeBSP(basin);
    var b2=new ThreeBSP(extrude);
    b1=b1.subtract(b2);
    b1=b1.toGeometry();
    basin=new THREE.Mesh(b1,m1);
    basin.position.set(0,(w*7/12)+(w/4),0);
    var r=new THREE.Mesh(pole,m1);
    r.add(basin);   
    var tap=new THREE.CylinderGeometry(w*0.07,w*0.07,w/4,32,1);
    tap=new THREE.Mesh(tap,m2);
    var noz=new THREE.CylinderGeometry(w*0.04,w*0.04,w/3,32,1);
    noz=new THREE.Mesh(noz,m2);
    var sph=new THREE.SphereGeometry(w*0.071,32);
    sph=new THREE.Mesh(sph,m3);
    sph.position.set(0,w/8,0);
    var axel=new THREE.CylinderGeometry(w*0.02,w*0.02,w/6,32,1);
    axel=new THREE.Mesh(axel,m3);
    axel.rotation.x+=Math.PI/2-Math.PI/12;
    axel.position.set(0,(w/40),(w/12)*1.73/2);
    sph.add(axel);        
    tap.add(sph);
    var vent=new THREE.CylinderGeometry(w*0.04,w*0.04,w/20,32,1);
    vent=new THREE.Mesh(vent,m2);
    noz.rotation.x+=Math.PI/2;
    noz.position.set(0,w/20,w/6);
    vent.position.set(0,w/45,(w/3)-(w*0.05));
    tap.add(vent);
    tap.add(noz);
    tap.position.set(0,w+w/8,-w*0.38);
    r.add(tap);
    this.x=_x;
    this.y=_y;
    this.z=_z;
    this.Mesh=r;
    this.axel=sph;
    this.half_width=this.radius;
    this.setPosition=setPosition;
}
class PhMeter extends Equipment{
	constructor(){
	    super();
	    this.id=12;
	    var h=4;
	    var box=new THREE.BoxGeometry(h,2*h,h/2);
        var mat=new THREE.MeshStandardMaterial({color:'white'});
        var mesh=new THREE.Mesh(box,mat);
        var b1=new ThreeBSP(mesh);
        var box2=new THREE.BoxGeometry(h*2/3,h/2,h/4);
        var mesh2=new THREE.Mesh(box2,mat);
        var display=new THREE.BoxGeometry(h*2/3,h/2,h/8);
        this.dynamicTexture  = new THREEx.DynamicTexture(200,128);
        this.dynamicTexture.texture.needsUpdate  = true;
            this.dynamicTexture.context.font= "bolder 90px Verdana";
        this.dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy()
        this.dynamicTexture.drawText('5.46', 4, 100, 'red');
        var material    = new THREE.MeshBasicMaterial({
            map : this.dynamicTexture.texture
        });
        display=new THREE.Mesh(display,material);
        display.position.set(0,h/2,h/4-h/8);
        mesh2.position.set(0,h/2,h/4-h/8);
        var b2=new ThreeBSP(mesh2);
        b1=b1.subtract(b2);
        box=b1.toGeometry();
        mesh=new THREE.Mesh(box,mat);
        mesh.add(display);
        var c1=new THREE.CylinderGeometry(h/40,h/40,h,32,1);
        var m2=new THREE.Mesh(c1,mat);
        var c2=new THREE.CylinderGeometry(h/40,h/40,h*3/2,32,1);
        var c3=new THREE.CylinderGeometry(h/40,h/40,3*h,32,1);
        var m3=new THREE.Mesh(c2,mat);
        var m4=new THREE.Mesh(c3,mat);
        m3.rotation.x+=Math.PI/2;
        m3.position.set(0,h+h,-h*3/4);
        m2.position.set(0,h/2 + h,0);
        m4.position.set(0,h*0.5,-h*3/2);
        mesh.add(m2);
        mesh.add(m3);
        mesh.add(m4);
        this.Mesh=mesh;
	    this.yoff=h;
	    this.zoff=h*3/2-h/40;
	    this.half_width=h/2;
        this.write=function(w){
            w=w.toFixed(2);
            this.dynamicTexture.clear('black');
            this.dynamicTexture.drawText(w,4,100,'red');
        }
        this.write(7.00);
        this.update=function(){
            if(this.Master!=null){
                this.write(objects[this.Master].Mixture.Ph);
            }
            else{
                this.write(7);
            }
        }
	}
}

    class BunsenBurner extends Equipment{
		constructor(){
			super();
		    var h=10;
			this.id=7;
		    this.height=h;
		    this.radius=h/10	;
		    var h1,h2,h3;
		    var r1,r2,r3;
		    h1=0.05*h;
		    h2=0.80*h;
		    h3=0.15*h;
		    r1=h/2.5;
		    r2=this.radius;
		    r3=this.radius*1.2;
		    var m1=new THREE.MeshStandardMaterial({color:"blue"});
		    var m2=new THREE.MeshStandardMaterial({color:"gray"});
		    var m3=new THREE.MeshStandardMaterial({color:"gold"});
		    var c1=new THREE.CylinderGeometry(r1,r1,h1,32,1);
		    var c2=new THREE.CylinderGeometry(r2,r2,h2,32,1);
		    var c3=new THREE.CylinderGeometry(r2*0.8,r2*0.8,h2,32,1);
		    var c4=new THREE.CylinderGeometry(r3,r3,h3,32,1);
		    var c5=new THREE.CylinderGeometry(r2*0.8,r2*0.8,h3,32,1);
		    c1=new THREE.Mesh(c1,m1);
		    c2=new THREE.Mesh(c2,m2);
		    c3=new THREE.Mesh(c3,m2);
		    c4=new THREE.Mesh(c4,m3);
		    c5=new THREE.Mesh(c5,m3);
		    c1.position.set(0,h1/2,0);
		    var b2=new ThreeBSP(c2);
		    var b3=new ThreeBSP(c3);
		    var b4=new ThreeBSP(c4);
		    var b5=new ThreeBSP(c5);
		    b2=b2.subtract(b3);
		    c2=b2.toGeometry();
		    c2=new THREE.Mesh(c2,m2);
		    c1.position.set(0,-(h1+h2)/2,0);
		    b4=b4.subtract(b5);
		    c4=b4.toGeometry();
		    c4=new THREE.Mesh(c4,m3);
		    c4.position.set(0,h2/2+(h3/2),0);
		    var r=c2;
		    r.add(c1);
		    r.add(c4);
		    var m4=new THREE.CylinderGeometry(this.radius*6,this.radius*6,this.radius*0.1,32,1);
		    m4=new THREE.Mesh(m4,m2);
		    m4.position.set(0,h2/2+h3+h3,0);
		    var h4=h3;
		    r.add(m4);
		    var ht=(h1+h2+h3+h4)*Math.sqrt(3)/2;
		    var m5=new THREE.CylinderGeometry(this.radius*0.1,this.radius*0.1,(h1+h2+h3+h4)*2/Math.sqrt(3),32,1);
		    m5=new THREE.Mesh(m5,m2);
		    m5.rotation.x+=Math.PI/6;
		    m5.position.set(0,h3*0.8,-this.radius*6);
		    m5.rotateY+=Math.PI/3;
		    r.add(m5);
		    var m6=new THREE.CylinderGeometry(this.radius*0.1,this.radius*0.1,(h1+h2+h3+h4)*2/Math.sqrt(3),32,1);
		    m6=new THREE.Mesh(m6,m2);
		    m6.rotation.x+=Math.PI/6;
		    m6.position.set(0,h3*0.8,-this.radius*6);
		    m6.rotation.y+=Math.PI/3;
		    var temp=new THREE.Mesh();
		    temp.add(m6);
		    temp.rotation.y+=Math.PI*2/3;
		    r.add(temp);
		    var m7=new THREE.CylinderGeometry(this.radius*0.1,this.radius*0.1,(h1+h2+h3+h4)*2/Math.sqrt(3),32,1);
		    m7=new THREE.Mesh(m7,m2);
		    m7.rotation.x+=Math.PI/6;
		    m7.position.set(0,h3*0.8,-this.radius*6);
		    m7.rotation.y+=Math.PI/3;
		    temp=new THREE.Mesh();
		    temp.add(m7);
		    temp.rotation.y-=Math.PI*2/3;
		    r.add(temp);
		    this.flame=null;
		    this.Mesh=r;
		    this.onPress=function(){
		        this.flame=new THREE.SphereGeometry(h/8);
		        this.flame=new THREE.Mesh(this.flame,new THREE.MeshStandardMaterial({color:'red'}));
		        this.flame.scale.x=0.5;
		        this.flame.scale.z=0.5;
		        this.flame.position.set(0,h*1.15/2,0);
		        this.Mesh.add(this.flame);
		    }
		    this.onPressEnd=function(){
		        this.flame.parent.remove(this.flame);
		        this.flame=null;
		    }
		    this.yoff=h1+h2/2;
		    this.onPress();
		    this.half_width=r1*2.1;
		}
	}
PrismGeometry = function ( vertices, height ) {

    var Shape = new THREE.Shape();

    ( function f( ctx ) {

        ctx.moveTo( vertices[0].x, vertices[0].y );
        for (var i=1; i < vertices.length; i++) {
            ctx.lineTo( vertices[i].x, vertices[i].y );
        }
        ctx.lineTo( vertices[0].x, vertices[0].y );

    } )( Shape );

    var settings = { };
    settings.amount = height;
    settings.bevelEnabled = false;
    THREE.ExtrudeGeometry.call( this, Shape, settings );

};
PrismGeometry.prototype = Object.create( THREE.ExtrudeGeometry.prototype );
class WeighingMachine extends Equipment{
	constructor(){
		super();
		this.id=8;
	    var h=15;
	    var mat1=new THREE.MeshStandardMaterial({color:'cyan'});
	    var mat2=new THREE.MeshStandardMaterial({color:'silver'});
	    var mat3=new THREE.MeshBasicMaterial({color:'black'});
	    var m1=new THREE.BoxGeometry(h,h*0.4,h);
	    m1=new THREE.Mesh(m1,mat1);
	    var m2=new THREE.BoxGeometry(h*0.9,h/30,h*0.9);
	    m2=new THREE.Mesh(m2,mat2);
	    var m3=new PrismGeometry([new THREE.Vector2(h/2,-h*0.2),new THREE.Vector2(h/2,h*0.2),new THREE.Vector2(h*0.85,-h*0.2)],h);
	    m3=new THREE.Mesh(m3,mat1);
	    m3.position.z-=h/2;
	    m2.position.set(0,h*0.25,0);
	    var m4=new THREE.BoxGeometry(h/10,h,h/10);
	    m4=new THREE.Mesh(m4,mat1);
	    m5=new THREE.BoxGeometry(h/10,h/3,h/2);
	    this.dynamicTexture  = new THREEx.DynamicTexture(350,128);
	    this.dynamicTexture.texture.needsUpdate  = true;
			this.dynamicTexture.context.font	= "bolder 90px Verdana";
		this.dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy()
		this.dynamicTexture.drawText('Hello', 4, 100, 'red');
	    var material    = new THREE.MeshBasicMaterial({
		    map : this.dynamicTexture.texture
		});
	    var m5=new THREE.Mesh(m5,material);
	    m5.position.set(-h/20 - h/2,h-0.2*h+h/6,0);
	    m4.position.set(-h/20 - h/2,h/2-h*0.2,0);
	    m1.add(m2);
	    m1.add(m3);
	    m1.add(m4);
	    m1.add(m5);
		m1.rotation.y-=Math.PI/2
	    this.Mesh=m1;
		this.yoff=h*0.2;
		this.half_width=h/2;
		this.Slots=Array(1);
		this.Slots[0]=new Slot(null,new THREE.Vector3(0,h*0.2+h*0.25+h/69,0),h);
		this.Slotpos=Slotpos;
		this.write=function(w){
			if(typeof w != 'string')
				w=w.toString();
			var dp=0;
			for(dp;dp<w.length;dp++){
				dp=dp;
				if(w[dp]=='.')
					break;
			}
			var f=w.slice(0,dp);
			var s='';
			if(dp<w.length){
				s=w.slice(dp+1,w.length);
			}
			if(s.length>2){
				s=s.slice(0,2);
			}
			while(f.length<2){
				f='0'+f;
			}
			while(s.length<2){
				s+='0';
			}
			var r=f+'.'+s+' g';
			this.dynamicTexture.clear('black');
			this.dynamicTexture.drawText(r,4,100,'red');
		}
		this.write(0);
		this.update=function(){
			if(this.Slots[0].Slave!=null){
				this.write(objects[this.Slots[0].Slave].Mixture.weight);
			}
			else{
				this.write(0);
			}
		}
	}
}
class Funnel extends Equipment{
	constructor(){
		super();
		this.id=11;
		var h=8;
        var r=h/2;
        var mat=new THREE.MeshPhysicalMaterial({color:"white"});
        var m1=new THREE.CylinderGeometry(r,r,r/2,32,1);
        m1=new THREE.Mesh(m1,mat);
        var m2=new THREE.CylinderGeometry(r*0.95,r*0.95,r/2,32,1);
        m2=new THREE.Mesh(m2,mat);
        var b1=new ThreeBSP(m1);
        var b2=new ThreeBSP(m2);
        b1=b1.subtract(b2);
        var m3=new THREE.CylinderGeometry(r,r/5,h/4,32,1);
        m3=new THREE.Mesh(m3,mat);
        var m4=new THREE.CylinderGeometry(r*0.95,r/5-r*0.05,h/4,32,1);
        m4=new THREE.Mesh(m4,mat);
        m3.position.set(0,-h/8-h/8,0);
        m4.position.set(0,-h/8-h/8,0);
        var b3=new ThreeBSP(m3);
        var b4=new ThreeBSP(m4);
        b1=b1.union(b3);
        b1=b1.subtract(b4);
        var m5=new THREE.CylinderGeometry(r/5,r/5,h,32,1);
        var m6=new THREE.CylinderGeometry(r/5 -r*0.05,r/5-r*0.05,h,32,1);
        m5=new THREE.Mesh(m5,mat);
        m6=new THREE.Mesh(m6,mat);
        m5.position.set(0,-h/8-h/4-h/2,0);
        m6.position.set(0,-h/8-h/4-h/2,0);
        var b5=new ThreeBSP(m5);
        var b6=new ThreeBSP(m6);
        b1=b1.union(b5);
        b1=b1.subtract(b6);
        b1=b1.toGeometry();
        this.yoff=h+h/4+h/8;
        this.half_width=r;
        this.Mesh=new THREE.Mesh(b1,mat);
	}
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
function setx(x){
	this.Mesh.position.x=x+this.xoff;
}
function sety(y){
	this.Mesh.position.y=y+this.yoff;
}
function setz(z){
	this.Mesh.position.z=z+this.zoff;
}
function setPosition(x,y,z){
    if(typeof x == typeof new THREE.Vector3()){
        this.Mesh.position.set(x.x+this.xoff,x.y+this.yoff,x.z+this.zoff)
    }
    else{
        this.Mesh.position.set(x+this.xoff,y+this.yoff,z+this.zoff);
    }
}
function restrict(x1,x2,y1,y2,z1,z2){
	if(this.x()<x1)
		this.setx(x1);
	if(this.x()>x2)
		this.setx(x2);
	if(this.y()<y1)
		this.sety(y1);
	if(this.y()>y2)
		this.sety(y2);
	if(this.z()<z1)
		this.setz(z1);
	if(this.z()>z2)
		this.setz(z2);
}
function getPosition(){
    return new THREE.Vector3(this.x(),this.y(),this.z());
}
class Slot{
    constructor(obj,pos,distance=10000000000){
        this.Slave=obj;
        this.Position=pos;
        this.Distance=distance;
    }
}
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
function Slotpos(n){
    return new THREE.Vector3(this.Slots[n].Position.x+this.x(),this.Slots[n].Position.y+this.y(),this.Slots[n].Position.z+this.z());
}
function updatePos(obj){
    if(obj.Slots!=null){
        for(var i=0;i<obj.Slots.length;i++){
            if(obj.Slots[i].Slave!=null){
                objects[obj.Slots[i].Slave].setPosition(obj.Slotpos(i));
                updatePos(objects[obj.Slots[i].Slave]);
            }
        }
    }
}
function IsSameVector3(a,b){
    return ((a.x==b.x) && (a.y==b.y) && (a.z==b.z));
}