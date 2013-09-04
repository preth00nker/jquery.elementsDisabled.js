// elementDisabled v1.0.0 - jQuery element disabled plugin
// 2013 Christian Yerena - preth00nker
// License: http://www.opensource.org/licenses/mit-license.php

(function ($, undefined) {
    $.fn.elementsDisabled = function (options) {
        options = $.extend({}, $.fn.elementsDisabled.options, options);
        var context = $(this);
        return this.each(function () {
            if(options.disabled){
                context.find('[disabled="disabled"], .disabled').each(function(){
                    var $object=$(this)
                    var objectEvents = jQuery.extend(true, {} ,$(this).data("events"));
                    $(this).data('storedEvents',objectEvents)
                    $object.unbind()        
                    for (objEvent in objectEvents){ $object.on(objEvent,false) }    
                    if ($object.prop('tagName')=='A'){$object.on('click',false)}
                })
            }else{
                context.find('[disabled="disabled"], .disabled').each(function(){
                    var $object=$(this)
                    $object.unbind()            
                    var objectEvents = $(this).data("storedEvents");
                    for (objEvent in objectEvents){
                         elementEvents=objectEvents[objEvent]
                         for(index in elementEvents){
                            if(index!="delegateCount"){
                                $object.on(elementEvents[index].type,elementEvents[index].handler)
                            }
                         }
                    }
                    $(this).data("storedEvents",'')
                })

            }
        });
    };

    $.fn.elementsDisabled.options = {
        disabled: true,
    };

})(jQuery);    