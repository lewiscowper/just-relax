'use strict'

// initialize Hoodie
var hoodie  = new Hoodie();

// on ready calls all binds
$(function () {
  $('#sign-up').bind('submit', submitSignUp)
  $('#go-on-vacation').bind('click', result)
})


// sign-in on main page
var submitSignUp = function submitSignUp(){
  var usr = $('#email').val();
  var pwd = $('#pwd').val();
  
  hoodie.account.signIn(usr, pwd).done(function(){
    if(hoodie.account.username) {
      location.href = 'http://127.0.0.1:6076/dashboard.html'
    }
  })
  return false;
}

// return results
var result = function result(event) {
  var e = event.target;
  var url = e.getAttribute('data-url');

  $.ajax()
}