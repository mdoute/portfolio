
// Form handler

const form = document.getElementById("contact-form");
form.addEventListener("submit", async (e) => {
e.preventDefault();
const formData = new FormData(form);
const data = Object.fromEntries(formData);
try {
    const response = await fetch("https://8dgj440851.execute-api.us-east-2.amazonaws.com/ContactFormHandler", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    });
    if (response.ok) {
    alert("Message sent successfully!"); // change this with a funciton that updates the website content to show a confirmation message
    } else {
    alert("Failed to send message. Please try again.");
    }
} catch (err) {
    alert("An error occurred. Please try again.");
}
});
