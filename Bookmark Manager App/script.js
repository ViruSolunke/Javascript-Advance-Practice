const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");

const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById(
  "add-bookmark-button-form"
);

const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById(
  "delete-bookmark-button"
);

const categoryNames = document.querySelectorAll(".category-name");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const categoryList = document.getElementById("category-list");

function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(bookmarks)) {
      return [];
    }

    const validBookmarks = bookmarks.every((bookmark) => {
      return (
        bookmark &&
        typeof bookmark === "object" &&
        Object.keys(bookmark).length === 3 &&
        bookmark.hasOwnProperty("name") &&
        bookmark.hasOwnProperty("category") &&
        bookmark.hasOwnProperty("url")
      );
    });

    return validBookmarks ? bookmarks : [];
  } catch {
    return [];
  }
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function updateCategoryName() {
  categoryNames.forEach((heading) => {
    heading.innerText = categoryDropdown.value;
  });
}

function renderCategory() {
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();

  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  categoryList.innerHTML = "";

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  filteredBookmarks.forEach((bookmark) => {
    categoryList.innerHTML += `
      <div>
        <input
          type="radio"
          id="${bookmark.name}"
          name="bookmark"
          value="${bookmark.name}"
        />
        <label for="${bookmark.name}">
          <a href="${bookmark.url}" target="_blank">
            ${bookmark.name}
          </a>
        </label>
      </div>
    `;
  });
}

addBookmarkButton.addEventListener("click", () => {
  updateCategoryName();
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };

  bookmarks.push(newBookmark);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
  updateCategoryName();
  renderCategory();
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    return;
  }

  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    (bookmark) =>
      !(
        bookmark.name === selectedBookmark.value &&
        bookmark.category === categoryDropdown.value
      )
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  renderCategory();
});