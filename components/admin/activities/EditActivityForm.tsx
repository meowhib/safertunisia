"use client";

import { productSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  KeyIcon,
  MapPinIcon,
  MapIcon,
  SearchIcon,
  Plus,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  createActivity,
  deleteActivity,
  updateActivity,
} from "@/lib/actions/activities-actions";
import { redirect, useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function UpdateActivityForm({
  id,
  name,
  type,
  description,
  content,
  duration,
  difficulty,
  minAge,
  imageUrl,
  requirement,
  priceAdults,
  priceChildren,
  maxAdults,
  maxChildren,
  minAdults,
  minChildren,
  date,
  location,
  destination,
  gallery,
}: {
  id: string;
  name: string;
  type: string;
  description: string;
  content: string;
  duration: string;
  difficulty: string;
  minAge: number;
  imageUrl: string;
  requirement: string;
  priceAdults: number;
  priceChildren: number;
  maxAdults: number;
  maxChildren: number;
  minAdults: number;
  minChildren: number;
  date: string;
  location: string;
  destination: string;
  gallery: { value: string }[];
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name,
      type,
      description,
      content,
      duration,
      difficulty,
      minAge,
      imageUrl,
      requirement,
      priceAdults,
      priceChildren,
      maxAdults,
      maxChildren,
      minAdults,
      minChildren,
      date,
      location,
      destination,
      gallery,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "gallery",
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {
    const updateActivityAction = await updateActivity({ id, values });

    console.log(values.type);

    if (updateActivityAction.status === 200) {
      if (values.type === "Stay") {
        router.push("/stays");
      } else {
        router.push("/activities");
      }
    } else {
      alert("An error occurred while creating the activity");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
      >
        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of activity</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Activity">Activity</SelectItem>
                    <SelectItem value="Trip">Trip</SelectItem>
                    <SelectItem value="Stay">Stay</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Content of the product"
                    className="resize-y"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input placeholder="Duration" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a difficulty" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Image URL" {...field} />
                </FormControl>
                <FormDescription>
                  This is the main image that will be displayed on the activity
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="minAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Minimum age"
                    min={"3"}
                    max={"120"}
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="requirement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requirement</FormLabel>
                <FormControl>
                  <Input placeholder="Requirement" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="priceAdults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price for adults</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Price for adults"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="maxAdults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum number of adults</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Maximum number of adults"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="minAdults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum number of adults</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Minimum number of adults"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="priceChildren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price for children</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Price for children"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="maxChildren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum number of children</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Maximum number of children"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="minChildren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum number of children</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Minimum number of children"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input placeholder="Date" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination</FormLabel>
                <FormControl>
                  <Input placeholder="Destination" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-left space-y-3">
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`gallery.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add the URLs of the images you want to display on the
                    gallery.
                  </FormDescription>
                  <FormControl>
                    <div className="flex flex-row space-x-2 items-center">
                      <Input {...field} />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="rounded-lg"
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="mt-2 w-full"
            onClick={() => append({ value: "" })}
          >
            Add Image
          </Button>
        </div>

        <Button type="submit" className="w-full h-full">
          <Pencil className="mr-2 h-4 w-4" /> Edit
        </Button>

        <div className="pt-6 space-y-6">
          {/* <p className="text-center text-gray-700">
            Or would you like to delete this activity?
          </p>
          <Button
            className="w-full h-full bg-red-500"
            onClick={async () => {
              const deleteActivityAction = await deleteActivity({ id });

              if (deleteActivityAction.status === 200) {
                router.push("/activities");
              } else {
                alert("An error occurred while deleting the activity");
              }
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button> */}
          <AlertDialog>
            <Button
              className="w-full h-full bg-red-500 hover:bg-red-700"
              asChild
            >
              <AlertDialogTrigger className="w-full">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </AlertDialogTrigger>
            </Button>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  activity from the database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button
                  onClick={async () => {
                    const deleteActivityAction = await deleteActivity({ id });

                    if (deleteActivityAction.status === 200) {
                      router.push("/activities");
                    } else {
                      alert("An error occurred while deleting the activity");
                    }
                  }}
                  asChild
                >
                  <AlertDialogAction className="bg-red-500 hover:bg-red-700">
                    Delete
                  </AlertDialogAction>
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </Form>
  );
}
