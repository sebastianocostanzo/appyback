({
    doInit: function(component, event, helper) {
        
        var flowInputVariablesString = component.get("v.flowInputVariablesString");

        if(!$A.util.isEmpty(flowInputVariablesString))
        {
            try{
                var flowInputVariables = JSON.parse(flowInputVariablesString);
                var searchMask = "_recordid_";
                var regEx = new RegExp(searchMask, "ig");
                var replaceMask = component.get("v.recordId");

                if(replaceMask != null && replaceMask != undefined && !$A.util.isEmpty(replaceMask))
                {
                    for(var i=0;i<flowInputVariables.length;i++)
                    {
                        flowInputVariables[i].value = flowInputVariables[i].value.replace(regEx, replaceMask);
                    }
                }
                component.set("v.flowInputVariables",flowInputVariables);
            }catch(err){
                helper.showToast(component,'error','ERROR',err+'', 'dismiss');
                return;
            }
        }

        
    },

    handleShowModal: function(component, event, helper) {
        helper.showModal(component,event,helper);
    }
    
})