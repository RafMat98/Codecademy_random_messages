//Data Arrays

const messages = {
    beginnings: [
        "The wise owl says",
        "A mysterious stranger whispers",
        "Your inner voice shouts",
        "An ancient scroll reveals"
    ],
    middles:[
        "you will soon discover a great secret",
        "a new challenge awaits you",
        "good luck is heading your way",
        "you must eat more bananas"
    ],
    endings:[
        "under the next full moon.",
        "after your next nap.",
        "before sunset tomorrow.",
        "as long as your shoes are clean."
    ]

};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const part1 = getRandom(messages.beginnings);
const part2 = getRandom(messages.middles);
const part3 = getRandom(messages.endings);

const generateMessage = () =>{
    const part1 = getRandom(messages.beginnings);
    const part2 = getRandom(messages.middles);
    const part3 = getRandom(messages.endings);

    console.log(`${part1}, ${part2}, ${part3}`);
};

generateMessage();