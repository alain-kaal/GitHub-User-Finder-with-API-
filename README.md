# GitHub API finder

Profile and repository of github user finder

## Some Explication

Cette Application fonctionne comme une MVC.

- App.js est un controleur. Il appelle UI.js pour la Vue
  et GitHub.js la connection et le fetch des données.
- UI.js c'est la vue. j'ai utilisé les template literals
  de Javascript ce qui permet d'integrer facilement les
  classes xss de bootstrap ou bootswatch.
- GitHub n'est pas vraiment un Modele. c'est plutot un
  second controleur qui sert a recupere les données de l'API

### Prerequisites

You should have a Client ID and Client Secret
to make it properly work.
Here are my acces Information:
Client ID: 7fba72e052423a40bcff
Client Secret: 801023832bc354ecfebf5ac3f3048c8a00a9c583

For more Info:
https://docs.github.com/en/free-pro-team@latest/developers/apps/building-oauth-apps

## Running the Programm

In the input field give letter and the Apps will display profiles.
you can see the latest Repositories that have been post

Homepage URL
http://127.0.0.1:5500/index.html
The full URL to your application homepage.

## Deployment

I use Live server Extension from VS Code to simulate a server

## Authors

- **Alain Kamgue**
