// Callback of the timeout executes after all the operations in the script
// are executed.

// So, in the following example, you will observe that callback will not be executed
// Since 'for loop' blocks the execution.

setTimeout(
    () => console.log('Hello after 0.5 seconds. MAYBE!'),
    500
);

for(let i = 0; i < 1e10; ++i) {
    // Block Node Synchronously
}
