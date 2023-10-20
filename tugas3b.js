// Array of Restaurants
const restaurants = [
    {
      name: "Restaurant A",
      city: "City A",
      favoriteDrink: "Coffee",
      favoriteFood: "Burger",
      isVegan: false
    },
    {
      name: "Restaurant B",
      city: "City B",
      favoriteDrink: "Lemonade",
      favoriteFood: "Pasta",
      isVegan: true
    },
    {
      name: "Restaurant C",
      city: "City C",
      favoriteDrink: "Milkshake",
      favoriteFood: "Sushi",
      isVegan: false
    }
  ];
  
  // Menampilkan properti dari beberapa restoran dalam array
  restaurants.forEach((restaurant, index) => {
    console.log(`\nRestaurant ${index + 1}:`);
    console.log("Name:", restaurant.name);
    console.log("City:", restaurant.city);
    console.log("Favorite Drink:", restaurant.favoriteDrink);
    console.log("Favorite Food:", restaurant.favoriteFood);
    console.log("Is Vegan:", restaurant.isVegan);
  });
