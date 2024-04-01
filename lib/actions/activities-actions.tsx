"use server";
import { z } from "zod";
import prisma from "../prisma";
import { productSchema } from "../validations";

export default async function getActivity({ id }: { id: string }) {
  try {
    const activity = await prisma.products.findFirst({
      where: {
        id: id,
      },
    });

    if (!activity) {
      return { status: 404, data: null };
    }

    return { status: 200, data: activity };
  } catch (error) {
    return { status: 500, data: null };
  }
}

export async function getAllActivities() {
  try {
    const activities = await prisma.products.findMany();

    if (!activities) {
      return { status: 404, data: null };
    }

    return { status: 200, data: activities };
  } catch (error) {
    return { status: 500, data: null };
  }
}

export async function createActivity({
  values,
}: {
  values: z.infer<typeof productSchema>;
}) {
  try {
    const activity = await prisma.products.create({
      data: {
        name: values.name,
        type: values.type,
        description: values.description,
        duration: values.duration,
        difficulty: values.difficulty,
        minAge: values.minAge,
        imageUrl: values.imageUrl,
        requirements: values.requirements,
        price: values.price,
        date: values.date,
        location: values.location,
        gallery: values.gallery.map((item) => {
          return item.value;
        }),
      },
    });

    if (!activity) {
      return { status: 404, data: [] };
    }

    return { status: 200, data: activity };
  } catch (error) {
    return { status: 500, data: null };
  }
}
