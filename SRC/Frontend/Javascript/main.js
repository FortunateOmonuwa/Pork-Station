//Include all DOM elemenets here
const enquiryContainer = document.querySelector(".enquiry-container");
const messageContainer = document.querySelector(".message-container");
const cancelContainer = document.querySelector(".close-icon");
const sendIcon = document.querySelector(".send-icon");
const errorMessage = document.querySelector(".error-message");
const enquiryInputMessage = document.querySelector(".enquiry-input-message");
const navItems = document.querySelectorAll(".item");
const navigationContent = document.querySelector(".navigation-content");
const customerButton = document.querySelector(".button-container");
const signup = document.querySelector(".signup-section");
const cancelSignup = document.querySelector('.close-icon-2')


//Function for adding events on elements that share the same class name.i.e an array.

const addEvents = function (elements, eventType, callBack) {
  elements.forEach((element) => {
    element.addEventListener(eventType, callBack);
  });
};

//Function for adding an event one single element

const addEvent = function (element, eventType, callBack) {
  element.addEventListener(eventType, callBack);
};

//Toggle for the Message Container.

addEvent(enquiryContainer, "click", function () {
  messageContainer.classList.toggle("active");
  enquiryContainer.style.display = "none";
});

addEvent(cancelContainer, "click", function () {
  messageContainer.classList.remove("active");
  enquiryContainer.style.display = "flex";

});

// addEvent(enquiryContainer, "click", function (e) {
//   const clickedContainer = e.target.closest(".enquiry-icon");
//   if (clickedContainer) {
//     messageContainer.classList.toggle("active");
//   }
// });

//Toggle for error message

addEvent(sendIcon, "click", function () {
  var userInput = enquiryInputMessage.value.trim();
  errorMessage.style.display = "none";
  if (!userInput) {
    setTimeout(() => {
      errorMessage.style.display = "flex";
    }, 100);
  }
});



//Navigation item

navigationContent.addEventListener("click", (e) => {
  let clickedItem = e.target;
  console.log(clickedItem);
  if (clickedItem) {
    navItems.forEach((item) => item.classList.remove("activeItem"));
    e.target.parentElement.classList.add("activeItem");
  } 
});


// Adding the "active" class to signup section
addEvent(customerButton, "click", (e) => {
  signup.classList.add("active");
  enquiryContainer.style.display = "none";
  navItems.forEach((item) => item.style.display = "none");
});

// Removing the "active" class from the signup section
addEvent(cancelSignup, "click", (e) => {
   
  signup.classList.remove("active");
  navItems.forEach((item) => (item.style.display = "flex"));
  
});


