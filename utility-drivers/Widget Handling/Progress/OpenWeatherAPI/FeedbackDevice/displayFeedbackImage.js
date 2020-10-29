if(ON_GUI) {
	leftFeedback = GUIAPI.GetFeedback("TV_STATE_LEFT");
	rightFeedback = GUIAPI.GetFeedback("TV_STATE_RIGHT");
	centerFeedback = GUIAPI.GetFeedback("TV_STATE_MIDDLE");
}

if(ON_CONTROLLER) {
	leftFeedback = CTRLAPI.GetFeedback("TV_STATE_LEFT");
	rightFeedback = CTRLAPI.GetFeedback("TV_STATE_RIGHT");
	centerFeedback = CTRLAPI.GetFeedback("TV_STATE_MIDDLE");
}

switch (leftFeedback){
	case "APPLE TV":
		THIS_DEVICE.InitiateLeftImage("appletv_feedback");
		break;
	case "FOXTEL 1":
		THIS_DEVICE.InitiateLeftImage("foxtel1_feedback");
		break;
	case "FOXTEL 2":
		THIS_DEVICE.InitiateLeftImage("foxtel2_feedback");
		break;
	case "FOXTEL 3":
		THIS_DEVICE.InitiateLeftImage("foxtel3_feedback");
		break;
	case "HOUSE CCTV":
		THIS_DEVICE.InitiateLeftImage("camerafeedback");
		break;
	case "OFFICE CCTV":
		THIS_DEVICE.InitiateLeftImage("camerafeedback");
		break;
	case "COMPUTER":
		THIS_DEVICE.InitiateLeftImage("computerfeedback");
		break;
	case "OFF":
		THIS_DEVICE.InitiateLeftImage("");
}

switch (rightFeedback){
	case "APPLE TV":
		THIS_DEVICE.InitiateRightImage("appletv_feedback");
		break;
	case "FOXTEL 1":
		THIS_DEVICE.InitiateRightImage("foxtel1_feedback");
		break;
	case "FOXTEL 2":
		THIS_DEVICE.InitiateRightImage("foxtel2_feedback");
		break;
	case "FOXTEL 3":
		THIS_DEVICE.InitiateRightImage("foxtel3_feedback");
		break;
	case "HOUSE CCTV":
		THIS_DEVICE.InitiateRightImage("camerafeedback");
		break;
	case "OFFICE CCTV":
		THIS_DEVICE.InitiateRightImage("camerafeedback");
		break;
	case "COMPUTER":
		THIS_DEVICE.InitiateRightImage("computerfeedback");
		break;
	case "OFF":
		THIS_DEVICE.InitiateRightImage("");
}

switch (centerFeedback){
	case "APPLE TV":
		THIS_DEVICE.InitiateCenterImage("appletv_feedback");
		break;
	case "FOXTEL 1":
		THIS_DEVICE.InitiateCenterImage("foxtel1_feedback");
		break;
	case "FOXTEL 2":
		THIS_DEVICE.InitiateCenterImage("foxtel2_feedback");
		break;
	case "HOUSE CCTV":
		THIS_DEVICE.InitiateCenterImage("camerafeedback");
		break;
	case "OFFICE CCTV":
		THIS_DEVICE.InitiateCenterImage("camerafeedback");
		break;
	case "COMPUTER":
		THIS_DEVICE.InitiateCenterImage("computerfeedback");
		break;
	case "OFF":
		THIS_DEVICE.InitiateCenterImage("");
}

return "";
