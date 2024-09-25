const matchesLeft = [
    {
        team1: "India Lions",
        team2: "Australia Kangaroos",
        date: "23 Oct 2024",
        time: "10:00 AM",  
        venue: "Eden Gardens, Kolkata"
    },
    {
        team1: "England Royals",
        team2: "South Africa Rhinos",
        date: "24 Oct 2024",
        time: "10:00 AM",  
        venue: "Lord's Cricket Ground, London"
    },
    {
        team1: "Pakistan Falcons",
        team2: "New Zealand Kiwis",
        date: "25 Oct 2024",
        time: "10:00 AM",  
        venue: "Gaddafi Stadium, Lahore"
    }
];

const matchesRight = [
    {
        team1: "Sri Lanka Lions",
        team2: "West Indies Hurricanes",
        date: "23 Oct 2024",
        time: "10:00 AM",  
        venue: "R. Premadasa Stadium, Colombo"
    },
    {
        team1: "Bangladesh Tigers",
        team2: "Afghanistan Eagles",
        date: "24 Oct 2024",
        time: "10:00 AM",  
        venue: "Sher-e-Bangla National Stadium, Dhaka"
    },
    {
        team1: "Zimbabwe Warriors",
        team2: "Ireland Shamrocks",
        date: "25 Oct 2024",
        time: "10:00 AM",  
        venue: "Harare Sports Club, Harare"
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
