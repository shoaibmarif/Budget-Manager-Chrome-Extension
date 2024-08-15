$(function(){

    chrome.storage.sync.get("limit",function(budget){
        $('#limit').val(budget.limit)
    })

    $("#saveLimit").click(function(){
        let limit = $("#limit").val();
        if(limit){
            chrome.storage.sync.set({"limit":limit},function(){
                close();
            })
        }
    })

    $("#reset").click(function(){
        chrome.storage.sync.set({"total":0},function(){
            let notifications = {
                type:"basic",
                iconUrl:"icon48.png",
                title:"Total Reset!",
                message:"Total has been reset To 0"
            }

            chrome.notifications.create("limitNotif",notifications)
        });
        $('#limit').val(0)
    })
})