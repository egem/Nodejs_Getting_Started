const func = () => {
    console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);

// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)

const rocks = who => {
    console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'Pluralsight');

// You can cancel timeout operation as follows.
const timerId = setTimeout(
    () => console.log('You will not see this one!'),
    0
);

// Instead of 0 timeout, you can use setImmediate function
clearTimeout(timerId);
// clearInterval
// clearImmediate
