const updateDom = (jokeDom, jokeData) => {
    // debugger;

    jokeDom.querySelector('.category').innerText = jokeData.category;
    jokeDom.querySelector('.type').innerText = jokeData.type;
    jokeDom.querySelector('.setup').innerText = jokeData.setup;
    jokeDom.querySelector('.delivery').innerText = jokeData.delivery;

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

export default updateDom;
