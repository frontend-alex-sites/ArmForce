const ratingButton = document.getElementById("ratingButton");
const mainDropdown = document.getElementById("mainDropdown");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const menBtn = document.getElementById("menBtn");
const juniorsMenBtn = document.getElementById("juniorsMenBtn");
const womenBtn = document.getElementById("womenBtn");
const juniorsWomenBtn = document.getElementById("juniorsWomenBtn");

const weightCategories = {
  men: ["55", "60", "65", "70", "75", "80", "85", "90", "100", "110", "110+"],
  "juniors-men-14-15": ["45", "50", "55", "60", "65", "70", "70+"],
  "juniors-men-16-18": ["50", "55", "60", "65", "70", "75", "80", "80+"],
  "juniors-men-19-21": ["55", "60", "65", "70", "75", "80", "85", "90", "90+"],
  women: ["50", "55", "60", "65", "70", "80", "80+"],
  "juniors-women-14-15": ["40", "45", "50", "55", "60", "70", "70+"],
  "juniors-women-16-18": ["45", "50", "55", "60", "65", "70", "70+"],
  "juniors-women-19-21": ["50", "55", "60", "65", "70", "70+"],
};

const categoryDisplayNames = {
  men: "Мужчины",
  "juniors-men-14-15": "Юниоры 14-15 лет",
  "juniors-men-16-18": "Юниоры 16-18 лет",
  "juniors-men-19-21": "Юниоры 19-21 лет",
  women: "Женщины",
  "juniors-women-14-15": "Юниорки 14-15 лет",
  "juniors-women-16-18": "Юниорки 16-18 лет",
  "juniors-women-19-21": "Юниорки 19-21 лет",
};

const categoryShortNames = {
  men: "Мужчины",
  "juniors-men-14-15": "Юниоры 14-15",
  "juniors-men-16-18": "Юниоры 16-18",
  "juniors-men-19-21": "Юниоры 19-21",
  women: "Женщины",
  "juniors-women-14-15": "Юниорки 14-15",
  "juniors-women-16-18": "Юниорки 16-18",
  "juniors-women-19-21": "Юниорки 19-21",
};

let currentCategory = null;
let currentWeight = null;
let activeSubmenu = null;
let activeAgeSubmenu = null;
let isMenuOpen = false;

