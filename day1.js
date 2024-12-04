function practice1() {
   
    const partyGuest = {
        guestName: "Alex",
        numAttendees: 1,
        rsvp: "yes"       
    }
    document.write("Practice 1:  " + partyGuest.guestName + ", " + partyGuest.numAttendees + ", " + partyGuest.rsvp);
}

function practice2() {
    //Define the array
    const partyGuest1 = ["Alex", 1, true];
    //Set the starting index value
    let index = 0;
     //Initialize partyGuestInfo as an empty string
    let partyGuestInfo = ""; 

    //Run the loop to parse the array
    //As long as the index is less than the lenght of the array, run the loop
    for (len = partyGuest1.length; index < len; index++) {   
        //Add each value from the array with a comma and space after it
        partyGuestInfo += partyGuest1[index] + ", "; 
    }
    //Trim the final comma and space
    partyGuestInfo = partyGuestInfo.slice(0, -2); 
    //Output the final value
    document.write(partyGuestInfo);
}

function practice2b() {
    //Define the array
    const partyGuest1Array = [];
    partyGuest1Array.push("Alex"); 
    partyGuest1Array.push(1); 
    partyGuest1Array.push(true);

    //Set the starting index value
    const count = partyGuest1Array.length

    //Run the loop to parse the array
    //As long as the index is less than the lenght of the array, run the loop
    for (let index = 0; index < count; index++) {   
        //Add each value from the array with a comma and space after it
       value = partyGuest1Array[index];
    }
    output();
}

function practice3() {
    //Create three objects with three properties each
    const partyGuest1 = {name: "Alex", numGuests: 2, attending: true};
    const partyGuest2 = {name: "Jim", numGuests: 1, attending: true};
    const partyGuest3 = {name: "Lily", numGuests: 1, attending: false};

    //Put the objects in an array
    const partyGuests = [partyGuest1, partyGuest2, partyGuest3];

    //Set the starting index value
    let index = 0;
     //Initialize partyGuestInfo as an empty string
    let partyGuestInfo = ""; 

    //Run the loop to parse the array
    //As long as the index is less than the lenght of the array, run the loop
    for (let len = partyGuests.length; index < len; index++) {   
        //Add each value from the array with a comma and space after it
        partyGuestInfo += `Name: ${partyGuests[index].name}<br> 
        Number of Guests: ${partyGuests[index].numGuests}<br>
        Attending: ${partyGuests[index].attending}<br><br>`;
    }

    //Output the final value
    document.write(partyGuestInfo);
}
 
