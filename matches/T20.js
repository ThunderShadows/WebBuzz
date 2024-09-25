const matchesLeft = [
    {
        team1: "Mumbai Mavericks",
        team2: "Delhi Dynamos",
        date: "23 Oct 2024",
        time: "12:30 PM",  
        venue: "Wankhede Stadium, Mumbai"
    },
    {
        team1: "Chennai Kings",
        team2: "Kolkata Knights",
        date: "24 Oct 2024",
        time: "12:30 PM",  
        venue: "Chepauk Stadium, Chennai"
    },
    {
        team1: "Bangalore Bulls",
        team2: "Hyderabad Heroes",
        date: "25 Oct 2024",
        time: "12:30 PM",  
        venue: "M. Chinnaswamy Stadium, Bangalore"
    }
];

const matchesRight = [
    {
        team1: "Jaipur Royals",
        team2: "Punjab Panthers",
        date: "23 Oct 2024",
        time: "6:00 PM",  
        venue: "Sawai Mansingh Stadium, Jaipur"
    },
    {
        team1: "Lucknow Lions",
        team2: "Ahmedabad Avengers",
        date: "24 Oct 2024",
        time: "6:00 PM",  
        venue: "Ekana Cricket Stadium, Lucknow"
    },
    {
        team1: "Patna Warriors",
        team2: "Indore Eagles",
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
