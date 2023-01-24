## install
```powershell
npm i -workspaces

# start services
npm run dev:shared
npm run dev:backend
npm run dev:frontend
npm run start -w frontend 
```

# update and get updated code
git push
git pull

## local database

docker run -d -p 27017:27017  --name mongodb mongo
docker stop mongodb
docker rm mongodb