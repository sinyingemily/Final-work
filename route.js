const { format } = require('date-fns')
const request = require('request')


const date = new Date()
//const url = 'http://data.fixer.io/api/latest';
//const key = '465de6084a5d5a813450afb97236bf76';

const items = [];
const i = 0;

checkSuccess = (res) => {
  console.log(res)
  if (!res.success) {
    console.log(res.error.info)
    return false
  }
  return true
}

// add an item to the list
exports.post = (route) => {
  console.log(route)
  console.log('2')
  const route2 = route.toString()
  const item = route2.trim('https://todo-severless.emilyli815.repl.co/add/,add,').toLowerCase()
  //   const item =  route.indexOf('add/');
  if (item != 0) {
    let items1 = route[item + 1]
    console.log(items1)
    if (item == '') {
      return { 'code': 400, 'body': 'no item found' }
    }
    //1. check if the item is existed

    let existed = false
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        //2. if existed = true, ignore the key word and return msg
        existed = true
        console.log(`The item ${item} is existed.`)
      }
    }
    //3. if not (!) existed, add item 
    if (!existed) {
      console.log(`adding "${item[2]}"`)
      //items.push(item)
      items.push(item[2])
    }

    if (item == '') {
      return { 'code': 400, 'body': 'no item found' }
    }
  }

}

// list all items from the todo list
exports.list = (route) => {
  if (input.indexOf('list') === 0) {
		for (let i=0; i< items.length; i++) { //i++ --> add one for every item
			console.log(`${i}. ${items[i]}`)
		}
	}
}



// remove one of the items in the list
exports.delete = (route) => {
   const itemDelete = route2.trim('https://todo-severless.emilyli815.repl.co/delete/,delete,').toLowerCase()
    //step 3 deploy the action
  
  for (let i=0; i< items.length; i++) {
  //step 4 remove the delegate item from the list
  // if 
      if (items[i] === item1) {
  //remove 
      console.log(`${i}. removing ${items[i]}`)
      items.splice(i,1)
      }
      
    }
  }






// remove all items in the lists