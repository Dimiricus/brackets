module.exports = function check(str, bracketsConfig) {

  // если строка не чётная, значит не все скобки парные
  if (str.length % 2 != 0) {
    return false;
  }

  // скобочная пара, регулярка для поиска, определитель совпадения
  let pair, regExp, haveFound; 

  while(true) {

    haveFound = false;

    for (let i = 0; i < bracketsConfig.length; i++) {

      if (str.length == 0) {
        return true;
      }

      pair = bracketsConfig[i][0] + bracketsConfig[i][1];

      if (str.indexOf(pair) != -1 ) {

        //regExp = new RegExp(pair, 'g');
        
        str = str.replace(pair, '');

        haveFound = true;
      } 

    }

    if (haveFound == false) {
      return false;
    }

  }

}
