//for scrolling


var navMenuAnchorTags = document.querySelectorAll('nav a');
for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event)
    {
        event.preventDefault();
         
        var targetSectionId = this.textContent.trim().toLowerCase();

        var targetSection = document.getElementById(targetSectionId);

    

        var interval = setInterval(function(){

            var   targetSectionCoordinates = targetSection.getBoundingClientRect();

            if(targetSectionCoordinates.top<=0)
            {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);
        },50)
        
        
    });
}



var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);