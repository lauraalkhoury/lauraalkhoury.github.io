// $(document).ready(function() {
//     console.log("document loaded");
// });

$(function () {
	$('body').scrollspy({target: ".navbar"});

    $('.list-group.checked-list-box .list-group-item').each(function () {
        
        // Settings
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-");
            
        // $widget.css('cursor', 'pointer');
        $widget.append($checkbox);

        // Event Handlers
        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });
          

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");
        }

        // Initialization
        function init() {
            
            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }
            
            updateDisplay();
        }
        init();
    });
    
    $('.list-group-item').on('click', function(event) {
    	var id     = $(this).attr('id');
    	var skills = "#"+id+"-skills";

    	if($(this).hasClass("active")) {
    		$(skills).removeClass("dim-skills");
    		$(skills).addClass("highlight-skills");
    	}
    	else {
    		$(skills).removeClass("highlight-skills");
    		$(skills).addClass("dim-skills");
    	}

        event.preventDefault(); 
        var checkedItems = {}, counter = 0;
        $("#check-list-box div.active > .svg-wrapper > .category-text > a").each(function(idx, a) {
            checkedItems[counter] = $(a).text();
            counter++;
        });
        console.log(JSON.stringify(checkedItems));
    });

    // $('.radio').on('click', function(event) {
    //     var this_id = $(this).id;
    //     console.log("id: " + this_id);
    // });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href*=#q])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                console.log(target);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                //var newOffset = target.offset().top - 85;
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});