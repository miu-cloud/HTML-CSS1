$(function(){
  $('.tab li').on('click',function(){
    //すべてのタブからselectクラスを取り除く
    $('.tab li').removeClass('select');
    //クリックされたタブを取得 クラスselectをつける「
      $(this).addClass('select');
    //<ul class="content">内の全てのliタグを取得 hideを設定し非表示に
      $('.content li').addClass('hide');
    //何番目の子要素か調べる
      let index =$('.tab li').index($(this));
    //↑で取得したindex値から該当するコンテンツを取得
    $('.content li').eq(index).removeClass('hide');
  });
});
