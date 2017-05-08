speedyContext={};
speedyContext={
    "init":function(){
        $(document).ready(function() {
            if (document.addEventListener)
            {
                document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                document.getElementById("spx-rmenu").className = "spx-show";
                document.getElementById("spx-rmenu").style.top =  speedyContext.mouseY(e) + "px";
                document.getElementById("spx-rmenu").style.left = speedyContext.mouseX(e) + "px";
                },false);
            }
            else
            {
                $('body').on('contextmenu', document, function() {
                document.getElementById("spx-rmenu").className = "spx-show";  
                document.getElementById("spx-rmenu").style.top =  speedyContext.mouseY(event) + "px";
                document.getElementById("spx-rmenu").style.left = speedyContext.mouseX(event) + "px";
                window.event.returnValue = false;
                });
            }
        });
        $(document).on("click", function(event) {
            if(event.which===1)
            {
                document.getElementById("spx-rmenu").className = "spx-hide";
            }
        });
    },
    "mouseX":function(evt){
        if (evt.pageX)
        {
            return evt.pageX;
        }
        else if (evt.clientX)
        {
           return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        }
        else
        {
            return null;
        }
    },
    "mouseY":function mouseY(evt) {
        if (evt.pageY)
        {
            return evt.pageY;
        }
        else if (evt.clientY)
        {
           return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        }
        else
        {
            return null;
        }
    }
}