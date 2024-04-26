const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

const BROWSER_NAME = process.env.BROWSER_NAME || argv.BROWSER_NAME || 'chrome';
const browserInstances = parseInt(process.env.INSTANCES) || parseInt(argv.INSTANCES) || 1;
const OS_IOS_VERSION = process.env.OS_IOS_VERSION || argv.OS_IOS_VERSION || '17';
const IOS_DEVICE = process.env.IOS_DEVICE || argv.IOS_DEVICE || 'iPhone 16';
const OS_ANDROID_VERSION = process.env.OS_ANDROID_VERSION || argv.OS_ANDROID_VERSION || '13.0';
const ANDROID_DEVICE = process.env.ANDROID_DEVICE || argv.ANDROID_DEVICE || 'Samsung Galaxy S21';
const HEADLESS = process.env.HEADLESS || argv.HEADLESS || false;

const chromeCapabilities = {
  browserName: 'chrome',
  'goog:loggingPrefs': {
    browser: 'ALL',
  },
  'goog:chromeOptions': {
    args: [
      '--whitelisted-ips=',
      '--disable-infobars=true',
      '--disable-gpu',
      'window-size=1920,1080',
      'test-type=browser',
      'disable-notifications',
      'incognito',
      'disable-application-cache',
      '-disable-extensions',
      '--ignore-certificate-errors',
      'enable-automation',
      '--disable-dev-shm-usage',
      '--disable-browser-side-navigation',
      '--no-sandbox',
      '--enable-logging',
    ],
    prefs: {
      download: {
        prompt_for_download: false,
        directory_upgrade: true,
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
      safebrowsing: {
        enabled: false,
        disable_download_protection: true,
      },
    },
  },
  maxInstances: browserInstances
}

const firefoxCapabilities = {
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: ['-safe-mode', '-window-size=1920,1080', '-private', '--foreground', '--purgecaches'],
    prefs: {
      'browser.download.folderList': 2,
      'browser.download.useDownloadDir': true,
      'browser.download.manager.showWhenStarting': false,
      'browser.helperApps.neverAsk.saveToDisk':
        'application/pdf, application/postscript, ' +
        'application/msword, application/wordperfect, application/rtf, ' +
        'application/vnd.ms-excel, application/vnd.ms-powerpoint, text/html, ' +
        'text/plain, application/x-troff, application/x-troff-man, application/x-dvi, ' +
        'application/mathematica, application/octet-stream',
    },
    log: { level: 'error' },
  },
  maxInstances: browserInstances
}

const iosBrowserCapabilities = {
  browserName: 'iPhone',
  'bstack:options': {
    osVersion: OS_IOS_VERSION,
    deviceName: IOS_DEVICE,
    realMobile: 'true',
    networkLogs: 'true',
    projectName: 'It Academy IOS',
    geolocation: 'US',
    buildName: 'buildName',
    username: `Browserstack username`,
    accessKey: 'Access key'
  },
  maxInstances: browserInstances
}

const androidBrowserCapabilities = {
  browserName: 'Android',
  'bstack:options': {
    osVersion: OS_ANDROID_VERSION,
    deviceName: ANDROID_DEVICE,
    realMobile: 'true',
    networkLogs: 'true',
    projectName: 'It Academy Android',
    geolocation: 'US',
    buildName: 'buildName',
  },
  maxInstances: browserInstances
}

let capability;

switch (BROWSER_NAME) {
  case 'ios-browserstack':
    capability = {
      capabilities: [iosBrowserCapabilities],
      services: ['browserstack'],
      user: `Browserstack username`,
      key: 'Access key',
      hostname: 'hub.browserstack.com'
    }
    break;
  case 'android-browserstack':
    capability = {
      capabilities: [androidBrowserCapabilities],
      services: ['browserstack'],
      user: `Browserstack username`,
      key: 'Access key',
      hostname: 'hub.browserstack.com'
    }
    break;
  case 'firefox':
    if(HEADLESS) firefoxCapabilities['moz:firefoxOptions'].args.push('--headless')
    capability = {
      capabilities: [firefoxCapabilities],
      services: ['visual'],
      path: '/'
    }
    break;
  default:
    if(HEADLESS) firefoxCapabilities['goog:chromeOptions'].args.push('--headless');
    capability = {
      capabilities: [chromeCapabilities],
      services: ['visual'],
      path: '/'
    }
    break;
}

console.log('capability -- ', capability);
module.exports = {capability}