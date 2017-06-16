var reactions;
var map=[];
map.push([1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0]);
map.push([1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0]);
map.push([1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
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
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([[1],[1],[1],0,0,0,0,0,0,[1],0,[0],0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
CanBeMaster.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var omap=['Bottle','Beaker','Flask','TestTube','Burette','Pipette','Petridish','BunsenBurner','WeighingMachine','WatchGlass','TestTubeStand','Funnel','PhMeter','Shelf','Table','Basin'];
var issmall=[1,1,1,1,0,0,1,0,0,1,1,1,0];
var iscontainer=[1,1,1,1,1,1,1,0,0,1,0,0,0];
function operate(s,t){
    var c=map[objects[s].id][objects[t].id];
    if(c==0){
        // objects[s].setx(prevcor.x);
        // objects[s].sety(prevcor.y);
        // objects[s].setz(prevcor.z);
        resetPosition(s);
    }
    if(c==1){
        pour(s,t);
    }
}
function pour(fi,se){
    s=objects[fi];
    t=objects[se];
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
            pourF(fi,se,x);
        }
    }
    resetPosition(fi);
}
function pourF(fi,se,x){
    var s=objects[fi];
    var t=objects[se];
    Transfer(s.Mixture,t.Mixture,x);
    s.Fill(s.Mixture.volume);
    t.Fill(t.Mixture.volume);
}
function wash(fi,se){
    s=objects[fi];
    t=objects[se];
    if(confirm('Are you sure you want to wash this equipment?')){
        if (typeof s.Fill == 'function') {
            s.Mixture=new Mixture(undefined,undefined,0,[],[],[],[],[]);
            s.Fill();
        }
    }
    resetPosition(fi);
}
function Place(fi,se){
    s=objects[fi];
    t=objects[se];
    if(CanBeMaster[t.id][s.id]==0)
        return 0;
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
    s.setPosition(t.Slotpos(i));
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
function Transfer(a,b,vol){
    //console.log(a.volume);
    //console.log(b.volume);
    for(var i=0;i<b.Chemicals.length;i++){
        b.Chemicals[i].Concentration*=((b.volume)/(b.volume+vol));
    }
    a.volume-=vol;
    b.volume+=vol;
    for(var i=0;i<a.Chemicals.length;i++){
        var flag=0;
        for(var j=0;j<b.Chemicals.length;j++){
            //console.log(j+" "+b.Chemicals[j].Concentration);
            if(b.Chemicals[j].Name==a.Chemicals[i].Name){
                b.Chemicals[j].Concentration+=a.Chemicals[i].Concentration*vol/b.volume;
                flag=1;
                break;
            }
        }
        if(!flag){
            var temp=new Chemical(a.Chemicals[i].Name,a.Chemicals[i].Concentration,a.Chemicals[i].Color,a.Chemicals[i].Nature,a.Chemicals[i].Nfac);
            temp.Concentration*=(vol/b.volume);
            b.Chemicals.push(temp);
        }
    }
    if(a.volume==0){
        a.Clear();
    }
    b.FindColor();
}
function isSlave(fi,se){
    if(CanBeMaster[objects[se].id][objects[fi].id]==0)
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
function instantiate(obj){
    objects.push(obj);
    objectsM.push(obj.Mesh);
    scene.add(obj.Mesh);
    if(obj.press!=null){
        //console.log("here");
        pressobjects.push(obj.press);
        pressmap.push((objects.length-1));
    }
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
            if(obj.Slots.Slave!=null){
                move(objects[obj.Slots[i].Slave],Slotpos(i));
            }
        }
    }
}
function resetPosition(s){
    if(prevmaster!=null){
        PlaceF(s,prevmaster,prevslot);
    }
    else{
        objects[s].setx(prevcor.x);
        objects[s].sety(prevcor.y);
        objects[s].setz(prevcor.z);
    }
    if(typeof objects[s].drop == 'function'){
        objects[s].drop(s);
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
    spotLight.push(new THREE.PointLight(0xffffff,0.4));
    spotLight[table_n].position.set(table_n*table_height*2+table_n*basin_width, 80, -60);
    spotLight[table_n].castShadow = true;
    scene.add(spotLight[table_n]);
    table_n++;
}
function nextShelfSlot(){
    for(var i=0;i<table_n;i++){
        for(var j=0;j<9;j++){
            var flag=1;
            for(var k=0;k<objects.length;k++){
                if(IsSameVector3(objects[k].getPosition(),shelves[i].Slotpos(j))){
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