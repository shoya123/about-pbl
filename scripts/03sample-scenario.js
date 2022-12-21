/* 画像の格納 */
var images_src = new Array("sample-scenario/01.png","sample-scenario/02.png","sample-scenario/03.png","sample-scenario/04.png","sample-scenario/05.png","sample-scenario/06.png","sample-scenario/07.png","sample-scenario/08.png","sample-scenario/09.png","sample-scenario/10.png","sample-scenario/11.png");
var num = 0;
/* 進む戻るで画像を変更 */
            document.getElementById("images").src=images_src[num];

                  function go_forward(){
                    console.log("テスト")
                if (num == 10) 
                {
                    num = 0;
                }
                else {
                    num++;
                }
                document.getElementById("images") .src=images_src[num];
            }
            function go_back(){
              if (num == 0)
              {
                  num = 10;
              }
              else {
                  num--;
              }
              document.getElementById("images").src=images_src[num];
          }
