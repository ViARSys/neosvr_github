# GitHub Neos Connector
> This is a Node.js application for pulling data out of GitHub, picking pieces of it out, and providing endpoints to retrieve the data formatted in away that is easy for Neos to ingest with LogiX.
<iframe width="560" height="315" src="https://www.youtube.com/embed/7XG-iODPVfk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installation
1. Clone the repository.
1. Within the installation directory run `npm install`.
1. Copy the `config.example.js` file to `config.js`.
1. Edit config.js and enter your personal access token from GitHub.
1. From your command line, run `node index.js`.

## Endpoints
- `/projects-by-org/:org`
- `/projects-by-repo/:user/:repo`
- `/columns/:project_id`
- `/cards/:column_id`

## Suggested use
Within Neos you can first call either `/projects-by-org` or `/projects-by-repo` to get a project ID. Use this as the parameter for `/columns` which will then give you a column id to use with `/cards`.
