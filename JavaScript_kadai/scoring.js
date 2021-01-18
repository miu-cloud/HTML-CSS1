// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function(){
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]の入力値を取得して合計点と平均点を出すロジックを作る。
  function score_indicate(){
    // 変数「subject_points」に教科ごとに配列を代入。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // 変数「sum」教科ごとにそれぞれ足していく。
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
   //  function sum(subject_points){
   //    for(let i = 0; i < subject_points.lenght; i++){
   //    sum += subject_points[i];
   //   }
   //    return sum;
   // };
    // 合計を返す
    //id=sum_indicateのsumを指定する＝合計を指定する
    $("#sum_indicate").text(sum);
    //平均を返す
    // 変数「average」に平均値を出して代入　合計/subject_pointsの要素分（今回は５ lengthによって自動的に変更される）
    //id average_indicateのaverageを指定する＝平均を指定する
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
  };

  // 平均点数を取得し、取得した平均点数からランク分け("A", "B", "C", "D")をするロジックを作る。
  function get_achievement(){
    // 変数「averageIndicate」にid="average_indicate"から取得。取得だからtext()中には何も入れない。
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";
    }else if ( averageIndicate >= 40){
      return "C";
    } else {
      return "D";
    }
  };
  // 各教科の点数を取得し、取得した点数から合格/不合格の判断を下すロジックを作る。
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // 変数「number」に入力した教科の数を代入。
    let number = subject_points.length;
    // 変数「judge」に"合格"を代入。
    let judge = "合格";
    for(let i = 0; i < number; i++){
      if(subject_points[i] < 60){
        judge = "不合格";
        break;
      }
    }
    return judge;
    // 入力したそれぞれの教科の点数が60点よりも低いと変数「judge」に"不合格"を再代入して「judge」を返す。
    return pass_or_failure;
  };
  // 最終的なジャッジのロジックを作ります。
  function judgement(){
    // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let achievement = get_achievement();
    // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}で${pass_or_failure}です」が出力される処理です。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // 「最終ジャッジ」(id="btn-declaration")ボタンを押したら「function judgement()」が出力される処理です。
  $('#btn-declaration').click(function() {
    judgement();
  });
});
