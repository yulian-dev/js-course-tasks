// С помощью prompt() спросить у пользователя длину и ширину
// прямоугольника, сохранить эти значения в переменные width и length. После
// этого высчитайте площадь прямоугольника, его периметр и выведите
// результаты в консоль. Если длина и ширина равны, то дополнительно
// сообщите в консоли, что перед нами квадрат.

const getRectangle = () => {
    while (true) {
        const length = prompt('Enter the length of rectangle:');

        if (length === '' || isNaN(Number(length))) {
            alert('It is not a number, try again');
        } else if (length <= 0) {
            alert('It is less than 0, try again');
        } else if (length === null) {
            break;
        } else {
            let width;

            while (true) {
                width = prompt('Enter the width of rectangle:');
                if (width === '' || isNaN(Number(width))) {
                    alert('It is not a number too, try again');
                } else if (width <= 0) {
                    alert('It is less than 0, try again');
                } else if (width === null) {
                    break;
                } else {
                    break;
                }
            }

            if (length === width) {
                console.log('It is a square!');
            }

            console.log(`Your rectangle area is ${Math.round(((length * width)*10)/10)}`);
            console.log(`Your rectangle perimeter is ${Math.round(((2 * (length * width))*10)/10)}`);

            break;
        }
    }
}

// getRectangle();


// С помощью prompt() спросить у пользователя номер месяца, затем
// необходимо преобразовать к числу и сохранить в переменную month.
// Определите в какую пору года попадает этот месяц (зима, лето, весна,
// осень). Решите задачу через if/else, а затем придумайте еще один способ
// решения.

// First Way
const getMonthNumberFirstWay = () => {
    const month = parseInt(prompt('Enter number of a month:'), 10);

    if (month < 1 || month > 12) {
        console.log('Invalid month number!');
    } else if (month >= 3 && month <= 5) {
        console.log('It is spring!');
    } else if (month >= 6 && month <= 8) {
        console.log('It is summer!');
    } else if (month >= 9 && month <= 11) {
        console.log('It is fall!');
    } else {
        console.log('It is winter!');
    }
}

// getMonthNumberFirstWay();

// Second Way
const getMonthNumberSecondWay = () => {
    const month = +prompt('Enter number of a month:');

    switch(true) {
        case (month < 1 || month > 12):
            alert('Invalid month number!');
            break;
        case (month >= 3 && month <= 5):
            alert('It is spring!');
            break;
        case (month >= 6 && month <= 8):
            alert('It is summer!');
            break;
        case (month >= 9 && month <= 11):
            alert('It is fall!');
            break;
        default:
            alert('It is winter!');
    }
}

// getMonthNumberSecondWay();


// С помощью prompt() спросить у пользователя число, сохранить в
// переменную num. Написать скрипт, который проверит число и выведет в
// консоль одной форматированной строкой информацию об этом числе в виде
// (одним console.log):
// 1) четное или нет
// 2) целое или дробное
// 3) отрицательное или положительное
// Не забываем, что число 0 тоже должно обрабатываться.

const getRandomNumber = () => {
    const num = +prompt('Enter a random number:');

    let isEven = (num % 2 === 0) ? 'четное' : 'нечетное';
    let isInteger = Number.isInteger(num) ? 'целое' : 'дробное';
    let isPositive = num > 0 ? 'положительное' : num < 0 ? 'отрицательное' : 'ноль';

    console.log(`Введенное число ${num} - ${isEven}, ${isInteger}, ${isPositive}.`);
}

// getRandomNumber();