$(document).ready(function(){
  $("#groceries").submit(function(event){
    var groceries = ["one", "two", "three", "four"];
    var newGroceries = [];

    groceries.forEach(function(grocery) {
      var groceryInput = $("input#" + grocery).val();
      newGroceries.push(groceryInput);
    });

    newGroceries.sort();

    var upperGroceries = newGroceries.map(function(grocery){
      return grocery.toUpperCase();
    });

    upperGroceries.forEach(function(upperGrocery) {
      $(".list").prepend("<li>" + upperGrocery + "</li>");
    });


    // groceries.forEach(function(grocery){
    //   var groceryInput = $("input#" + grocery).val();
    //   $(".list").append("<li>" + groceryInput + "</li>");
    // });
    event.preventDefault();
  });
});
