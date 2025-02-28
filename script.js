document.addEventListener("DOMContentLoaded", function() {
    const userId = new URLSearchParams(window.location.search).get("startapp");
    let userData = { coins: 0, energy: 100, referrals: [] };

    // Fetch user data from the server
    fetch(`/get-user-data?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            userData = data;
            updateUI();
        });

    function updateUI() {
        document.getElementById("referral-count").textContent = userData.referrals.length;
    }

    document.getElementById("splash").addEventListener("click", function() {
        fetch(`/earn-points?userId=${userId}&points=1000`)
            .then(response => response.json())
            .then(data => {
                userData = data;
                updateUI();
            });
    });

    document.getElementById("open-weekly").addEventListener("click", function() {
        fetch(`/earn-points?userId=${userId}&points=540`)
            .then(response => response.json())
            .then(data => {
                userData = data;
                updateUI();
            });
    });

    document.getElementById("start-degens").addEventListener("click", function() {
        fetch(`/earn-points?userId=${userId}&points=150`)
            .then(response => response.json())
            .then(data => {
                userData = data;
                updateUI();
            });
    });

    document.getElementById("trade").addEventListener("click", function() {
        alert("Trade functionality coming soon!");
    });

    document.getElementById("farm").addEventListener("click", function() {
        alert("Farm functionality coming soon!");
    });
});