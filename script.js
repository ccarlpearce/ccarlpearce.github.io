// --- CONFIGURATION ---
// Change the date in 'YYYY-MM-DD' format inside the quotes.
const lastVisitDateString = '2025-07-20';
// -------------------

// Function to calculate and display the days
function updateCounter() {
    // Get the element from the HTML page where we will display the text
    const counterElement = document.getElementById('visit-counter');

    // Create date objects
    const lastVisitDate = new Date(lastVisitDateString);
    const today = new Date();

    // To ensure an accurate day count, reset the time part of both dates to midnight
    lastVisitDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Calculate the difference in milliseconds
    const timeDifference = today.getTime() - lastVisitDate.getTime();
    
    // Convert milliseconds to days (1000ms * 60s * 60min * 24hr)
    const daysSinceVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Format the date for display in a user-friendly way (e.g., 20 July 2025)
    const formattedDate = lastVisitDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Create the final text string
    const displayText = `It's been ${daysSinceVisit} days since Scooby visited number 97. The last visit was on ${formattedDate}.`;

    // Update the website content
    counterElement.textContent = displayText;
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', updateCounter);
