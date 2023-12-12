function action() {
    var sidebar = document.getElementById('sidepanel');
    sidebar.classList.toggle("toggle");
}
    var container = document.getElementById('container');
    var opendiv = document.getElementById('opendiv');
    

function showdiv()
{
    opendiv.classList.add('new');
    container.style.filter = "blur(2px)";
}

function closediv()
{
    opendiv.classList.remove('new');
    container.style.filter = "blur(0px)";

}