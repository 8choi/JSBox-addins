let colors = [$rgba(120, 219, 252, 0.9), $rgba(252, 175, 230, 0.9), $rgba(252, 200, 121, 0.9), $rgba(187, 252, 121, 0.9), $rgba(173, 121, 252, 0.9), $rgba(252, 121, 121, 0.9), $rgba(121, 252, 252, 0.9)]
const mColor = {
  gray: "#a2a2a2",
  blue: "#3478f7",
  black: "#303032",
  green: "#27AE60",
  red: "#E74C3C",
  iosGreen: "#4CD964",
}

function getCache(key, def) {
  let temp = $cache.get(key)
  if (temp == undefined) {
    $cache.set(key, def)
    return def
  } else {
    return temp
  }
}

function myOpenUrl(url) {
  if(!url.startsWith("http")) {
    $app.openURL(url)
  } else {
    let bNumber = getCache("openBroswer", 0)
    if(bNumber == 0) {
      $app.openURL(url)
    } else if(bNumber < 11) {
      $app.openBrowser({
        type: 10000 + bNumber - 1,
        url: url,
      })
    } else {
      switch(bNumber) {
        case 11: $app.openURL("alook://" + url)
          break
        case 12: $app.openURL("wuxiang://open?" + url)
      }
    }
  }
}

function randomValue(object) {
  let x = Math.floor(Math.random()*object.length)
  return object[x]
}

module.exports = {
  getCache: getCache,
  randomValue: randomValue,
  mColor: mColor,
  colors: colors,
  myOpenUrl: myOpenUrl,
}