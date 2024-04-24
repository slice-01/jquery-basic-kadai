$(function(){
  $('#change-color').on('click', function() {
    // 文字色を変更
    $('#target').css('color','red');
  });
  $('#change-text').on('click', function() {
    // 文字内容を変更
    $('#target').text('Hello!');
  });
  $('#fade-out').on('click', function() {
    // フェードアウト
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function() {
    // フェードイン
    $('#target').fadeIn();
  });
});