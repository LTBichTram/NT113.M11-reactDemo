import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// const AvailableMeals = () => {
//   const [meals, setMeals] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [httpError, setHttpError] = useState();

//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch(
//         'https://fir-ba85a-default-rtdb.firebaseio.com/meals.json'
//       );
//       console.log(response)

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const responseData = await response.json();

//       const loadedMeals = [];

//       for (const key in responseData) {
//         loadedMeals.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       }

//       setMeals(loadedMeals);
//       setIsLoading(false);
//     };

//     fetchMeals().catch((error) => {
//       setIsLoading(false);
//       setHttpError(error.message);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className={classes.MealsLoading}>
//         <p>Loading...</p>
//       </section>
//     );
//   }

//   if (httpError) {
//     return (
//       <section className={classes.MealsError}>
//         <p>{httpError}</p>
//       </section>
//     );
//   }



//   const mealsList = meals.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));

//   return (
//     <section className={classes.meals}>
//       <Card>
//         <ul>{mealsList}</ul>
//       </Card>
//     </section>
//   );
// };

// export default AvailableMeals;

const DUMMY_MEALS = [
  {
    id: 't1',
    name: 'Red Velvet Cake',
    description: 'Butter, Cocoa Powder and Red Food Coloring',
    price: 25.99,
  },
  {
    id: 't2',
    name: 'Lemon Cake',
    description: 'Lemon Zest, All-Purpose Flour and Large Eggs ',
    price: 16.5,
  },
  {
    id: 't3',
    name: 'Honey Cheesecake',
    description: 'Biscuits, Melted butter and Honey Creamcheese',
    price: 12.99,
  },
  {
    id: 't4',
    name: 'Souffle Castella Cake',
    description: ' Unsalted butter, Vanilla extract and Egg yolks',
    price: 18.99,
  },
  {
    id: 't5',
    name: 'Bubble Milk Tea Lava Cake',
    description: 'Black tea, Brown sugar and Tapioca pearls',
    price: 20.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;