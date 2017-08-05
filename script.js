$(window)
    .on('load', runPreloader)
    .on('transitionend', startHiding);

function runPreloader () {
    $('.loadLine').css('width', 0);
}

function startHiding () {
    $.Deferred()
        .resolve()
        .then(function() {
            return $('article img').fadeOut(1000);
        })
        .then(function() {
            return $('article p').fadeOut(1000);
        })
        .then(function() {
            return $('article').fadeOut(1000);
        })
}