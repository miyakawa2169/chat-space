$(function(){
  function buildHTML(message){
    // FIXME:HTML作成処理をここに作成
    var html =        ``;
    return html;
  }
  $('#user-search-field').on('keyup', function(e){
    e.preventDefault();
    var url = '/user';
    var input = $(this).val();
    $.ajax({
      url: url,
      type: "GET",
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(data){
      // var html = buildHTML(data);
      // $('#user-search-result').append(html);
    })
    .fail(function(){
      alert('error');
    })
  })
});
