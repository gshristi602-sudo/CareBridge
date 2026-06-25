const aiButton = document.getElementById("aiButton");
const aiChat = document.getElementById("aiChat");
const closeAI = document.getElementById("closeAI");
const userInput = document.getElementById("userInput");

// Open AI Chat
if (aiButton) {
    aiButton.addEventListener("click", function () {
        aiChat.style.display = "block";
    });
}

// Close AI Chat
if (closeAI) {
    closeAI.addEventListener("click", function () {
        aiChat.style.display = "none";
    });
}

// Send Button
function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatMessages");

    let text = input.value.trim();

    if(text=="") return;

    // USER MESSAGE

    chat.innerHTML += `

    <div class="message user">

        <div class="messageText">

            ${text}

        </div>

    </div>

    `;

    // Scroll Down

    chat.scrollTop = chat.scrollHeight;

    // AI Typing...

    setTimeout(function(){

        let reply = "";

        let msg = text.toLowerCase();

        // ---------------------

    if(
    msg.includes("missing") ||
    msg.includes("lost") ||
    msg.includes("brother") ||
    msg.includes("sister") ||
    msg.includes("father") ||
    msg.includes("mother") ||
    msg.includes("friend") ||
    msg.includes("husband") ||
    msg.includes("wife")
){

    alert("💙 We are truly sorry to hear that your loved one is missing.\n\nPlease answer a few questions so CareBridge AI can immediately begin the search process.");

    let who = prompt("👤 Who is missing?\n\nExample: Brother, Sister, Father, Mother");

    if(!who) return;

    let name = prompt("📝 Missing Person's Full Name");

    if(!name) return;

    let gender = prompt("⚧ Gender\n\nMale / Female / Other");

    if(!gender) return;

    let age = prompt("🎂 Age");

    if(!age) return;

    let relation = prompt("❤️ Your Relationship with the Missing Person");

    if(!relation) return;

    // Only 10-digit phone number accepted
    let phone = "";

    while(true){

        phone = prompt("📞 Enter Your 10-Digit Contact Number");

        if(phone === null) return;

        phone = phone.trim();

        if(/^\d{10}$/.test(phone)){
            break;
        }

        alert("❌ Please enter a valid 10-digit mobile number.");
    }

    let location = prompt("📍 Where was the person last seen?");

    if(!location) return;

    let caseId = "CB-" + Math.floor(Math.random()*90000 + 10000);

    reply = `
    💙 <b>We are truly sorry to hear about your loved one.</b>

    <br><br>

    Your Missing Person Report has been submitted successfully.

    <br><br>

    <b>📄 Case ID :</b> ${caseId}

    <hr>

    👤 <b>Who is Missing :</b> ${who}<br>

    📝 <b>Name :</b> ${name}<br>

    ⚧ <b>Gender :</b> ${gender}<br>

    🎂 <b>Age :</b> ${age}<br>

    ❤️ <b>Relationship :</b> ${relation}<br>

    📞 <b>Contact Number :</b> ${phone}<br>

    📍 <b>Last Seen Location :</b> ${location}

    <hr>

    ✅ Your report has been securely registered.

    🚓 The nearest Police Station has been notified.

    🤝 Nearby NGOs and verified volunteers have received the alert.

    📱 Our CareBridge Rescue Team will contact you shortly on your registered mobile number.

    <br><br>

    💙 <b>"Stay hopeful. Every report matters, and together we'll do our best to reunite your loved one with your family."</b>

    `;
}
        // ---------------------

        else if(msg.includes("child")){

            reply = `
            👶 Missing Child Alert<br><br>

            Please provide:<br>

            ✔ Child Name<br>

            ✔ Age<br>

            ✔ Parent Name<br>

            ✔ Contact Number<br>

            ✔ Last Seen Location
            `;

        }

        // ---------------------

        else if(msg.includes("food") || msg.includes("help")){

            reply = `
            🍱 Need Help Registration<br><br>

            Please provide:<br>

            ✔ Full Name<br>

            ✔ Current Location<br>

            ✔ Phone Number<br>

            ✔ Type of Help<br>

            ✔ Family Members
            `;

        }

        // ---------------------

        else if(msg.includes("donate")){

            reply = `
            ❤️ Thank you for supporting CareBridge.<br><br>

            Donation Types:<br>

            • Money<br>

            • Food<br>

            • Clothes<br>

            • Books<br>

            • Medicine
            `;

        }

        // ---------------------

        else if(msg.includes("volunteer")){

            reply = `
            🙋 Volunteer Registration<br><br>

            Please provide:<br>

            ✔ Name<br>

            ✔ City<br>

            ✔ Skills<br>

            ✔ Phone Number
            `;

        }

        // ---------------------

        else if(msg.includes("medical")){

            reply = `
            🏥 Medical Assistance<br><br>

            Please provide:<br>

            ✔ Patient Name<br>

            ✔ Age<br>

            ✔ Disease<br>

            ✔ Hospital Required?
            `;

        }

        // ---------------------

        else if(msg.includes("shelter")){

            reply = `
            🏠 Shelter Finder<br><br>

            Please provide:<br>

            ✔ Current Location<br>

            ✔ Adults<br>

            ✔ Children
            `;

        }

        // ---------------------

        else if(msg.includes("sos") || msg.includes("emergency")){

            reply = `
            🆘 Emergency SOS Activated.<br><br>

            Please provide:<br>

            ✔ Current Location<br>

            ✔ Emergency Type<br>

            ✔ Phone Number
            `;

        }

        // ---------------------

        else{

            reply = `
            🤖 Sorry, I didn't understand.<br><br>

            You can ask me about:<br><br>

            🔍 Missing Person<br>

            👶 Missing Child<br>

            🍱 Food Help<br>

            ❤️ Donate<br>

            🙋 Volunteer<br>

            🏥 Medical Help<br>

            🆘 Emergency SOS
            `;

        }

        // AI MESSAGE

        chat.innerHTML += `

        <div class="message bot">

            <div class="messageIcon">

                🤖

            </div>

            <div class="messageText">

                ${reply}

            </div>

        </div>

        `;

        chat.scrollTop = chat.scrollHeight;

    },1000);

    input.value="";

}

