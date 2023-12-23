
/**
 * This function is called when the popup is opened.
 * It will retrieve the stored credentials from Chrome storage
 * and populate the input fields with them if they exist.
 * 
 * It will also add an event listener to the save button
 * and the input fields to save the credentials when the
 * save button is clicked or the 'Enter' key is pressed.
 */
document.addEventListener('DOMContentLoaded', function () {

  // Get the save button and input fields
  const saveButton = document.getElementById('saveButton');
  const STUDENT_ID_Input = document.getElementById('STUDENT_ID');
  const SRS_PASSWORD_Input = document.getElementById('SRS_PASSWORD');

  // Function to save credentials and close the popup
  function saveCredentialsAndClose() {
    const STUDENT_ID = STUDENT_ID_Input.value;
    const SRS_PASSWORD = SRS_PASSWORD_Input.value;

    // Store ID and Password in Chrome Storage
    chrome.storage.sync.set({ 'STUDENT_ID': STUDENT_ID, 'SRS_PASSWORD': SRS_PASSWORD }, function () {
      console.log('ID and Password are stored');
    });

    // Close the popup window
    window.close();
  }

  // Retrieve stored credentials and populate input fields if they exist
  chrome.storage.sync.get(['STUDENT_ID', 'SRS_PASSWORD'], function (data) {
    const storedStudentID = data.STUDENT_ID;
    const storedPassword = data.SRS_PASSWORD;

    if (storedStudentID) {
      STUDENT_ID_Input.value = storedStudentID;
    }

    if (storedPassword) {
      SRS_PASSWORD_Input.value = storedPassword;
    }
  });

  // Event listener for save button
  saveButton.addEventListener('click', saveCredentialsAndClose);

  // Event listener for 'Enter' key press in input fields
  STUDENT_ID_Input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      saveCredentialsAndClose();
    }
  });

  SRS_PASSWORD_Input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      saveCredentialsAndClose();
    }
  });
});
