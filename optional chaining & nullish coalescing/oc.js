// "What if a property doesn't exist?"

// API response from server
const user = {
  id: 1,
  name: "Aditya",

  // Address exists
  address: {
    city: "Dadri",
    pincode: 203207
  },

  // Theme exists
  preferences: {
    theme: "dark"
  }
};

// OPTIONAL CHAINING (?.)

// Safely access nested properties.
// If address doesn't exist, this returns undefined
// instead of throwing an error.
const city = user.address?.city;

// Safely access a property that may not exist.
const country = user.address?.country;


// NULLISH COALESCING (??)
// If country is null or undefined,
// use the fallback value.
const finalCountry = country ?? "India";
const theme = user.preferences?.theme ?? "light";

// Get phone number if it exists.
// Otherwise use a default message.
const phone = user.contact?.phone ?? "Phone not provided";


console.log("City:", city);              // Dadri
console.log("Country:", finalCountry);   // India
console.log("Theme:", theme);            // dark
console.log("Phone:", phone);            // Phone not provided