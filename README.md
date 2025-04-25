# Yourway Test - Typing comparition

### First steps
1. To starting project you need to go to: [Github](https://github.com/diegofandino/yourway_test) and clone repository in your local.
2. After project had been clonated, you need to install all dependencies, you need to use "yarn install"
3. Please start project using your terminal in the same project and go to http://localhost:3000, this is the port to start the project, if you already had this port busy, you can change the port into the package.json in "vite" section.
4. Use .env.template to add environment vars (.env.development), in this case, json-server need a endpoint to work, in package.json you'll find http://localhost:5005 but you can use other, but you need to put also into .env.development
remember: you need to create in root: .env.development and copy variable(s) from .env.template to .env.development to work correctly.

### Starting using the project
You will be able to start using typing test, using command "yarn dev" it will run ports 3000 (app) and 5005 (json-server)

Note: If you want to change a text to make typing comparition, you need to get into "context/TypingContext" and variable: targetText you only need to change the text and it automatically will re-render.