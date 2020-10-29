This script device handles popups in a way that we could automate some of the process. 

Currently it deals especially with tracking which room the user is in and buffering this information in the script device.
When a foxtel page is opened, the correct volumn bar and local home control tabs will popup accordingly.

Contact jazor@boutiqueav.com.au or jazor.he@gmail.com if you have any further questions.

WHAT YOU NEED TO DO:
1. Name your pages correctly, because this script device refers to pages with their names:
- Rooms should always start with the same prefix, e.g. "SourceSelection-LIVING" means this is a living room Source Selection page
- Volumn popup pages should start with the "Vol-" followed by the room prefix, e.g. "Vol-LIVING"
- Source pages should start with the "Source-" Prefix
- Power off popup should be named as "PopUp-PowerOffFullHome"
- AccessControl Page should be named as "PopUp-AccessControl"
- Room Controls should be in Prefix of "Lighting-"/"Blinds-"
- There is a "MasterPop" popup which manages local room controls


2. On your SourceSelection Page (Or anywhere else you wish to track the user's room), programme the buttons:
- On button pressed, (or on released, but prefer on pressed to keep things uniformed)
- Choose: run script device function
- Choose setRoomName
- Set parameter to the room name e.g. "LIVING" as parameter means after pressing the button, the user will be marked in the living room
- Other room names are "RUMPUS", "ALFRESCO", etc.
- You don't need to add anything to the script device to add a new room, 
as long as your page names stick to our naming convension, it should work automatically


3. In order for this script device to show popup in a particular page, you need to:
- Have a button on the current page which would direct to the popup (does not need to have an button image)
- You cannot have these dummy buttons on a popup page, they need to be on actual pages
- e.g. On all Source pages, I have over 40 dummy buttons hidden behind the bottom bar, 
they each direct to a specific popup that needs to show up in this page at some stage,
they are not clickable, but they allow the script device to find the correct popup page.


Notes:
- A lot of the close popup buttons are programmed to run the "closeRoomControlPopup" function,
It just saves time when copy and pasting these crosses to every page
- Do not attempt to bring too many popups overlaying each other, 
because javascript cannot decide which popup needs to be rendered on the top


This device can also be used to:
- Bring up multiple popups at once
- Automatically closing popups after a specific period of time
- etc.

While these funtions needs more specific adjustments to the Shared Functions code.

Possible functions for future development:
1. setSourceName
2. Eliminate AppleTV/FoxtelTV Selection Pages
3. Dynamic Text Feedback

In progress:
