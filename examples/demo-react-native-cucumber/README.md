Cucumber Detox Example
=================

Automated tests for Mobile RBH apps

Setup for IOS
-----

Install NodeJS >=10.1 and Yarn >= 1.5

Set your NPM registry to the RedBrick proxy:

```shell
npm config set registry https://artifact.redbrickhealth.net/content/groups/npm/
```

Make sure you're in the test (`cucumber`) directory and install dependencies:

```shell
brew tap wix/brew
brew install --HEAD applesimutils
yarn install
cd ios && pod install --repo-update && cd ..
npm rebuild
detox build -c ios.sim.release
```

After initial build and setup, rerunning all of these steps is not always needed.  This will depend on the state of the app and it is most common
to run `yarn install` and/or `detox build` after updates are applied.


Running Tests
-------------
```shell
cd demo-react-native-cucumber 
configuration="ios.sim.release" node ../node_modules/cucumber/bin/cucumber-js
```


   
