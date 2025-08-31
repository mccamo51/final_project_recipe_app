

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function getRandomMeal(letter) {
  try {
    const res = await fetch(`${BASE_URL}/search.php?f=${letter}`);
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error('Error fetching random meal:', err);
    return null;
  }
}


export async function searchForMeal(search) {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(search)}`);
    const data = await res.json();
    return data.meals || null;
  } catch (err) {
    console.error('Error searching for meal:', err);
    return null;
  }
}


export async function getMealDetails(id) {
  try {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals?.[0] || null;
  } catch (err) {
    console.error('Error fetching meal details:', err);
    return null;
  }
}

export async function filterMeals({ type, value }) {
  try {
    const res = await fetch(`${BASE_URL}/filter.php?${type}=${encodeURIComponent(value)}`);
    const data = await res.json();
    return data.meals || null;
  } catch (err) {
    console.error('Error filtering meals:', err);
    return null;
  }
}



export async function getList(type) {
  try {
    const res = await fetch(`${BASE_URL}/list.php?${type}=list`);
    const data = await res.json();
    return Object.values(data)?.[0] || null;
  } catch (err) {
    console.error('Error getting list:', err);
    return null;
  }
}
