/* Navigation Search */
$(() => {
    $('#trc-nav-search').submit(() => {
        const keyword = $('#trc-nav-search-keywords')
            .val()
            .trim();
        if (keyword) {
            window.location = `/search/#/${keyword}`;
        }
        return false;
    });
});

/* Navigation Search */
$(() => {
    $('#trc-mobile-search').submit(() => {
        const keyword = $('#trc-mobile-search-keywords')
            .val()
            .trim();
        if (keyword) {
            window.location = `/search/#/${keyword}`;
        }
        return false;
    });
});

/*-------------------------------------------------*/
// Breadcrumb

$(() => {
    $('#breadcrumb .breadcrumb-link.reserve-query').each(function (idx) {
        $(this).attr('href', `${$(this).attr('href')}#/${location.search}`);
    });
});
/*
$(function(){
    if(!$('body').hasClass("user-loggedin")){
        document.getElementById("private-file").style.visibility = "hidden";
    } else {
        document.getElementById("private-file").style.visibility = "visible";
    }
});
*/
