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
var omap=['Bottle','Beaker','Flask','TestTube','Burette','Pipette','Petridish','BunsenBurner','WeighingMachine','WatchGlass','TestTubeStand','Funnel','PhMeter'];
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
function place(s,t){
    for(var i=0;i<9;i++){
        if(t.flags[i]==0){
            s.setPosition(t.slot(i).x,t.slot(i).y,t.slot(i).z);
            t.flags[i]=1;
            return 1;
        }
    }
    return 0;
}
function Mix(a,b){

}