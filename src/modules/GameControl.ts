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
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorepanel = new ScorePanel()

        this.init()
    }

    // 游戏初始化方法 调用后游戏立即开始
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', function () {
            
        })
    }
}

export default GameControl