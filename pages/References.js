import React from 'react'
import Nav from './Nav'
import Image from 'next/image'

function References() {
  return (
    <div>
    <head>
      <link href="https://api.fontshare.com/v2/css?f[]=bespoke-serif@500&display=swap" rel="stylesheet" />
    </head>
    <Nav />

    <h1>Here is References Page</h1>
    <Image src="/images/payments.png" height={400} width={400} />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ornare libero sed porttitor. Sed lacinia congue dui, lobortis sagittis orci bibendum id. Fusce sollicitudin urna id aliquam pharetra. Aenean blandit ex ac lectus molestie, quis posuere lacus finibus. Duis elementum cursus risus, in laoreet sem auctor laoreet. Quisque eget metus eu lacus euismod lacinia. Ut vitae scelerisque lorem. Etiam ultricies et ligula in suscipit. Morbi eu pulvinar est. Nulla rhoncus maximus nibh et iaculis.

Aliquam ut orci vulputate, scelerisque dui pharetra, mollis quam. Duis mattis ornare eros, id iaculis ligula. Morbi porta, odio id laoreet semper, metus massa consequat lorem, id suscipit purus mauris et enim. Nulla vel justo accumsan, efficitur odio ut, posuere est. Vivamus pulvinar vitae erat et malesuada. Donec ornare neque turpis, quis vestibulum elit finibus id. Aenean luctus vulputate sem nec sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar rhoncus facilisis. Duis et venenatis lacus. Donec vel felis quis massa fermentum ultricies at at odio. Pellentesque massa neque, malesuada quis fringilla in, fermentum id tortor. Praesent erat felis, luctus sed lectus at, commodo convallis libero. Etiam at vulputate nunc. Proin semper quis orci sed mollis.</p>
    </div>
  )
}

export default References