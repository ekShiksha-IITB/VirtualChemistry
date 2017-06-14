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
var Usable_Slots=[];
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
Usable_Slots.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var omap=['Bottle','Beaker','Flask','TestTube','Burette','Pipette','Petridish','BunsenBurner','WeighingMachine','WatchGlass','TestTubeStand','Funnel','PhMeter','Shelf','Table','Basin'];
var issmall=[1,1,1,1,0,0,1,0,0,1,1,1,0];
var iscontainer=[1,1,1,1,1,1,1,0,0,1,0,0,0];
function operate(s,t){
    var c=map[s.id][t.id];
    if(c==0){
        s.setx(prevcor.x);
        s.sety(prevcor.y);
        s.setz(prevcor.z);
    }
    if(c==1){
        pour(s,t);
    }
}
function pour(s,t){
    var x=prompt("Tell Volume to transfer ");
    if(x!=null){
        x=parseFloat(x);
         if(x>s.volumef){
            alert("Not enough fluid to transfer");
        }
        else if(x>(t.volume-t.volumef)){
            alert("Not enough capacity to transfer");
        }
        else{
            s.Fill(s.volumef-x);
            t.Fill(t.volumef+x);
        }
    }
    s.setx(prevcor.x);
    s.sety(prevcor.y);
    s.setz(prevcor.z);
}
function wash(s,t){
    if(confirm('Are you sure you want to wash this equipment?')){
        if (typeof s.Fill == 'function') {
            s.Fill(0);
        }
    }
    s.setx(prevcor.x);
    s.sety(prevcor.y);
    s.setz(prevcor.z);
}
function Place(s,t){
    if(Array.isArray(Usable_Slots[t.id][s.id])){
        for(var i=0;i<Usable_Slots[t.id][s.id].length;i++){
            var j=Usable_Slots[t.id][s.id][i];
            if(t.Slots[j].Slave==null){
                PlaceF(s,t,i);
                return 1;
            }
        }
    }
    else{
        for(var i=0;i<t.Slots.length;i++){
            if(t.Slots[i].Slave==null){
                PlaceF(s,t,i);                
                return 1;
            }
        }
    }
    return 0;
}
function PlaceF(s,t,i){
    s.setPosition(t.Slotpos(i));
    t.Slots[i].Slave=s;
    s.Master=t;
    s.Masterslot=i;
}
function Mix(a,b){
    var av=a.Volume;
    var bv=b.Volume;

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