function PowerOff() {
    return "*SCPOWR0000000000000000\n";
}

function PowerOn() {
    return "*SCPOWR0000000000000001\n";
}

function getAudioVolume() {
    return "*SEVOLU################\n";
}

function VolUp() {
    return "*SCIRCC0000000000000030\n";
}

function VolDown() {
    return "*SCIRCC0000000000000031\n";
}

function getPowerStatus() {
    // Response
    // "*SAPOWR0000000000000000" Standby (Off)
    // "*SAPOWR0000000000000001" Active (On)
    // "*SAPOWRFFFFFFFFFFFFFFFF" Error
    return "*SEPOWR################\n";
}

function setAudioVolume() {
    var number = ""; // Num can varie from 0-100

    num = num.toString(10);
    for ( var i = 0; i < (16 - num.length); i++ ) {
    	number = number.concat("0");
    }

    number = number.concat(num);

    // Response
    // "*SAVOLU0000000000000000" Success
    // "*SAVOLUFFFFFFFFFFFFFFFF" Error
    var message = "*SCVOLU" + number + "\n";
    return message;
}

function setAudioMute() {
    // "*SCAMUT0000000000000001\n" Mute
    //
    // Response
    // "*SAAMUT0000000000000000" Success
    // "*SAAMUTFFFFFFFFFFFFFFFF" Error
    //
    // Need Toggle
    return "*SCAMUT0000000000000000\n"; // Unmute
}

function getAudioMute() {
    // Response
    // "*SAAMUT0000000000000000\n" Not Muted
    // "*SAAMUT0000000000000001\n" Muted
    // "*SASMUTFFFFFFFFFFFFFFFF" Error
    return "*SEAMUT################\n";
}

function setInput() {
    var code = "0";
    switch (type) {

    	case "H":
    		code = "1"; // For HDMI
    		break;

    	case "C":
    		code = "4"; // For Component
    		break;

    	case "M":
    		code = "5"; // For Screen Mirroring
    		break;
    }

    var number = ""; // Num can varie from 1-9999

    num = num.toString(10);
    for ( var i = 0; i < (4 - num.length); i++ ) {
    	number = number.concat("0");
    }

    number = number.concat(num);

    // Response
    // "*SAVOLU0000000000000000" Success
    // "*SAVOLUFFFFFFFFFFFFFFFF" Error

    var message = "*SCINPT0000000" + code + "0000" + number +"\n";
    return message;
}

function setIrccCode() {
    var code = "0000000000000000";
    
    switch (command) {
    	case "Display":
    		code = "0000000000000005";
    		break;

    	case "Home":
    		code = "0000000000000006";
    		break;

    	case "Option":
    		code = "0000000000000007";
    		break;

    	case "Return":
    		code = "0000000000000008";
    		break;

    	case "Up":
    		code = "0000000000000009";
    		break;

    	case "Down":
    		code = "0000000000000010";
    		break;

    	case "Right":
    		code = "0000000000000011";
    		break;

    	case "Left":
    		code = "0000000000000012";
    		break;

    	case "Confirm":
    		code = "0000000000000013";
    		break;

    	case "Red":
    		code = "0000000000000014";
    		break;

    	case "Green":
    		code = "0000000000000015";
    		break;

    	case "Yellow":
    		code = "0000000000000016";
    		break;

    	case "Blue":
    		code = "0000000000000017";
    		break;

    	case "Num1":
    		code = "0000000000000018";
    		break;

    	case "Num2":
    		code = "0000000000000019";
    		break;

    	case "Num3":
    		code = "0000000000000020";
    		break;

    	case "Num4":
    		code = "0000000000000021";
    		break;

    	case "Num5":
    		code = "0000000000000022";
    		break;

    	case "Num6":
    		code = "0000000000000023";
    		break;

    	case "Num7":
    		code = "0000000000000024";
    		break;

    	case "Num8":
    		code = "0000000000000025";
    		break;

    	case "Num9":
    		code = "0000000000000026";
    		break;

    	case "Num0":
    		code = "0000000000000027";
    		break;

    	case "VolumeUp":
    		code = "0000000000000030";
    		break;

    	case "VolumeDown":
    		code = "0000000000000031";
    		break;

    	case "Mute":
    		code = "0000000000000032";
    		break;

    	case "ChannelUp":
    		code = "0000000000000033";
    		break;

    	case "ChannelDown":
    		code = "0000000000000034";
    		break;

    	case "Subtitle":
    		code = "0000000000000035";
    		break;

    	case "DOT":
    		code = "0000000000000038";
    		break;

    	case "PictureOff":
    		code = "0000000000000050";
    		break;

    	case "Wide":
    		code = "0000000000000061";
    		break;

    	case "Jump":
    		code = "0000000000000062";
    		break;

    	case "SyncMenu":
    		code = "0000000000000076";
    		break;

    	case "Forward":
    		code = "0000000000000077";
    		break;

    	case "Play":
    		code = "0000000000000078";
    		break;

    	case "Rewind":
    		code = "0000000000000079";
    		break;

    	case "Prev":
    		code = "0000000000000080";
    		break;

    	case "Stop":
    		code = "0000000000000081";
    		break;

    	case "Next":
    		code = "0000000000000082";
    		break;

    	case "Pause":
    		code = "0000000000000084";
    		break;

    	case "FlashPlus":
    		code = "0000000000000086";
    		break;

    	case "FlashMinus":
    		code = "0000000000000087";
    		break;

    	case "TVPower":
    		code = "0000000000000098";
    		break;

    	case "Audio":
    		code = "0000000000000099";
    		break;

    	case "Input":
    		code = "0000000000000101";
    		break;

    	case "Sleep":
    		code = "0000000000000104";
    		break;

    	case "SleepTimer":
    		code = "0000000000000105";
    		break;

    	case "Video2":
    		code = "0000000000000108";
    		break;

    	case "PictureMode":
    		code = "0000000000000110";
    		break;

    	case "DemoSurround":
    		code = "0000000000000121";
    		break;

    	case "HDMI1":
    		code = "0000000000000124";
    		break;

    	case "HDMI2":
    		code = "0000000000000125";
    		break;

    	case "HDMI3":
    		code = "0000000000000126";
    		break;

    	case "HDMI4":
    		code = "0000000000000127";
    		break;

    	case "ActionMenu":
    		code = "0000000000000129";
    		break;

    	case "Help":
    		code = "0000000000000130";
    		break;
    }

    // Response
    // "*SAIRCC0000000000000000" Success
    // "*SAIRCCFFFFFFFFFFFFFFFF" Error
    var message = "*SCIRCC" + code + "\n";
    return message;
}

function PowerOff() {
    return "*SCPOWR0000000000000000\n";
}

function PowerOff() {
    return "*SCPOWR0000000000000000\n";
}

function PowerOff() {
    return "*SCPOWR0000000000000000\n";
}
