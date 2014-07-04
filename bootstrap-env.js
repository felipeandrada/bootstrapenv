/*
 * 
 * This code detects and append the current environment to BODY element
 * Author: Felipe A. felipe.andrada@gmail.com
 * JUL - 2014
 * 
 */
jQuery(function($) {

    //starts when document ready
    bootstrapEnv();

});

//the main function
function bootstrapEnv() {
    
    
    //html template used for future tests
    var html = "<div id='bootstrap-env-xs' class='visible-xs'></div>\
    <div id='bootstrap-env-sm' class='visible-sm'></div>\
    <div id='bootstrap-env-md' class='visible-md'></div>\
    <div id='bootstrap-env-lg' class='visible-lg'></div>";
    
    //append tester to end of document
    $('body').append(html);
    
    //do checklist even window is resized
    window.onresize = function() { 
        bootstrapEnvCheck();
    };
    
    //do the first check
    bootstrapEnvCheck();
    
}

//test routive
function bootstrapEnvCheck() {
    
    //new environment
    var env;
    
    if($('#bootstrap-env-xs').is(':visible')){
        env = 'xs'; //phones
    } else
    if($('#bootstrap-env-sm').is(':visible')){
        env = 'sm'; //tables
    } else
    if($('#bootstrap-env-md').is(':visible')){
        env = 'md'; //desktops
    } else
    if($('#bootstrap-env-lg').is(':visible')){
        env = 'lg'; //larger desktops
    }
    
    //concat env string
    env = 'env-'+ env;
    
    //if has change screen
    if( !$('body').hasClass(env) ){
        
        //append env class to BODY element
        $('body').removeClass('env-xs env-sm env-md env-lg').addClass(env);
        
    }
    
}