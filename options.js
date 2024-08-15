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
        chrome.storage.sync.set({"total":0});
            $('#limit').val(0)
    })
})