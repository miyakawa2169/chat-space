$(function(){
  function buildHTML(message){
    var html =        `<div class='message'>
                        <div class='upper-message'>
                        <div class='upper-message__user-name'>
                          <p>${message.user_name}</p>
                        </div>
                        <div class='upper-message__date'>
                          <p>${message.created_at}</p>
                        </div>
                        <div class='lower-meesage'>
                        <p class='lower-message__content'>
                            ${message.content}
                        </p>
                        ${ message.image_url == null ? '' : '<img src="' + message.image_url + '">' }
                        </div>
                          </div>
                         </div>`;
    return html;
  }
  setInterval(function(){
    // console.log("interval test");
    var url = location.href;
    $.ajax({
      url: url,
      type: "GET",
      dataType: 'json'
    })
    .done(function(data){
      console.log(data);
    })
    .fail(function(){
      alert('error');
    })

  },60000);
  $('#chat-form').on('submit', function(e){
    e.preventDefault();
    event.stopPropagation();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-messages').append(html);
      $('.form-group.form-group__input').val('');
      $('.chat-messages').animate({scrollTop: $('.chat-messages')[0].scrollHeight}, 500, 'swing');
    })
    .fail(function(){
      alert('error');
    })
  })
});
