const updateOnlyJoke = (jokeDom, jokeData) => {
    jokeDom.querySelector('.category').innerText = jokeData.category;
    jokeDom.querySelector('.type').innerText = jokeData.type;
    jokeDom.querySelector('.joke').innerText = jokeData.joke;

    const ul = jokeDom.querySelector('#flags-Ul');
    ul.innerHTML = '';
    for (const flagKey in jokeData.flags) {
        const flagName = flagKey;
        const flagValue = jokeData.flags[flagKey];

        const li = document.createElement('li');
        li.innerText = `${flagName}: ${flagValue}`;

        ul.append(li);
    }

    return jokeDom;
};

export default updateOnlyJoke;
