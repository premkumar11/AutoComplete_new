var countries = ["Ann Liebmann*+27-61-453-5444*@ ann.lieb@*Policy No. 0013983887 | 0013983887",
                 "Ann Summer*+27-61-453-5444*@ ann.summer@*Policy No. 0013983887 | 0013983887",
                 "Anabelle Samuel*+27-61-453-5444*@ anna.samuel@*Policy No. 0013983887 | 0013983887",
                 "Andorra*+27-61-453-5444*@ and.ra@*Policy No. 0013983887 | 0013983887",
                 "Angola*+27-61-453-5444*@ angola@*Policy No. 0013983887 | 0013983887",
                 "Anguilla*+27-61-453-5444*@ anguilla@*Policy No. 0013983887 | 0013983887",
                 "Antigua & Barbuda*+27-61-453-5444*@ antigua.barbuda@*Policy No. 0013983887 | 0013983887",
                 "Argentina*+27-61-453-5444*@ argentina@*Policy No. 0013983887 | 0013983887",
                 "Armenia*+27-61-453-5444*@ armenia@*Policy No. 0013983887 | 0013983887",
                 "Aruba*+27-61-453-5444*@ aruba@*Policy No. 0013983887 | 0013983887",
                 "Australia*+27-61-453-5444*@ australia@*Policy No. 0013983887 | 0013983887",
                 "Austria*+27-61-453-5444*@ austria@*Policy No. 0013983887 | 0013983887",
                 "Azerbaijan*+27-61-453-5444*@ azerbaijan@*Policy No. 0013983887 | 0013983887",
                 "Bahamas*+27-61-453-5555*@ bahamas@*Policy No. 0013983887 | 0013983887",
                 "Bahrain*+27-61-453-5555*@ bahrain@*Policy No. 0013983887 | 0013983887",
                 "Bangladesh*+27-61-453-5555*@ bangladesh@*Policy No. 0013983887 | 0013983887",
                 "Barbados*+27-61-453-5555*@ barbados@*Policy No. 0013983887 | 0013983887",
                 "Bosnia & Herzegovina*+27-61-453-5555*@ bosnia.herzegovina@*Policy No. 0013983887 | 0013983887",
                 "Brazil*+27-61-453-5555*@ brazil@*Policy No. 0013983887 | 0013983887",
                 "British Virgin Islands*+27-61-453-5555*@ british.virgin@*Policy No. 0013983887 | 0013983887",
                 "Cambodia*+27-61-453-5555*@ cambodia@*Policy No. 0013983887 | 0013983887",
                 "Cameroon*+27-61-453-5555*@ cameroon@*Policy No. 0013983887 | 0013983887",
                 "Central Arfrican Republic*+27-61-453-5555*@ Central.ArfricanRepublic@*Policy No. 0013983887 | 0013983887",
                 "Chad*+27-61-453-5555*@ Chad@*Policy No. 0013983887 | 0013983887",
                 "China*+27-61-453-5555*@ China@*Policy No. 0013983887 | 0013983887",
                 "Colombia+27-61-453-5555**@ Colombia@*Policy No. 0013983887 | 0013983887",
                 "Cook Islands*+27-61-453-5555*@ Cook.Islands@*Policy No. 0013983887 | 0013983887",
                 "Denmark*+27-61-453-5555*@ denmark@*Policy No. 0013983887 | 0013983887",
                 "Djibouti*+27-61-453-5555*@ djibouti@*Policy No. 0013983887 | 0013983887",
                 "Ecuador*+27-61-453-5555*@ ecuador@*Policy No. 0013983887 | 0013983887",
                 "Estonia*+27-61-453-5555*@ estonia@*Policy No. 0013983887 | 0013983887",
                 "Ethiopia*+27-61-453-5555*@ ethiopia@*Policy No. 0013983887 | 0013983887",
                 "Falkland Islands*+27-61-453-5555*@ falkland.islands@*Policy No. 0013983887 | 0013983887",
                 "Fiji*+27-61-453-5555*@ fiji@*Policy No. 0013983887 | 0013983887",
                 "France*+27-61-453-5555*@ france@*Policy No. 0013983887 | 0013983887",
                 "Germany*+27-61-453-5555*@ germany@*Policy No. 0013983887 | 0013983887",
                 "Yemen*+27-61-453-5555*@ yemen@*Policy No. 0013983887 | 0013983887",
                 "Zambia*+27-61-453-5555*@ zambia@*Policy No. 0013983887 | 0013983887",
                 "Zimbabwe*+27-61-453-5555*@ zimbabwe@*Policy No. 0013983887 | 0013983887"];

autocomplete(document.getElementById("myInput"), countries);

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
                  
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
                                  var row="";
                                  if(i & 1)
                                                {
                                                    row="even";
                                                }
                                                else
                                                {
                                                    row="add"
                                                }
          b = document.createElement("DIV");
                                  b.setAttribute("class", row);
          /*make the matching letters bold:*/
                                  var arrayVal= arr[i].split('*');
          b.innerHTML = "<strong>" + arrayVal[0].substr(0, val.length) + "</strong>";
          b.innerHTML += arrayVal[0].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
                                  
          b.innerHTML += "<input type='hidden' value='" + arrayVal[0] + "'>";
                                   b.innerHTML += "<p><span class='phoneIcon'></span> <span>"+arrayVal[1]+"</span> <span class='centerCol'>"+arrayVal[2]+"</span><span class='policyCol'><span class='docImg'></span><span>"+arrayVal[3]+"</span></p>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}
