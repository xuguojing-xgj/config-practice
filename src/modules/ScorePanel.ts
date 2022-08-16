
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
// const scorepanel = new ScorePanel()
// for (let i = 0; i < 10; i++) {
//     scorepanel.addSscore()
// }
export default ScorePanel;