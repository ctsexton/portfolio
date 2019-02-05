<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="size" :height="size" viewBox="0 0 1024 1024" version="1.1">
    <desc>SuperCollider Cube SVG - Nathan Ho 2015</desc>
    <defs>
      <linearGradient id="wbase" gradientUnits="userSpaceOnUse">
          <stop stop-color="rgb(0,0,0)" offset="0%" />
          <stop stop-color="rgb(255,255,255)" offset="100%" />
      </linearGradient>
      <linearGradient id="w0" xlink:href="#wbase" x1="50%" y1="100%" x2="50%" y2="0%"></linearGradient>
      <linearGradient id="w1" xlink:href="#wbase" x1="100%" y1="50%" x2="0%" y2="50%"></linearGradient>
      <linearGradient id="w2" xlink:href="#wbase" x1="50%" y1="0%" x2="50%" y2="100%"></linearGradient>
      <linearGradient id="w3" xlink:href="#wbase" x1="0%" y1="50%" x2="100%" y2="50%"></linearGradient>

      <linearGradient id="ebase" gradientUnits="userSpaceOnUse">
          <stop stop-color="rgb(0,0,0)" offset="0%" />
          <stop stop-color="rgb(167,167,167)" offset="100%" />
      </linearGradient>
      <linearGradient id="e0" xlink:href="#ebase" x1="50%" y1="100%" x2="50%" y2="0%"></linearGradient>
      <linearGradient id="e1" xlink:href="#ebase" x1="100%" y1="50%" x2="0%" y2="50%"></linearGradient>
      <linearGradient id="e2" xlink:href="#ebase" x1="50%" y1="0%" x2="50%" y2="100%"></linearGradient>
      <linearGradient id="e3" xlink:href="#ebase" x1="0%" y1="50%" x2="100%" y2="50%"></linearGradient>

      <linearGradient id="nbase" gradientUnits="userSpaceOnUse">
          <stop stop-color="rgb(79,79,79)" offset="0%" />
          <stop stop-color="rgb(255,255,255)" offset="100%" />
      </linearGradient>
      <linearGradient id="n0" xlink:href="#nbase" x1="50%" y1="100%" x2="50%" y2="0%"></linearGradient>
      <linearGradient id="n1" xlink:href="#nbase" x1="100%" y1="50%" x2="0%" y2="50%"></linearGradient>
      <linearGradient id="n2" xlink:href="#nbase" x1="50%" y1="0%" x2="50%" y2="100%"></linearGradient>
      <linearGradient id="n3" xlink:href="#nbase" x1="0%" y1="50%" x2="100%" y2="50%"></linearGradient>

      <g id="wface">
          <rect x="0" y="0" width="1024" height="1024" fill="url(#w0)" />
          <rect x="64" y="64" width="896" height="896" fill="url(#w1)" />
          <rect x="128" y="128" width="768" height="768" fill="url(#w2)" />
          <rect x="192" y="192" width="640" height="640" fill="url(#w3)" />
          <rect x="256" y="256" width="512" height="512" fill="url(#w0)" />
          <rect x="320" y="320" width="384" height="384" fill="url(#w1)" />
          <rect x="384" y="384" width="256" height="256" fill="url(#w2)" />
          <rect x="448" y="448" width="128" height="128" fill="url(#w3)" />
      </g>
      <g id="eface">
          <rect x="0" y="0" width="1024" height="1024" fill="url(#e0)" />
          <rect x="64" y="64" width="896" height="896" fill="url(#e1)" />
          <rect x="128" y="128" width="768" height="768" fill="url(#e2)" />
          <rect x="192" y="192" width="640" height="640" fill="url(#e3)" />
          <rect x="256" y="256" width="512" height="512" fill="url(#e0)" />
          <rect x="320" y="320" width="384" height="384" fill="url(#e1)" />
          <rect x="384" y="384" width="256" height="256" fill="url(#e2)" />
          <rect x="448" y="448" width="128" height="128" fill="url(#e3)" />
      </g>
      <g id="nface">
          <rect x="0" y="0" width="1024" height="1024" fill="url(#n0)" />
          <rect x="64" y="64" width="896" height="896" fill="url(#n1)" />
          <rect x="128" y="128" width="768" height="768" fill="url(#n2)" />
          <rect x="192" y="192" width="640" height="640" fill="url(#n3)" />
          <rect x="256" y="256" width="512" height="512" fill="url(#n0)" />
          <rect x="320" y="320" width="384" height="384" fill="url(#n1)" />
          <rect x="384" y="384" width="256" height="256" fill="url(#n2)" />
          <rect x="448" y="448" width="128" height="128" fill="url(#n3)" />
      </g>

      <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
      </filter>
    </defs>
    <g transform="translate(0,650)" filter="url(#shadow)" opacity="0.5">
        <use xlink:href="#nface" transform="matrix(0.4140625 0.2021484375 -0.494140625 0.1162109375 554.0 26.0)" />
    </g>
    <use xlink:href="#eface" transform="matrix(0.494140625 -0.1162109375 0.0 0.5810546875 472.0 352.0)" />
    <use xlink:href="#wface" transform="matrix(0.4140625 0.2021484375 0.0 0.5810546875 48.0 145.0)" />
    <use xlink:href="#nface" transform="matrix(0.4140625 0.2021484375 -0.494140625 0.1162109375 554.0 26.0)" />
  </svg>
</template>
<script>
export default {
  props: {
    size: Number
  }
}
</script>
