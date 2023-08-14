// {
//     "error": false,
//     "category": "Dark",
//     "type": "twopart",
//     "setup": "When I was a kid, I made a really big sandcastle with my grandma.",
//     "delivery": "Unfortunately, that didn't impress anyone at the cremation...",
//     "flags": {
//         "nsfw": false,
//         "religious": false,
//         "political": false,
//         "racist": false,
//         "sexist": false,
//         "explicit": false
//     },
//     "id": 143,
//     "safe": false,
//     "lang": "en"
// }

const createJokeFlags = (jokeFlags) => {
    const ul = document.createElement('ul');
    ul.id = 'flags-Ul';
    ul.className = 'flags-Ul';

    for (const flagKey in jokeFlags.flags) {
        const flagName = flagKey;
        const flagValue = jokeFlags.flags[flagKey];

        const li = document.createElement('li');
        li.innerText = `${flagName}: ${flagValue}`;

        ul.append(li);
    }

    return ul;
};

export default createJokeFlags;
