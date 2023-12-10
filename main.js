// The Name in the personal details
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const Name = document.getElementById("fullName");
const adName = document.getElementById("Name");
// Personal details
const column2Cells = document.querySelectorAll('.column2Cell');
const column2Inputs = document.querySelectorAll('.column2Input');
const email = document.getElementById("eMail");
const CNumber = document.getElementById("conNum");
// Booking Details
const branchSelect = document.getElementById("branch");
const Branch = document.getElementById("branchRow");
const numAdult = document.getElementById("noAdults");
const numKids = document.getElementById("kids");
const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');
// Extra Requiremnts
const View = document.getElementsByName("view");
const viewLabel = document.getElementById("exView");
const extraChoices = document.getElementsByName("requirement");
const reQ = document.getElementById("reQ");
// Room Booking
const sRoom = document.getElementById("single");
const dRoom = document.getElementById("duluxe");
const tRoom = document.getElementById("triple");
const bed = document.getElementById("bed");
const child = document.getElementById("kids");
const Single = document.getElementById("s-rooms");
const Duluxe = document.getElementById("d-rooms");
const Triple = document.getElementById("t-rooms");
const Bedding = document.getElementById("bedding");
const ChildMeal = document.getElementById("childMeal");
const rTotal = document.getElementById("r-total");
// Adventure Booking
const advbranch = document.getElementById("advbranch");
const advBranch = document.getElementById("advBranch");
const lAdult = document.getElementById("lAd");
const lChild = document.getElementById("lChild");
const fAdult = document.getElementById("fAdult");
const fChild = document.getElementById("fChild");
const hours = document.getElementById("hours");
const instructor = document.getElementById("Instruct");
const LoAdult = document.getElementById("l-adults");
const LoChild = document.getElementById("l-child");
const FoAdult = document.getElementById("f-adults");
const FoChild = document.getElementById("f-child");
const Guide = document.getElementById("guide");
const aTotal = document.getElementById("ad-total");
// Buttons
const AdButton = document.getElementById("advbtn");
const bookBtn = document.getElementById("Bookbtn");
const loyaltyBtn = document.getElementById("loyaltybtn");
const favBtn = document.getElementById("favbtn");
// Overall Booking 
const oTotal = document.getElementById("oTotal");
const Rtotal = document.getElementById("Rtotal");
const Atotal = document.getElementById("Atotal");
const Tab2 = document.querySelectorAll('.tab2');
const Promo = document.getElementById("promo");
const PromoCode = document.getElementById("promoCode");
const Loyalty = document.getElementById("loyalty");


window.addEventListener('load', init);

//indial function
function init() {
  rTotal.textContent = 0.00.toFixed(2);
  aTotal.textContent = 0.00.toFixed(2);
  oTotal.textContent = 'LKR ' + 0.00.toFixed(2);
}

// Date Validation
const currentDate = new Date().toISOString().split('T')[0];
document.getElementById('checkIn').min = currentDate;
document.getElementById('checkOut').min = currentDate;


// Entering the name in the personal details and the adventure booking
function updateCol2(){
  Name.textContent = firstName.value + ' ' + lastName.value;
  adName.textContent = firstName.value + ' ' + lastName.value;
}
firstName.addEventListener('input', updateCol2);
lastName.addEventListener('input', updateCol2);

// Entering the branch name
function updateBranch(){
  const selectedBranch = branchSelect.value;
  Branch.textContent = selectedBranch;

}
branchSelect.addEventListener('input', updateBranch);

// Displaying the content of the personal details table
function updateTable() {
  column2Inputs.forEach((input, index) => {
    const value2 = input.value;
    column2Cells[index].textContent = value2;
  });
}
// Listen for the "input" event on each form input
column2Inputs.forEach((input) => {
  input.addEventListener('input', updateTable);
});
// Extra Requirements
View.forEach(item=>item.addEventListener("change",updateView));
function updateView() {
  let view;
  if(this.value=="pool"){
    view  = "Pool View";
  }
  else{
    view = "Garden View";
  }
  viewLabel.innerText= view;
}
extraChoices.forEach(item=>item.addEventListener("change",updateExtra));
function updateExtra(){
  let eX1 = " ";
  let eX2 = " ";
  extraChoices.forEach(choice => {
    if (choice.value === "wifi" && choice.checked) {
        eX1 = "Wifi";
    } else if (choice.value === "bar" && choice.checked) {
        eX2 = "Mini Bar";
    }
});

reQ.textContent = eX1 + (eX1 && eX2 ? " " : "") + eX2;
}

