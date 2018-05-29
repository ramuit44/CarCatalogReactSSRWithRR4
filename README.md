# Sample SSR/Client React app with React Router 4, Redux and React-Router-Redux
A simple Car Catalog search app with different route states rendered from the Server for each initial hit.
Subsequent routehandling is done by the client side routes. 

### Notes to Evaluator - Enhancements ###
1) CodeSplitting can be done per route basis using the dynamic import feature of React Router 4.
2) I haven't concentrated on UI styling for this exericise. Went ahead with a basic styling which I thought is sufficent for the exercise. I'm infact more than capable in developing UX reach webapps.
3) Haven't written any Unit tests for redux or react ducks.
4) Most of the code is self explanatory with extensive inline documentations.

-----
### Installation

1) `git clone https://github.com/ramuit44/SampleReactSSRWithRR4.git`
2) `cd SampleReactSSRWithRR4`
3) Install (`yarn` is recommended, but `npm install` works just as well)

------
### Development

`npm run dev` will start a `webpack-dev-server` on `localhost:3005`

- HMR is enabled

------
### Production

`npm run start` will:
1) Clear the `/dist` folder
2) Build, concat, and optimize the `webpack` bundle for production
3) Start production server on `localhost:3005`

