THIS_DEVICE.FBPrefix = "DYN_";
THIS_DEVICE.API = null;

if(ON_GUI){
	THIS_DEVICE.API = GUIAPI;
}
if(ON_CONTROLLER){
	THIS_DEVICE.API = CTRLAPI;
}
// Track the State of the TCP Connection
THIS_DEVICE.Connected = false;

// Automatic Login Procedure
if(ON_CONTROLLER){
	try{
		// Login when the controller boots
		setTimeout(function () {
			THIS_DEVICE.KeepAlive();
			THIS_DEVICE.Connected = true;
		}, 200);

		// This event is called automatically upon TCP connection
		THIS_DEVICE.onTCPConnected = function(){
			// Login if this event was called as a result of a disconnect
			if(THIS_DEVICE.Connected === false){
				THIS_DEVICE.KeepAlive();
				THIS_DEVICE.Connected = true;
				CTRLAPI.Debug.WriteLine("Reconnected to Dynalite Gateway");
			}
		};

		// Set flag to false when the socket closes
		THIS_DEVICE.onTCPClosed = function(){
			THIS_DEVICE.Connected = false;
			CTRLAPI.Debug.WriteLine("Socket to Dynalite Gateway Closed!");
		};


	} catch (e) {
		alert(e);
	}
}


/***** Default Script Device Callbacks ****/

THIS_DEVICE.OnGUILoaded = function(Name){
	//This function is called by the API whenever a new page is loaded
	try{

	}catch(e){
		alert(THIS_DEVICE.Name + ".OnGUILoaded error:" + e);
	}
};

THIS_DEVICE.OnGUIWake = function(){
	//This function is called by the API whenever the iOS or Android device wakes from sleep
	try{

	}catch(e){
		alert(THIS_DEVICE.Name + ".OnGUIWake error:" + e);
	}
};

THIS_DEVICE.OnGUIWillGoto = function(Name){
	//This function is called by the API before a page jump
	try{

	}catch(e){
		alert(THIS_DEVICE.Name + ".OnGUIWillGoto error:" + e);
	}
};


THIS_DEVICE.SetGlobalFeedbackData = function(inFeedbackID, inData) {
	if(ON_GUI) {
		GUIAPI.ShowFeedback(inFeedbackID, inData);
	}

	if(ON_CONTROLLER) {
		CTRLAPI.ShowFeedback(inFeedbackID, inData);
	}
};
