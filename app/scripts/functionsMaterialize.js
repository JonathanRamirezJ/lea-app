'use strict';
$(document).ready(function(){
  $('.slider').slider({fullWidth: true});
  $('.button-collapse').sideNav({
    closeOnClick: true,
    draggable: true
  });
  $('ul.tabs').tabs();
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.materialboxed').materialbox();
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  $('.modal-trigger').leanModal();
});
