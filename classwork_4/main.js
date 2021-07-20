// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = [order];
//     }
// }
//
//
// let clients = [
//     new Client(10, 'Vasya', 'Galik', 'rap@vasyarap.ua', +38077777777, ['капуста', 'морозиво', 'пиріг', 'пиво']),
//     new Client(9, 'Vanya', 'Talik', 'email@gmail.ua', +38077888777, ['косичка', 'пиво']),
//     new Client(8, 'Tanya', 'Flower', 'baby@gmail.ua', +38068988779, ['петарди', 'фаєри', 'салют']),
//     new Client(7, 'Anya', 'Sergejevna', 'anna@gmail.ua', +380344647, ['свистулька', 'часничок', 'граната', 'p2000', 'sexy-blue', 'mc107']),
//     new Client(6, 'Nazar', 'Prinda', 'nazik@gmail.ua', +48077888777, ['водка', 'пиво', 'мінералка', 'товар']),
//     new Client(5, 'Ruslan', 'Duma', 'duma@gmail.ua', +4207964377, ['квас', 'шашлик', 'кетчуп', 'Ice-Mix', 'BeerMix']),
//     new Client(4, 'Oleg', 'Dog', 'dog@yandex.ua', +38073138777, ['печенько', 'йогурт', 'булочка']),
//     new Client(3, 'Sashka', 'Gusak', 'alex@atlas.cz', +4208777555, ['сир', 'сметана', 'яйця']),
//     new Client(2, 'Vlad', 'Dracula', 'drac@meta.ua', +3800000001, ['жувачки', 'чупа-чупс', 'барбарис']),
//     new Client(1, 'James', 'Bod', 'bond007@gmail.ua', +38000000007, ['молоко'])
// ];
//
// let sort = clients.sort((a, b) => {
//     return a.order[0].length-b.order[0].length
// })
// console.log(sort);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, producer, yearsOfProduction, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.yearsOfProduction = yearsOfProduction;
//     this.maxSpeed += maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     };
//
//     this.info = function () {
//         console.log(`
//         Модель: ${this.model}
//         Виробник: ${this.producer}
//         Рік випуску: ${this.yearsOfProduction}
//         Максимальна швидкість: ${this.maxSpeed}
//         Об'єм двигуна: ${this.engineCapacity}
//         `);
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(`
//         Швидкісь авто змінено!
//         Нова максимальна швидкість: ${this.maxSpeed} км/год.
//         `);
//     };
//
//     this.changeYear = function changeYear (newValue) {
//         this.yearsOfProduction= newValue;
//         console.log(`
//         Тачку прокачано, тепер вона виглядає на: ${newValue} рік випуску!
//         `);
//     };
//
//     this.addDriver = function addDriver (driver) {
//         this.driver = driver;
//         console.log(`${this.driver} - Ви новий власник даного авто.`);
//     };
// }
//
// let mercedes = new Car('E200', 'MB', 2006, 260, 2);
// mercedes.drive();
// mercedes.info();
// mercedes.increaseMaxSpeed(300);
// mercedes.changeYear(2010);
// mercedes.addDriver('Іван');
//
// console.log(mercedes);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, yearsOfProduction, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.yearsOfProduction = yearsOfProduction;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     };
//
//     info() {
//         console.log(`
//         Модель: ${this.model}
//         Виробник: ${this.producer}
//         Рік випуску: ${this.yearsOfProduction}
//         Максимальна швидкість: ${this.maxSpeed}
//         Об'єм двигуна: ${this.engineCapacity}
//         `);
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`
//         Швидкісь авто змінено!
//         Нова максимальна швидкість: ${this.maxSpeed} км/год.
//         `);
//     };
//
//     changeYear(newValue) {
//         this.yearsOfProduction = newValue;
//         console.log(`
//         Тачку прокачано, тепер вона виглядає на: ${newValue} рік випуску!
//         `);
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(`${this.driver.name} - Ви новий власник даного авто.`);
//     };
//
// }
//
// let mercedes = new Car('E63', 'MB', 2019, 300, 6.3);
// mercedes.drive();
// mercedes.info();
// mercedes.increaseMaxSpeed(30);
// mercedes.changeYear(2020);
// mercedes.addDriver({name:"Vov@n", age: 29});
//
// console.log(mercedes);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}

let popelushky = [
    new Popelushka('Vasylynka', 28, 36),
    new Popelushka('Trostynka', 21, 38),
    new Popelushka('Ivanka', 22, 42),
    new Popelushka('Halynka', 26, 37),
    new Popelushka('Hrystynka', 65, 38.5),
    new Popelushka('Irynka', 48, 39),
    new Popelushka('Angelina', 75, 40),
    new Popelushka('Nina', 19, 36),
    new Popelushka('Olya', 18, 37.5),
    new Popelushka('Oksana', 22, 39.5)
];

class Prync {
    constructor(name, age, princessSlipper) {
        this.name = name;
        this.age = age;
        this.princessSlipper = princessSlipper;
    };
}

let alfons = new Prync('Ruslik', 30, 40);

for (const popelka of popelushky) {
    if (alfons.princessSlipper === popelka.footSize) {
        console.log(`
        ${popelka.name}- це твоя доля мужик.
        `);
    }
}

//-----------------------------------------------------------------------------

popelushky.find(princess => {
    if (princess.footSize === alfons.princessSlipper) {
        console.log(`${alfons.name}- цю туфельку загубила ${princess.name}`)
    }
});