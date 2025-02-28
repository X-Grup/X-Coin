document.addEventListener("DOMContentLoaded", function() {
    // Initialize Telegram Web App
    Telegram.WebApp.ready();

    // Function to apply the theme
    function applyTheme() {
        const isDark = Telegram.WebApp.colorScheme === 'dark';
        document.body.style.backgroundColor = isDark ? '#121212' : '#ffffff';
        document.body.style.color = isDark ? '#ffffff' : '#121212';

        // Update button colors
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = isDark ? '#00ff88' : '#007bff';
            button.style.color = isDark ? '#121212' : '#ffffff';
        });
    }

    // Apply the theme initially
    applyTheme();

    // Listen for theme changes
    Telegram.WebApp.onEvent('themeChanged', applyTheme);

    const userId = new URLSearchParams(window.location.search).get("startapp");
    let userData = { coins: 0, energy: 100, referrals: [] };

    // Fetch user data from the server (with error handling)
    fetch(`/get-user-data?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
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

    // Add event listeners for buttons (with error handling)
    document.getElementById("splash").addEventListener("click", function() {
        fetch(`/earn-points?userId=${userId}&points=1000`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to earn points");
                }
                return response.json();
            })
            .then(data => {
                userData = data;
                updateUI();
            })
            .catch(error => {
                console.error("Error earning points:", error);
                alert("Failed to earn points. Please try again.");
            });
    });

    document.getElementById("open-weekly").addEventListener("click", function() {
        fetch(`/earn-points?userId=${userId}&points=540`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to earn points");
                }
                return response.json();
            })
            .then(data => {
                userData = data;
                updateUI();
            })
            .catch(error => {
                console.error("Error earning points:", error);
                alert("Failed to earn points. Please try again.");
            });
    });

    document.getElementById("start-degens").addEventListener("click", function() {
        fetch(`/earn-points?userId=${userId}&points=150`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to earn points");
                }
                return response.json();
            })
            .then(data => {
                userData = data;
                updateUI();
            })
            .catch(error => {
                console.error("Error earning points:", error);
                alert("Failed to earn points. Please try again.");
            });
    });

    document.getElementById("trade").addEventListener("click", function() {
        alert("Trade functionality coming soon!");
    });

    document.getElementById("farm").addEventListener("click", function() {
        alert("Farm functionality coming soon!");
    });
});
