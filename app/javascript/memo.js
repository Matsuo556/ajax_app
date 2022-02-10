function post (){
  const submit = document.getElementById("submit");   //送信ボタンのHTML要素を取得し変数submitに代入
  submit.addEventListener("click", (e) => {  // addEventListenerメソッドで送信ボタンをクリックした時、を指定
    e.preventDefault();                    //preventDefaultメソッドで投稿ボタンをクリックするというイベントを無効化
    const form = document.getElementById("form"); //フォームのHTML要素を取得して変数formに代入
    const formData = new FormData(form);   //FormDataオブジェクトでフォームに入力した値を取得 
    const XHR = new XMLHttpRequest();   //非同期通信を行うためにXMLHttpRequestオブジェクトを生成->変数に格納
    XHR.open("POST", "/posts", true);  //openメソッドでサーバーサイドにリクエストの内容を指定
    XHR.responseType = "json";  //帰ってくるレスポンスをJSONに指定
    XHR.send(formData);         //formDataを送信
  });
};

window.addEventListener('load', post);