const athletesDatabase = {
  men: {
    left: [
      { name: "Тетюшин Дмитрий", rating: 25, rank: "КМС" },
      { name: "Миндулин Тимур", rating: 17, rank: "КМС" },
      { name: "Надымов Владимир", rating: 9, rank: "КМС" },
      { name: "Савич Василий", rating: 5, rank: "1р" },
      { name: "Байтурсынов Арсений", rating: 3, rank: "3р" },
      { name: "Кац Семён", rating: 2, rank: "1р" },
      { name: "Кудинов Николай", rating: 0, rank: "2р" },
      { name: "Калтаков Амат", rating: 0, rank: "1р" },
      { name: "Самойлов Артем", rating: 0, rank: "3р" },
      { name: "Сотников Евгений", rating: 0, rank: "1р" },
    ],
    right: [
      { name: "Тетюшин Дмитрий", rating: 5, rank: "КМС" },
      { name: "Миндулин Тимур", rating: 25, rank: "КМС" },
      { name: "Надымов Владимир", rating: 9, rank: "КМС" },
      { name: "Савич Василий", rating: 3, rank: "1р" },
      { name: "Байтурсынов Арсений", rating: 2, rank: "3р" },
      { name: "Кац Семён", rating: 17, rank: "1р" },
      { name: "Кудинов Николай", rating: 0, rank: "2р" },
      { name: "Калтаков Амат", rating: 0, rank: "1р" },
      { name: "Самойлов Артем", rating: 0, rank: "3р" },
      { name: "Сотников Евгений", rating: 0, rank: "1р" },
    ],
  },
  "juniors-men-14-15": {
    left: [
      { name: "Иванов Максим", rating: 1550, rank: "3р", age: "14-15" },
      { name: "Петров Артем", rating: 1520, rank: "3р", age: "14-15" },
      { name: "Сидоров Кирилл", rating: 1490, rank: "3р", age: "14-15" },
      { name: "Смирнов Даниил", rating: 1460, rank: "3р", age: "14-15" },
      { name: "Кузнецов Егор", rating: 1430, rank: "3р", age: "14-15" },
      { name: "Васильев Матвей", rating: 1400, rank: "3р", age: "14-15" },
      { name: "Попов Лев", rating: 1370, rank: "3р", age: "14-15" },
      { name: "Соколов Марк", rating: 1340, rank: "3р", age: "14-15" },
      { name: "Лебедев Тимофей", rating: 1310, rank: "3р", age: "14-15" },
      { name: "Козлов Глеб", rating: 1280, rank: "3р", age: "14-15" },
    ],
    right: [
      { name: "Новиков Никита", rating: 1530, rank: "3р", age: "14-15" },
      { name: "Морозов Илья", rating: 1500, rank: "3р", age: "14-15" },
      { name: "Волков Владислав", rating: 1470, rank: "3р", age: "14-15" },
      { name: "Алексеев Георгий", rating: 1440, rank: "3р", age: "14-15" },
      { name: "Семенов Константин", rating: 1410, rank: "3р", age: "14-15" },
      { name: "Егоров Демид", rating: 1380, rank: "3р", age: "14-15" },
      { name: "Павлов Святослав", rating: 1350, rank: "3р", age: "14-15" },
      { name: "Степанов Ярослав", rating: 1320, rank: "3р", age: "14-15" },
      { name: "Григорьев Арсений", rating: 1290, rank: "3р", age: "14-15" },
      { name: "Федоров Мирон", rating: 1260, rank: "3р", age: "14-15" },
    ],
  },
  "juniors-men-16-18": {
    left: [
      { name: "Семенов Александр", rating: 1750, rank: "2р", age: "16-18" },
      { name: "Кузнецов Дмитрий", rating: 1720, rank: "2р", age: "16-18" },
      { name: "Васильев Михаил", rating: 1690, rank: "2р", age: "16-18" },
      { name: "Попов Андрей", rating: 1660, rank: "2р", age: "16-18" },
      { name: "Соколов Сергей", rating: 1630, rank: "2р", age: "16-18" },
      { name: "Лебедев Алексей", rating: 1600, rank: "3р", age: "16-18" },
      { name: "Козлов Павел", rating: 1570, rank: "3р", age: "16-18" },
      { name: "Новиков Роман", rating: 1540, rank: "3р", age: "16-18" },
      { name: "Морозов Евгений", rating: 1510, rank: "3р", age: "16-18" },
      { name: "Волков Николай", rating: 1480, rank: "3р", age: "16-18" },
    ],
    right: [
      { name: "Алексеев Иван", rating: 1730, rank: "2р", age: "16-18" },
      { name: "Семенов Петр", rating: 1700, rank: "2р", age: "16-18" },
      { name: "Егоров Виктор", rating: 1670, rank: "2р", age: "16-18" },
      { name: "Павлов Олег", rating: 1640, rank: "2р", age: "16-18" },
      { name: "Степанов Юрий", rating: 1610, rank: "2р", age: "16-18" },
      { name: "Григорьев Борис", rating: 1580, rank: "3р", age: "16-18" },
      { name: "Федоров Геннадий", rating: 1550, rank: "3р", age: "16-18" },
      { name: "Иванов Станислав", rating: 1520, rank: "3р", age: "16-18" },
      { name: "Петров Вадим", rating: 1490, rank: "3р", age: "16-18" },
      { name: "Сидоров Тимур", rating: 1460, rank: "3р", age: "16-18" },
    ],
  },
  "juniors-men-19-21": {
    left: [
      { name: "Смирнов Антон", rating: 1950, rank: "1р", age: "19-21" },
      { name: "Кузнецов Максим", rating: 1920, rank: "1р", age: "19-21" },
      { name: "Васильев Денис", rating: 1890, rank: "1р", age: "19-21" },
      { name: "Попов Артур", rating: 1860, rank: "1р", age: "19-21" },
      { name: "Соколов Руслан", rating: 1830, rank: "1р", age: "19-21" },
      { name: "Лебедев Вячеслав", rating: 1800, rank: "2р", age: "19-21" },
      { name: "Козлов Ростислав", rating: 1770, rank: "2р", age: "19-21" },
      { name: "Новиков Всеволод", rating: 1740, rank: "2р", age: "19-21" },
      { name: "Морозов Григорий", rating: 1710, rank: "2р", age: "19-21" },
      { name: "Волков Захар", rating: 1680, rank: "2р", age: "19-21" },
    ],
    right: [
      { name: "Алексеев Марк", rating: 1930, rank: "1р", age: "19-21" },
      { name: "Семенов Лев", rating: 1900, rank: "1р", age: "19-21" },
      { name: "Егоров Семен", rating: 1870, rank: "1р", age: "19-21" },
      { name: "Павлов Федор", rating: 1840, rank: "1р", age: "19-21" },
      { name: "Степанов Макар", rating: 1810, rank: "1р", age: "19-21" },
      { name: "Григорьев Гордей", rating: 1780, rank: "2р", age: "19-21" },
      { name: "Федоров Савелий", rating: 1750, rank: "2р", age: "19-21" },
      { name: "Иванов Мирослав", rating: 1720, rank: "2р", age: "19-21" },
      { name: "Петров Степан", rating: 1690, rank: "2р", age: "19-21" },
      { name: "Сидоров Ян", rating: 1660, rank: "2р", age: "19-21" },
    ],
  },
  women: {
    left: [
      { name: "Богдановская Наталья", rating: 25, rank: "МС" },
      { name: "Сивцова Ирина", rating: 17, rank: "1р" },
      { name: "Васильева Милана", rating: 9, rank: "1р" },
      { name: "Пархоменко Арина", rating: 5, rank: "КМС" },
      { name: "Кузнецова Татьяна", rating: 0, rank: "3р" },
      { name: "Васильева Ирина", rating: 3, rank: "КМС" },
      { name: "Попова Наталья", rating: 0, rank: "1р" },
      { name: "Соколова Юлия", rating: 2, rank: "2р" },
      { name: "Лебедева Светлана", rating: 0, rank: "3р" },
      { name: "Козлова Екатерина", rating: 0, rank: "КМС" },
    ],
    right: [
      { name: "Богдановская Наталья", rating: 25, rank: "МС" },
      { name: "Сивцова Ирина", rating: 17, rank: "1р" },
      { name: "Пархоменко Арина", rating: 9, rank: "КМС" },
      { name: "Васильева Милана", rating: 5, rank: "2р" },
      { name: "Семенова Анастасия", rating: 3, rank: "3р" },
      { name: "Егорова Полина", rating: 0, rank: "КМС" },
      { name: "Павлова Ангелина", rating: 0, rank: "1р" },
      { name: "Степанова Валерия", rating: 2, rank: "2р" },
      { name: "Григорьева Ульяна", rating: 0, rank: "3р" },
      { name: "Федорова Милана", rating: 0, rank: "КМС" },
    ],
  },
  "juniors-women-14-15": {
    left: [
      { name: "Иванова София", rating: 1350, rank: "3р", age: "14-15" },
      { name: "Петрова Алиса", rating: 1320, rank: "3р", age: "14-15" },
      { name: "Сидорова Варвара", rating: 1290, rank: "3р", age: "14-15" },
      { name: "Смирнова Александра", rating: 1260, rank: "3р", age: "14-15" },
      { name: "Кузнецова Елизавета", rating: 1230, rank: "3р", age: "14-15" },
      { name: "Васильева Вероника", rating: 1200, rank: "3р", age: "14-15" },
      { name: "Попова Кира", rating: 1170, rank: "3р", age: "14-15" },
      { name: "Соколова Диана", rating: 1140, rank: "3р", age: "14-15" },
      { name: "Лебедева Ева", rating: 1110, rank: "3р", age: "14-15" },
      { name: "Козлова Маргарита", rating: 1080, rank: "3р", age: "14-15" },
    ],
    right: [
      { name: "Новикова Мария", rating: 1330, rank: "3р", age: "14-15" },
      { name: "Морозова Екатерина", rating: 1300, rank: "3р", age: "14-15" },
      { name: "Волкова Арина", rating: 1270, rank: "3р", age: "14-15" },
      { name: "Алексеева Полина", rating: 1240, rank: "3р", age: "14-15" },
      { name: "Семенова Ксения", rating: 1210, rank: "3р", age: "14-15" },
      { name: "Егорова Анастасия", rating: 1180, rank: "3р", age: "14-15" },
      { name: "Павлова Виктория", rating: 1150, rank: "3р", age: "14-15" },
      { name: "Степанова Алина", rating: 1120, rank: "3р", age: "14-15" },
      { name: "Григорьева Елена", rating: 1090, rank: "3р", age: "14-15" },
      { name: "Федорова Ольга", rating: 1060, rank: "3р", age: "14-15" },
    ],
  },
  "juniors-women-16-18": {
    left: [
      { name: "Семенова Арина", rating: 1550, rank: "2р", age: "16-18" },
      { name: "Кузнецова Милана", rating: 1520, rank: "2р", age: "16-18" },
      { name: "Васильева Ангелина", rating: 1490, rank: "2р", age: "16-18" },
      { name: "Попова Ульяна", rating: 1460, rank: "2р", age: "16-18" },
      { name: "Соколова Ксения", rating: 1430, rank: "2р", age: "16-18" },
      { name: "Лебедева Мария", rating: 1400, rank: "3р", age: "16-18" },
      { name: "Козлова Дарья", rating: 1370, rank: "3р", age: "16-18" },
      { name: "Новикова Виктория", rating: 1340, rank: "3р", age: "16-18" },
      { name: "Морозова Алиса", rating: 1310, rank: "3р", age: "16-18" },
      { name: "Волкова Елизавета", rating: 1280, rank: "3р", age: "16-18" },
    ],
    right: [
      { name: "Алексеева София", rating: 1530, rank: "2р", age: "16-18" },
      { name: "Семенова Варвара", rating: 1500, rank: "2р", age: "16-18" },
      { name: "Егорова Арина", rating: 1470, rank: "2р", age: "16-18" },
      { name: "Павлова Мирослава", rating: 1440, rank: "2р", age: "16-18" },
      { name: "Степанова Вероника", rating: 1410, rank: "2р", age: "16-18" },
      { name: "Григорьева Алисия", rating: 1380, rank: "3р", age: "16-18" },
      { name: "Федорова Ева", rating: 1350, rank: "3р", age: "16-18" },
      { name: "Иванова Кира", rating: 1320, rank: "3р", age: "16-18" },
      { name: "Петрова Анна", rating: 1290, rank: "3р", age: "16-18" },
      { name: "Сидорова Полина", rating: 1260, rank: "3р", age: "16-18" },
    ],
  },
  "juniors-women-19-21": {
    left: [
      { name: "Смирнова Анна", rating: 1750, rank: "1р", age: "19-21" },
      { name: "Кузнецова Екатерина", rating: 1720, rank: "1р", age: "19-21" },
      { name: "Васильева Мария", rating: 1690, rank: "1р", age: "19-21" },
      { name: "Попова Анастасия", rating: 1660, rank: "1р", age: "19-21" },
      { name: "Соколова Дарья", rating: 1630, rank: "1р", age: "19-21" },
      { name: "Лебедева Ксения", rating: 1600, rank: "2р", age: "19-21" },
      { name: "Козлова Алина", rating: 1570, rank: "2р", age: "19-21" },
      { name: "Новикова Полина", rating: 1540, rank: "2р", age: "19-21" },
      { name: "Морозова Виктория", rating: 1510, rank: "2р", age: "19-21" },
      { name: "Волкова Елена", rating: 1480, rank: "2р", age: "19-21" },
    ],
    right: [
      { name: "Алексеева Ангелина", rating: 1730, rank: "1р", age: "19-21" },
      { name: "Семенова Милана", rating: 1700, rank: "1р", age: "19-21" },
      { name: "Егорова Ульяна", rating: 1670, rank: "1р", age: "19-21" },
      { name: "Павлова София", rating: 1640, rank: "1р", age: "19-21" },
      { name: "Степанова Арина", rating: 1610, rank: "1р", age: "19-21" },
      { name: "Григорьева Варвара", rating: 1580, rank: "2р", age: "19-21" },
      { name: "Федорова Кира", rating: 1550, rank: "2р", age: "19-21" },
      { name: "Иванова Ева", rating: 1520, rank: "2р", age: "19-21" },
      { name: "Петрова Вероника", rating: 1490, rank: "2р", age: "19-21" },
      { name: "Сидорова Алиса", rating: 1460, rank: "2р", age: "19-21" },
    ],
  },
};

