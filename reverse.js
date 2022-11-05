// reverse function

const reverse = (str) => {
  let newStr = ''
  for (let i = 0; i < str.length; i += 1) {
    newStr = `${str[i]}${newStr}`
  }
  
  return newStr;
};
