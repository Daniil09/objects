//1,2,3
let car = {
    color: 'orange',
    engine: '2L',
    brand: 'toyota',
    drive: {
        print: console.log('driving')
    },
    park: {
        print: console.log('parking')
    },
    start: {
        print: console.log('starting')
    },
    stop: {
        print: console.log('stopping')
    },
    driver: {
        name: 'Sasha',
        lastName: 'Ivanov',
        old: 25,
        category: 'B',
    }
}
//4
console.log(car.driver);
//5
car.driver.name = 'Ivan';
//6
for (let key in car.driver) {
    console.log(car.driver[key]);
}
//7
delete car.driver.lastName;
//8
console.log(car.driver)
//9
if ('model' in car) {
    console.log(car.model);
} else {
    console.log('У объекта нет свойства model');
}
//10
for (let key in car.driver) {
    console.log(car.driver[key]);
}
//11
for (let key in car) {
    if (car[key] === typeof 'string') {
        console.log(car[key])
    }
}
//12
car.driver2 = { name: 'Vasya', category: 'A,B', }
//13
console.log(car)
//14
let driver2 = 'driver2'
//15
console.log(car[driver2])