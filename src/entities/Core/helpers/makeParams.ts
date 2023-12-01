export function makeParams(params) {
  const paramsToAdd: any = []
  if (params) {
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined) {
        paramsToAdd.push(`${key}=${params[key]}`)
      }
    })
  }
  return paramsToAdd.join('&')
}
