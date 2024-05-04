"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";
import { ProductFormValues } from "@/lib/types";
import { Minus, Plus } from "lucide-react";
import { format } from "path";
import { useState } from "react";

const FormSchema = z.object({
  numberOfAdults: z.number(),
  numberOfChildren: z.number(),
  price: z.number(),
});

export default function ActivityBookingForm({
  product,
}: {
  product: ProductFormValues;
}) {
  const [price, setPrice] = useState<number>(
    product.priceAdults * product.minAdults +
      product.priceChildren * product.minChildren
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      numberOfAdults: product.minAdults,
      numberOfChildren: product.minChildren,
      price:
        product.priceAdults * product.minAdults +
        product.priceChildren * product.minChildren,
    },
  });

  const constructWhatsappUrl = (formData: z.infer<typeof FormSchema>) => {
    let message = `I would like to book ${formData.numberOfAdults} adults and ${formData.numberOfChildren} children for the ${product.name} on ${product.date}. The total price is ${formData.price}€.`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    return whatsappUrl;
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    window.open(constructWhatsappUrl(data), "_blank");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-80 rounded-xl shadow-xl p-8 space-y-4"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mb-12">
          Book now
        </h1>
        <div className="flex flex-row items-center mb-4">
          <div className="flex-1">
            <p className="text-gray-600">Price</p>
            <h2 className="text-2xl font-bold">From</h2>
          </div>
          <div className="text-4xl font-bold">{price}€</div>
        </div>
        <div className="flex flex-col mb-2">
          <h2 className="text-2xl font-bold">Date</h2>
          <p className="text-gray-600">{product.date}</p>
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex flex-row items-center mb-2">
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Adults</h2>
              <p className="text-gray-600">Number of adults</p>
            </div>
            <FormField
              control={form.control}
              name="numberOfAdults"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2">
                  <Button
                    type="button"
                    onClick={() => {
                      console.log(form.getValues("numberOfAdults"));
                      form.setValue(
                        "numberOfAdults",
                        form.getValues("numberOfAdults") - 1
                      );
                      form.setValue(
                        "price",
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                      setPrice(
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                    }}
                    disabled={
                      form.getValues("numberOfAdults") <= product.minAdults
                    }
                    size={"icon"}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <FormControl>
                    <Input
                      type="number"
                      value={form.getValues("numberOfAdults")}
                      onChange={(e) => {
                        form.setValue(
                          "numberOfAdults",
                          parseInt(e.target.value, 10)
                        );
                      }}
                      min={product.minAdults}
                      max={product.maxAdults}
                      className="w-14 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </FormControl>
                  <Button
                    type="button"
                    onClick={() => {
                      form.setValue(
                        "numberOfAdults",
                        form.getValues("numberOfAdults") + 1
                      );
                      form.setValue(
                        "price",
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                      setPrice(
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                    }}
                    disabled={
                      form.getValues("numberOfAdults") >= product.maxAdults
                    }
                    size={"icon"}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row items-center mb-2">
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Children</h2>
              <p className="text-gray-600">Number of children</p>
            </div>
            <FormField
              control={form.control}
              name="numberOfChildren"
              render={({ field }) => (
                <FormItem className="flex flex-row space-x-2">
                  <Button
                    type="button"
                    onClick={() => {
                      console.log(form.getValues("numberOfChildren"));
                      form.setValue(
                        "numberOfChildren",
                        form.getValues("numberOfChildren") - 1
                      );
                      form.setValue(
                        "price",
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                      setPrice(
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                    }}
                    disabled={
                      form.getValues("numberOfChildren") <= product.minChildren
                    }
                    size={"icon"}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <FormControl>
                    <Input
                      type="number"
                      value={form.getValues("numberOfChildren")}
                      onChange={(e) => {
                        form.setValue(
                          "numberOfChildren",
                          parseInt(e.target.value, 10)
                        );
                      }}
                      min={product.minChildren}
                      max={product.maxChildren}
                      className="m-0 w-14 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </FormControl>
                  <Button
                    type="button"
                    onClick={() => {
                      form.setValue(
                        "numberOfChildren",
                        form.getValues("numberOfChildren") + 1
                      );
                      form.setValue(
                        "price",
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                      setPrice(
                        product.priceAdults * form.getValues("numberOfAdults") +
                          product.priceChildren *
                            form.getValues("numberOfChildren")
                      );
                    }}
                    disabled={
                      form.getValues("numberOfChildren") >= product.maxChildren
                    }
                    size={"icon"}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button className="w-full" type="submit" size={"lg"}>
          Book now
        </Button>
      </form>
    </Form>
  );
}
