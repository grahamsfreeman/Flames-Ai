/*=========================================
    AUTH SCRIPT
=========================================*/

// Forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Redirect Function
function redirect(page) {
    window.location.href = page;
}

/*=========================================
    LOGIN
=========================================*/

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Temporary login
        alert("Login successful!");

        redirect("dashboard.html");

    });

}

/*=========================================
    SIGNUP
=========================================*/

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (
            !fullname ||
            !email ||
            !password ||
            !confirmPassword
        ) {

            alert("Please complete all fields.");

            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        if (password.length < 8) {

            alert("Password must be at least 8 characters.");

            return;

        }

        alert("Account created successfully!");

        redirect("login.html");

    });

}

/*=========================================
    PASSWORD VISIBILITY
=========================================*/

document.querySelectorAll("input[type='password']").forEach(input => {

    const wrapper = document.createElement("div");

    wrapper.style.position = "relative";

    input.parentNode.insertBefore(wrapper, input);

    wrapper.appendChild(input);

    const icon = document.createElement("span");

    icon.innerHTML = "👁";

    icon.style.position = "absolute";
    icon.style.right = "15px";
    icon.style.top = "50%";
    icon.style.transform = "translateY(-50%)";
    icon.style.cursor = "pointer";

    wrapper.appendChild(icon);

    icon.addEventListener("click", () => {

        input.type =
            input.type === "password"
                ? "text"
                : "password";

    });

});
