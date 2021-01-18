//初期状態の設定：パネルを閉じる
//パネル部分<dd>を取得
//取得したddタグをhide()を使用して非表示にする
$(function(){
  $('#accordion dd').hide();
//tdタグにクリックイベントを設定
  $('#accordion dt').on('click',function(){
//クリックしたタブに対応するパネル部分(ddタグ)を取得
//next()は指定された各要素の直後の兄妹要素を取得できる
//slideToggleは各要素の高さを操作する　slideDown()とslideUp()の動作を交互に行う
    $(this).next('dd').slideToggle();
  });
});
