const prepareName = (name, obj) => {
  const uniqueCommons = [...new Set(Object.values(obj).map((item) => item.common))]

  if (!uniqueCommons.includes(name)) {
    uniqueCommons.unshift(name)
  } else {
    const index = uniqueCommons.indexOf(name)
    if (index > -1) {
      uniqueCommons.splice(index, 1)
      uniqueCommons.unshift(name)
    }
  }
  return uniqueCommons
}
export default prepareName
