// 引入样式
import './style/index.less'


import Food from './modules/Foods'

const food = new Food()
console.log(food.X, food.Y);
food.change()
console.log(food.X, food.Y);
