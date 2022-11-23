module.exports.default = (options) => `promise new Promise(resolve => {
  const remoteUrl = config['${options.configProperty}'] + '/remoteEntry.js'
  const script = document.createElement('script')
  script.src = remoteUrl
  script.onload = () => {
    // the injected script has loaded and is available on window
    // we can now resolve this Promise
    const proxy = {
      get: (request) => window.${options.remoteName}.get(request),
      init: (arg) => {
        try {
          return window.${options.remoteName}.init(arg)
        } catch(e) {
          console.log('remote container already initialized')
        }
      }
    }
    resolve(proxy)
  }
  // inject this script with the src set to the correct remoteEntry.js
  document.head.appendChild(script);
})
`;

 