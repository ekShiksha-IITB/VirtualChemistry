var dataChemical;
var dataReaction;
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