// Displaying the content of the Room booking table
function updateRooms(){
  // calculating the duration of the stay
  let checkInDate = new Date(checkIn.value);
  let checkOutDate = new Date(checkOut.value);

   // Check if the check-in date is greater than the check-out date
   if (checkInDate > checkOutDate) {
    alert('Kindly ensure that the Check-Out date falls on or after the Check-In date');
    return;
  }

  let totalDays = Math.round(Math.abs((checkOutDate - checkInDate)/(24*60*60*1000)));

  Single.textContent = sRoom.value * 25000 ;
  Duluxe.textContent = dRoom.value * 35000 ;
  Triple.textContent = tRoom.value * 40000 ;
  Bedding.textContent = bed.value * 8000 ;
  ChildMeal.textContent = child.value * 5000 ;

  let total = (parseInt(Single.textContent) + parseInt(Duluxe.textContent) + parseInt(Triple.textContent) + parseInt(Bedding.textContent) + parseInt(ChildMeal.textContent))*totalDays;
  if (isNaN(total)) {
    total = 0;
  }
  rTotal.textContent = total  ;
  
}
sRoom.addEventListener('input', updateRooms);
dRoom.addEventListener('input', updateRooms);
tRoom.addEventListener('input', updateRooms);
bed.addEventListener('input',updateRooms);
child.addEventListener('input',updateRooms);
checkIn.addEventListener('input',updateRooms);
checkOut.addEventListener('input',updateRooms);

// Entering the branch name
function updateAdvBranch(){
  const selectedAdvBranch = advbranch.value;
  advBranch.textContent = selectedAdvBranch;
}
advbranch.addEventListener('input', updateAdvBranch);

// Displaying the content of the  Adventure booking table
function updateAdventures(){
  LoAdult.textContent = (lAdult.value * 5000 * hours.value).toFixed(2);
  LoChild.textContent = (lChild.value * 2000 * hours.value).toFixed(2);
  FoAdult.textContent = (fAdult.value * 10000 * hours.value).toFixed(2);
  FoChild.textContent = (fChild.value * 5000 * hours.value).toFixed(2);
  // need of a guide
  const guide = instructor.value;
  if (guide === "Guide Required"){
    Guide.textContent = (parseInt(lAdult.value * 1000) + parseInt(fAdult.value * 1000) + parseInt(lChild.value * 500) + parseInt(fChild.value * 500)).toFixed(2);
  }
  else{
    Guide.textContent = (0).toFixed(2)
  }

  const atotal = parseInt(LoAdult.textContent) + parseInt(LoChild.textContent) + parseInt(FoAdult.textContent) + parseInt(FoChild.textContent) + parseInt(Guide.textContent);
  aTotal.textContent = atotal.toFixed(2);
}

lAdult.addEventListener('input', updateAdventures);
lChild.addEventListener('input', updateAdventures);
fAdult.addEventListener('input', updateAdventures);
fChild.addEventListener('input',updateAdventures);
hours.addEventListener('input',updateAdventures);
instructor.addEventListener('input', updateAdventures);

// Clearing the current booking
function clear(){
  Tab2.forEach(element => {
    element.textContent = '';});

  column2Cells.forEach(element => {
    element.textContent = '';});
}
// Book Now Button
function book(event){
  event.preventDefault();
  // Form Validation
  const Sroom = sRoom.value;
  const Droom = dRoom.value;
  const Troom = tRoom.value;
  const BrSelect = branchSelect.value;
  const FName = firstName.value;
  const lName = lastName.value;
  const e_mail = email.value;
  const telNum = CNumber.value;
  const Ad =  numAdult.value;
  const Child = numKids.value;
  const arrival = checkIn.value;
  const dep = checkOut.value;
  if ( BrSelect.trim() == "" ||
       FName.trim() == "" ||
       lName.trim() == "" ||
       e_mail.trim() == "" ||
       telNum.trim() == "" ||
       parseInt(Ad) <= 0 ||
       arrival.trim() == "" ||
       dep.trim() == "" ||
       Sroom.trim() == 0 && 
       Droom.trim() == 0 && 
       Troom.trim() == 0
      ) 
      {
        alert(["Kindly ensure all required fields are completed for a successful submission!"]);
      } 
  else {
    alert([
      `Thank you for booking your stay with Santani!\n
        Booking Details:
           - Branch: ${branchSelect.value}
           - No. of Single Rooms: ${sRoom.value}
           - No. of Duluxe Rooms: ${dRoom.value}
           - No. of Triple Rooms: ${tRoom.value}
           - No. of Extra Beds: ${bed.value}
          We look forward to welcoming you to Santani. Safe travels!`
    ]);
    // Overall Booking
     Rtotal.innerText = rTotal.textContent;
    if (parseFloat(Rtotal.textContent) === 0) {
      Rtotal.innerText = 0.00.toFixed(2);
    } 
    else {
       Rtotal.innerText =rTotal.textContent;
    }
    
    if (parseFloat(aTotal.textContent) === 0) {
      Atotal.innerText = 0.00.toFixed(2);
    } 
    else {
      Atotal.innerText = aTotal.textContent;
    }
    oTotal.innerText = (parseInt(rTotal.textContent) + parseInt(aTotal.textContent)).toFixed(2);
    if(Promo.value == "Promo123"){
      PromoCode.innerText = "Valid Promo Code";
      let promocode
      promocode = oTotal.innerText - (rTotal.innerText * 0.05);
      oTotal.innerText = 'LKR ' + promocode.toFixed(2);
        
    } 
    else {
       PromoCode.innerText = "Invalid Promo Code";
    }
    clear();
    if (isNaN(parseFloat(oTotal.innerText))){
      oTotal.innerText = 'LKR 0.00';
    }
  }
}
bookBtn.addEventListener('click', book);

