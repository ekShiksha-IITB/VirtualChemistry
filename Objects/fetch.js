var dataChemical;
var dataReaction;
function arrtoChem(arr){
	var chem;
	chem =new Chemical(arr[0],arr[3],arr[1],arr[6],arr[2],0,arr[7],arr[8],arr[9]);
	return chem;
}
function dbtocdata(str){
	var arr=srt.split(',');
	var len=arr[0];
	var l=1;
	var r=10;
	for(var i=0;i<len;i++){
		cdata[arr[l]]=arrtoChem(arr.slice(l,r));
		l+=10;
		r+=10;
	}
}
function strtoreac(str){
	var products=[];
	var balance=[];
	var catalyst=undefined;
	var a=str.split(',');
	var rstr=a[0].split('#');
	if(a[1]=='null')
		catalyst=a[1];
	var prostr=a[2].split('#');
	var r=[];
	var p=[];
	for(var i=0;i<rstr.length;i++){
		r[i]=rstr[i].split('-');
		balance[i]=parseInt(r[i][0],10);
	}
	for(var i=0;i<prostr.length;i++){
		p[i]=prostr[i].split('-');
		products[i]=p[i][1];
		balance[i+rstr.length]=parseInt(p[i][0],10);
	}
	if(rdata[r[0][1]]==undefined){
		rdata[r[0][1]]=[];
	}
	if(rdata[r[1][1]]==undefined){
		rdata[r[1][1]]=[];
	}
	rdata[r[0][1]][r[1][1]]=new Reaction(products,balance,catalyst);
	rdata[r[1][1]][r[0][1]]=rdata[r[0][1]][r[1][1]]; 
}
function dbtordata(str){
	var arr=stl.split(',');
	var len=parseInt(arr[0]);
	for(var i=0;i<len;i++){
		arrtoreac(arr[3*i+1]+','+arr[3*i+2]+','+arr[3*i+3]);
	}
}
var FetchChemical = function() {
  $.ajax({
    type: "GET",
    url: "FetchRC",
    success: function(response) {
      dataChemical = response.split(",");
      cdata['Hydrochloric Acid']=new Chemical(nc,col,nat,nf,cf,mol,den,mm,colw);
      var lenC = dataChemical[0]; 
      
    }
  });

};
var FetchReaction = function() {
  $.ajax({
    type: "GET",
    url: "FetchReaction",
    success: function(response) {
      dataReaction = response.split(",");
      var lenR = dataReaction[0]; 
      
    }
  });

};
