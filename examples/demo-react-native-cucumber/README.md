Cucumber JS 4 Mobile using Detox
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
npm run detox-build
```

After initial build and setup, rerunning all of these steps is not always needed.  This will depend on the state of the app and it is most common
to run `yarn install` and/or `detox build` after updates are applied.


Running Tests
-------------
```shell
cd demo-cucumber 
configuration="ios.sim.release" PLATFORM="none" ENVIRONMENT="test1" node ../node_modules/cucumber/bin/cucumber-js
```

Relevant Environment Variables
---------------------------------
  * configuration - (string) targets one of the builds listed in config.json
  
  ** note that any detox test commandline arguments can be passed in as an environment variable 
   


Tip
---------------------------------
Create a symlink to the rbh-cucumber-js node module to have autofill access to steps that exist in that module.

from /cucumber/feature/step_definitions run the following
```shell
ln -s ../../../node_modules/rbh-cucumber-js/step_definitions rbh-cucumber-js
```
* please do not check-in the symlink file
