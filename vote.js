// Store votes
const votes = JSON.parse(localStorage.getItem("votes")) || {
    president: {},
    "vice-president": {}
};

// Handle form submission
document.getElementById("votingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Check if user has already voted
//function hasUserVoted() {
 //   return localStorage.getItem("hasVoted") === "true";
//}

    // Check if the user has already voted
    //if (hasUserVoted()) {
      //  alert("You have already voted. Redirecting to results...");
        //window.location.href = "index.html";
        //return;
    //}

    // Gather form data
    const formData = new FormData(this);
    const president = formData.get("president");
    const vicePresident = formData.get("vice-president");


    // Increment votes
    votes.president[president] = (votes.president[president] || 0) + 1;
    votes["vice-president"][vicePresident] = (votes["vice-president"][vicePresident] || 0) + 1;

    // Save votes and mark the user as having voted
    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("hasVoted", "true");

    // Confirm submission and redirect
    alert("Your vote has been submitted successfully!");
    window.location.href = "index.html";
});
