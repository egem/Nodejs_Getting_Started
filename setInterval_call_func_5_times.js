// node setInterval_call_func_5_times.js

let counter = 0;

const intervalId = setInterval(
    () => {
        console.log('Hello World!');
        ++counter;

        if(5 === counter)
        {
            clearInterval(intervalId);
        }
    },
    1000
);
