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

        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'

    }
}

// const food = new Food()
// console.log(food.X, food.Y);
// food.change()
// console.log(food.X, food.Y);

// 定义记分牌 的类
class ScorePanel {
    // 计分 和 等级
    score = 0;
    level = 1;
    // 分数和等级的元素 在构造函数中初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分时升级
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;

        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addSscore() {
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelup()
        }
    }
    // 提升等级的方法
    levelup() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }

    }
}
const scorepanel = new ScorePanel()
for (let i = 0; i < 10; i++) {
    scorepanel.addSscore()
}