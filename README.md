# CLASSIC FOOD ORDERING APP

A MERN stack application that allows users to create accounts, log in, and order foodstuff from the convenience of their devices.

## Tech Stack

#### FrontEnd

- React Js
- Tailwind Css
- Redux Toolkit
- Axios
- React Router Dom v6

The Homepage displays a landing page with a call to action button that prompts the user to view the menu. The Menu view displays the meal categories which are meats, fillet, vegan and drinks.

Each category is fed data gotten from an express api. The data is filtered then fed to each individual category. and displayed to the user. Each Item card shows the user the price per item and the quantity selected plus an add to cart button.

The Cart view shows the user the items selected plus their quantity and total prices. The interface allows the user to remove items from the cart, one after another, or clear the cart in one action. This is made possible by the cart slice logic using Redux toolkit.

#### Backend

- Node Js
- Express
- Mongoose ORM
- Mongo DB Atlas
- Bcrypt
- Json Web Tokens

The apps backend is implemented through a variety of services.

###### Backend Services

- Auth Service.
- Products Service
- Payment Service (Under development)
