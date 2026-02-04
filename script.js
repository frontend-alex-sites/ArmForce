// Элементы DOM
const ratingButton = document.getElementById("ratingButton");
const mainDropdown = document.getElementById("mainDropdown");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const ratingContent = document.getElementById("ratingContent");

// Кнопки главного меню
const menBtn = document.getElementById("menBtn");
const juniorsMenBtn = document.getElementById("juniorsMenBtn");
const womenBtn = document.getElementById("womenBtn");
const juniorsWomenBtn = document.getElementById("juniorsWomenBtn");

// Данные для весовых категорий
const weightCategories = {
  men: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "100+"],
  "juniors-men": [
    "60",
    "65",
    "70",
    "75",
    "80",
    "85",
    "90",
    "95",
    "100",
    "100+",
  ],
  women: ["50", "55", "60", "65", "70", "70+"],
  "juniors-women": ["50", "55", "60", "65", "70", "70+"],
};

// Названия категорий
const categoryNames = {
  men: "Мужчины",
  "juniors-men": "Юниоры",
  women: "Женщины",
  "juniors-women": "Юниорки",
};

// Текущее состояние
let currentCategory = null;
let currentWeight = null;
let activeSubmenu = null;
let isMenuOpen = false;

// Открытие/закрытие главного меню
ratingButton.addEventListener("click", function (event) {
  event.stopPropagation();
  mainDropdown.classList.toggle("active");
  ratingButton.classList.toggle("active");
  isMenuOpen = mainDropdown.classList.contains("active");

  // Закрываем все подменю
  closeAllSubmenus();
});

// Функция создания подменю
function createSubmenu(category, colorClass, button) {
  // Закрываем предыдущее подменю
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

      // Закрываем все меню
      mainDropdown.classList.remove("active");
      ratingButton.classList.remove("active");
      isMenuOpen = false;
      submenu.remove();
    });

    submenu.appendChild(weightBtn);
  });

  // Позиционируем подменю СПРАВА от кнопки
  const rect = button.getBoundingClientRect();
  submenu.style.left = `${rect.right}px`;
  submenu.style.top = `${rect.top + window.scrollY}px`;

  document.body.appendChild(submenu);
  submenu.classList.add("active");
  activeSubmenu = submenu;

  return submenu;
}

// Обработка наведения на категории
function setupCategoryHover(button, category, colorClass) {
  button.addEventListener("mouseenter", function () {
    if (isMenuOpen) {
      createSubmenu(category, colorClass, button);
    }
  });

  button.addEventListener("click", function (event) {
    event.stopPropagation();
    createSubmenu(category, colorClass, button);
  });
}

// Настройка кнопок категорий
setupCategoryHover(menBtn, "men", "blue");
setupCategoryHover(juniorsMenBtn, "juniors-men", "blue");
setupCategoryHover(womenBtn, "women", "red");
setupCategoryHover(juniorsWomenBtn, "juniors-women", "red");

// Выбор весовой категории
function selectWeightCategory(category, weight) {
  currentCategory = category;
  currentWeight = weight;

  const isRed = category === "women" || category === "juniors-women";
  const colorClass = isRed ? "red" : "blue";
  const color = isRed ? "#dc2626" : "#2563eb";

  // Обновляем текст кнопки
  ratingButton.innerHTML = `${categoryNames[category]} ${weight}кг <i class="fas fa-chevron-down"></i>`;

  // Обновляем заголовок
  categoryTitle.textContent = `${categoryNames[category]} ${weight}кг`;
  categoryTitle.style.color = color;

  categoryDescription.textContent = `Рейтинг сильнейших армрестлеров в категории ${categoryNames[category]} ${weight}кг`;

  // Показываем рейтинг с женскими именами для женских категорий
  showRatingData(category, weight, colorClass, color);
}

// Функция показа данных рейтинга
function showRatingData(category, weight, colorClass, color) {
  // Разные данные для мужских и женских категорий
  let athletes = [];

  if (category === "women" || category === "juniors-women") {
    // Женские имена
    athletes = [
      { name: "Иванова Анна", rating: 2450, rank: "МС" },
      { name: "Петрова Елена", rating: 2380, rank: "КМС" },
      { name: "Сидорова Мария", rating: 2300, rank: "1р" },
      { name: "Смирнова Ольга", rating: 2250, rank: "2р" },
      { name: "Кузнецова Татьяна", rating: 2180, rank: "3р" },
      { name: "Васильева Ирина", rating: 2150, rank: "КМС" },
      { name: "Попова Наталья", rating: 2100, rank: "1р" },
      { name: "Соколова Юлия", rating: 2050, rank: "2р" },
      { name: "Лебедева Светлана", rating: 2000, rank: "3р" },
      { name: "Козлова Екатерина", rating: 1950, rank: "КМС" },
    ];
  } else {
    // Мужские имена
    athletes = [
      { name: "Иванов Иван", rating: 2450, rank: "МС" },
      { name: "Петров Петр", rating: 2380, rank: "КМС" },
      { name: "Сидоров Алексей", rating: 2300, rank: "1р" },
      { name: "Смирнов Дмитрий", rating: 2250, rank: "2р" },
      { name: "Кузнецов Сергей", rating: 2180, rank: "3р" },
      { name: "Васильев Андрей", rating: 2150, rank: "КМС" },
      { name: "Попов Михаил", rating: 2100, rank: "1р" },
      { name: "Соколов Антон", rating: 2050, rank: "2р" },
      { name: "Лебедев Владимир", rating: 2000, rank: "3р" },
      { name: "Козлов Николай", rating: 1950, rank: "КМС" },
    ];
  }

  let html = "";

  athletes.forEach((athlete, index) => {
    // Генерация инициалов для фото
    const initials = athlete.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    html += `
            <div class="rating-item">
                <div class="rating-number ${colorClass}">${index + 1}</div>
                <div class="athlete-photo">${initials}</div>
                <div class="athlete-info">
                    <div class="athlete-name">${athlete.name}</div>
                    <div>
                        <span class="athlete-rank">${athlete.rank}</span>
                    </div>
                </div>
                <div class="rating-score ${colorClass}">${athlete.rating}</div>
            </div>
        `;
  });

  ratingContent.innerHTML = html;
}

// Функция закрытия всех подменю
function closeAllSubmenus() {
  if (activeSubmenu) {
    activeSubmenu.remove();
    activeSubmenu = null;
  }
}

// Закрытие всех меню при клике вне их
document.addEventListener("click", function (event) {
  // Проверяем клик по элементам меню рейтинга
  const isClickInRatingMenu =
    mainDropdown.contains(event.target) ||
    ratingButton.contains(event.target) ||
    (activeSubmenu && activeSubmenu.contains(event.target)) ||
    event.target.closest(".category-item");

  if (!isClickInRatingMenu) {
    mainDropdown.classList.remove("active");
    ratingButton.classList.remove("active");
    isMenuOpen = false;
    closeAllSubmenus();
  }
});

// Закрытие меню при нажатии Esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    mainDropdown.classList.remove("active");
    ratingButton.classList.remove("active");
    isMenuOpen = false;
    closeAllSubmenus();
  }
});

// Обработка ухода мыши с подменю
document.addEventListener("mouseover", function (event) {
  if (
    activeSubmenu &&
    !activeSubmenu.contains(event.target) &&
    !event.target.closest(".category-item")
  ) {
    setTimeout(() => {
      if (activeSubmenu && !activeSubmenu.matches(":hover")) {
        closeAllSubmenus();
      }
    }, 100);
  }
});
