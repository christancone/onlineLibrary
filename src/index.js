let item;
function highlight() {
    
    var input, filter, li, a, i, txtValue;
    input = document.getElementById("movieName");
    filter = movieName.value.toUpperCase();
    li = document.getElementsByTagName("figcaption");
    
    

    for (i = 0; i < li.length; i++) {
        
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.backgroundImage ="url('https://th.bing.com/th/id/OIP.Vp0uefmSNTcEqs94u6UT6AHaE8?pid=ImgDet&w=1920&h=1280&rs=1')";
           
        } else {
            li[i].style.backgroundImage = "none";
            li[i].style.display = "";
        }
    }
    
}

