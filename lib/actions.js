"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const { saveMeal } = require("./meals");

function isInValidTest(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInValidTest(meal.title) ||
    isInValidTest(meal.summary) ||
    isInValidTest(meal.instructions) ||
    isInValidTest(meal.creator) ||
    isInValidTest(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input." };
  }

  await saveMeal(meal);
  /*revalidatePath('/meals','layout');*/
  revalidatePath("/meals");
  redirect("/meals");
}
