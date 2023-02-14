import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {props.headComponents}
        <style>{`.vagaro a {font-size:10px; color:#AAA; text-decoration:none;}`}</style>
        <script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnC30tDZCcT3q"></script>
        <script src="https://kit.fontawesome.com/9e9bdf8c6f.js" crossOrigin="anonymous"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}