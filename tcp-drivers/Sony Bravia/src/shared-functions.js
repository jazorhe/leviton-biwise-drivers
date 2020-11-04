THIS_DEVICE.OnGUILoaded = function(Name){
	//This function is called by the API whenever a new page is loaded
	try{

		//GUIAPI.Debug.WriteLine("Getting Feedback from " + THIS_DEVICE.Name);
		//THIS_DEVICE.updateVolume();
		//THIS_DEVICE.getPowerStatus();

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

THIS_DEVICE.updateVolume = function() {
	THIS_DEVICE.getAudioVolume();
	setTimeout(THIS_DEVICE.updateVolume,200);
};
