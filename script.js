"use strict";

const zoomPhoto = document.querySelector(".photo-1");

const repos = document.getElementById("repos");
const giturl = "https://api.github.com/users/mstv4/repos";

zoomPhoto.addEventListener("click", () => {
  zoomPhoto.classList.toggle("large-click");
});

const Skills = document.getElementById("S");
const WorkExperience = document.getElementById("W");
const Education = document.getElementById("E");
const Certificate = document.getElementById("C");
const GithubRepositories = document.getElementById("G");

document.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    Skills.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "w") {
    WorkExperience.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "e") {
    Education.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    Certificate.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "g") {
    GithubRepositories.scrollIntoView({ behavior: "smooth" });
  }
});

async function getRepositories() {
  try {
    const list = await fetch(giturl);
    const datalist = await list.json();

    if (!datalist.length) {
      repos.innerHTML = "<li>No repositories found</li>";
    } else {
      datalist.forEach((item) => {
        repos.innerHTML += `<li><a href="${item.html_url}" target="_blank">${item.full_name}</a></li>`;

        if (item.description) {
          repos.innerHTML += `<p>${item.description}</p>`;
        }

        repos.innerHTML += `<br>`;
      });
    }
  } catch (error) {
    console.error("Error fetching repositories", error);
    repos.innerHTML = "<li>Error fetching repositories</li>";
  }
}

getRepositories();