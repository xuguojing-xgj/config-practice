import { hi } from './my';
interface inter {
    name: string
}

function func<T extends inter>(name: T): T {
    console.log(typeof name);

    return name
}

func({
    name: '小明'
})

const obj = {name: '小红', age: 18}

console.log(obj);
obj.age = 19
console.log(obj);


console.log('1');
console.log(hi);
