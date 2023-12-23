/**
 * This script is injected into the login page of SRS.
 * It will automatically fill in the login form with the
 * credentials stored in Chrome storage.
 */
chrome.runtime.sendMessage({ message: "Accesing Account Information"}, (response) => {
    console.log("Account Information Accesed");

    // Check if account information exists
    if (response.STUDENT_ID === undefined || response.SRS_PASSWORD == undefined) {
        console.log("Account Information Not Found");
        return;
    }

    // Fill in the login form
    document.getElementById("LoginForm_username").value = response.STUDENT_ID;
    document.getElementById("LoginForm_password").value = response.SRS_PASSWORD;

    // Click the login button
    document.getElementsByName("yt0")[0].click();
});



