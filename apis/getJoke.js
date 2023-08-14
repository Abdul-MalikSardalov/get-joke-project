const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) {
            throw new Error(
                `Failed to fetch a joke with status: ${res.status}`,
            );
        }
        return await res.json();
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

export default getJoke;
