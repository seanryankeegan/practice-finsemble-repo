document.addEventListener("DOMContentLoaded", function () {
	FSBL.useAllClients();
	FSBL.initialize(function(){
		//do stuff.
		FSBL.Clients.LauncherClient.getActiveDescriptors(function(err, response){
			console.log("in sayHi getActiveDescriptors and response=", response)
			for(let id in response.data){
				var descriptor=response.data[id];
				if(descriptor.customData.component.type=="accountDetail"){
					console.log("descriptor.name=", descriptor.name);
				break;
			}
			}
		})
		FSBL.Clients.RouterClient.transmit(descriptor.name, "Hi string!");
	});
})