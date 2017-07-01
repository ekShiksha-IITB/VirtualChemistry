var eps=Math.pow(10,-3);
var reactions=[];
var map=[];
map.push([1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1]);
map.push([1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1]);
map.push([1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1]);
map.push([1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var CanBeMaster=[];
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,[1],[0],0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,[0],0,0,0,0,0,[0],[1],0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,[1],[0],0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([[1],[1],[1],0,0,0,0,0,0,[1],0,[0],0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,[0],0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,[0],0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var isanimated=[];
isanimated['pourF']=true;
isanimated['move']=true;
isanimated['PressFor']=true;
isanimated['washF']=true;
isanimated['PlaceF']=true;
var omap=['Bottle','Beaker','Flask','TestTube','Burette','Pipette','Petridish','BunsenBurner','WeighingMachine','WatchGlass','TestTubeStand','Funnel','PhMeter','Shelf','Table','Basin'];
var issmall=[1,1,1,1,0,0,1,0,0,1,1,1,0];
var iscontainer=[1,1,1,1,1,1,1,0,0,1,0,0,0];
var maxhw=[3.41392,3.41392,5.303922,1.401053,1.31844,2.52583545,5.2,5,5,2.674,1.786,4,2,5,5,5];
var choices=[];
choices[0]=[100,150,250];
choices[1]=[100,150,250];
choices[2]=[100,150,250];
choices[3]=[20,30];
choices[4]=[50,100];
choices[5]=[10,20];
choices[6]=[20];
choices[7]=[100,150,250];
choices[8]=[100,150,250];
choices[9]=[30];
choices[10]=[100,150,250];
choices[11]=[100,150,250];
choices[12]=[100,150,250];
choices[13]=[100,150,250];
choices[14]=[100,150,250];
choices[15]=[100,150,250];
function operate(s,t){
    var c=map[objects[s].id][objects[t].id];
    if(c==0){   
        resetPosition(s);
    }
    if(c==1){
        pour(s,t);
    }
}
function pour(fi,se){
    s=objects[fi];
    t=objects[se];
    if(s.Mixture.volume==0){
        resetPosition(fi);
        return;
    }
    if(typeof t.pourable== 'function' && !t.pourable()){
        resetPosition(fi);
        return;
    }
    if(s.Slots!=null){
        for(var i=0;i<s.Slots.length;i++){
            if(s.Slots[i].Slave!=null){
                resetPosition(fi);
                return;
            }
        }
    }
    if(t.Slots!=null){
        for(var i=0;i<t.Slots.length;i++){
            if(t.Slots[i].Slave!=null && omap[objects[t.Slots[i].Slave].id]=='Pipette'){
                resetPosition(fi);
                return;
            }
        }
    }
    var x=prompt("Tell Volume to transfer ");
    if(x!=null){
        x=parseFloat(x);
        if(Math.abs(s.Mixture.volume-x)<Math.pow(10,-5)){
            x=Math.min(x,s.Mixture.volume);
        }
        if(x>s.Mixture.volume){
            alert("Not enough fluid to transfer");
            resetPosition(fi);
        }
        else if(x>(t.volume-t.Mixture.volume)){
            alert("Not enough capacity to transfer");
            resetPosition(fi);
            
        }
        else{
            var str='pourF('+fi+','+se+','+x+')';
            console.log(str);
            journal.push(str);
            dragControls.deactivate();
            dmove(s,t.getPosition().x+s.inradius,t.getPosition().y+t.height+5,t.getPosition().z,function(){
                ApourF(fi,se,x,function(){
                    resetPosition(fi);
                    dragControls.activate();
                });
            });
        }
    }
    else{
        resetPosition(fi);
    }
}
function pourF(fi,se,x){
    if(x==0)
        return;
    var s=objects[fi];
    var t=objects[se];
    Transfer(s.Mixture,t.Mixture,x);
    s.Fill();
    t.Fill();
}
function ApourF(fi,se,x,cb){
    if(x==0)
        return;
    var s=objects[fi];
    var t=objects[se];
    var temp=s.getPosition();
    Amove(s,t.getPosition().x+s.inradius,t.getPosition().y+t.height+5,t.getPosition().z,function(){
        rotatep(fi,se,x,Math.PI*3/5,function(){
        },function(){
            Amove(objects[fi],temp.x,temp.y,temp.z,function(){
                if(cb!=undefined)
                    cb();
                else if(callback!=undefined)
                    callback();
            });
        });       
    });
}
function wash(fi,se){
    s=objects[fi];
    if(map[objects[fi].id][16]==0){
        resetPosition(fi);
        return;
    }
    if(s.Slots!=null){
        for(var i=0;i<s.Slots.length;i++){
            if(s.Slots[i].Slave!=null){
                resetPosition(fi);
                return;
            }
        }
    }
    if(confirm('Are you sure you want to wash this equipment?')){
        if (typeof s.Fill == 'function') {
         
            var str="washF("+fi.toString()+','+se.toString()+')';
            journal.push(str);
            console.log(str);
                    dragControls.deactivate();
            dmove(objects[fi],basins[se].x(),0,5,function(){
                AwashF(fi,se,function(){
                    resetPosition(fi);
                    dragControls.activate();
                    
                });
            });
        }
    }
}
function washF(fi,se){
    s=objects[fi];
    s.Mixture=new Mixture([]);
    s.Fill();
}
function AwashF(fi,se,cb){
    var temp=objects[fi].getPosition();
    console.log(basins[se].x());
    Amove(objects[fi],basins[se].x(),0,5,function(){
        movey(objects[fi],-12,function(){
            movez(objects[fi],-2,function(){
                basins[se].on();
                cdelay(500,function(){
                    rotatez(objects[fi],Math.PI*2/3,function(){basins[se].off();washF(fi,se);},function(){
                        movez(objects[fi],5,function(){
                            movey(objects[fi],0,function(){
                                Amove(objects[fi],temp.x,temp.y,temp.z,function(){
                                    if(cb!=undefined)
                                        cb();
                                    else if(callback!=undefined)
                                        callback();
                                });
                            });
                        })
                    });
                });
            });
        }); 
    });
}
function cdelay(t,cb){
    var date=new Date();
    var it=date.getTime();
    function loop(){
        date=new Date();
        if(date.getTime()-it >= t){
            if(cb!=undefined)
                cb();
            else if(callback!=undefined)
                callback();
            return;
        }
        controls.update();
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }
    loop();
}
function Place(fi,se){
    s=objects[fi];
    t=objects[se];
    if(CanBeMaster[t.id][s.id]===0)
        return 0;
    if(s.Slots!=null){
        for(var i=0;i<s.Slots.length;i++){
            if(s.Slots[i].Slave!=null && omap[objects[s.Slots[i].Slave].id]=='Pipette')
                return 0;
        }
    }
    if(Array.isArray(CanBeMaster[t.id][s.id])){
        for(var i=0;i<CanBeMaster[t.id][s.id].length;i++){
            var j=CanBeMaster[t.id][s.id][i];
            if(t.Slots[j].Slave==null && distance(t.Slotpos(j),s.getPosition())<t.Slots[j].Distance){
                PlaceF(fi,se,j);
                return 1;
            }
        }
    }
    else{
        for(var i=0;i<t.Slots.length;i++){
            if(t.Slots[i].Slave==null){
                PlaceF(fi,se,i);                
                return 1;
            }
        }
    }
    return 0;
}
function APlaceF(fi,se,i){
    var s=objects[fi];
    var t=objects[se];
    t.Slots[i].Slave=fi;
    s.Master=se;
    s.Masterslot=i;
    Amove(s,t.Slotpos(i).x,t.Slotpos(i).y,t.Slotpos(i).z,function(){
        totalUpdate(objects[fi]);
        callback();
    });
}
function PlaceF(fi,se,i){
    var str="PlaceF(";
    str+=fi.toString();
    str+=',';
    str+=se.toString();
    str+=',';
    str+=i.toString();
    str+=')';
    console.log(str);
    journal.push(str);
    s=objects[fi];
    t=objects[se];
    move(s,t.Slotpos(i));
    t.Slots[i].Slave=fi;
    s.Master=se;
    s.Masterslot=i;
}
function Dethrone(fi,se,i){
    var str="Dethrone(";
    str+=fi.toString();
    str+=',';
    str+=se.toString();
    str+=',';
    str+=i.toString();
    str+=')';
    console.log(str);
    journal.push(str);
    s=objects[fi];
    t=objects[se];
    t.Slots[i].Slave=null;
    s.Master=null;
}
var ADethrone=Dethrone;
function isSlave(fi,se){
    if(CanBeMaster[objects[se].id][objects[fi].id]===0)
        return 0;
    if(fi==null)
        return 0;
    if(objects[se].Slots==null)
        return 0;
    for(var i=0;i<objects[se].Slots.length;i++){
        if(objects[se].Slots[i].Slave == fi){
            return 1;
        }
    }
    return 0;
}
function instantiate(obj,pos,label){
    if(label!=undefined)
        obj.label=label;
    objects.push(obj);
    objectsM.push(obj.Mesh);
    scene.add(obj.Mesh);
    if(iscontainer[obj.id]){
        var str='instantiate(';
        str+='new '+omap[obj.id]+'(';
        str+=obj.volume.toString();
        str+=',';
        str+=obj.Mixture.toString()+')';
        str+=',';
        str+='new THREE.Vector3(';
        str+=pos.x.toString()+',';
        str+=pos.y.toString()+',';
        str+=pos.z.toString()+')';
        if(label!=undefined){
            str+=','+label;
        }
        str+=')';
    }
    else{
        var str='instantiate(';
        str+='new '+omap[obj.id]+'(),';
        str+='new THREE.Vector3(';
        str+=pos.x.toString()+',';
        str+=pos.y.toString()+',';
        str+=pos.z.toString()+')';
        if(label!=undefined){
            str+=','+label;
        }
        str+=')';
    }
    console.log(str);
    journal.push(str);
    if(obj.press!=null){
        pressobjects.push(obj.press);
        pressmap.push((objects.length-1));
    }
    obj.setPosition(pos);
}
function move(obj,x,y,z){
    if(typeof x == typeof new THREE.Vector3(0,0,0)){
        y=x.y;
        z=x.z;
        x=x.x;
    }
    obj.setPosition(x,y,z);
    if(obj.Slots!=null){
        for(var i=0;i<obj.Slots.length;i++){
            if(obj.Slots[i].Slave!=null){
                move(objects[obj.Slots[i].Slave],obj.Slotpos(objects[obj.Slots[i].Slave].Masterslot));
            }
        }
    }
}
function Amove(obj,x,y,z,cb){
    var fcb;
    if(cb!=undefined)
        fcb=cb;
    else
        fcb=callback;
    if(Math.abs(obj.x()-x)<Math.pow(10,-5) && Math.abs(obj.y()-y)<Math.pow(10,-5) && Math.abs(obj.z()-z)<Math.pow(10,-5)){
        if(fcb!=undefined)
            fcb();
        return;
    }
    movez(obj,15,function(){
        movey(obj,y,function(){
            movex(obj,x,function(){
                movez(obj,z,fcb);
            });
        });
    });
}
function dmove(obj,x,y,z,cb){
    var fcb;
    if(cb!=undefined)
        fcb=cb;
    else
        fcb=callback;
    movez(obj,z,function(){
        movey(obj,y,function(){
            movex(obj,x,function(){
                if(fcb!=undefined){
                    fcb();   
                }
            });
        });
    });
}
function movex(obj,x,cb){
    var date=new Date();
    var pt=date.getTime();
    var dt=0,ct=0;
    var dir=1;
    if(obj.x()>x)
        dir=-1;
    function loop(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;
        pt=ct;
        if(dir*(obj.x()+dir*dt/25)>=dir*x){
            move(obj,x,obj.y(),obj.z());
            if(cb!=undefined)
                cb();
            return;
        }
        else{
            move(obj,obj.x()+dir*dt/25,obj.y(),obj.z());    
        }
        controls.update();
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }
    loop();
}
function movey(obj,y,cb){
    //console.log(y);
    var date=new Date();
    var pt=date.getTime();
    var dt=0,ct=0;
    var dir=1;
    if(obj.y()>y)
        dir=-1;
    function loop(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;   
        pt=ct;
        if(dir*(obj.y()+dir*dt/25) >=dir*y){
            move(obj,obj.x(),y,obj.z());
            if(cb!=undefined)
                cb();
            return;
        }
        else{
            move(obj,obj.x(),obj.y()+dir*dt/25,obj.z());    
        }
        controls.update();
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }
    loop();
}
function movez(obj,z,cb){
    var date=new Date();
    var pt=date.getTime();
    var dt=0,ct=0;
    var dir=1;
    if(obj.z()>z)
        dir=-1;
    function loop(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;   
        pt=ct;
        if(dir*(obj.z()+dir*dt/25) >=dir*z){
            move(obj,obj.x(),obj.y(),z);
            if(cb!=undefined)
                cb();
            return;
        }
        else{
            move(obj,obj.x(),obj.y(),obj.z()+dir*dt/25);    
        }
        controls.update();
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }
    loop();
}
function rotatep(fi,se,x,th,cb,cb2){
    obj=objects[fi];
    obj2=objects[se];
    var fcb=cb;
    if(fcb==undefined)
        fcb=callback;
    var date=new Date();
    var dt=0,ct=0;
    var ipos=obj.getPosition();
    var mas=new THREE.Mesh();
    obj.Mesh.position.set(+obj.inradius,obj.yoff-obj.height,0);
    mas.add(obj.Mesh);
    mas.position.set(ipos.x-obj.inradius,ipos.y+obj.height,ipos.z);
    scene.add(mas);
    var pt=date.getTime();
    var sh=(obj2.height+5+obj.height);
    if(obj2.sh!=undefined){
        sh=(obj2.height+5+obj.height-17);
    }
    var stream=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,sh,32,1),new THREE.MeshBasicMaterial({color:obj.Mixture.Color}));
    stream.position.set(mas.position.x,mas.position.y-(sh)/2,mas.position.z);
    var sf=0;
    var ppr=x/th;
    var ctrans=0;
    function loop1(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;
        pt=ct;
        if(mas.rotation.z >= th/2 && !sf){
            sf=1;
            scene.add(stream);
        }
        if(1*(mas.rotation.z+1*dt/1000) >=1*th){
            mas.rotation.z=th;
            if(cb!=undefined)
                cb();
            loop2();
            return;
        }
        else{
            ctrans=(dt/1000)*ppr;
            mas.rotation.z+=dt/1000;
        }
        if(sf){
            ctrans=Math.min(ctrans,x);
            pourF(fi,se,ctrans);
            x-=ctrans;
        }
        totalUpdate(objects[fi]);
        totalUpdate(objects[se]);
        controls.update();
        requestAnimationFrame(loop1);
        renderer.render(scene, camera);
    }
    function loop2(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;
        pt=ct;
        if(mas.rotation.z <= th/2 && sf){
            pourF(fi,se,x);
            totalUpdate(objects[se]);
            totalUpdate(objects[fi]);
            sf=0;
            scene.remove(stream);
        }
        if(1*(mas.rotation.z-1*dt/1000) <=0){
            mas.rotation.z=0;
            obj.Mesh.parent.remove(obj.Mesh);
            obj.setPosition(ipos);
            scene.add(obj.Mesh);
            if(cb2!=undefined)
                cb2();
            else if(callback!=undefined)
                callback();
            return;
        }
        else{
            ctrans=(dt/1000)*ppr;
            mas.rotation.z-=1*dt/1000;
        }
        if(sf){
            ctrans=Math.min(ctrans,x);
            pourF(fi,se,ctrans);
            x-=ctrans;
        }
        totalUpdate(objects[fi]);
        totalUpdate(objects[se]);
        controls.update();
        requestAnimationFrame(loop2);
        renderer.render(scene, camera);
    }
    loop1();   
}
function rotatez(obj,th,cb,cb2){
    var fcb=cb;
    if(fcb==undefined)
        fcb=callback;
    var date=new Date();
    var dt=0,ct=0;
    var ipos=obj.getPosition();
    var mas=new THREE.Mesh();
    obj.Mesh.position.set(+obj.inradius,obj.yoff-obj.height,0);
    mas.add(obj.Mesh);
    mas.position.set(ipos.x-obj.inradius,ipos.y+obj.height,ipos.z);
    scene.add(mas);
    var pt=date.getTime();
    function loop1(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;
        pt=ct;
        if(1*(mas.rotation.z+1*dt/1000) >=1*th){
            mas.rotation.z=th;
            if(cb!=undefined)
                cb();
            loop2();
            return;
        }
        else{
            mas.rotation.z+=1*dt/1000;
        }
        controls.update();
        requestAnimationFrame(loop1);
        renderer.render(scene, camera);
    }
    function loop2(){
        date=new Date();
        ct=date.getTime();
        dt=ct-pt;
        pt=ct;
        if(1*(mas.rotation.z-1*dt/1000) <=0){
            mas.rotation.z=0;
            obj.Mesh.parent.remove(obj.Mesh);
            obj.setPosition(ipos);
            scene.add(obj.Mesh);
            if(cb2!=undefined)
                cb2();
            else if(callback!=undefined)
                callback();
            return;
        }
        else{
            mas.rotation.z-=1*dt/1000;
        }
        controls.update();
        requestAnimationFrame(loop2);
        renderer.render(scene, camera);
    }
    loop1();   
}
function resetPosition(s){
    if(prevmaster!=null){
        PlaceF(s,prevmaster,prevslot);
    }
    else{
        if(typeof objects[s].drop == 'function'){
            objects[s].drop(s);
        }
        objects[s].setx(prevcor.x);
        objects[s].sety(prevcor.y);
        objects[s].setz(prevcor.z);
    }
    updatePos(objects[s]);
}
function distance(a,b){
    return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y)+(a.z-b.z)*(a.z-b.z));
}
function addTable(){
    tables.push(new Table(table_height));
    tables[table_n].setPosition(table_n*table_height*2+table_n*basin_width,-table_height,0);
    scene.add(tables[table_n].Mesh);
    shelves.push(new Shelf(shelf_height));
    shelves[table_n].setPosition(table_n*shelf_height*2+table_n*basin_width,0,-table_height*0.43);
    scene.add(shelves[table_n].Mesh);
    basins.push(new Basin(basin_width));
    basins[table_n].setPosition((2*table_n+1)*table_height+((1/2)+table_n)*basin_width,-basin_height,0);
    scene.add(basins[table_n].Mesh);
    spotLight.push(new THREE.SpotLight(0xffffff,1));
    spotLight[table_n].position.set(table_n*table_height*2+table_n*basin_width, 80, -60);
    spotLight[table_n].castShadow = true;
    spotLight[table_n].target=tables[table_n].Mesh;
    scene.add(spotLight[table_n]);
    tablesM.push(tables[table_n].Mesh);
    table_n++;
    journal.push("addTable()");
    console.log("addTable()");
}
function nextShelfSlot(){
    for(var i=0;i<table_n;i++){
        for(var j=0;j<9;j++){
            var flag=1;
            for(var k=0;k<objects.length;k++){
                if(distance(objects[k].getPosition(),shelves[i].Slotpos(j))<eps){
                    flag=0;
                    break;
                }
            }
            if(flag){
                return shelves[i].Slotpos(j);
            }
        }
    }
    addTable();
    return shelves[table_n-1].Slotpos(0);
}
function Construct(obj){
    var str='';
    str+=omap[obj.id];
    
}
function drain(mix,vol){
    for(var i=0;i<mix.Chemicals.length;i++){
        
    }
}
function updateDisplay(i){
  document.getElementById('dtext').innerHTML='';
    if(i!=null){
        curdisp=i;
    }
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
  }
  function emptyScene(){
    table_n=0;
    objects=new Array(0);
    for(var i=0;i<objectsM.length;i++){
        scene.remove(objectsM[i]);
    }
    for(var i=0;i<tables.length;i++){
        scene.remove(tables[i].Mesh);
        scene.remove(basins[i].Mesh);
        scene.remove(shelves[i].Mesh);
    }
    tables=new Array(0);
    basins=new Array(0);
    shelves=new Array(0);
    objectsM=new Array(0);
    objectsC=new Array(0);
    pressobjects=new Array(0);
    pressmap=new Array(0);
    dragControls.dispose();
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
    renderer.render(scene, camera);
}