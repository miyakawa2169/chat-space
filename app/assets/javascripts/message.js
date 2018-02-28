$(function(){
  // 【関数定義部分】

  // メッセージ投稿（非同期）／自動更新時のHTML要素追加
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

  // 【実処理部分】

  // メッセージ自動更新起動
  var timer = setInterval(function(){
    var url = location.href;
    // メッセージ投稿画面以外のURLの場合
    if (!url.match(/\/groups\/[\d]{1,}\/messages/)) {
      clearInterval(timer);
      console.log("clearInterval");
    // それ以外の場合
    } else {
      console.log("setInterval");
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
    }
  }, 5000);

  // メッセージ投稿（非同期）
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