ratingButton.addEventListener("click", function (event) {
  event.stopPropagation();
  mainDropdown.classList.toggle("active");
  ratingButton.classList.toggle("active");
  isMenuOpen = mainDropdown.classList.contains("active");
  closeAllSubmenus();
});

function createWeightSubmenu(category, colorClass, button) {
  closeAllSubmenus();

  const submenu = document.createElement("div");
  submenu.className = `sub-dropdown ${colorClass}`;

  weightCategories[category].forEach((weight) => {
    const weightBtn = document.createElement("button");
    weightBtn.className = `weight-item ${colorClass}`;
    weightBtn.textContent = `${weight} кг`;
    weightBtn.dataset.weight = weight;
    weightBtn.dataset.category = category;

    weightBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      selectWeightCategory(category, weight);

      mainDropdown.classList.remove("active");
      ratingButton.classList.remove("active");
      isMenuOpen = false;
      submenu.remove();
      if (activeAgeSubmenu) activeAgeSubmenu.remove();
    });

    submenu.appendChild(weightBtn);
  });

  const rect = button.getBoundingClientRect();
  submenu.style.left = `${rect.right}px`;
  submenu.style.top = `${rect.top + window.scrollY}px`;

  document.body.appendChild(submenu);
  submenu.classList.add("active");
  activeSubmenu = submenu;

  return submenu;
}

