import createJokeFlags from './createJokeFlags.js';

const createJokeDom = (jokeData) => {
    const container = document.createElement('div');
    container.id = 'container';

    const category = document.createElement('h2');
    category.className = 'category';
    category.innerText = jokeData.category;

    const type = document.createElement('p');
    type.className = 'type';
    type.innerText = jokeData.type;

    const setup = document.createElement('p');
    setup.className = 'setup';
    setup.innerText = jokeData.setup;

    const delivery = document.createElement('p');
    delivery.className = 'delivery';
    delivery.innerText = jokeData.delivery;

    const flags = createJokeFlags(jokeData);

    container.append(category, type, setup, delivery, flags);

    return container;
};

export default createJokeDom;
