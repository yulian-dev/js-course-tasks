// Используя цикл while вывести в консоль строку, которая содержит символы
// “|” (вертикальная полоса) и “_” (нижнее подчеркивание) и выглядит в итоге
// как треугольник следующего вида:
// Рис1. Результат исполнения js-скрипта в консоли браузера.

const getTriangle = () => {
    let triangleHeight = 9;
    let currentIndex = 0;

    while (currentIndex < triangleHeight) {
        let str = '';
        for (let i = 0; i <= currentIndex; i++) {
            str += '|';
            if (i !== currentIndex) {
                str += '_';
            }
        }
        str += '_';

        console.log(str);
        currentIndex++;
    }
}

// getTriangle();


// Используя двойной цикл for сформируйте строку, содержащую решётку 8х8, в
// которой линии разделяются символами новой строки “\n”. На каждой позиции
// этой решетки должен быть либо белый квадрат (символ “\u2B1C”), либо черный
// квадрат (символ “\u2B1B”). Вывод строки делать одним единственным вызовом
// console.log(). В результате должны увидеть шахматную доску следующего
// вида:
// Рис2. Результат исполнения js-скрипта в консоли браузера.

const getChessboard = () => {
    let chessboard = '';
    let size = 8;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                chessboard += '\u2B1C';
            } else {
                chessboard += '\u2B1B';
            }
        }
        chessboard += '\n';
    }

    console.log(chessboard);
}

// getChessboard();