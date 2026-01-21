
const configUtils = require("C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native/metro-config/dist");
const path = require("path");

const metroConfig = {
    watchFolders: [
        path.resolve(__dirname, "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/theme"),
        path.resolve(__dirname, "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource"),
        path.resolve(__dirname, "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/themesource"),
        path.resolve(__dirname, "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules"),
    ],
    resolver: {
        useWatchman: true,
        platforms: ["ios", "android"],
        sourceExts: ["native.js", "js", "jsx", "ts", "tsx", "cjs", "mjs", "json", "js_commonjs-exports", "js_commonjs-module"],
        extraNodeModules: {
            "@babel/runtime": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@babel/runtime",
            "big.js": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/big.js",
            "react": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react",
            "react-dom": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-dom",
            "react-native-gesture-handler": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-gesture-handler",
            "react-native": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native",
            "@react-native-community/cli": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-community/cli",
            "@react-native-community/cli-platform-android": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-community/cli-platform-android",
            "@react-native-community/cli-platform-ios": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-community/cli-platform-ios",
            "react-native-device-info": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-device-info",
            "react-native-material-menu": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-material-menu",
            "@react-navigation/bottom-tabs": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-navigation/bottom-tabs",
            "@react-navigation/core": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-navigation/core",
            "@react-navigation/drawer": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-navigation/drawer",
            "@react-navigation/native": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-navigation/native",
            "@react-navigation/stack": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-navigation/stack",
            "react-native-svg": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-svg",
            "react-native-tab-view": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-tab-view",
            "react-native-vector-icons": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-vector-icons",
            "react-native-fast-image": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-fast-image",
            "react-native-screens": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-screens",
            "react-native-localize": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-localize",
            "react-native-reanimated": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-reanimated",
            "react-native-safe-area-context": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-safe-area-context",
            "react-native-blob-util": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/react-native-blob-util",
            "@react-native-async-storage/async-storage": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-async-storage/async-storage",
            "@react-native-community/datetimepicker": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-community/datetimepicker",
            "@react-native-masked-view/masked-view": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-masked-view/masked-view",
            "eventemitter3": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/eventemitter3",
            "@react-native-picker/picker": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native-picker/picker",
            "deprecated-react-native-prop-types": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/deprecated-react-native-prop-types",
            "metro-file-map": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/metro-file-map",
            "@react-native/metro-config": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@react-native/metro-config",
            "@rollup/plugin-alias": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/@rollup/plugin-alias",
            "mendix": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/mendix",
            "mx-global": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/mx-global",
            "mx-api": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/mendix/mx-api",
            "mx-api/data": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/mendix/mx-api/data",
            "mx-api/session": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/mendix/mx-api/session",
            "mx-api/ui": "C:/Users/MouhcineAZELMAT/AppData/Local/Programs/mendix 10.24.8/Mendix/10.24.8.80126/modeler/tools/node/node_modules/mendix/mx-api/ui"
        }
    },
    cacheVersion: "80126",
};

module.exports = configUtils.mergeConfig(configUtils.getDefaultConfig(__dirname), metroConfig);
