// current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent =currentYear;

// the last modified date and hour
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent =lastModifiedDate;