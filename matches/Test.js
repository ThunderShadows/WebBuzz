const matchesLeft = [
    {
        team1: "Super India",
        team2: "Mighty Australia",
        duration: "1 Nov 2024 to 5 Nov 2024",
        time: "10:30 AM",
        venue: "Eden Gardens, Kolkata"
    },
    {
        team1: "Brave England",
        team2: "Fierce Pakistan",
        duration: "10 Nov 2024 to 14 Nov 2024",
        time: "10:30 AM",
        venue: "Lord's, London"
    },
    {
        team1: "Strong South Africa",
        team2: "Bold New Zealand",
        duration: "20 Nov 2024 to 24 Nov 2024",
        time: "10:30 AM",
        venue: "Wanderers Stadium, Johannesburg"
    }
];

const matchesRight = [
    {
        team1: "Valiant West Indies",
        team2: "Courageous Sri Lanka",
        duration: "1 Dec 2024 to 5 Dec 2024",
        time: "10:30 AM",
        venue: "Queen's Park Oval, Port of Spain"
    },
    {
        team1: "Resilient Bangladesh",
        team2: "Determined Zimbabwe",
        duration: "10 Dec 2024 to 14 Dec 2024",
        time: "10:30 AM",
        venue: "Sher-e-Bangla National Cricket Stadium, Dhaka"
    },
    {
        team1: "Tenacious Afghanistan",
        team2: "Fearless Ireland",
        duration: "20 Dec 2024 to 24 Dec 2024",
        time: "10:30 AM",
        venue: "Sharjah Cricket Stadium, Sharjah"
    }
];

function createMatchHTML(match) {
    return `
        <div class="match-box">
            <h3>${match.team1} vs ${match.team2}</h3>
            <p>Date: ${match.date}</p>
            <p>Time: ${match.time}</p>
            <p>Venue: ${match.venue}</p>
            <button class="register-btn">Register</button>
        </div>
    `;
}

function renderMatches() {
    const leftContainer = document.querySelector('.matches-left');
    const rightContainer = document.querySelector('.matches-right');

    matchesLeft.forEach(match => {
        leftContainer.innerHTML += createMatchHTML(match);
    });

    matchesRight.forEach(match => {
        rightContainer.innerHTML += createMatchHTML(match);
    });
}

renderMatches();