// Clearing the Overall Booking
function erase() {
  Rtotal.textContent = '';
  Atotal.textContent = '';
  PromoCode.innerText = '';
  oTotal.textContent = 'LKR ' + 0.00.toFixed(2);
}

// Book Adventure Button
AdButton.addEventListener("click",AdBook);
function AdBook(event) {
  event.preventDefault(); 
  let adVBranch = advbranch.value;
  let foreignAdults = parseInt(fAdult.value) || 0;
  let foreignKids = parseInt(fChild.value) || 0;
  let localAdults = parseInt(lAdult.value) || 0;
  let localKids = parseInt(lChild.value) || 0;
  let advDuration = parseInt(hours.value) || 0;
  if (adVBranch.trim()==" " ||
      foreignAdults == 0 &&
      foreignKids == 0 &&
      localAdults == 0 &&
      localKids == 0) {
        alert(["Kindly ensure all required fields are completed for a successful submission!"]);
    } 
    else {
      alert([
        `Thank you for booking your adventure with Santani!\n
        Booking Details:
        - Branch: ${adVBranch}
        - No. of Participants: ${foreignKids + foreignAdults + localAdults + localKids}
        - Adventure Durations: ${advDuration} hour(s)
        - Guide Requirement: ${instructor.value}\n
        Your adventure awaits!`
      ]);
      clear();
      erase();
  }
}

// Loyalty Button
loyaltyBtn.addEventListener('click', function(event){
  event.preventDefault(); 
  const sRoomValue = parseInt(sRoom.value) || 0; // Use 0 if parseInt returns NaN
  const dRoomValue = parseInt(dRoom.value) || 0;
  const tRoomValue = parseInt(tRoom.value) || 0;

  const NumRooms = sRoomValue + dRoomValue + tRoomValue;
  let loyaltyPoints = 0;

  if (NumRooms >= 3) {
    loyaltyPoints = NumRooms * 20;
  }

  localStorage.setItem('loyaltyPoints', loyaltyPoints);
  const storedLoyaltyPoints = localStorage.getItem('loyaltyPoints');
  Loyalty.textContent = `You have ${storedLoyaltyPoints} Loyalty Points`;
});

// Add to favourites Button
function favourites(event){
  event.preventDefault(); 
  const favouriteBookingData = [];
  const bookingData = {
    "Full Name":firstName.value +lastName.value,
    "Email":email.value,
    "Contact Number":CNumber.value,
    "No. of Adults":numAdult.value,
    "No. of Children":numKids.value,
    "Check In Date":checkIn.value,
    "Check Out Date":checkOut.value,
    "No. of single rooms":sRoom.value,
    "No. of duluxe rooms":dRoom.value,
    "No. of triple rooms":tRoom.value,
    "No. of extra beds": bed.value,
    "No. of extra kid's meals": child.value,
    "Promo Code":Promo.value,
    "No. of Local Adults for Adventures": lAdult.value,
    "No. of Local kids for Adventures":lChild.value,
    "No. of Foreign Adults for Adventures":fAdult.value,
    "No. of Foreign kids for Adventures":fChild.value,
    "Guide Requirement":instructor.value,
  };
  favouriteBookingData.push(bookingData);
  localStorage.setItem('favouriteBooking',JSON.stringify(favouriteBookingData));
  console.log(localStorage);
  alert(["Added to Favourites!"]);
}
favBtn.addEventListener('click',favourites);