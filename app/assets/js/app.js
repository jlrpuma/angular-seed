/*
Template Name: Chatvia - Responsive Bootstrap 4 Chat App
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Main Js File
*/


(function ($) {

    'use strict';

    function initDropdownMenu() {
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
              $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
    
            return false;
        });   
    }
    
    function initComponents() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

        $(function () {
            $('[data-toggle="popover"]').popover()
        })
    }

    function initSettings() {
        $("#light-dark").on("click", function(e) {
            if($("#bootstrap-style").attr("disabled") !== "disabled") {
                $("#bootstrap-dark-style").attr("disabled", false);
                $("#bootstrap-style").attr("disabled", true);
                $("#app-dark-style").attr("disabled", false);
                $("#app-style").attr("disabled", true);
            } else {
                $("#bootstrap-dark-style").attr("disabled", true);
                $("#bootstrap-style").attr("disabled", false);
                $("#app-dark-style").attr("disabled", true);
                $("#app-style").attr("disabled", false);
            }
        });
    }

    function init() {
        initDropdownMenu();
        initComponents();
        initSettings();
        Waves.init();
    }

    init();

})(jQuery)