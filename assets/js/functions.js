// functions.js
// description: adds functionality to webpage
// version: 14.11.2022

//generate number between min and max
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//generate colorset
function colorset(settings) {
  c = (new KolorWheel(settings.baseColor)).rel(settings.rel[0], settings.rel[1], settings.rel[2], 8);
  return c;
}

//generate logo with colorized letters
function logo(c) {
  return '\
  <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg286213" viewBox="0 200 1024 300" height="300px" width="1024px" version="1.1">\
    <metadata id="metadata286219">\
      <rdf:rdf>\
        <cc:work rdf:about="">\
          <dc:format>image/svg+xml</dc:format>\
          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>\
        </cc:work>\
      </rdf:rdf>\
    </metadata>\
    <defs id="defs286217"></defs>\
      <g id="logo-group">\
        <g id="title" style="font-style:normal;font-weight:700;font-size:72px;line-height:1;font-family:Jura;font-variant-ligatures:none;text-align:center;text-anchor:middle" aria-label="CHIXODO">\
        <path id="path286221" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[1].getHex() + ';" d="m 369.84894,120 q -8.28,0 -12.24,-3.888 -3.888,-3.96 -3.888,-12.24 v -16.56 q 0,-8.28 3.888,-12.24 3.96,-3.96 12.168,-3.888 h 8.712 q 6.768,0 10.296,2.808 3.6,2.808 4.176,8.784 0.216,1.512 -0.576,2.304 -0.792,0.792 -2.304,0.792 -1.44,0 -2.232,-0.72 -0.72,-0.792 -0.936,-2.304 -0.36,-3.24 -2.232,-4.392 -1.872,-1.224 -6.192,-1.224 h -8.712 q -3.888,-0.072 -6.048,0.864 -2.16,0.936 -3.096,3.096 -0.864,2.16 -0.864,6.12 v 16.56 q 0,3.96 0.936,6.12 0.936,2.088 3.024,3.024 2.16,0.936 6.12,0.936 h 8.64 q 4.32,0 6.192,-1.152 1.872,-1.224 2.232,-4.464 0.216,-1.512 0.936,-2.232 0.792,-0.792 2.232,-0.792 1.512,0 2.304,0.792 0.792,0.792 0.576,2.304 -0.576,5.976 -4.176,8.784 -3.528,2.808 -10.296,2.808 z" transform="translate(0 261.7354030433769) translate(252.00000000000006 85.63624150341823) scale(1.5006305534152324) translate(-353.72094 -71.182714)"></path>\
        <path id="path286223" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[2].getHex() + ';" d="m 408.53544,120 q -1.152,0 -2.088,-0.936 -0.936,-0.936 -0.936,-2.088 V 74.208 q 0,-1.224 0.936,-2.088 0.936,-0.936 2.088,-0.936 1.224,0 2.088,0.936 0.936,0.864 0.936,2.088 V 92.28 h 29.376 V 74.208 q 0,-1.224 0.864,-2.088 0.936,-0.936 2.16,-0.936 1.224,0 2.088,0.936 0.936,0.864 0.936,2.088 v 42.768 q 0,1.152 -0.936,2.088 -0.864,0.936 -2.088,0.936 -1.224,0 -2.16,-0.864 -0.864,-0.936 -0.864,-2.16 V 98.328 h -29.376 v 18.648 q 0,1.152 -0.936,2.088 -0.864,0.936 -2.088,0.936 z" transform="translate(0 261.7354030433769) translate(337.22155944372776 85.63817131430991) scale(1.5006305534152324) translate(-405.51144 -71.184)"></path>\
        <path id="path286225" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[3].getHex() + ';" d="m 464.92606,120 q -1.584,0 -2.304,-0.72 -0.72,-0.72 -0.72,-2.304 V 74.28 q 0,-1.584 0.72,-2.304 0.72,-0.72 2.304,-0.72 1.584,0 2.304,0.72 0.72,0.72 0.72,2.304 v 42.696 q 0,1.584 -0.72,2.304 -0.72,0.72 -2.304,0.72 z" transform="translate(0 261.7354030433769) translate(429.34619950883206 85.74621671415579) scale(1.5006305534152324) translate(-461.90206 -71.256)"></path>\
        <path id="path286227" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[4].getHex() + ';" d="m 481.69981,119.352 q -1.368,-0.936 -1.368,-2.304 0,-1.008 0.648,-1.944 l 13.176,-19.44 -13.896,-19.584 q -0.648,-1.008 -0.648,-1.8 0,-1.368 1.44,-2.448 1.008,-0.648 1.872,-0.648 1.296,0 2.304,1.44 l 12.888,18.072 12.96,-18.072 q 1.08,-1.44 2.304,-1.44 0.864,0 1.872,0.792 1.44,1.008 1.44,2.304 0,0.936 -0.72,1.872 l -14.184,19.728 13.608,19.152 q 0.648,0.936 0.648,1.872 0,1.44 -1.44,2.448 -0.936,0.648 -1.872,0.648 -1.296,0 -2.304,-1.44 l -12.528,-17.64 -11.952,17.712 q -0.936,1.368 -2.304,1.368 -0.864,0 -1.944,-0.648 z" transform="translate(0 261.7354030433769) translate(463.42514421925364 85.63817131430991) scale(1.5006305534152324) translate(-479.61181 -71.184)"></path>\
        <path id="path286229" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[5].getHex() + ';" d="m 541.13019,120 q -8.28,0 -12.24,-3.888 -3.888,-3.96 -3.888,-12.24 V 87.24 q 0,-8.28 3.96,-12.168 3.96,-3.96 12.168,-3.888 h 8.64 q 8.28,0 12.168,3.96 3.96,3.888 3.96,12.168 v 16.56 q 0,8.28 -3.96,12.24 -3.888,3.888 -12.168,3.888 z m 8.64,-6.048 q 3.96,0 6.048,-0.936 2.16,-0.936 3.096,-3.024 0.936,-2.16 0.936,-6.12 v -16.56 q 0,-3.888 -0.936,-6.048 -0.936,-2.16 -3.096,-3.096 -2.16,-0.936 -6.048,-0.936 h -8.64 q -3.888,-0.072 -6.048,0.864 -2.16,0.936 -3.096,3.096 -0.936,2.16 -0.936,6.048 v 16.632 q 0,3.96 0.936,6.12 0.936,2.088 3.024,3.024 2.16,0.936 6.12,0.936 z" transform="translate(0 261.7354030433769) translate(539.0424880454575 85.63624150341823) scale(1.5006305534152324) translate(-525.00219 -71.182714)"></path>\
        <path id="path286231" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[6].getHex() + ';" d="m 582.20731,120 q -1.44,0 -2.232,-0.792 -0.792,-0.792 -0.792,-2.232 V 74.208 q 0,-1.44 0.792,-2.232 0.792,-0.792 2.232,-0.792 h 17.352 q 9.432,0 13.824,4.464 4.464,4.392 4.464,13.824 v 12.24 q 0,9.432 -4.464,13.896 -4.392,4.392 -13.824,4.392 z m 17.352,-6.048 q 4.68,0 7.272,-1.152 2.664,-1.152 3.816,-3.744 1.152,-2.664 1.152,-7.344 v -12.24 q 0,-4.68 -1.152,-7.272 -1.152,-2.664 -3.816,-3.816 -2.592,-1.152 -7.272,-1.152 h -14.328 v 36.72 z" transform="translate(0 261.7354030433769) translate(627.8514849027908 85.63817131430991) scale(1.5006305534152324) translate(-579.18331 -71.184)"></path>\
        <path id="path286233" style="font-style: normal; font-weight: 700; font-size: 72px; line-height: 1; font-family: Jura; font-variant-ligatures: none; text-align: center; text-anchor: middle; fill: ' + c[7].getHex() + ';" d="m 645.47394,120 q -8.28,0 -12.24,-3.888 -3.888,-3.96 -3.888,-12.24 V 87.24 q 0,-8.28 3.96,-12.168 3.96,-3.96 12.168,-3.888 h 8.64 q 8.28,0 12.168,3.96 3.96,3.888 3.96,12.168 v 16.56 q 0,8.28 -3.96,12.24 -3.888,3.888 -12.168,3.888 z m 8.64,-6.048 q 3.96,0 6.048,-0.936 2.16,-0.936 3.096,-3.024 0.936,-2.16 0.936,-6.12 v -16.56 q 0,-3.888 -0.936,-6.048 -0.936,-2.16 -3.096,-3.096 -2.16,-0.936 -6.048,-0.936 h -8.64 q -3.888,-0.072 -6.048,0.864 -2.16,0.936 -3.096,3.096 -0.936,2.16 -0.936,6.048 v 16.632 q 0,3.96 0.936,6.12 0.936,2.088 3.024,3.024 2.16,0.936 6.12,0.936 z" transform="translate(0 261.7354030433769) translate(710.6302128875307 85.63624150341823) scale(1.5006305534152324) translate(-629.34594 -71.182714)"></path>\
      </g>\
    <g id="tagline" style="font-style:normal;font-weight:500;font-size:32px;line-height:1;font-family:Roboto;font-variant-ligatures:none;text-align:center;text-anchor:middle"></g>\
    </g>\
  </svg>';
}

//generate color
var settings = { "baseColor": [getRandomArbitrary(0, 361), getRandomArbitrary(0, 101), getRandomArbitrary(20, 81)] }
settings.rel = [getRandomArbitrary(60, 300), getRandomArbitrary(20, 101 - settings.baseColor[2]), getRandomArbitrary(20, 101 - settings.baseColor[2])]
var colorS = colorset(settings)

//set logo using color
document.getElementById("logo").innerHTML = logo(colorS.resultList);

//set background color
document.getElementsByTagName("html")[0].style.backgroundColor = "hsl(" + settings.baseColor[0] + "," + settings.baseColor[1] + "%," + settings.baseColor[2] + "%)"

//set font color
document.getElementsByTagName("html")[0].style.color = "hsl(" + settings.baseColor[0] + "," + settings.baseColor[1] + "%," + ((settings.baseColor[2] > 50) ? settings.baseColor[2] - 40 : settings.baseColor[2] + 40) + "%)";