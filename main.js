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

function randomExample() { //Display random practical example in go anist page
    var exampleList = [
        'Question "do I really need this ______?" often.',
        'Ponder on material consequences.',
        'Become a canvas bag collector.',
        'When you say "I would like a [drink]," also say "with no straw; I brought my own."',
        'Become a re-usable paper gatherer.',
        'Consider ______ for its material value.',
        'Write object-centred journals.',
        'Walk in nature as much as you possibly can.',
        'Oil is a material entity too.',
        "Get a bicycle and read Robert M. Pirsig's books.",
        'Try to find the most beautiful glass bottle you can and carry it for water. Stainless steel works as well.',
        'Learn how to wrap gifts with no glue or tape.',
        'Become an expert in how recycling works in your town.',
        'Map the most responsible sellers in your area.',
        'Challenge yourself in avoiding packaging.',
        'Find or start a mending group.',
        'Try to trace the stories of how objects came into being and into your hands.',
        'Fix that plastic bag that ripped last week.',
        'Learn how to make an origami paper box.'
    ];
    
    document.getElementById('pract-example').innerHTML = exampleList[Math.floor(Math.random() * exampleList.length)];
}

//Add random practical example on page load
window.onload = randomExample();

//Load page from url hash
window.onload = function() {
    if (location.hash) {
        changePage(location.hash.substr(1));
        menuChange(location.hash.substr(1));
    } else {
        changePage('anism');
        menuChange('anism');
    }
}

//Change page with hash change
window.onhashchange = function() {changePage(location.hash.substr(1)); menuChange(location.hash.substr(1));}