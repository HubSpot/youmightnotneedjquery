/**
 * @param {number} supportedVersion
 */
function setQueryString(supportedVersion) {
  let url = location.pathname;
  if (supportedVersion >= 8 && supportedVersion < 12) {
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('support', `ie${supportedVersion}`);
    url = `?${urlParams}`;
  }
  history.replaceState({}, document.title, url);
}

/**
 * @returns {number}
 */
function getInitialSliderState() {
  const urlParams = new URLSearchParams(location.search);
  let supportVersionStr = urlParams.get('support');
  let supportVersion = 12;
  if (supportVersionStr === 'modern') {
    supportVersion = 12;
  } else if (supportVersionStr && supportVersionStr.indexOf('ie') === 0) {
    supportVersion = parseInt(supportVersionStr.substring(2));
  }
  return supportVersion;
}
