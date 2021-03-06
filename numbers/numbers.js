var wallet; // Объявили переменную wallet (кошелек).

// В конце каждой строки мы ставим ; чтобы интерпретатор понял, что здесь заканчивается операция.

wallet = 1000; // На счету нашего кошелька 1000.

wallet = 1000 + 500 - 200; // Умная машина посчитает сколько будет на нашем кошельке в результате сама.

wallet = 1000 * 2 / 3; // Умная машина посчитает сколько будет на нашем кошельке в результате сама.


// Что если мы хотим добавить или отнять от текущего счета? Используй += или -=!

wallet += 500; // Мы добавили на наш счет 500.

wallet -= 200; // Мы отняли от нашего счета 200.


// Если нужно добавить или отнять лишь 1, то запись можно записать в более короткой форме: ++ или --.

++wallet; // Добавили в кошелек 1.

--wallet; // Отняли от счета кошелька 1.


// Переменные можно использовать, в арифметике.

var cash = 500;

wallet += cash;


// Можно использовать console.log(), чтобы вывыести данные в консоль и посмотреть на результат.

console.log(wallet);
