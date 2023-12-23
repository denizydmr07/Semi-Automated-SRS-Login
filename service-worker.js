console.log("Service Worker Loaded");

/**
 * This event listener will be triggered when the popup
 * sends a message to the background script.
 * 
 * The message will contain the credentials that were
 * entered in the popup.
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  // Check if the message is the one we're expecting
  if (message.message === "Accesing Account Information") {

    // Retrieve the stored credentials from Chrome storage
    chrome.storage.sync.get(['STUDENT_ID', 'SRS_PASSWORD'], async function(data) {
      const STUDENT_ID = data.STUDENT_ID;
      const SRS_PASSWORD = data.SRS_PASSWORD;
      
      // Send the response inside the storage callback
      sendResponse({ received: true, content: "Account Information is Sent", STUDENT_ID: STUDENT_ID, SRS_PASSWORD: SRS_PASSWORD });
    });
    
    // Returning true from onMessage event handler to indicate that we want to use sendResponse asynchronously
    return true;
  }
});
