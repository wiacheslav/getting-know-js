let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, p, receiver) {
        if (p < 0) {
            return target[target.length - Math.abs(Number(p))];
        } else {
            return target[p];
        }
    }
});

console.log(array[-1]);

function foo() {
    setTimeout(() => console.log(typeof r), 0);

    let r = "string";

}


function test() {
    console.log(this.name);
    let r = () => {};
    return function () {}
}

let bobr = {
    name: 'bobr',
    sayName: function () {
        return () => console.log(this.name);
    }
}

bobr.sayName()();

bobr.sayName().apply({name: 'dobr'});

