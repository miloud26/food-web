const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/error": {
    path: "/pages/error/error.html",
    title: "Page Not Found",
  },
  "/": {
    path: "/pages/home/index.html",
    title: "Food Delevary",
  },
  "/about": {
    path: "/pages/about/about.html",
    title: "About",
  },
  "/contact": {
    path: "/pages/contact/contact.html",
    title: "Contact",
  },
  "/shop": {
    path: "/pages/shop/shop.html",
    title: "Shop",
  },
};

const handleLocation = async () => {
  // fecth data on navbar

  const navbar = await fetch("/navbar/index.html").then((data) => data.text());
  document.getElementById("navbar").innerHTML = navbar;

  const navScript = document.createElement("script");
  navScript.src = "./navbar/navbar.js";
  document.body.appendChild(navScript);
  // fecth narbar data

  const path = window.location.pathname;
  const route = routes[path] || routes["/error"];
  document.title = route.title;
  const html = await fetch(route.path).then((data) => data.text());
  document.getElementById("root").innerHTML = html;

  // fecth data on footer

  const footer = await fetch("/footer/footer.html").then((data) => data.text());
  document.getElementById("footer").innerHTML = footer;

  switch (path) {
    case "/":
      const src2 = document.createElement("script");
      src2.src = "./pages/home/app.js";
      document.body.appendChild(src2);
      document
        .querySelectorAll(".n-second ul li a")[0]
        .classList.add("activeLink");
      break;
    case "/shop":
      document
        .querySelectorAll(".n-second ul li a")[1]
        .classList.add("activeLink");
      break;
    case "/about":
      document
        .querySelectorAll(".n-second ul li a")[2]
        .classList.add("activeLink");
      break;
    case "/contact":
      document
        .querySelectorAll(".n-second ul li a")[3]
        .classList.add("activeLink");
      break;
    default:
      return;
  }
};

window.onpopstate = handleLocation();
window.route = route();
handleLocation();
