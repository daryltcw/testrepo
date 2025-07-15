// Ask the user for their role
let role = prompt("Enter your role (Employee, Enrolled Member, Subscriber, Non-Subscriber):");

// Convert input to lowercase for comparison to make the input case-insensitive
role = role.toLowerCase();

// Check access based on role
if (role === "employee") {
  alert("Access granted: You can use all Dietary Services.");
} else if (role === "enrolled member") {
  alert("Access granted: You can use all Dietary Services and have one-on-one interaction with a dietician.");
} else if (role === "subscriber") {
  alert("Access granted: You have partial access to Dietary Services.");
} else if (role === "non-subscriber") {
  alert("Access denied: Please enroll or subscribe to access Dietary Services.");
} else {
  alert("Invalid input: Please enter a valid role.");
}