{
    // Step 1: Declare variables inside a block
    let a = 10;
    const b = 20;
    var c = 30;
  
    // Step 2: Reassign within the block
    a = 15;         // ✅ let can be reassigned
    // b = 25;      // ❌ Error: Assignment to constant variable (Uncomment to test)
    c = 35;         // ✅ var can be reassigned
  
    console.log("Inside block:");
    console.log("a =", a);  // 15
    console.log("b =", b);  // 20
    console.log("c =", c);  // 35
}

// Step 3: Reassign outside the block
console.log("Outside block:");

a = 100; // ❌ Error: a is not defined (Uncomment to test)
b = 200; // ❌ Error: b is not defined (Uncomment to test)
c = 300;     // ✅ var is accessible and reassignable outside block

console.log("c =", c);    // 300