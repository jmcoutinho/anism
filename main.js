function changePage(place) { //Display selected reader
    var readers = document.getElementsByClassName('reader-container');

    var i;
    for (i = 0; i < readers.length; i++) {
        if (readers[i].id == place) {
            readers[i].style.display = 'block';
            readers[i].scrollTop = 0;
        } else {
            readers[i].style.display = 'none';
        }
    }
}

function menuChange(place) { //Adjust menu entry heights
    var menuEntry = document.getElementById("menu-container").getElementsByTagName("LI");
    
    var i;
    for (i = 0; i < menuEntry.length; i++) {
        if (menuEntry[i].id == place + '-menu') {
            menuEntry[i].style.height = '100%';
            menuEntry[i].style.minHeight = '4.5em';
        } else {
            menuEntry[i].style.height = '0';
            menuEntry[i].style.minHeight = '1.5em';
        }
    }
}

window.onload = function() {
    if (location.hash) {
        changePage(location.hash.substr(1));
        menuChange(location.hash.substr(1));
    } else {
        changePage('anism');
        menuChange('anism');
    }
}
window.onhashchange = function() {changePage(location.hash.substr(1)); menuChange(location.hash.substr(1));}