
// ===================================
// PROFILE DATA
// แก้ไขข้อมูลของทั้งสองคนตรงนี้
// ===================================

const people = [
  {
    number: "PERSON 01",
    name: "YOUR NAME 01",
    nickname: "Nickname 01",
    role: "Student | Creator | Dreamer",
    education: "Your School / University",
    interest: "Art, Music, Photography",
    quote: "Believe in yourself.",
    bio: "สวัสดีครับ/ค่ะ นี่คือพื้นที่แนะนำตัวของคนที่หนึ่ง สามารถเขียนประวัติ ความสามารถ ความสนใจ และเรื่องราวของตัวเองได้ที่นี่",
    image: "images/person1.jpg"
  },

  {
    number: "PERSON 02",
    name: "YOUR NAME 02",
    nickname: "Nickname 02",
    role: "Student | Designer | Dreamer",
    education: "Your School / University",
    interest: "Design, Travel, Reading",
    quote: "Create your own sunshine.",
    bio: "สวัสดีครับ/ค่ะ นี่คือพื้นที่แนะนำตัวของคนที่สอง สามารถเขียนประวัติ ความสามารถ ความสนใจ และเรื่องราวของตัวเองได้ที่นี่",
    image: "images/person2.jpg"
  }
];

// ===================================
// PROFILE SWITCHING
// ===================================

let currentPerson = 0;

const profileImage = document.getElementById("profileImage");
const profileNumber = document.getElementById("profileNumber");
const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const profileNickname = document.getElementById("profileNickname");
const profileEducation = document.getElementById("profileEducation");
const profileInterest = document.getElementById("profileInterest");
const profileQuote = document.getElementById("profileQuote");
const profileBio = document.getElementById("profileBio");

function showProfile(index) {
  currentPerson = index;

  const person = people[index];

  profileImage.src = person.image;
  profileImage.alt = person.name;
  profileNumber.textContent = person.number;
  profileName.textContent = person.name;
  profileRole.textContent = person.role;
  profileNickname.textContent = person.nickname;
  profileEducation.textContent = person.education;
  profileInterest.textContent = person.interest;
  profileQuote.textContent = person.quote;
  profileBio.textContent = person.bio;

  document.querySelectorAll(".switch-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

// Click profile buttons
document.querySelectorAll(".switch-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    showProfile(Number(btn.dataset.person));
  });
});

// Next profile button
document.getElementById("nextProfile").addEventListener("click", () => {
  const next = (currentPerson + 1) % people.length;
  showProfile(next);
});

// ===================================
// GALLERY FILTER
// ===================================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    galleryItems.forEach(item => {
      if (
        filter === "all" ||
        item.dataset.category === filter
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});

// ===================================
// MOBILE MENU
// ===================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ===================================
// INITIAL PROFILE
// ===================================

showProfile(0);
