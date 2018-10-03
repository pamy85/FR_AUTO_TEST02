# FR_AUTO_TEST02

Proyect that automated a booking up to a declined payment on http://www.ryanair.com/ie/en/
For Cucumber integration I use npm package cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).

### Structure

    ##Cypres folder,inside this :

        # Plugins : contains the index.js file where we indicate to cypress that we use the package npm cypress-cucumber-preprocessor for read the cucumber features

        ``` javascript
        const cucumber = require('cypress-cucumber-preprocessor').default
        module.exports = (on, config) => {
            on('file:preprocessor', cucumber())
        }
        ```
        # Integration : where cucumber read the test .In this case we include the cucumber features for cucumber execute them
