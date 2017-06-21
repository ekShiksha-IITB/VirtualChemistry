var cdata=[];
function Transfer(a,b,vol){
    if(vol==0)
    	return;
    vol=Math.min(vol,a.volume);
    for(var i=0;i<a.Chemicals.length;i++){
        var flag=0;
        for(var j=0;j<b.Chemicals.length;j++){
            if(b.Chemicals[j].Name==a.Chemicals[i].Name){
                var tr=a.Chemicals[i].Moles*vol/a.volume;
                b.Chemicals[j].Moles+=tr;
                a.Chemicals[i].Moles-=tr;
                flag=1;
                break;
            }
        }
        if(!flag){
            var temp=new Chemical(a.Chemicals[i].Name,a.Chemicals[i].Color,a.Chemicals[i].Nature,a.Chemicals[i].Nfac,a.Chemicals[i].Formula,a.Chemicals[i].Moles,a.Chemicals[i].Density,a.Chemicals[i].Molarmass,a.Chemicals[i].Col_in_water,a.Chemicals[i].Temperature);
            temp.Moles*=(vol/a.	volume);
            a.Chemicals[i].Moles-=temp.Moles;
            b.Chemicals.push(temp);
        }
    }
    if(a.volume==0){
        a.Clear();
    }
    a.volume-=vol;
    b.volume+=vol;
    b.FindNature();
    b.FindColor();
}
function Mixture(chemarr,ind){
    this.Indicator=ind;
    this.Hions=0;
    this.Ph=7;
    this.Chemicals=chemarr;
    this.volume=0;
    this.Color='transparent';
    this.Temperature=25;
    for(var i=0;i<this.Chemicals.length;i++){
    	this.volume+=this.Chemicals[i].Moles*this.Chemicals[i].Molarmass/this.Chemicals[i].Density;
    }
    this.FindNature=function(){
        if(this.volume==0){
        	this.Hions=0;
        	this.Ph=0;
        }
        this.Hions=0;
        for(var i=0;i<this.Chemicals.length;i++){
            this.Hions+=this.Chemicals[i].Moes*this.Chemicals[i].Nature*this.Chemicals.Nfac;
        }
        this.Hions/=this.volume;
        if(this.Hions<0)
        	this.Ph=14+Math.log(-this.Hions+Mat.pow(10,-7));
    	else
           this.Ph=-Math.log(this.Hions+Math.pow(10,-7));
    }
    this.FindColor=function(){
    	var iswater=0;
        for(var i=0;i<this.Chemicals.length;i++){
        	if(this.Chemicals[i].Name=='Water'){
        		iswater=1;
        		break;
        	}
        }
    	this.Color='transparent';
    	if(this.Indicator!=undefined){
    		this.Color=this.Indicator.Color(this.Ph);
    	}
    	if(this.Color=='transparent'){
        var maxmoles=0;
        var maxcol='transparent';
	    if(iswater){
	        for(var i=0;i<this.Chemicals.length;i++){
	            if(this.Chemicals[i].Color!='transparent'){
	                if(this.Chemicals[i].Moles > maxmoles){
	                    maxcol=this.Chemicals[i].Color;
	                    maxmoles=this.Chemicals[i].Moles;
	                }
	            }
	        }
	    }
	    else{
	    	for(var i=0;i<this.Chemicals.length;i++){
	            if(this.Chemicals[i].Col_in_water!='transparent'){
	                if(this.Chemicals[i].Moles > maxmoles){
	                    maxcol=this.Chemicals[i].Col_in_water;
	                    maxmoles=this.Chemicals[i].Moles;
	                }
	            }
	        }	
	    }
        if(maxcol!='transparent')
            this.Color=maxcol;
        if(this.Color=='transparent')
            this.Color="blue";
        }
    }
    this.FindNature();
    this.FindColor();
    this.toString=MixtoString;
    this.Clear=function(){
        this.volume=0;
        this.Chemicals=[];
        this.Color='blue';
    	this.Ph=7;
    	this.Hions=0;
    }
}
function MixtoString(){
	var s='new Mixture([';
	for(var i=0;i<this.Chemicals.length;i++){
		s+=this.Chemicals[i].toString();
		if(i!=this.Chemicals.length-1)
			s+=',';
	}
	s+='])';
	return s;
}
function Chemical(nc,col,nat,nf,cf,mol,den,mm,colw){
    this.Name=nc;
    this.Color=col;
    this.Nature=nat;
    this.Nfac=nf;
    this.Formula=cf;
    this.Moles=mol;
    this.Density=den;
    this.Molarmass=mm;
    this.Col_in_water=colw;
    this.toString=ChemToString;
}
function ChemToString(){
	var s='new Chemical(';
    s+=this.Name+',';
    s+=this.Color+',';
    s+=this.Nature+',';
    s+=this.Nfac+',';
    s+=this.Formula+',';
    s+=this.Moles+',';
    s+=this.Density+',';
    s+=this.Molarmass+',';
    s+=this.Col_in_water+',';
    s+=this.Temperature+')';
    return s;
}
class Indicator{
    constructor(){
        this.color=function(){
        }
    }
}