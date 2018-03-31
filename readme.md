# current-ios-app-version

> Get current app version from App Store


## Install

```
$ npm install --save current-ios-app-version
```


## Usage

```js
const currentIosAppVersion = require('current-ios-app-version');

currentIosAppVersion('1058948091')
.then(version => {
  // version => 2.16.2
})
.catch(err => {
  // err => App ID not found
})
```


## API

### currentIosAppVersion(appBundleId)
Returns: `Promise`

#### appBundleId

Type: `string`

The app bundle id of the app you'd like to query. [How can I find my app bundle id?](https://pspdfkit.com/guides/ios/current/faq/finding-the-app-bundle-id/)

## See also

- [current-android-app-version](https://github.com/JonnyBurger/current-android-app-version): Get current Android app version from Play Store


## License

MIT © [Jonny Burger](http://jonny.io)
