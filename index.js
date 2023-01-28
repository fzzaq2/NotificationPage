let mark = $('#mark');
let counter = $('#counter');
let unmarked = $('div .unmarked');

checkCounter();

mark.on('click', function(){    
    for (var i = 0; i < unmarked.length; i++) {
        $('.fa-circle').remove();
        $('.notification').removeClass('unmarked');
        $('.notification').addClass('marked');
    }
    checkCounter();
})

function checkCounter() {
    counter.text($('div .unmarked').length);
}
