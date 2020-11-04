// Incoming Data is ASCII: false
// Know Terminator (Hex): 0A0D
// Custom Parsing: false

function loginPrompt() {
    // Expresson: ^([Channel]>Please login !)
    // Name: Login Prompt
    // FBID: BD_MA2_LOGIN

    setTimeout(THIS_DEVICE.login, 100);
    return "Login attempted...";
}

function ExecutorOn() {
    // Expresson: On  Executor([0-9]+.[0-9]+)
    // Name: Executor On Global
    // FBID: BD_MA2_EXCE

    var ID = data.replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to on");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 1);
    }

    return "Executor " + ID + " turned on";
}

function ExecutorOff() {
    // Expresson: Off  Executor([0-9]+.[0-9]+)
    // Name: Executor Off Global
    // FBID: BD_MA2_EXCE

    var ID = data.replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to off");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 1);
    }

    return "Executor " + ID + " turned off";
}

function ExecutorLevel() {
    // Expresson: Executor([0-9]+.[0-9]+ At [0-9]{3})
    // Name: Executor Off Global
    // FBID: BD_MA2_EXCE

    var tempData = data.split(" At ");
    var ID = "";
    var level = 0;

    if(tempData.length > 0) {
    	ID = tempData[0];
    	level = tempData[1];

    	if(ON_CONTROLLER) {
    		CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to " + level);
    		CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_LVL_" + ID, level);
    	}
    }

    return "Executor " + ID + " went to level " + level;
}

function ExecutorOffHex() {
    // Expresson: 4F66661B5B33376D201B5B33326D4578656375746F721B5B33376D20([0-9 A-F]+2E[0-9 A-F]+)201B[0-9 A-F]+
    // Name: Executor Off Global
    // FBID: BD_MA2_EXCE

    var asciiData = THIS_DEVICE.hex2a(data);
    var ID = asciiData.replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting HEX Exec " + ID + " to off");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 0);
    }

    return "Executor " + ID + " turned on";
}

function ExecutorOnHex() {
    // Expresson: 4F6E1B5B33376D201B5B33326D4578656375746F721B5B33376D20([0-9 A-F]+2E[0-9 A-F]+)201B[0-9 A-F]+
    // Name: Executor On Global
    // FBID: BD_MA2_EXCE

    var asciiData = THIS_DEVICE.hex2a(data);
    var ID = asciiData.replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting HEX Exec " + ID + " to on");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 1);
    }

    return "Executor " + ID + " turned on";
}

function loginPromptHex() {
    // Expresson: ^(5B4368616E6E656C5D3E506C65617365206C6F67696E2021)
    // Name: Login Prompt
    // FBID: BD_MA2_LOGIN

    setTimeout(THIS_DEVICE.login, 100);
    return "Login attempted...";
}

function ExecutorLevelHex() {
    // Expresson: 4578656375746F721B5B33376D20([0-9 A-F]+2E[0-9 A-F]+201B5B33326D41741B5B33376D20[0-9 A-F]+)
    // Name: Executor Off Global
    // FBID: BD_MA2_EXCE

    var tempData = data.split("201B5B33326D41741B5B33376D20");
    var ID = "";
    var level = 0;

    if(tempData.length > 0) {
    	ID = THIS_DEVICE.hex2a(tempData[0]).replace(".","_");
    	level = THIS_DEVICE.hex2a(tempData[1]);

    	if(ON_CONTROLLER) {
    		CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to " + level);
    		CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_LVL_" + ID, level);
    	}
    }

    return "Executor " + ID + " went to level " + level;
}

function ExecutorOnHexPlain() {
    // Expresson: 4F6E20204578656375746F7220([0-9 A-F]+2E[0-9 A-F]+)
    // Name: Executor On Global
    // FBID: BD_MA2_EXCE

    var ID = THIS_DEVICE.hex2a(data).replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to on");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 1);
    }

    return "Executor " + ID + " turned on";
}

function ExecutorOffHexPlain() {
    // Expresson: 4F666620204578656375746F7220([0-9 A-F]+2E[0-9 A-F]+)
    // Name: Executor Off Global
    // FBID: BD_MA2_EXCE

    var ID = THIS_DEVICE.hex2a(data).replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to off");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 0);
    }

    return "Executor " + ID + " turned on";
}

function ExecutorLevelHexPlain() {
    // Expresson: 4578656375746F721B5B33376D20([0-9 A-F]+2E[0-9 A-F]+201B5B33326D41741B5B33376D20[0-9 A-F]+)
    // Name: Executor Off Plain
    // FBID: BD_MA2_EXCE

    var ID = THIS_DEVICE.hex2a(data).replace(".", "_");

    if(ON_CONTROLLER) {
    	CTRLAPI.Debug.WriteLine("Setting Exec " + ID + " to off");
    	CTRLAPI.ShowFeedback(THIS_DEVICE.FBID_PREFIX + "EXEC_" + ID, 0);
    }

    return "Executor " + ID + " turned on";
}
