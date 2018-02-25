$(function(){
  function buildHTML(message){
    console.log('run buildHTML');
    var main_html_1 = `<div class='message'>
                        <div class='upper-message'>
                        <div class='upper-message__user-name'>
                          <p>${message.user_name}</p>
                        </div>
                        <div class='upper-message__date'>
                          <p>${message.created_at}</p>
                        </div>
                        <div class='lower-meesage'>`;
    var main_html_2 =    `</div>
                          </div>
                         </div>`;

    // lower-meesageの箇所に挿入する部分作成
    // メッセージの本文があるかどうかで分岐
    if (message.is_content_present) {
      var sub_html_1   =  `<p class='lower-message__content'>
                            ${message.content}
                           </p>`;
    } else {
      var sub_html_1   =  ``;
    }
    // 画像の投稿があるかで分岐
    if (message.is_image_present) {
      var sub_html_2   =  `<img class='lower-message__image' src='${message.image_url}'`;
    } else {
      var sub_html_2   =  ``;
    }

    return main_html_1 + sub_html_1 + sub_html_2 + main_html_2;
  }
  $('#chat-form').on('submit', function(e){
    e.preventDefault();
    event.stopPropagation();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log('ajax start!');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log('ajax success!');
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
