setup and install.

    install node modules
    sudo npm install

    npm init -Y

How to use babel

    sudo npm install babel-preset-env@1.6.1

    babel 'name of input file' -o 'name output file'

    babel src/'input file name' --out-file public/'output file name' --presets env

    inside package.json add this:

        "scripts": {
           "build": "babel src/index.js --out-file public/scripts/bundle.js --presets env --watch"
        }

        npm run build

install babel loader

    sudo npm install babel-loader@7.1.4

uninstall babel and live-serer to set up as local

    npm uninstall -g babel-cli live-server

    then

    npm install babel-cli@6.26.0 live-server@1.2.0

to start up server

    npm run build
    npm run serve


webpack

    npm install webpack@4.5.0 webpack-cli@2.0.14

    npm run webpack