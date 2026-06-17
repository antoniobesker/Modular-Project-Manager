const columns = document.querySelectorAll('.column-cards');
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

columns.forEach(column => {
  new Sortable(column, {
    group: 'kanban',
    animation: 150,
    ghostClass: 'dragging'
  });
});

document.querySelectorAll(".collapsible-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("open");
  });
});

document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("landing").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
  });
});

document.querySelectorAll(".project-btn-close").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("landing").style.display = "flex";
    document.getElementById("dashboard").style.display = "none";
  });
});

let isCollapsed = false;

toggleBtn.addEventListener("click", () => {
  isCollapsed = !isCollapsed;

  sidebar.classList.toggle("collapsed", isCollapsed);

  toggleBtn.textContent = isCollapsed ? "<" : ">";
});