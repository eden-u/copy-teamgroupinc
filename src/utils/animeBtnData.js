function getSvgSize(svgWidth, svgHeight) {
  return {
    svgWidth,
    svgHeight,
  }
}

function getViewBox(svgWidth, svgHeight) {
  return `0 0 ${svgWidth} ${svgHeight}`
}

function getClipLen(svgWidth, clipWeight) {
  return Math.ceil((svgWidth * clipWeight) / 100)
}

function getPathDirection({ svgWidth, svgHeight, pathMargin, clipLen }) {
  return `
    M${pathMargin + clipLen} ${pathMargin}
    L${svgWidth - pathMargin} ${pathMargin}
    L${svgWidth - pathMargin} ${svgHeight - pathMargin - clipLen}
    L${svgWidth - pathMargin - clipLen} ${svgHeight - pathMargin}
    L${pathMargin} ${svgHeight - pathMargin}
    L${pathMargin} ${pathMargin + clipLen}
    Z
  `
}

function getPathStrokeClipLen({ svgWidth, svgHeight, pathMargin, clipLen }) {
  return Math.ceil(
    (svgWidth + svgHeight - (pathMargin * 4 + clipLen * 2) + Math.sqrt(2) * clipLen) * 2,
  )
}

export { getSvgSize, getViewBox, getClipLen, getPathDirection, getPathStrokeClipLen }
