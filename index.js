const maybeNull = (obj,query,def) => {
  const split = query.split('.')
  let result = obj
  for(let i = 0; i < split.length; i++){
    const key = split[i]
    if(!result.hasOwnProperty(key)){
      return def
    }
    result = result[key]
  }
  return result
}

module.exports = maybeNull