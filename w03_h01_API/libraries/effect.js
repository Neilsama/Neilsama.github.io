
$(document).ready(function(){
    console.log("linked");

    // $("#play").click(function(){
    // 	$(this).toggleClass("selsect")
    // })
    $("#play").mouseenter(function(){
    	$(this).animate({
    		fontSize:'1.6em',
    	},300)
    })
    $("#play").mouseleave(function(){
    	$(this).animate({
    		fontSize:'1.5em',
    	},300)
    })

    $("#stop").click(function(){
    	$(this).toggleClass("selsect")
    })
    $("#stop").mouseenter(function(){
  	$(this).animate({
    		fontSize:'1.6em',
    	},300)
    })
    $("#stop").mouseleave(function(){
    	$(this).animate({
    		fontSize:'1.5em',
    	},300)
    })

});

