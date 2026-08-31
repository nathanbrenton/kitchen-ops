import { useState } from "react";

function App() {
  const [servings, setServings] = useState(1);

  return (
    <main>
      <h1>KitchenOps</h1>
      <p>Recipes, nutrition, meal planning, inventory, and grocery workflows.</p>

      <label htmlFor="servings">Servings</label>

      <select
        id="servings"
        value={servings}
        onChange={(event) => setServings(Number(event.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={4}>4</option>
      </select>

      <p>Selected servings: {servings}</p>
    </main>
  );
}

export default App;

