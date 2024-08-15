$(function(){
    chrome.storage.sync.get(["total","limit"],function(budget){
        $("#total").text(budget.total);
        $('#limit').text(budget.limit);
    })
    $("#spendAmount").click(function(){
        chrome.storage.sync.get(["total","limit"],function(budget){
            let newTotal = 0;
            if(budget.total){
                newTotal += parseInt(budget.total);
            }

            let amount = $("#amount").val();
            if(amount){
                newTotal += parseInt(amount); 
            }

            chrome.storage.sync.set({"total":newTotal},function(){
                if(amount && newTotal >= budget.limit){
                    let notifications = {
                        type:"basic",
                        iconUrl:"icon48.png",
                        title:"Limit Reached!",
                        message:"Looks Like you reached your limit"
                    }

                    chrome.notifications.create("limitNotif",notifications)
                }
            });

            $("#total").text(newTotal);
            $("#amount").val("");
        });
    });
});