import createJokeDom from './components/createJokeDom.js';
import getJoke from '../apis/getJoke.js';
import dom from './dom.js';
import createJokeWithoutSetupAndDelivery from './components/onlyJoke.js';
import updateDom from './components/updateDom.js';
import updateOnlyJoke from './components/updateOnlyJoke.js';

dom.btn.addEventListener('click', async () => {
    const jokeData = await getJoke();
    const readyJoke = createJokeDom(jokeData);
    const onlyJokeDom = createJokeWithoutSetupAndDelivery(jokeData);
    const existed = document.getElementById('container');
    // debugger;

    if (!existed) {
        if (jokeData.type === 'single') {
            dom.rootDiv.append(onlyJokeDom);
        } else {
            dom.rootDiv.append(readyJoke);
        }
    } else {
        existed.remove();

        if (jokeData.type === 'single') {
            dom.rootDiv.append(onlyJokeDom);
            // updateOnlyJoke(existed, jokeData);
        } else if (jokeData.type === 'twopart') {
            dom.rootDiv.append(readyJoke);
            // updateDom(existed, jokeData);
        }
    }
});
