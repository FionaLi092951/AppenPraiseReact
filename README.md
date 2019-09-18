This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Run the demo`

1. Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Change ip address "http://192.168.1.12" to your own computer IP address in file /deploy/dev/nginx.conf and then:
Run docker run --name appen-app -p 3003:80 -v `pwd`:/usr/share/nginx/html:ro -v `pwd`"/deploy/dev/nginx.conf":/etc/nginx/conf.d/default.conf  -d nginx
to enable axios call of the UI page, open http://127.0.0.1:3003 to view it.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

