export default function MealsDetails({ params }) {
  return (
    <main>
      <h1>Meal details</h1>
      <p>{params.slug}</p>
    </main>
  );
}
