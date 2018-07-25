var commonMethod = require('./src/utils/commonMethod.js');
var apiMethod = require('./src/utils/apiMethod.js');
var Decimal = require('decimal.js')



async function getAll() {
  let myAllOrder = await commonMethod.findAllOrder()
  console.log('======\n', JSON.stringify(myAllOrder, null, 2), '\n======')
  for (let i = 0; i < myAllOrder.length; i++) {
    let res = await apiMethod.getOrderInfo(myAllOrder[i].id).then(res => JSON.parse(res))
    console.log('======\n', JSON.stringify(res, null, 2), '\n======')
  }
}



(async function () {
  getAll()
})()
