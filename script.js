var slideIndex = 0;
      showSlides();
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 2 seconds
      }
// document.writeln("<h1 style='color:blue;font-family:tahoma;font-size:40px'>Welcome to External javascript</h1>");
// window.document.writeln("window object");
//     document.write("document object");
//     var x=20;
//     var y=30.67;
   /* var str='Naresh i Technologies';
    document.writeln("the value is:"+x+"<br/>");
    document.writeln("the value is:"+y);
    document.writeln("the String is:"+str);     //string value
    document.writeln("the value is:"+(100>101));  //boolean value
    document.writeln("the \"value\" is:");  */  //escape sequence use to double quotation inside the double quotation.
    /*var x = prompt("Enter any no:","5");
    if(x>100)
    {
      alert("user entered no is:"+x);
    }
    else{
      alert("user entered no. is:"+x)
    }*/
/*    var course=prompt("Enter any course name:","HTML5");
    switch(course)
    {
      case'HTML5':
      document.write("Selected course is:"+course);
      break;
      case'JAVA':
      document.write("Selected course is:"+course);
      break;
      case'Javascript':
      document.write("Selected course is:"+course);
      break;
      case'NodeJS':
      document.write("Selected course is:"+course);
      break;
      default:
      document.write("Selected course course not exited");
    }*/
for (var i = 1; i <= 10; i++) {
  if(i==3){
    continue;
  }
  // document.write("The value is :"+i+"<br/>");
  document.write("<h"+i+">This is heading"+i);
}
document.write("<h"+i+">This heading"+i);
//to display date and time
/*function MySysDate(){
  document.getElementById('dt').innerHTML=Date();
}*/
/*function PageLoad()
{
  alert("page load successfully");
}*/
/*function ImageLoad()
{
  alert("Image load successfully");
}*/
function BigImage(x)
{
  x.style.width="300px";
  x.style.height="300px";
}
function SmallImage(x)
{
x.style.width="30px";
x.style.height="30px";
}
