document.addEventListener("DOMContentLoaded", function() {
    // Get the ID from the URL
    var id = window.location.href.split('/').pop().split('.html')[0];

    // Load the corresponding HTML file
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", id + ".html", true);
    xhttp.send();
});
