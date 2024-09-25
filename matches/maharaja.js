const matchesLeft = [
    {
        team1: "Bengaluru Blasters",
        team2: "Mysuru Warriors",
        date: "23 Oct 2024",
        time: "12:30 PM",  
        venue: "M. Chinnaswamy Stadium, Bengaluru"
    },
    {
        team1: "Hubli Tigers",
        team2: "Belagavi Panthers",
        date: "24 Oct 2024",
        time: "12:30 PM",  
        venue: "KSCA Hubli Cricket Ground, Hubli"
    },
    {
        team1: "Shivamogga Lions",
        team2: "Bijapur Bulls",
        date: "25 Oct 2024",
        time: "12:30 PM",  
        venue: "Shivamogga Cricket Stadium, Shivamogga"
    }
];

const matchesRight = [
    {
        team1: "Raichur Royals",
        team2: "Davanagere Dynamos",
        date: "23 Oct 2024",
        time: "6:00 PM",  
        venue: "Raichur Cricket Ground, Raichur"
    },
    {
        team1: "Mangaluru Mariners",
        team2: "Gulbarga Giants",
        date: "24 Oct 2024",
        time: "6:00 PM",  
        venue: "Mangaluru Sports Complex, Mangaluru"
    },
    {
        team1: "Tumakuru Thunder",
        team2: "Hassan Hawks",
        date: "25 Oct 2024",
        time: "6:00 PM",  
        venue: "Tumakuru Cricket Ground, Tumakuru"
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
