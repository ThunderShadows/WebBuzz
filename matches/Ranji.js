const matchesLeft = [
    {
        team1: "Mumbai",
        team2: "Delhi",
        date: "23 Oct 2024",
        time: "12:30 PM",
        venue: "Wankhede Stadium, Mumbai"
    },
    {
        team1: "Karnataka",
        team2: "Tamil Nadu",
        date: "24 Oct 2024",
        time: "12:30 PM",
        venue: "M. Chinnaswamy Stadium, Bangalore"
    },
    {
        team1: "Saurashtra",
        team2: "Uttar Pradesh",
        date: "25 Oct 2024",
        time: "12:30 PM",
        venue: "Saurashtra Cricket Association Stadium, Rajkot"
    }
];

const matchesRight = [
    {
        team1: "Bengal",
        team2: "Punjab",
        date: "23 Oct 2024",
        time: "6:00 PM",
        venue: "Eden Gardens, Kolkata"
    },
    {
        team1: "Baroda",
        team2: "Haryana",
        date: "24 Oct 2024",
        time: "6:00 PM",
        venue: "Baroda Cricket Association Stadium, Vadodara"
    },
    {
        team1: "Madhya Pradesh",
        team2: "Vidarbha",
        date: "25 Oct 2024",
        time: "6:00 PM",
        venue: "Holkar Stadium, Indore"
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
