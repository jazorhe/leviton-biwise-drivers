function Power(data) {
    try {
        var vol_hex = data.toString();
    	var r = parseInt(vol_hex,10);
    	return r;

    } catch (e) {
    	return "Error";
    }
}

// Expression: \*S[N|A]POWR(.*)
// Name: PowerStatus
// FBID: POWER
// Test Data:
