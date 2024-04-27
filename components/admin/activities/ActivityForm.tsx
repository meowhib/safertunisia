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
import { KeyIcon, MapPinIcon, MapIcon, SearchIcon, Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { createActivity } from "@/lib/actions/activities-actions";

export default function NewActivityForm() {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      type: "",
      description: "",
      duration: "",
      difficulty: "",
      minAge: 3,
      imageUrl: "",
      requirement: "",
      priceAdults: 0,
      priceChildren: 0,
      maxAdults: 0,
      maxChildren: 0,
      minAdults: 1,
      minChildren: 0,
      date: "",
      location: "",
      destination: "",
      gallery: [
        {
          value: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    name: "gallery",
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {
    const createActivityAction = await createActivity({ values });

    if (createActivityAction.status === 200) {
      alert("Activity created successfully");
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
                    <Input {...field} />
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
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </form>
    </Form>
  );
}
