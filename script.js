// ข้อมูลบริษัท
const companies = [
  {
    name: "Bitkub",
    requirements: ["HTML", "CSS", "JavaScript"],
    image: "bitkub.png",
  },
  {
    name: "SCG",
    requirements: ["Python", "Java", "SQL"],
    image: "scg.webp",
  },
  {
    name: "SET Company",
    requirements: ["Python", "Java", "financial"],
    image: "set.jpg",
  },
  {
    name: "Meta",
    requirements: ["Python", "C#", "SQL"],
    image: "Meta.jpg",
  },
  {
    name: "PTT บริษัทขนส่งปิโตเลี่ยม",
    requirements: ["R", "Java", "SQL", "thia"],
    image: "ptt.jpg",
  },
  {
    name: "Shopee Company",
    requirements: ["Python", "Java", "SQL"],
    image: "shopee.jpg",
  },
  {
    name: "Tiktok Company",
    requirements: ["Python", "Java", "SQL"],
    image: "tiktok.jpg",
  },
  {
    name: "Microsoft Company",
    requirements: ["C", "Java", "SQL"],
    image: "microsoft.jpg",
  },
  // เพิ่มบริษัทเพิ่มเข้าไปตรงนี้ตามต้องการ
];

// ฟังก์ชันสำหรับแสดงบริษัททั้งหมด
function displayCompanies() {
  const companiesSection = document.getElementById("companies");
  companiesSection.innerHTML = "";

  companies.forEach((company) => {
    const companyCard = document.createElement("div");
    companyCard.classList.add("company-card");

    const companyImage = document.createElement("img");
    companyImage.src = company.image;
    companyImage.alt = company.name;

    const companyName = document.createElement("h2");
    companyName.textContent = company.name;

    const companyRequirements = document.createElement("p");
    companyRequirements.textContent =
      "Requirements: " + company.requirements.join(", ");

    companyCard.appendChild(companyImage);
    companyCard.appendChild(companyName);
    companyCard.appendChild(companyRequirements);

    companiesSection.appendChild(companyCard);
  });
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ
window.onload = displayCompanies;

function showApplicationForm() {
  const applicationForm = document.getElementById("applicationForm");
  applicationForm.style.display = "block";
}

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("internshipForm");
  const formData = new FormData(form);

  const name = formData.get("name");
  const age = formData.get("age");
  const skills = formData.get("skills");
  const avatar = formData.get("avatar");

  // แสดงข้อมูลที่กรอกใน Alert
  let message = `
    ชื่อ: ${name}
    อายุ: ${age}
    Skills: ${skills}
    รูปภาพ: ${avatar ? avatar.name : "ไม่ได้อัพโหลดรูป"}
  `;
  alert(message);

  // แสดงข้อมูลในฟอร์มในฟอร์มผลลัพธ์
  const resultForm = document.getElementById("resultForm");
  resultForm.style.display = "block";

  const resultName = document.getElementById("resultName");
  resultName.textContent = "ชื่อ: " + name;

  const resultAge = document.getElementById("resultAge");
  resultAge.textContent = "อายุ: " + age;

  const resultSkills = document.getElementById("resultSkills");
  resultSkills.textContent = "Skills: " + skills;

  const resultAvatar = document.getElementById("resultAvatar");
  if (avatar) {
    const reader = new FileReader(); // สร้าง FileReader object
    reader.onload = function (event) {
      const imageUrl = event.target.result; // อ่าน URL ของรูปภาพจาก FileReader
      resultAvatar.innerHTML = ""; // เคลียร์เนื้อหาภายใน resultAvatar
      const imgElement = document.createElement("img"); // สร้าง element <img>
      imgElement.src = imageUrl; // กำหนดค่า URL ให้กับ src attribute ของ element <img>
      imgElement.alt = "Avatar"; // กำหนดค่า attribute alt ของ element <img>
      resultAvatar.appendChild(imgElement); // เพิ่ม element <img> เข้าไปใน resultAvatar
    };
    reader.readAsDataURL(avatar); // อ่านข้อมูลของไฟล์รูปภาพเป็น URL
    resultAvatar.style.display = "block"; // แสดง resultAvatar
  } else {
    resultAvatar.style.display = "none"; // ซ่อน resultAvatar หากไม่มีรูปภาพ
  }

  // แสดงบริษัทที่ตรงกับความสามารถที่กรอกในฟอร์ม
  const matchingCompanies = companies.filter((company) =>
    company.requirements.some((skill) =>
      skills.toLowerCase().includes(skill.toLowerCase())
    )
  );

  const companiesSection = document.getElementById("matchedCompanies");
  companiesSection.innerHTML = "";

  matchingCompanies.forEach((company) => {
    const companyCard = document.createElement("div");
    companyCard.classList.add("company-card");

    const companyImage = document.createElement("img");
    companyImage.src = company.image;
    companyImage.alt = company.name;

    const companyName = document.createElement("h2");
    companyName.textContent = company.name;

    const companyRequirements = document.createElement("p");
    companyRequirements.textContent =
      "Requirements: " + company.requirements.join(", ");

    companyCard.appendChild(companyImage);
    companyCard.appendChild(companyName);
    companyCard.appendChild(companyRequirements);

    companiesSection.appendChild(companyCard);
  });
}




function searchCompanies() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchInput)
  );

  const companiesSection = document.getElementById("companies");
  companiesSection.innerHTML = "";

  filteredCompanies.forEach((company) => {
    const companyCard = document.createElement("div");
    companyCard.classList.add("company-card");

    const companyImage = document.createElement("img");
    companyImage.src = company.image;
    companyImage.alt = company.name;

    const companyName = document.createElement("h2");
    companyName.textContent = company.name;

    const companyRequirements = document.createElement("p");
    companyRequirements.textContent =
      "Requirements: " + company.requirements.join(", ");

    companyCard.appendChild(companyImage);
    companyCard.appendChild(companyName);
    companyCard.appendChild(companyRequirements);

    companiesSection.appendChild(companyCard);
  });
}

