
var slt
var time;
var vno;
var count;
var i; //for maintaining the count of Electronics
var j; //for maintaining the count of Clothing
i=1;
j=1;
count=0;
var ref=firebase.database().ref().child('shoppingCart/Electronics/Headphones')	// Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
  var key=snapshot.key;//stores slot1
  var key_val=snapshot.child(key).val() //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  //document.write(key+"  "+link);
  document.getElementById('elec'+i+'_img').innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\"><div class=\"bache\">New Arrivals</div>";
  document.getElementById('elec'+i).innerHTML=key;
  document.getElementById('elec'+i+'price').innerHTML=price;
  i=i+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});

var ref=firebase.database().ref().child('shoppingCart/Electronics/Mobile Phones')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
  var key=snapshot.key;//stores slot1
  var key_val=snapshot.child(key).val() //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  //document.write(key+"  "+link);
  document.getElementById('elec'+i+'_img').innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\"><div class=\"bache\">SmartPhones</div>";
  document.getElementById('elec'+i).innerHTML=key;
  document.getElementById('elec'+i+'price').innerHTML=price;
  i=i+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Electronics/Speakers')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
  var key=snapshot.key;//stores slot1
  var key_val=snapshot.child(key).val() //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  //document.write(key+"  "+link);
  document.getElementById('elec'+i+'_img').innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\"><div class=\"bache\">BT Speakers</div>";
  document.getElementById('elec'+i).innerHTML=key;
  document.getElementById('elec'+i+'price').innerHTML=price;
  i=i+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Men/Denims')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Men/Shirts')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Men/Tshirts')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Women/Shirts')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Women/Tops')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Women/Tshirts')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});
var ref=firebase.database().ref().child('shoppingCart/Women/WWatches')  // Get the data on a post that has changed
ref.on("child_added", function(snapshot) {
    var value = snapshot.val();
 //stores true or false
  
  var link=snapshot.child('ImgLink').val();
  var price=snapshot.child('Price').val();
  var name=snapshot.child('Name').val();
  //document.write(key+"  "+link);
  document.getElementById('img'+j).innerHTML="<img src=\""+link+"\" alt=\"#\" width=\"400px\" height=\"400px\">";
  document.getElementById('img'+j+'_title').innerHTML=name;
  document.getElementById('img'+j+'_price').innerHTML=price;
  j=j+1;
  //document.write(key); 
  console.log("Occupied Slots: " + count);
});


function add_to_cart(){
  count=count+1;
  document.getElementById('update_count').innerHTML=count;
}
