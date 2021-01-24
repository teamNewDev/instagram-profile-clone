//configurimg jQuery

console.log($==jQuery);

//profile links

$('.more').click(function(){

  $('.more_view').html("Founder of <a href='https://www.instagram.com/cuppyfoundation/'>@CuppyFoundation🕊️</a>");

  $('.more').hide();

});

$('.sidebar').click(function(){

  $('.sideview').toggleClass('hidden');

  $('.sideview').html("<div>Block this person</div> <div>Copy Profile Url</div>").css("padding-top","60px").css("background","#121212").css("height","280px").css("display","block").css("width","180px").css("position","absolute").css("top","11px").css("right","15px").css("text-align","center").css("border-radius","5px").css("visibility","visible").fadeIn('slow');

});

$('.profile_Status').click(function(){

  $('.sideview').css("visibility","hidden").fadeOut('slow');

});

$(document).ready(function(){

  $('#more_users').toggleClass('hidden');

  $('#more_users').click(function(){

    $('#more_users').html("<i class='spinner icon'></i>");

    $('.add_user').html("<p>No Users Found</p> <button class='cancel_add' style='width: 100px; height: 32px; border-radius: 4px; background: #0096FF; outline: none; color: white; border: 1px solid #0096FF;'>Cancel</button>").css("padding","8px").css("visibility","visible").slideDown('slow');

    

    $('.cancel_add').click(function(){

      $('#more_users').html("<i class='chevron down icon'></i>");

  $('.add_user').css("visibility","hidden").slideUp('slow');

});

  });

});

$('#but').click(function(){

  $('.follow_action').html("<p>Following</p>");

});
