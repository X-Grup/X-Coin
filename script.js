document.addEventListener("DOMContentLoaded", function() {
    // Initialize Telegram Web App
    Telegram.WebApp.ready();
    const userId = new URLSearchParams(window.location.search).get("startapp");
    let userData = { coins: 0, energy: 100, referrals: [] };

    // Fetch user data from the server
    fetch(`/get-user-data?userId=${userId}`)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch user data");
            return response.json();
        })
        .then(data => {
            userData = data;
            updateUI();
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
            alert("Failed to load user data. Please try again.");
        });

    function updateUI() {
        document.getElementById("referral-count").textContent = userData.referrals.length;
    }

    // Add event listeners for buttons
    document.getElementById("splash").addEventListener("click", function() {
        const data = JSON.stringify({ action: 'splash', points: 1000 });
        Telegram.WebApp.sendData(data);
    });

    document.getElementById("open-weekly").addEventListener("click", function() {
        const data = JSON.stringify({ action: 'open-weekly', points: 540 });
        Telegram.WebApp.sendData(data);
    });

    document.getElementById("start-degens").addEventListener("click", function() {
        const data = JSON.stringify({ action: 'start-degens', points: 150 });
        Telegram.WebApp.sendData(data);
    });

    document.getElementById("trade").addEventListener("click", function() {
        const data = JSON.stringify({ action: 'trade' });
        Telegram.WebApp.sendData(data);
    });

    document.getElementById("farm").addEventListener("click", function() {
        const data = JSON.stringify({ action: 'farm' });
        Telegram.WebApp.sendData(data);
    });
});
