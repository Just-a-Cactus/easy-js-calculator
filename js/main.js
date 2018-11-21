;
(function () {
    document.querySelector('button').addEventListener('click', test);

    function test() {
        inputValue = document.querySelector('input');
        try {
            inputValue.value = eval(inputValue.value);
        } catch (error) {
            inputValue.value = 'Ошибка. Пишите правильно!';
        }
    }
})()