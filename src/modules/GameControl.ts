// 引入其他类
import Snake from "./Snake";
import Food from "./Foods";
import ScorePanel from "./ScorePanel";

// 游戏控制器 控制其他所有类
class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorepanel: ScorePanel;

    // 创建一个属性来存储蛇的移动方向(按键的方向)
    direction: string = '';

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorepanel = new ScorePanel()

        this.init()
    }

    // 游戏初始化方法 调用后游戏立即开始
    init() {
        // 绑定键盘按下事件
        // this指向问题 把this指向改变成当前函数 存储到按键信息
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }
    /**
     * 
     * @param event  返回字符串
     * ArrowUp  ie中 为 Up
       ArrowDown        Down
       ArrowLeft        Left
       ArrowRight       Right
     */
    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        console.log(this);
        // 检查 event.key的值是否合法(用户按下的按键是否属于方向键)
        console.log(event.key);
        // 修改 direction(按键) 属性
        this.direction = event.key

    }
}

export default GameControl