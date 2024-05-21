const chatFild = document.getElementById("chatF");
const input = document.getElementById("inputChat");

const data = [
   ["привет здарова привки ку", 'Привет! Я бот Олег xD'],
   ["доставка доставке доставку доставкой", 'Доставка осуществляется средствами почти России. Вы можете отплатить товар наложным платежом.'],
   ['контакты контактов контакт', 'Узнать контактную информацию вы можете перейдя по ссылке в конце сайта.'],
   ['возврат возврате возврату вернуть обратно', 'Возврата нет!'],
   ['брак бракованная мусор', 'Ну можете прислать нам видео и там будет видно.']
]


function sendMassage(user, txt) {
   let inp = input.value;

   console.log(chatFild);
   if (user == "human") {
      if (inp != '') {
         chatFild.innerHTML += `<p style="text-align: end;">${inp}</p>`
         sendMassage('chat', inp)
         input.value = '';
      }
   }
   if (user == "chat") {
      var isSend = false;
      var words = inp.split(' ');
      words.forEach(UserWord => {
         data.forEach(DataItem => {
            var ItemWords = DataItem[0].split(' ');  
            ItemWords.forEach(KeyWord => {
               if (UserWord == KeyWord) {
                  chatFild.innerHTML += `<p">${DataItem[1]}</p>` 
                  isSend = true; 
               }
            });
         });
      });
      if (!isSend) {
         chatFild.innerHTML += `Извините, но я вас не понял...  Связываю вас с оператором!</button>`          
      }
   }
   localStorage.setItem("chat-history", chatFild.outerHTML);
}

function clearHistory() {
   localStorage.setItem("chat-history", ' ');
}

function loadCharHistory() {
   var history = localStorage.getItem("chat-history");
   chatFild.innerHTML = history;
}

window.onload = loadCharHistory;