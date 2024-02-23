'use strict';

const climber = {
    currentStep: 0,
    up() {
        this.currentStep++;
    },
    down() {
        this.currentStep--;
    },
    sayStep() {
        console.log('я сейчас на ступеньке', this.currentStep);
    },
};

climber
    .up()
    .up()
    .sayStep()
    .down()
    .down()
    .sayStep()
    .up()
    .sayStep();

function sayName(extra) {
    console.log(extra);
    console.log('Меня зовут', this.name);
};

const sayArraw = () => {
    console.log('Меня зовут', this.name);
};

let somePerson = {
    name: 'Айжан',
    title: 'эже',
    age: 23,
    say: sayName,
};

const otherPerson = {
    name: 'Саша',
    title: 'байке',
    age: 45,
    say: sayName,
};


otherPerson.say('Привет');
somePerson.say.bind(otherPerson)('А его');
somePerson.say.call(otherPerson, 'Пока');