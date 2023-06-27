function CreateTask(){
    var NewMessageContent = document.getElementById("send-messages-inputid").value

    document.querySelector('div.message>p').innerText=String(NewMessageContent)
}