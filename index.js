
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { Octokit } = require("@octokit/rest");
const config = require('./config');
const octokit = new Octokit({ auth: config.token });

// -------------
// List Projects

// for orgs
// octokit.projects.listForOrg({
//   org: 'ViARSys',
// });
app.get('/projects-by-org/:org', function(req, res) {
  const org = req.params.org;

  const requestProjects = async function(o) {
    const projectResponse = await octokit.projects.listForOrg({
      org: o,
    });
    const projectData = projectResponse.data;
    const projects = projectData.map(function(proj) {
      return proj.id + ': ' + proj.name;
    });

    return projects;
  }

  requestProjects(org).then(function(response) {
    res.send(response);
  });
});

// for repo
// octokit.projects.listForRepo({
//   owner,
//   repo,
// });
app.get('/projects-by-repo/:owner/:repo', function(req, res) {
  const owner = req.params.owner;
  const repo = req.params.repo;

  const requestProjects = async function(owner, repo) {
    const projectResponse = await octokit.projects.listForRepo({
      owner: owner,
      repo: repo,
    });
    const projectData = projectResponse.data;
    const projects = projectData.map(function(proj) {
      return proj.id + ': ' + proj.name;
    });

    return projects;
  }

  requestProjects(owner, repo).then(function(response) {
    res.send(response);
  });
});

// ------------
// List Columns
// octokit.projects.listColumns({
//   project_id: 1,
// });
app.get('/columns/:project_id', function(req, res) {
  const project_id = req.params.project_id;

  const requestColumns = async function(proj_id) {
    const columnResponse = await octokit.projects.listColumns({
      project_id: proj_id,
    });
    const columnData = columnResponse.data;
    const columns = columnData.map(function(col) {
      return col.id + ': ' + col.name;
    });

    return columns;
  }

  requestColumns(project_id).then(function(response) {
    res.send(response);
  });
});

// ----------
// List Cards
// octokit.projects.listCards({
//   column_id,
// });
app.get('/cards/:column_id', function(req, res) {
  const column_id = req.params.column_id;

  const requestCards = async function(col_id) {
    const cardResponse = await octokit.projects.listCards({
      column_id: col_id
    });
    const cardData = cardResponse.data;
    const cards = cardData.map(function(card) {
      return card.id + ': ' + card.note;
    });

    return cards;

  }

  requestCards(column_id).then(function(response) {
    res.send(response);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));