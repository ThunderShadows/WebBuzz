const matchesLeft = [
    {
        team1: "Mumbai Supernovas",
        team2: "Delhi Daredevils",
        date: "23 Oct 2024",
        time: "12:30 PM", 
        venue: "Wankhede Stadium, Mumbai"
    },
    {
        team1: "Chennai Super Queens",
        team2: "Kolkata Tigresses",
        date: "24 Oct 2024",
        time: "12:30 PM",  
        venue: "Chepauk Stadium, Chennai"
    },
    {
        team1: "Bangalore Queens",
        team2: "Hyderabad Amazons",
        date: "25 Oct 2024",
        time: "12:30 PM",  
        venue: "M. Chinnaswamy Stadium, Bangalore"
    }
];

const matchesRight = [
    {
        team1: "Jaipur Warriors",
        team2: "Punjab Thunder",
        date: "23 Oct 2024",
        time: "6:00 PM",  
        venue: "Sawai Mansingh Stadium, Jaipur"
    },
    {
        team1: "Lucknow Phoenix",
        team2: "Gujarat Gladiators",
        date: "24 Oct 2024",
        time: "6:00 PM",  
        venue: "Ekana Cricket Stadium, Lucknow"
    },
    {
        team1: "Patna Royals",
        team2: "Indore Invincibles",
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
