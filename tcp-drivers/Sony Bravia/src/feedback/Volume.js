function Volume(data) {
    try {
        var vol_hex = data.toString();
    	var r = parseInt(vol_hex,10);
    	return r;
    } catch (e) {
    	return "Error";
    }
}

// Expression: \*S[N|A]VOLU(.*)
// Name:AudioVolume
// FBID: VOLUME
// Test Data:
