$(document).ready(function(){

    $("#button1").click(function(){
    	$(this).toggleClass("selsect")
    })
    $("#button1").mouseenter(function(){
    	$(this).animate({
    		fontSize:'1.6em',
    	},300)
    })
    $("#button1").mouseleave(function(){
    	$(this).animate({
    		fontSize:'1.5em',
    	},300)
    })

    $("#button2").click(function(){
    	$(this).toggleClass("selsect")
    })
    $("#button2").mouseenter(function(){
  	$(this).animate({
    		fontSize:'1.6em',
    	},300)
    })
    $("#button2").mouseleave(function(){
    	$(this).animate({
    		fontSize:'1.5em',
    	},300)
    })

});

