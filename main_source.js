$(function(){
  $(".red").css('color','red')
  $(".hide").hide('slow')
})


$(function() {

  $("#sub > li:eq(1)").siblings().css("color","green");
  $(".example > p.How_to_method").css('color',"red").css('background','pink');

  //適応されている情報の取得
  console.log($(".example > p.How_to_method").css('color'));

  //クラスの追加
  $(".example > p.How_to_method").addClass('test_style');
  $(".example > p.How_to_method").removeClass('test_style');
  //属性セレクタ
  $('a[href^=http]').css('background','lightblue');

  //attr
  console.log($('.example p a:eq(1)').attr('href'));
  $('.example p a:eq(1)').attr('href','http://nicovideo.jp/');
  //data
  console.log($('.example p a:eq(1)').data('sitename'));

  //タグの中身の編集
  $('.test2 p a[href*="google"]').text("NicoNicoVideo");
  $('.test2 p a[href*="google"]').attr('href', "http://nicovideo.jp/");
  $('.test2 p a[href*="nico"]').html('<a href="">置き換えられた文章ですよ！</a>')

  //$("input").val('hello world!');

  //要素の追加
  var li_text = $('<li>').text("Hello World!");
  $('ul.test_list > li:eq(1)').before(li_text);
  //li_text.insertBefore('ul.test_list > li:eq(1)');

  $('ul.test_list').prepend(li_text);
  //li_text.prependTo('ul.text_list');

  //エフェクト
  $('.box').fadeOut(80);
  $('.box').fadeIn(80);

  //イベント
  $('.method6').click(function(){
    console.log("hi!");
  });
  $('.method6')
    .mouseover(function(){
      $(this).css("background","blue");
    })
    .mouseout(function(){
      $(this).css("background","green");
    })
    .mousemove(function(e){
      $(this).text(e.pageX);
    });

  //form部品に関するイベント
  $(function(){
    $('#name')
      .focus(function(){
        $(this).css("background", "pink");
      })
      .blur(function(){
        $(this).css("background","white");
      });
    $('#members')
      .change(function(){
        console.log("changed!");
      });
  });

  //onメソッド
  $(function(){
    $('button.btn_1').click(function(){
      var p = $('<p>').text("sampleText").addClass('samples');
      $(this).after(p);
    });

    $('ul').on('click', '.samples', function(){
      $(this).remove();
    });
  });
});

$(function(){
  //ajax

  //load
  $('button').click(function(){
    $('#result').load('more.html', function(){
      //非同期通信のためここで処理
      $('#message_more').css('background','red');
    });
  });

  //post
  $('#kettei').click(function(){
    $.post('greet.php', {
      name_ajax_2: $('#name_ajax_2').val() //keyをidに、valueを id=nameの中身(valメソッド)とする

    }, function(data){
      //引数dataにはgreet.phpの返り値が入る
      $('#result_2').html(data);
    });
  });

});
