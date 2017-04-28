# React-Native Client

## Develop

For local development you need to follow the below commands:

```
npm install
./post_npm_install.sh
```


Click the run button in Xcode, if something went wrong, you need to rebuild all packages that be used in this project with Xcode (Just select the package and press **command+B** to run compile).

If you want to run it on your iPhone, please follow the [Offical Doc](http://facebook.github.io/react-native/docs/runningondevice.html#content).

If you don't want to update the ip manually, please run:

```
gulp replace
```

BTW, here is a prettier command, just run:

```
npm start
```

The ip will be replaced automatically.

If you want to run it on your Browser (localhost:3000), please run:
```
react-web start
```


## React-Native Modules In Using

* [react-native-button](https://github.com/ide/react-native-button)
* [react-native-barcodescanner](https://github.com/ideacreation/react-native-barcodescanner)
* [react-native-blur](https://github.com/react-native-fellowship/react-native-blur)
* [react-native-camera](https://github.com/lwansbrough/react-native-camera)
* [react-native-html-render](https://github.com/soliury/react-native-html-render)
* [react-native-scrollable-tab-view](https://github.com/brentvatne/react-native-scrollable-tab-view)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

This project is heavily influenced by the above modules.

## ToDo List

* Push Notification
* Fix the below bugs
  * In ListView, sometime items on the bottom can't be refreshed
  * ListView **take too much memory**
  * HTML to native View render take too much **memory and CPU time**
* Add Unit testing


## Contribute

If you find any issues, just solve it and make a PR.

This project is under the ES6 JSX.