// ----------------------------
// AI FUNCTIONS
// ----------------------------

function reportMissing() {

    alert(
`🔍 REPORT MISSING PERSON

✅ Request Submitted Successfully

Case ID : CB-10258

Our AI Rescue Assistant has notified nearby volunteers and NGOs.

You will receive updates soon.`
    );

}

function missingChild() {

    alert(
`👶 MISSING CHILD ALERT

✅ Alert Generated

Case ID : CB-21452

Nearby police stations, NGOs and volunteers have been notified.`
    );

}

function needHelp() {

    alert(
`🍱 HELP REQUEST

Food
Clothes
Medicine
Shelter

Your request has been registered successfully.

Status : Pending Verification`
    );

}

function donateNow() {

    alert(
`❤️ DONATION

Thank you for supporting CareBridge.

You can donate:

• Money

• Food

• Clothes

• Books

• Medicines

Donation Portal Coming Soon.`
    );

}

function volunteerNow() {

    alert(
`🙋 VOLUNTEER

Thank you for becoming a volunteer.

Our team will contact you soon with nearby volunteer opportunities.`
    );

}

function findShelter() {

    alert(
`🏠 SHELTER FINDER

Searching nearby shelters...

Nearest Shelter

Distance : 2.4 km

Status : Available`
    );

}

function medicalHelp() {

    alert(
`🏥 MEDICAL HELP

Medical assistance request received.

Nearby hospitals and NGOs are being notified.`
    );

}

function emergencySOS() {

    alert(
`🆘 EMERGENCY SOS

SOS Activated Successfully

Nearest NGO
Nearest Volunteer
Emergency Contact

have been notified immediately.`
    );

}