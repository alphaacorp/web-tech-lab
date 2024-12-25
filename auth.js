document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy login validation
    if (username === "kali" && password === "kali") {
        alert("Login successful!");
        document.getElementById("choiceContainer").style.display = "block";
    } else {
        alert("Invalid username or password!");
    }
});

document.getElementById("biodataBtn").addEventListener("click", function () {
    window.location.href = "biodata.html"; // Redirect to biodata page
});

document.getElementById("resumeBtn").addEventListener("click", function () {
    window.location.href = "res.html"; // Redirect to biodata page
    
});
