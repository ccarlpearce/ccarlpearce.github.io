// Import the date from your new config file
import { lastVisitDateString } from './config.js';

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
    
    // Convert milliseconds to days
    const daysSinceVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Format the date for display
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
