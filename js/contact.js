$(function () {

    "use strict";

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {
        if($(this).serializeArray().length> 0)
        alert('Your response has been recorded')
        e.preventDefault()
    })
});