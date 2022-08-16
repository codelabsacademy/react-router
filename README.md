# React Router example

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1. Clean your project folder structure

We can delete unused files such as the **logo.svg**, **App.test.js**...

## 2. Install TailwindCSS

Use TailwindCSS to style our example app. Steps for installing **TailwindCSS**:

#### a) Install `tailwindcss` and its peer dependencies via npm:

- `npm install -D tailwindcss postcss autoprefixer`

#### b) Run the init command to generate both `tailwind.config.js` and `postcss.config.js`:

- `npx tailwindcss init -p`

#### c) Configure your template paths:

Add the paths to all of your template files in your `tailwind.config.js` file:

```js
//tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

#### d) Add the Tailwind directives to your CSS:

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/*
... REST OF THE CODE
*/
```

## 3. Add the Navbar and Sidebar

We will add two new components: **Navbar** and **Sidebar**:

- The Sidebar can be toggled using a toggle button on the Navbar we are creating.
- The Sidebar is where we add the links for our little app, the user will be able to switch between routes/pages from the Sidebar only
  **_Check commit_**: [c4f9eb7c9cea328677be1768f273298b154aa620](https://github.com/clawebdevbootcamp/react-example_router/commit/c4f9eb7c9cea328677be1768f273298b154aa620)

## 4. Install react-router and connect your app with the browser's URL

- Install react-router:
- `npm install react-router-dom@6` or `yarn add react-router-dom@6`

- We want to connect our app to the browser's URL by importing BrowserRouter and render it around the whole app.

- **_Check commit_**: [606b174cc3a3eca51a0a7ef58df66482743089c0](https://github.com/clawebdevbootcamp/react-example_router/commit/606b174cc3a3eca51a0a7ef58df66482743089c0)

## 5. Add router links for our routes and a route config in App.js

- Import `Link` and include two link on the Sidebar for both `Stats.js` route and `Board.js` route. `Link` changes the URL without causing a full page reload.

- Show React Router how to render our app at different URLs by creating our first "Route Config" inside of `App.js`.

```js
//App.js
<BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/stats" element={<Stats />} />
    <Route path="/board" element={<Board />} />
  </Routes>
</BrowserRouter>
```

**_Check commit_**: [3ab8d88f4568d647070681c52b98525b9ead5f24](https://github.com/clawebdevbootcamp/react-example_router/commit/3ab8d88f4568d647070681c52b98525b9ead5f24)

## 6. Adding a "No Match" Route

- If we browse to let's sat `http://localhost:3000/someRoute` the page goes blank! That's because none of the routes we've defined match a URL like the ones we're linking to

- It's good practice to always handle this "no match" case. Go back to your route config and add this:

```js
//App.js
<Routes>
  //Other routes
  <Route
    path="*"
    element={
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>
    }
  />
</Routes>
```

- The `*` has special meaning here. It will match only when no other routes do.

**_Check commit_**: [dd58c806c47d6777d96f078c1f2f82667c559231](https://github.com/clawebdevbootcamp/react-example_router/commit/dd58c806c47d6777d96f078c1f2f82667c559231)

## How to run the APP

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

You may also see any lint errors in the console.
