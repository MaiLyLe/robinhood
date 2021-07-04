# What is this about

A user panel frontend for picking working shifts, editing account settings and more.

## Main Frameworks/Libraries used

Not every library is listed here, but the most important ones in the hope that **frontend beginners** get a better understanding.

**React**
[React](https://reactjs.org/) is the main library here to create user interfaces based on writing components that can be recycled and once written can be used anywhere.

**Typescript**
[Typescript](https://www.typescriptlang.org/) is a language based on Javascript which enables typing. In return you get way better code validation and clearer error messages. Makes coding in Javascript safer.

**Next.js**
[Next](https://nextjs.org/) is a React framework that provides many amazing things. Most important features are fast server-side-rendering (makes loading way faster), Automatic code splitting (also makes everything faster) and live-reload of code changes (important for developers) and more stuff.

**Styled-Components**
Style library to visually separate your css from your React components. Also provides style themes and conditional css options.

**Tailwind**
[Tailwind](https://tailwindcss.com/) is a CSS framework similar to bootstrap for quicker styling. Here it is combined with Styled Components via Twin Macro. This means we do separate it from the rest of the  code for cleaner code.

**Zustand**
[Zustand](https://www.npmjs.com/package/zustand) is a state management library that is rather simplified in comparison to Redux.

**Honorable mentions - Eslint, Prettier, Babel**
Eslint analyzes code and finds problems. Can be configured with other things like Typescript. Prettier is a code formatter to make code clean & UNIFORM. You can configure both things to your preferences. Babel compiles newer versions of Javascript into a backwards compatible version of Javascript that can be run by older JavaScript engine.

--
To-add to the project in the nearest future: next-pwa, i18n

## **NPM Setup/Package Installment:**

Go to your browser and install [Nodejs](https://nodejs.org/en/)

Please fork project if you want to play with it locally.
And go to directory via your terminal, then type in your terminal

    $ npm i

Globally install the following with NPM by typing in your terminal

    $ npm install -g eslint

## **VSCode Setup:**

It is recommended to work with VSCode as editor. But of course you don't need to.
Here are some tips for using VSCode:

**How to autoformat on saving the file in VSCode (will save tons of time and stress)**
Go to settings of VSCode (bottom left settings icon of screen and then click on „Settings“). Click on „Workspace“ rider and type in „format“ in search field. Make a tick on „Editor: Format on Save“ option

**How to make VSCode show you errors/warnings as you code (super important)**

Put this in the VSCode settings.json file (CMD + Shift + P and then go to settings workplace):

    {
        "editor.formatOnSave": true,
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            { "language": "typescript", "autoFix": true },
            { "language": "typescriptreact", "autoFix": true }
        ],
        "eslint.options": {
            "extensinons": [".ts", ".js", ".tsx", ".jsx"]
        }
    }

## To start server locally, type into terminal:

    $ npm run dev

Then go to your browser and type in your url field **localhost:3000**
