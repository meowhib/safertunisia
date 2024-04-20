import { BlogProps } from "@/lib/types"
import Link from "next/link"

export default function BlogCard({ slug, title, description, imageUrl, author }: BlogProps) {
    return (
        <article
        key={slug}
        className="flex flex-col"
      >
        <div className="relative w-full">
          <img
            src={imageUrl || ""}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="group relative">
            <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={"/blog/" + slug}>
                <span className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src={author.imageUrl || ""}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                  {author.name}
              </p>
              <p className="text-gray-600">{author.role ? author.role : ""}</p>
            </div>
          </div>
        </div>
      </article>
    )
}