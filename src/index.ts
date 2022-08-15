// 引入样式
import './style/index.less'

//  定义食物类 Food
class Food {
    // 定义一个属性代表食物 对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面 中的food 元素 并赋值给 element !表示food 元素一定存在
        this.element = document.getElementById('food')!;
    }

    // 获取食物 X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物 Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 随机生成食物位置
    change() {
        /**
         * 生成一个随机位置
         * 食物位置最小是0, 最大是290 
         * 蛇 移动一次是 10 一个大小 也是10 所以要求 食物每次移动 的坐标 都是整 10
         */

        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.element.style.top = left + 'px'
        this.element.style.left = left + 'px'

    }
}

const food = new Food()
console.log(food.X);
console.log(food.Y);
food.change()
console.log(food.X);
console.log(food.Y);