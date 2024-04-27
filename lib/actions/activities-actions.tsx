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
    // Get all products but stays
    const activities = await prisma.products.findMany({
      where: {
        type: {
          not: "Stay",
        },
      },
    });

    if (!activities) {
      return { status: 404, data: null };
    }

    return { status: 200, data: activities };
  } catch (error) {
    return { status: 500, data: null };
  }
}

export async function getAllStays() {
  try {
    const stays = await prisma.products.findMany({
      where: {
        type: "Stay",
      },
    });

    if (!stays) {
      return { status: 404, data: null };
    }

    return { status: 200, data: stays };
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
        requirement: values.requirement,
        priceAdults: values.priceAdults,
        priceChildren: values.priceChildren,
        maxAdults: values.maxAdults,
        minAdults: values.minAdults,
        maxChildren: values.maxChildren,
        minChildren: values.minChildren,
        date: values.date,
        location: values.location,
        destination: values.destination,
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
