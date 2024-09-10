import Link from "next/link";

export default function Meals()
{
    return(<main><h1>Meals page</h1>
    <p><Link href='/meals/share'>Share</Link></p>
    <p>
        <Link href='/meals/meal1'>Meal 1</Link>
    </p>
    <p><Link href='/meals/meal2'>Meal 2</Link></p>
    </main>)
}