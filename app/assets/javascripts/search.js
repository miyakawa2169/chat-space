$(function(){
  function buildHTML(message){
    // FIXME:HTML作成処理をここに作成
    var html =        ``;
    return html;
  }
  $('.chat-group-form__search').on('keyup', function(e){
    e.preventDefault();
    event.stopPropagation();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "GET",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('#user-search-result').append(html);
    })
    .fail(function(){
      alert('error');
    })
  })
});
