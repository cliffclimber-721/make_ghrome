function sayHello(name) {
    console.log(`Hi my name is ${name}`);
}

sayHello("nico")
sayHello("dalse")

function plus(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

const player = {
    name: "niconiconi",
    greets: function(othername) {
        console.log(`Hi, ${othername}`);
    },
    sayBye: function(n) {
        console.log(`bye, ${n}`)
    }
}

player.greets("lynn");
player.sayBye(player.name)