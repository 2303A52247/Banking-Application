// Step 1: Create a Singleton class for managing login
class LoginManager {
  constructor() {
    if (LoginManager.instance) {
      // Return existing instance (Singleton logic)
      return LoginManager.instance;
    }

    // Initialize login state
    this.isLoggedIn = false;
    this.validUser = { username: "admin", password: "1234" };

    // Store instance
    LoginManager.instance = this;
  }

  // Method to handle login
  login(username, password) {
    if (username === this.validUser.username && password === this.validUser.password) {
      this.isLoggedIn = true;
      return "✅ Login Successful! Redirecting to Payment Dashboard...";
    } else {
      return "❌ Invalid username or password.";
    }
  }
}

// Step 2: Handle form submission
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get Singleton instance
  const loginManager = new LoginManager();
  const result = loginManager.login(username, password);

  message.textContent = result;

  // Example: redirect after successful login
  if (loginManager.isLoggedIn) {
    setTimeout(() => {
      message.style.color = "green";
      message.textContent = "Redirecting to payments page...";
      // Simulated redirect
      window.location.href = "payments.html";
    }, 2000);
  }
});
