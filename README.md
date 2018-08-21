This is a sample of using React, React Router, and Redux with TypeScript. I have not used TypeScript with React previous to this
and not everything is fully typed, just a few things here and there with basic types. I just wanted to
get things up and running with .tsx files.

This is hosted at [https://fakebook-example.netlify.com](https://fakebook-example.netlify.com)


To build this project locally:

1. Install node from [https://nodejs.org](https://nodejs.org). This give you Node Package Manager (npm).
2. Install create-react-app globally using npm.
```
npm install create-react-app --global
```
3. Clone this repository.
```
git clone https://github.com/mhazoldt/fakebook.git
```
4. Install dependencies. This needs to be run from the folder that the repository was cloned to.
```
npm install
```
5. Run npm build or run npm start.
```
npm build
```
or
```
npm start
```

npm start will make a development build and host it from a local web server that will automatically restart upon changes.
npm build will make a production build in the /build folder that you can use on a static host like netlify.
The build files are also included in this repository so you can also just download those directly if you want.
