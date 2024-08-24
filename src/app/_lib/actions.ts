"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function setThemeCookie(name: string, value: string, path: string) {
  cookies().set(name, value);

  revalidatePath(path);
}

