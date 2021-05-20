const contentplate = document.querySelectorAll('#contentbox .contentplate');

window.onscroll = function(){

    var scrollY = window.scrollY;
    var menuTop = document.querySelector('#stickymenu').offsetTop; //BOTH ARE NUMBERS
    var menuBottom = menuTop+(document.querySelector('#stickymenu').offsetHeight); 
    
    var menu = document.querySelector('#stickymenu .sticky');
    
//    if(scrollY>menuTop){
//        menu.classList.add('stickytrue');
//        menu.classList.remove('stickybottom');
//        if(scrollY+720>menuBottom){
//            menu.classList.remove('stickytrue');
//            menu.classList.add('stickybottom');
//        }
//    }
//    else {
//        menu.classList.remove('stickytrue');
//        menu.classList.remove('stickybottom');
//    }
//    
    //CHECK WHICH PARAGRAPH IS ON SCREEN
    
    
    for( val of contentplate){
   
        
        if(( scrollY >=val.offsetTop)&&(scrollY<=(val.offsetTop+val.offsetHeight)))
            {
                    var queue = val.getAttribute('data-queue');
                    var indicator = document.querySelector(`#stickymenu .sticky .contentindicator[data-indicate="${queue}"]`);
                
                    if(previous===undefined)previous = indicator;
                    else{
                        previous.classList.remove("clicked");
                        previous = indicator;
                    }
                    indicator.classList.add('clicked');
            }
    }
}

const contentindicator= document.querySelectorAll("#stickymenu .sticky .contentindicator");

var previous;

for(val of contentindicator){
    val.onclick = function(event){
        
        var item = event.target.parentElement;
        
        var ishas = item.classList.contains("clicked");
        
        if(!ishas)
        {
            //FIRST REMOVE PREVIOUS CLICK
            if(previous===undefined)previous=item;
            else{
                previous.classList.remove('clicked');
                previous = item;
            }
            
            item.classList.add('clicked');
        }
    }
}

