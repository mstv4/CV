"use strict";

const zoomPhoto = document.querySelector(".photo-1");

const repos = document.getElementById("repos");

const UrlOfGit = "https://api.github.com";

const UserGit = "mstv4";

const TokenGit = "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";

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

class WorkWithGit {
  constructor (UrlGit, repos, token, user) {
    this.UrlGit = UrlGit;
    this.repos = repos;
    this.token = token;
    this.user = user;
    this.url = `${this.UrlGit}/users/${this.user}/repos`;
  }

  render (datalist) {
    if (!datalist.length) {
      repos.innerHTML = "<li>No repositories found / or TokenGit is empty</li>";
    } else {
      datalist.forEach((item) => {
        repos.innerHTML += `<li><a href="${item.html_url}" target="_blank">${item.full_name}</a></li>`;
  
        if (item.description) {
          repos.innerHTML += `<p>${item.description}</p>`;
        }   
        repos.innerHTML += `<br>`;
      });
    }
  }

  async getRepositoriesInfo() {
    const list = await fetch(this.url);
    const datalist = await list.json();
    this.render(datalist);
  }

  async getRepos() {
    try {
      const list = await fetch(this.url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      const datalist = await list.json();
      this.render(datalist);
    } catch (error) {
      console.log(error);
    }
  }
}

const apiGit = new WorkWithGit (UrlOfGit, repos, TokenGit, UserGit);

apiGit.getRepos();