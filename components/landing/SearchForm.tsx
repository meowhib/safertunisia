"use client";

import { SearchFormSchema, searchSchema } from "@/lib/validations";
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

import { Input } from "@/components/ui/input";

export default function SearchForm() {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keywords: "",
      attraction: "",
      location: "",
    },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-flow-col grid-cols-4 justify-stretch gap-x-6 bg-white p-4 rounded-md shadow-md sm:gap-x-8 sm:p-6 lg:p-8"
      >
        <div className="text-left space-y-3">
          <h1 className="font-semibold  text-xl">Keyword</h1>
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Keyword" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="text-left space-y-3">
          <h1 className="font-semibold  text-xl">Attraction</h1>

          <FormField
            control={form.control}
            name="attraction"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an attraction" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Attraction-1">Attraction-1</SelectItem>
                    <SelectItem value="Attraction-2">Attraction-2</SelectItem>
                    <SelectItem value="Attraction-3">Attraction-3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="text-left space-y-3">
          <h1 className="font-semibold  text-xl">Location</h1>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="djerba">Djerba</SelectItem>
                    <SelectItem value="tunis">Tunis</SelectItem>
                    <SelectItem value="bizert">Bizert</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full h-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
