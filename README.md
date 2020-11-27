# Expense tracker
> An app build with React<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=30px align=top />

This app lets you track your expenses, so it's easier to save money. You can login with a Google account. Authorization and the database is done via Firebase. All testing files are selfmade with Jest. DatePicker is orginated from React-Dates by airbnb. Actions are controlled with Redux.

## Dependencies
- [Babel](https://babeljs.io/)
- [Firebase](https://firebase.google.com/?gclid=CjwKCAiA2O39BRBjEiwApB2IkuDcMWIQPDV7JY1whvcTjhtulpHwT-FmzbDY0FVsx6U24RBxG3unbhoCllEQAvD_BwE)
- [Moment](https://momentjs.com)
- [Numeral](http://numeraljs.com)
- [React](https://reactjs.org/)
- [React Dates](https://github.com/airbnb/react-dates)
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
1. Copy the project by...
    a. ...cloning the repository by running `gh repo clone MarvinMichel/expense-tracker` in your terminal.
    b. ...downloading the zip-file and unzipping it to your preferred location.
2. Browse to the directory of the project.
3. Run `yarn install` to install the necessary dependencies.
4. Open the development-server by running `yarn dev-server`.
5. Browse to 'localhost:8080' inside your favortie browser.
> ⚠️ Access to the firebase database is handled by Dotenv. Create your own database and fill in the config variable inside the firebase file to connect.
