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
map.push([1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0]);
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
var omap=['Bottle','Beaker','Flask','TestTube','Burette','Pipette','Petridish','BunsenBurner','WeighingMachine','WatchGlass','TestTubeStand','Funnel','PhMeter','Shelf','Table','Basin'];
var issmall=[1,1,1,1,0,0,1,0,0,1,1,1,0];
var iscontainer=[1,1,1,1,1,1,1,0,0,1,0,0,0];
var maxhw=[3.41392,3.41392,5.303922,1.401053,1.31844,2.52583545,10,5,5,5,5,5,5,5,5,5];
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
         if(x>s.Mixture.volume){
            alert("Not enough fluid to transfer");
        }
        else if(x>(t.volume-t.Mixture.volume)){
            alert("Not enough capacity to transfer");
        }
        else{
            var str='pourF('+fi+','+se+','+x+')';
            console.log(str);
            journal.push(str);
            ApourF(fi,se,x,function(){
                resetPosition(fi);
            });
        }
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
    Amove(s,t.getPosition().x,t.getPosition().y+t.height,t.getPosition().z,function(){
        Transfer(s.Mixture,t.Mixture,x);
        s.Fill();
        t.Fill();
        Amove(objects[fi],temp.x,temp.y,temp.z,function(){
            if(cb!=undefined)
                cb();
            else if(callback!=undefined)
                callback();
        });       
    });
    
    if(callback!=undefined)
        callback();
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
            AwashF(fi,se,function(){
                resetPosition(fi);
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
        washF(fi,se);
        Amove(objects[fi],temp.x,temp.y,temp.z,function(){
            if(cb!=undefined)
                cb();
            else if(callback!=undefined)
                callback();
        }); 
    });

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
    s=objects[fi];
    t=objects[se];
    Amove(s,t.Slotpos(i).x,t.Slotpos(i).y,t.Slotpos(i).z);
    t.Slots[i].Slave=fi;
    s.Master=se;
    s.Masterslot=i;
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
function instantiate(obj,pos){
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
        str+=pos.z.toString()+'))';
    }
    else{
        var str='instantiate(';
        str+='new '+omap[obj.id]+'(),';
        str+='new THREE.Vector3(';
        str+=pos.x.toString()+',';
        str+=pos.y.toString()+',';
        str+=pos.z.toString()+'))';
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
    console.log("here");
    var fcb;
    if(cb!=undefined)
        fcb=cb;
    else
        fcb=callback;
    movez(obj,20,function(){
        movey(obj,y,function(){
            movex(obj,x,function(){
                movez(obj,z,fcb);
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
    spotLight.push(new THREE.PointLight(0xffffff,1));
    spotLight[table_n].position.set(table_n*table_height*2+table_n*basin_width, 80, -60);
    spotLight[table_n].castShadow = true;
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