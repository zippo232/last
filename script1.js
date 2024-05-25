const body = document.querySelector('body');
const candle = document.querySelector('div.candle');
const divAll = document.getElementsByTagName('div');
const divText = document.querySelector('div.text');

candle.addEventListener('click', function(){

    if (divText !== null) {
        delete divAll[5];
    }else{
        const div = document.createElement('div');
        const text = document.createTextNode('From Your Best Friend');

        div.append(text);
        div.setAttribute('class', 'text')

        body.append(div)
    }
})