function createAgeSubmenu(categoryType, colorClass, button) {
  if (activeAgeSubmenu) {
    activeAgeSubmenu.remove();
  }

  const ageSubmenu = document.createElement("div");
  ageSubmenu.className = `age-dropdown ${colorClass}`;

  const ageGroups =
    categoryType === "juniors-men"
      ? ["14-15 лет", "16-18 лет", "19-21 лет"]
      : ["14-15 лет", "16-18 лет", "19-21 лет"];

  ageGroups.forEach((ageGroup) => {
    const ageBtn = document.createElement("button");
    ageBtn.className = `age-item ${colorClass}`;
    ageBtn.textContent = ageGroup;

    const ageKey = ageGroup.replace(" лет", "").replace("-", "_");
    const categoryKey = `${categoryType}-${ageKey.replace("_", "-")}`;

    ageBtn.dataset.category = categoryKey;
    ageBtn.dataset.ageGroup = ageGroup;

    ageBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      createWeightSubmenu(categoryKey, colorClass, button);
      ageSubmenu.remove();
      activeAgeSubmenu = null;
    });

    ageSubmenu.appendChild(ageBtn);
  });

  const rect = button.getBoundingClientRect();
  ageSubmenu.style.left = `${rect.right}px`;
  ageSubmenu.style.top = `${rect.top + window.scrollY}px`;

  document.body.appendChild(ageSubmenu);
  ageSubmenu.classList.add("active");
  activeAgeSubmenu = ageSubmenu;

  return ageSubmenu;
}

