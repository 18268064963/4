function NavigateToSite(){
    var x = document.getElementById("id");
    var y = x.options[x.selectedIndex].value;
 
    window.location = y;
}