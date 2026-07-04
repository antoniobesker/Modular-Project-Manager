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
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("dashboard").classList.add("active");
  });
});

document.querySelectorAll(".project-btn-close").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("landing").classList.add("active");
    document.getElementById("dashboard").classList.add("hidden");
  });
});

let isCollapsed = false;

toggleBtn.addEventListener("click", () => {
  isCollapsed = !isCollapsed;

  sidebar.classList.toggle("collapsed", isCollapsed);

  toggleBtn.textContent = isCollapsed ? "<" : ">";
});