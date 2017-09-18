$(document).ready(function(){
  $("#groceries").submit(function(event){
    var groceries = ["one", "two", "three", "four"];

    groceries.forEach(function(grocery){
      var groceryInput = $("input#" + grocery).val();
      $(".list").append("<li>" + groceryInput + "</li>");
    });

    event.preventDefault();
  });

});