function setupCategoryHover(button, category, colorClass) {
  button.addEventListener("mouseenter", function () {
    if (isMenuOpen) {
      if (category === "juniors-men" || category === "juniors-women") {
        createAgeSubmenu(category, colorClass, button);
      } else {
        createWeightSubmenu(category, colorClass, button);
      }
    }
  });

  button.addEventListener("click", function (event) {
    event.stopPropagation();

    if (category === "juniors-men" || category === "juniors-women") {
      createAgeSubmenu(category, colorClass, button);
    } else {
      createWeightSubmenu(category, colorClass, button);
    }
  });
}

setupCategoryHover(menBtn, "men", "blue");
setupCategoryHover(juniorsMenBtn, "juniors-men", "blue");
setupCategoryHover(womenBtn, "women", "red");
setupCategoryHover(juniorsWomenBtn, "juniors-women", "red");

function selectWeightCategory(category, weight) {
  currentCategory = category;
  currentWeight = weight;

  const isRed =
    category.includes("women") || category.includes("juniors-women");
  const colorClass = isRed ? "red" : "blue";
  const color = isRed ? "#dc2626" : "#2563eb";

  ratingButton.innerHTML = `${categoryShortNames[category]} ${weight}кг <i class="fas fa-chevron-down"></i>`;
  categoryTitle.textContent = `${categoryDisplayNames[category]} ${weight}кг`;
  categoryTitle.style.color = color;
  categoryDescription.textContent = `Рейтинг сильнейших армрестлеров в категории ${categoryDisplayNames[category]} ${weight}кг`;
  showRatingData(category, colorClass);
}

