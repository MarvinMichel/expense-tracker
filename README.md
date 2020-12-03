# Expense tracker
> An app build with React<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=30px align=top />

This app lets you track your expenses, so it's easier to save money. 
You can login with a Google, Facebook or GitHub account or by registering with an email and password. Authorization and the database is done via Firebase. All testing files are selfmade with Jest. DatePicker is originated from React-Dates by airbnb. Actions are passed down with Redux. Notifications are displayed with React-Toastify.

<figure style="display:flex; flex-direction: column; align-items: center;">
    <img width="1552" alt="Screenshot 2020-12-03 at 17 44 27" src="https://user-images.githubusercontent.com/25977763/101060405-ac2a9780-358f-11eb-9ff2-a38d60de243e.png">
    <figcaption width="300px">Login with your email and password or use your social media platforms to easily login and authenticate yourself.</figcaption>
</figure>

<figure>
    <img width="1552" alt="Screenshot 2020-12-03 at 17 46 06" src="https://user-images.githubusercontent.com/25977763/101060625-ea27bb80-358f-11eb-83e6-030c5698c47e.png">
    <figcaption>Get a good sight on your expenses to maintain your budget.</figcaption>
</figure>

## Dependencies
- [Babel](https://babeljs.io/)
- [Firebase](https://firebase.google.com/?gclid=CjwKCAiA2O39BRBjEiwApB2IkuDcMWIQPDV7JY1whvcTjhtulpHwT-FmzbDY0FVsx6U24RBxG3unbhoCllEQAvD_BwE)
- [Moment](https://momentjs.com)
- [Numeral](http://numeraljs.com)
- [React](https://reactjs.org/)
- [React Dates](https://github.com/airbnb/react-dates)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [Redux](https://redux.js.org/)
- [Sass](https://sass-lang.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Webpack](https://webpack.js.org/)

## Developer Dependencies
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Enzyme](https://github.com/enzymejs/enzyme)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)

## Development🤖
> ⚠️ Access to the firebase database is handled by Dotenv. Create your own database and fill in the config variable inside the firebase file to connect. For more instructions, refer to the documentation at https://firebase.google.com/docs/web/setup.

1. Copy the project by...
    1. ...running `gh repo clone MarvinMichel/expense-tracker` in your terminal to clone the repository.
    2. ...downloading the zip-file and unzipping it to your preferred location.
2. Open your terminal.
3. Browse to the directory of the project: `cd %YOUR_LOCATION%/expense-tracker`.
4. Run `yarn install` to install the necessary dependencies.
5. Open the development-server by running `yarn dev-server`.
6. Browse to 'localhost:8080' inside your favortie browser.
