$(function(){
  function buildHTML(search_user){
    var html =        `<div class="chat-group-user clearfix">
                          <p class="chat-group-user__name">${search_user.name}</p>
                          <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${search_user.id}" data-user-name="${search_user.name}">追加</a>
                        </div>`;
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
      $('#user-search-result').empty();
      var html = "";
      // ユーザ検索でひっかかった数分、HTML作成
      data_array = data['search_users'];
      $.each(data_array, function(i, val) {
        html = html + buildHTML(val);
      });
      $('#user-search-result').append(html);
    })
    .fail(function(){
      alert('error');
    })
  })
});
