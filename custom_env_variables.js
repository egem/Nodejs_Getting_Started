// set VAL1=10
// set VAL2=20
// node custom_env_variables.js

console.log('\nScript executed with:');

console.log('Val1 equal to:', process.env.VAL1);
console.log('Val2 equal to:', process.env.VAL2);

// node -p "os.cpus().length"
// 8 (for the machine I am working)

// node -p "process.argv" hello 42
// [ 'C:\\Program Files\\nodejs\\node.exe', 'hello', '42' ]

// console.log('hello')  == process.stdout.write('hello\n')
process.stdout.write('hello\n');
