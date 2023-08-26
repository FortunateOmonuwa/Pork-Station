//Include all DOM elemenets here
const enquiryContainer = document.querySelector(".enquiry-container");
const messageContainer = document.querySelector(".message-container");
const cancelContainer = document.querySelector(".close-icon");
const sendIcon = document.querySelector(".send-icon");
const errorMessage = document.querySelector(".error-message");
const enquiryInputMessage = document.querySelector(
  ".enquiry-input-message"
).value;

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
  if (!enquiryInputMessage) {
    errorMessage.classList.toggle("active");
  }
  else{
    errorMessage.classList.remove("active");
  }
});
