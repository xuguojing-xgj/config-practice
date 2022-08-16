class Snake {
    // 设置蛇头
    head: HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    constructor() {
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
    }

    // 获取蛇头X坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 获取蛇头Y坐标
    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value: number) {
        this.head.style.left = value + ''
    }

    set Y(value: number) {
        this.head.style.top = value + ''
    }

}