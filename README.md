# Typescript React and Typescript monorepo setup

This is work in progress and commands require NPM >= 7 

## install
```powershell
npm i -workspaces

# start services
npm run dev:shared
npm run dev:backend
npm run dev:frontend
npm run start -w frontend 
```

- [Backend](./backend/README.md)
- [Frontend](./frontend/README.md)

check package scripts for run commands

[How to build own monorepo setup](./HowTo.md)