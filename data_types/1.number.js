// Number

/*
 Числовий, примітивний тип даних в JavaScript, на який виділено 64 біта памʼяті, цей
 тип даних, окрім цілих чисел, включає в себе також числа з плаваючою
 комою. В інших мовах числа можуть ділитися на декілька типів, наприклад:
 Integer, Float, Double или Bignum. Але в JavaScript за числа відповідають типи
 даних number и bigint. Про bigint трохи пізніше.
*/

console.log('------ Number Examples ------');

// Приклади чисел:
const integerNumber = 100;
const floatNumber = 10.2;
const anotherFloatNumber = 10.2002;
// console.log(integerNumber, floatNumber, anotherFloatNumber);





// console.log('------ e Examples ------');
/*
    Для запису великих чисел ми можемо використовувати букву 'e', для того, щоб
    скоротити число
*/


const oneBillion = 1000000000;      // Тут у нас 9 нулів
const oneBillionWithE = 1e9;        // Тут теж
// console.log('e', oneBillion, oneBillionWithE);

const floatBillions = 5500000000;
const floatBillionsWithE = 5.5e9;
// console.log('e', floatBillions, floatBillionsWithE);


// Негативне число після "e" має на увазі ділення на 1 із вказаною
// кількістю нулів:
const oneMillisecond = 0.000001;
const oneMillisecondWithE = 1e-6;
// console.log('-e', oneMillisecond, oneMillisecondWithE);


// також великі числа ми можемо розділяти символом '_' для підвищення читабельності.

const bigNumber = 10_000_000_00;
// console.log('_', bigNumber)


// console.log('------ Infinity Examples ------');
// Окрім самих чисел до цього типу належать спеціальні числові значення
// такі як: Infinity, -Infinity, NaN

// Infinity - є математичною безкінечністю, яка більше будь-якого числа.

// В JavaScript ми можемо ділити на 0 і це не викличе ніяких помилок.

const divOnZero = 10 / 0;
// console.log(divOnZero); // Infinity


// Також ми можемо задати Infinity явно.

const infinityNumber = Infinity;
// console.log(infinityNumber);      // Infinity





console.log('------ NaN Examples ------');
// NaN - not a number.

// ми можемо його отримати, якщо будемо виконувати неправильну математичну операцію
// або задавати його явно.

const exampleNaN_1 = 'Volodymyr' * 10;
const exampleNaN_2 = 'Volodymyr' / 10;
const exampleNaN_3 = 'Volodymyr' - 10;

const exampleNaN_4 = NaN;

console.log(exampleNaN_1, exampleNaN_2, exampleNaN_3, exampleNaN_4);


// Якщо ми будемо виконувати будь-які математичні операції з NaN, то отримаємо NaN

const exampleNaN_5 = NaN;               // явно
console.log(exampleNaN_5 + 20);
console.log(exampleNaN_5 - 20);
console.log(exampleNaN_5 * 20);
console.log(exampleNaN_5 / 20);

console.log('================');

const exampleNaN_6 = 'Volodymyr' - 10;   // неявно
console.log(exampleNaN_6 + 20);
console.log(exampleNaN_6 - 20);
console.log(exampleNaN_6 * 20);
console.log(exampleNaN_6 / 20);






console.log('------ Negative numbers ------');
/*
    Всі числа із попередніх прикладів були позитивними/додатними. Це не відноситься до NaN.
    Позитивне число, або негативне, легко перевірити через Math.sign.

    С негативним числами немає ніяких проблем, окрім того, що для знака
    мінус '-' виділений окремий біт, через що ми можемо потрапити в ситуацію
    з -0
*/

//   |-10| = 10
//   |10|  = 10

const negativeZero = -0;
const zero = 0;

// Приклад:

const negativeZeroExample = 0 / -10;
console.log(negativeZeroExample);


// Аналогічно всі числа, окрім NaN, можуть бути негативними/відʼємними.

const negativeInfinity_1 = -Infinity;
const negativeInfinity_2 = 10 / -0;
const negativeInfinity_3 = -2e6;
const negativeInfinity_4 = -1_000_000_000;

console.log(
    negativeInfinity_1,
    negativeInfinity_2,
    negativeInfinity_3,
    negativeInfinity_4
)

/*
    Також в JavaScript є можливість працювати з шістнадцятиричними,
    двійковими и восьмеричними числами, але це виходить за рамки сьогоднішнього уроку.
*/


// Неточності у вичисленнях

/*
    Із 64 біт, відведених на число, самі цифри числа займають до 52 біт,
    інші 11 біт зберігають позицію десятичної крапки і один біт – знак "-".
    Тож якщо 52 біт не вистачає на цифри, то при запису зникнуть молодші
    розряди.

    Аналогічні проблеми з точністю виникають в мовах: PHP, Java, C, Perl, Ruby.
*/