function showRatingData(category, colorClass) {
  const categoryData = athletesDatabase[category];

  if (!categoryData) {
    console.error(`Нет данных для категории: ${category}`);
    return;
  }

  const leftHandAthletes = [...categoryData.left].sort(
    (a, b) => b.rating - a.rating,
  );
  const rightHandAthletes = [...categoryData.right].sort(
    (a, b) => b.rating - a.rating,
  );

  let leftHtml = "";
  leftHandAthletes.forEach((athlete, index) => {
    const initials = athlete.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    leftHtml += `
      <div class="rating-item">
        <div class="rating-number ${colorClass}">${index + 1}</div>
        <div class="athlete-photo">${initials}</div>
        <div class="athlete-info">
          <div class="athlete-name">${athlete.name}</div>
          <div>
            <span class="athlete-rank">${athlete.rank}</span>
            ${athlete.age ? `<span style="font-size: 11px; color: #aaaaaa; margin-left: 5px;">${athlete.age}</span>` : ""}
          </div>
        </div>
        <div class="rating-score ${colorClass}">${athlete.rating}</div>
      </div>
    `;
  });

  let rightHtml = "";
  rightHandAthletes.forEach((athlete, index) => {
    const initials = athlete.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    rightHtml += `
      <div class="rating-item">
        <div class="rating-number ${colorClass}">${index + 1}</div>
        <div class="athlete-photo">${initials}</div>
        <div class="athlete-info">
          <div class="athlete-name">${athlete.name}</div>
          <div>
            <span class="athlete-rank">${athlete.rank}</span>
            ${athlete.age ? `<span style="font-size: 11px; color: #aaaaaa; margin-left: 5px;">${athlete.age}</span>` : ""}
          </div>
        </div>
        <div class="rating-score ${colorClass}">${athlete.rating}</div>
      </div>
    `;
  });

  document.getElementById("leftHandRating").innerHTML = leftHtml;
  document.getElementById("rightHandRating").innerHTML = rightHtml;
}

function closeAllSubmenus() {
  if (activeSubmenu) {
    activeSubmenu.remove();
    activeSubmenu = null;
  }
  if (activeAgeSubmenu) {
    activeAgeSubmenu.remove();
    activeAgeSubmenu = null;
  }
}

document.addEventListener("click", function (event) {
  const isClickInRatingMenu =
    mainDropdown.contains(event.target) ||
    ratingButton.contains(event.target) ||
    (activeSubmenu && activeSubmenu.contains(event.target)) ||
    (activeAgeSubmenu && activeAgeSubmenu.contains(event.target)) ||
    event.target.closest(".category-item") ||
    event.target.closest(".age-item") ||
    event.target.closest(".weight-item");

  if (!isClickInRatingMenu) {
    mainDropdown.classList.remove("active");
    ratingButton.classList.remove("active");
    isMenuOpen = false;
    closeAllSubmenus();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    mainDropdown.classList.remove("active");
    ratingButton.classList.remove("active");
    isMenuOpen = false;
    closeAllSubmenus();
  }
});

document.addEventListener("mouseover", function (event) {
  if (
    (activeSubmenu || activeAgeSubmenu) &&
    !(activeSubmenu && activeSubmenu.contains(event.target)) &&
    !(activeAgeSubmenu && activeAgeSubmenu.contains(event.target)) &&
    !event.target.closest(".category-item") &&
    !event.target.closest(".age-item")
  ) {
    setTimeout(() => {
      if (
        (activeSubmenu && !activeSubmenu.matches(":hover")) ||
        (activeAgeSubmenu && !activeAgeSubmenu.matches(":hover"))
      ) {
        closeAllSubmenus();
      }
    }, 100);
  }
});
