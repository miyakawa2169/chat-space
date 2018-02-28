$(function(){
  function buildHTML(message){
    var html =        `<div class='message' data-message-id='${message.id}'>
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
    var url = location.href;
    var last_message_id = $('.chat-messages').children('.message').last().data('message-id');
    $.ajax({
      url: url,
      type: "GET",
      data: {last_message_id: last_message_id},
      dataType: 'json'
    })
    .done(function(data){
      var html = "";
      $.each(data, function(i, val) {
        html += buildHTML(val);
      });
      $('.chat-messages').append(html);
      $('.chat-messages').animate({scrollTop: $('.chat-messages')[0].scrollHeight}, 500, 'swing');
    })
    .fail(function(){
      alert('error');
    })
  },5000);

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
