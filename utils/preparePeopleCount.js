const preparePeopleCount = (num) => {
	
  num = parseInt(num.replace(/\s+/g, ''))

	if (num > 1000000000) {
    return (num / 1000000000).toFixed(3) + ' млрд.ч'
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(2) + ' млн.ч'
  } else if (num > 100000) {
    return (num / 1000).toFixed(2) + ' тыс.ч'
  } else {
    return num.toString() + ' чел.'
  }

}

export default preparePeopleCount
