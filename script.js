// Dark mode toggle (Idhu sariyaaga irukku)
const toggleBtn = document.querySelector(".toggle");
const toggleIndicator = document.querySelector(".toggleLight");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.classList.add("active");
  toggleIndicator.textContent = "🌜";
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("active");

  if (toggleBtn.classList.contains("active")) {
    localStorage.setItem("theme", "dark");
    toggleIndicator.textContent = "🌜";
  } else {
    toggleIndicator.textContent = "🌞";
    localStorage.setItem("theme", "light");
  }
});

const contactForm = document.querySelector(".contact-container");
const mailError = document.querySelector(".mail-error");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const viwerName = document.getElementById("name").value.trim();
  const emailId = document.getElementById("mail").value.trim();
  const msg = document.getElementById("msg").value.trim();

  const emailPattern = /^[A-Za-z0-9._]+@gmail\.com$/;

  if (viwerName === "" || emailId === "" || msg === "") {
    alert("Please enter all fields");
    return;
  }

  if (!emailPattern.test(emailId)) {
    mailError.style.display = "block";
    alert("Enter a valid Gmail address");
  } else {
    mailError.style.display = "none";
    alert("Form submitted successfully!");
    contactForm.reset();
  }
});
