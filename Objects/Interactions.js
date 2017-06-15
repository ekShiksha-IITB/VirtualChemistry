var reactions;
var map=[];
map.push([1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
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
            //console.log(s.Mixture.volume);
            //console.log(t.Mixture.volume);
            Transfer(s.Mixture,t.Mixture,x);
            s.Fill(s.Mixture.volume);
            t.Fill(t.Mixture.volume);
            //console.log(s.Mixture.volume);
            //console.log(t.Mixture.volume);
        }
    }
    resetPosition(fi);
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
            if(t.Slots[j].Slave==null){
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
    s=objects[fi];
    t=objects[se];
    s.setPosition(t.Slotpos(i));
    t.Slots[i].Slave=fi;
    s.Master=se;
    s.Masterslot=i;
}
function Transfer(a,b,vol){
    console.log(a.volume);
    console.log(b.volume);
    for(var i=0;i<b.Chemicals.length;i++){
        b.Chemicals[i].Concentration*=((b.volume)/(b.volume+vol));
    }
    a.volume-=vol;
    b.volume+=vol;
    console.log(a.volume);
    console.log(b.volume);
    for(var i=0;i<a.Chemicals.length;i++){
        var flag=0;
        for(var j=0;j<b.Chemicals.length;j++){
            if(b.Chemicals[j].name==a.Chemicals[i].name){
                b.Chemicals[j].Concentration+=a.Chemicals[j].Concentration;
                flag=1;
                break;
            }
        }
        if(!flag){
            var temp=new Chemical(a.Chemicals[i].Name,a.Chemicals[i].Concentration,a.Chemicals[i].Color,a.Chemicals[i].Nature,a.Chemicals[i].Nfac)
            temp.Concentration*=(vol/b.volume);
            b.Chemicals.push(temp);
        }
    }
    b.FindColor();
}
function instantiate(obj){
    objects.push(obj);
    objectsM.push(obj.Mesh);
    scene.add(obj.Mesh);
}
function move(obj,x,y,z){
    if(typeof x == typeof new THREE.Vector3(0,0,0)){
        obj.setPosition(x.x,x.y,x.z);
    }
    else{
        obj.setPosition(x,y,z);
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
}