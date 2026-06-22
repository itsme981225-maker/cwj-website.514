//1.傳送一段話給控制台
console.log('Javascript已連結，準備進行互動...');

//2.詢問使用者的姓名
let visitorname = prompt('你好，我是你的助理，請問我應該要怎麼稱呼您:');

if (visitorname === '' || visitorname === null){
    visitorname = '訪客'
}

window.alert('Hello'+ visitorname + ',歡迎來到我的網站!');

const logoElement = document.getElementById('main-logo');
logoElement.innerText = "14153316 "+visitorname + "'s Website";

const titleElement = document.getElementById('hero-title');
titleElement.innerHTML = `我的未來，由<span class="highlight">${visitorname}</span>主宰`;

function changeColor(){
    const highlight = document.querySelector('.highlight');
    if (highlight.style.color === 'red'){
        highlight.style.color = '#38bdf8'
    } else {
        highlight.style.color = 'red'
    }
}

const SendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const aiResponse = document.getElementById('ai-response');

SendBtn.addEventListener('click', function(){
    const userMessage = userInput.value;

    if (userMessage===""){
        alert("請先輸入指令呦!")
        return;
    }

    setTimeout(function(){

        if (userMessage.includes ("淺色") || userMessage.includes("白天")){
        document.body.className = "theme-light";
        aiResponse.innerText="AI 助理 : 您好呀~今天過得還好嗎?";
    }
    //判斷指令二:切換至駭客任務模式
    else if (userMessage.includes ("綠色") || userMessage.includes("駭客") ){
        document.body.className = "theme-matrix"; //幫 body 穿上黑客衣服
        aiResponse.innerText="AI 助理 : 已啟動 【駭客矩陣模式】!";
    }
    //判斷指令三:恢復深色模式
    else if (userMessage.includes ("深色") || userMessage.includes("晚上") ){
        document.body.className = ""; //清除所有主題，回到預設深色
        aiResponse.innerText="AI 助理 : 已為您恢復至 【預設深色模式】。";
    }
    else {
        aiResponse.innerText = "AI 助理 : 我收到你的訊息「" + userMessage + "」了!不過我目前還沒有開通這樣的功能~";
    }

    userInput.value = ""
    
    },300);
    


    
});

















