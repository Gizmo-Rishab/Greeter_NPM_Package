# Greeter

Greet people! CLI or JS

## Usage
### Command line interface
Run the following commands
```bash
$ npm i -g greeter
$ greeter --name="<insert name here>"
```

### JavaScript
- Download the module
    ```bash
    $ npm i greeter
    ```

- Use it with
    - CommonJS
    ```Javascript
    const greeter = require("greeter");

    greeter("<insert name here>"); // Returns Greeting
    ```

    - Javascript Module
    ```Javascript
    import greeter from "greeter";

    greeter("<insert name here>"); // Returns Greeting
    ```

Happy Greeting! :)