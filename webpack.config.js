var webpack = require('webpack');

module.exports = { // the config file returns an object with multiple items and properties:
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],// (input) this is where our writetn file wil be fetched
     externals: {
        jquery: 'jQuery'
     },
     plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
     ],
    output: { // output takes an object with path: which is the directory name, we can use __dirname to get our dir
        path: __dirname,
        filename: "./public/bundle.js" // we write our outputted file's path and name we want it to take.
    },
    resolve: { // resolve goes and fetches all of the files with the extensions that are defined in the resolve object...
        root: __dirname,
        alias: {
            Main: "app/components/main.jsx",
            Nav: "app/components/nav.jsx",
            Weather: "app/components/weather.jsx",
            About: "app/components/about.jsx",
            Examples: "app/components/examples.jsx",
            WeatherForm: "app/components/WeatherForm.jsx",
            WeatherMessage: "app/components/WeatherMessage.jsx",
            openWeatherMap: "app/api/OpenWeatherMap.jsx"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                },
                test: /\.jsx?$/,
                exclude: /(name_modules|bower_components)/
            }
        ]
    },
    devtool: "inline-source-map",
    watch: true
};
