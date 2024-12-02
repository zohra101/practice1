function practice1() {
   
    const partyGuest = {
        guestName: "Alex",
        numAttendees: 1,
        rsvp: "yes"       
    }
    document.write("Practice 1:  " + partyGuest.guestName + ", " + partyGuest.numAttendees + ", " + partyGuest.rsvp);
}

function practice2() {
    debugger;
    const partyGuest1 = ["Alex", 1, "yes"]
    let index = 0;
    let partyGuestInfo = "";

for (len = partyGuest1.length; index = len; index++)
    {   
        partyGuestInfo += partyGuest1[index] + ", "; 
        return partyGuestInfo;
        // document.write(partyGuestInfo);
    }
}
 
