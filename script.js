document.getElementById('toggle-btn').addEventListener('click', function() {
    var sideDrawer = document.getElementById('side-drawer');
    var overlay = document.getElementById('overlay');
    
    if (sideDrawer.style.width === '250px') {
        sideDrawer.style.width = '0';
        sideDrawer.style.opacity = '0';
        overlay.style.display = 'none';
    } else {
        sideDrawer.style.width = '250px';
        sideDrawer.style.opacity = '1';
        overlay.style.display = 'block';
    }
});

document.getElementById('overlay').addEventListener('click', function() {
    var sideDrawer = document.getElementById('side-drawer');
    var overlay = document.getElementById('overlay');
    
    sideDrawer.style.width = '0';
    sideDrawer.style.opacity = '0';
    overlay.style.display = 'none';
});



    document.addEventListener('DOMContentLoaded', function() {
        const faqs = document.querySelectorAll('.faq-question');

        faqs.forEach(faq => {
            faq.addEventListener('click', function() {
                this.parentElement.classList.toggle('open');
            });
        });
    });


    // Function to change the font family of the entire document
function changeFontFamily(fontFamily) {
    document.body.style.fontFamily = fontFamily;
}

// Call the function with the desired font family
changeFontFamily("'Montserrat', sans-serif");


$(document).ready(function() {
            $('#from_stn').autocomplete({
                source: function(request, response) {
                    $.ajax({
                        url: '/suggest_stations?q=' + request.term,
                        dataType: 'json',
                        success: function(data) {
                            response(data);
                        }
                    });
                },
                minLength: 2, // Minimum characters before suggestions start
                delay: 300 // Delay in milliseconds before making the AJAX call
            });
        });
  