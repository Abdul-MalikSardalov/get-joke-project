import createJokeFlags from './createJokeFlags.js';

const createJokeWithoutSetupAndDelivery = (jokeData) => {
    const container = document.createElement('div');
    container.id = 'container';

    const category = document.createElement('h2');
    category.className = 'category';
    category.innerText = jokeData.category;

    const type = document.createElement('p');
    type.className = 'type';
    type.innerText = jokeData.type;

    const joke = document.createElement('p');
    joke.innerText = jokeData.joke;
    joke.className = 'joke';

    const flags = createJokeFlags(jokeData);

    container.append(category, type, joke, flags);

    return container;
};

export default createJokeWithoutSetupAndDelivery;
