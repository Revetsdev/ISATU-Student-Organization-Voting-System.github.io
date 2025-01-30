// Fetch votes from localStorage
const votes = JSON.parse(localStorage.getItem("votes")) || {};

// Function to calculate and display results
function displayResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous content

    for (const position in votes) {
        const totalVotes = Object.values(votes[position]).reduce((sum, num) => sum + num, 0);

        const section = document.createElement("div");
        section.innerHTML = `<h2>${position.charAt(0).toUpperCase() + position.slice(1)}</h2>`;

        if (totalVotes === 0) {
            section.innerHTML += `<p>No votes recorded for ${position} yet.</p>`;
        } else {
            for (const candidate in votes[position]) {
                const candidateVotes = votes[position][candidate];
                const percentage = ((candidateVotes / totalVotes) * 100).toFixed(2);

                const result = document.createElement("p");
                result.textContent = `${candidate}: ${candidateVotes} votes (${percentage}%)`;
                section.appendChild(result);
            }
        }

        resultsDiv.appendChild(section);
    }
}

// Function to reset the vote counts in localStorage
function resetVotes() {
    if (confirm("Are you sure you want to reset the vote counts? This action cannot be undone.")) {
        localStorage.removeItem("votes"); // Remove the stored votes
        localStorage.removeItem("hasVoted"); // Clear the "hasVoted" flag
        alert("Votes have been reset.");
        location.reload(); // Reload the page to reflect the reset
    }
}

// Display results on page load
document.addEventListener("DOMContentLoaded", () => {
    try {
        displayResults();

        // Set up the reset button
        document.getElementById("resetButton").addEventListener("click", resetVotes);

    } catch (error) {
        console.error("Error displaying results:", error);
    }
});
