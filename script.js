let id = 1;
let userData="";
let supporterData="";
let messageBoxIsShow = false;

    setInterval(() => {
        if (messageBoxIsShow) {
        fetchSupporterMessage();
        console.log("fetch data in server")
        }
    }, 5000);


$(".online-chat").click(function () {
    console.log("this");
    messageBoxIsShow = true;
    $(this).fadeOut(200);
    $(".online-chat-section").fadeIn(200)
    console.log();
})
$(".chat-close-btn").click(function () {
    messageBoxIsShow = false;
    $(".online-chat-section").fadeOut(300)
    $(".online-chat").fadeIn(300)
})
$(".chat-btn").on("click",function(){
    let userMessage;
     $(".chat-input-text").val(function(index,value){
         
        console.log(index, value)
        userMessage = value;
        // $(this).val = ""
        return "";
    });
        console.log(userMessage)
       if(userMessage != ""){
            fetchUserDataHistory(userMessage);
            createUserMessage(userMessage)
       }
})
