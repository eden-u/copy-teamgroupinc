// #region helper
function getViewBox(svgWidth, svgHeight) {
  return `0 0 ${svgWidth} ${svgHeight}`
}

function getClipLen(svgWidth, clipWeight) {
  return Math.ceil((svgWidth * clipWeight) / 100)
}

function getPathDirection({ svgWidth, svgHeight, pathMargin, clipWeight }) {
  const clipLen = getClipLen(svgWidth, clipWeight)

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

function getPathStrokeDash({ svgWidth, svgHeight, pathMargin, clipWeight }) {
  const clipLen = getClipLen(svgWidth, clipWeight)

  return Math.ceil(
    (svgWidth + svgHeight - (pathMargin * 4 + clipLen * 2) + Math.sqrt(2) * clipLen) * 2,
  )
}
// #endregion helper

function getCalculatedSvgData(svgData) {
  const { svgWidth, svgHeight } = svgData

  const svgViewBox = getViewBox(svgWidth, svgHeight)
  const pathDirection = getPathDirection(svgData)
  const pathStrokeDash = getPathStrokeDash(svgData)

  return {
    svgViewBox,
    pathStrokeDash,
    pathDirection,
  }
}

export { getCalculatedSvgData }
