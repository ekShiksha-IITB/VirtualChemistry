
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


function Mixture(sol='H2O',solcol='blue',vsol,narr,carr,colarr,natarr,nfarr,ind){
    this.Solvent=sol;
    this.SolventColor=solcol;
    this.volume=vsol;
    this.Chemicals=new Array(narr.length);
    this.Indicator=ind;
    this.PHions=0;
    this.ph=0;
    for(var i=0;i<narr.length;i++){
        this.Chemicals[i]=new Chemical(narr[i],carr[i],colarr[i],natarr[i],nfarr[i]);
    }
    this.FindNature=function(){
        this.PHions=0;
        for(var i=0;i<this.Chemicals.length;i++){
            this.PHions+=this.Chemicals[i].Concentration*this.Chemicals[i].Nature*this.Chemicals.Nfac;
        }
        if(this.PHions<0)
        	{
        	this.ph=14-Math.log(-PHions);
        	}
        	else
        	{
               this.ph=Math.log(PHions+Math.pow(10,-7));
        	}
    }
    this.FindColor=function(){
    	if(this.Indicator!='undefined')
    	{
           if(this.ph<=7)
           	this.Color=this.Indicator.AcidicColor;
           else
           	this.Color=this.Indicator.BasicColor;
    	}
    	else
        {
        var maxconc=0;
        var maxcol;
        for(var i=0;i<this.Chemicals.length;i++){
            if(this.Chemicals[i].Color!='transparent' && this.Chemicals[i].Color!=undefined ){
                if(this.Chemicals[i].Concentration > maxconc){
                    maxcol=this.Chemicals[i].Color;
                    maxconc=this.Chemicals[i].Concentration;
                }
            }
        }
        if(maxcol!=undefined)
            this.Color=maxcol;
        else
            this.Color=this.SolventColor;
        if(this.Color==undefined)
            this.Color="blue";
        }
    }
    this.FindNature();
    this.FindColor();
    this.toString=MixtoString;
    this.Clear=function(){
        this.Solvent=undefined;
        this.solcol=undefined;
        this.volume=0;
        this.Chemicals=[];
    }
}
function MixtoString(){
    var s='new Mixture(';
    s+= "\"" + this.Solvent + "\"";
    s+=',';
    s+= "\"" + this.SolventColor.toString() + "\"";
    s+=',';
    s+=this.volume.toString();
    s+=',[';
    for(var i=0;i<this.Chemicals.length;i++){
        s+= "\"" + this.Chemicals[i].Name.toString() + "\"" ;
        if(i!=(this.Chemicals.length-1))
            s+=',';
    }
    s+= ']'
    s+=',[';
    for(var i=0;i<this.Chemicals.length;i++){
        s+= "\"" + this.Chemicals[i].Concentration.toString() + "\"" ;
        if(i!=(this.Chemicals.length-1))
            s+=',';
    }
    s+= ']'
    s+=',[';
    for(var i=0;i<this.Chemicals.length;i++){
        s+= "\"" + this.Chemicals[i].Color.toString() + "\"" ;
        if(i!=(this.Chemicals.length-1))
            s+=',';
    }
    s+= ']'
    s+=',[';
    for(var i=0;i<this.Chemicals.length;i++){
        s+= "\"" + this.Chemicals[i].Nature.toString() + "\"" ;
        if(i!=(this.Chemicals.length-1))
            s+=',';
    }
    s+= ']'
    s+=',[';
    for(var i=0;i<this.Chemicals.length;i++){
        s+= "\"" + this.Chemicals[i].Nfac.toString() + "\"" ;
        if(i!=(this.Chemicals.length-1))
            s+=',';
    }
    s+= '])'
    return s;
}
function Chemical(nc,cc,col,nat,nf,cf,mol,den,mm,colw){
    this.Name=nc;
    this.Concentration=cc;
    this.Color=col;
    this.Nature=nat
    this.Nfac=nf;
    this.Formula=cf;
    this.moles=mol;
    this.density=den;
    this.molarmass=mm;
    this.col_in_water=colw;
}
class Indicator{
    constructor(name,acidcol,basecol,neutcol){
        this.Name=name;
        this.AcidicColor=acidcol;
        this.BasicColor=basecol;
        this.neutcol=neutcol;
    }
}
