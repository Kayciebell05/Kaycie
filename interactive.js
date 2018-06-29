function hello(){
  alert("Hey Fashionista, welcome to the fashion world!");

  function hideSection (section){
      var x = document.getElementById(section);
      if(x.style.display === "none"){
          x.style.display = "block";
          document.getElementById("bioButton").innerHTML ="Hide Bio";
    }
    else{
        x.style.display = "none";
        document.getElementById("bioButton").innerHTML = "show Bio";
    }
