function myFunction() {
    navigator.clipboard.writeText("ayyybubu#4050");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  function loadBadges() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "badges.txt", true);
    xhttp.send();
  }

  function loadEmotes() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "emotes.txt", true);
    xhttp.send();
  }

  function loadContact() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "contact.txt", true);
    xhttp.send();
  }

  