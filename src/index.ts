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
}

const food = new Food()
console.log(food.X);
console.log(food.Y);
