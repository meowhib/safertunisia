"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { z } from "zod";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function ActivitiesFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
      (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
      
          return params.toString()
      },
      [searchParams]
  );

  const [activityTypes, setActivityTypes] = useState(["trip", "activity", "tour"]);
  const [difficultyLevels, setDifficultyLevels] = useState(["easy", "medium", "hard"]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-gray-900">Type of package:</h1>
        <RadioGroup
          onValueChange={(value) => {
            router.push(`${pathname}?${createQueryString("type", value)}`)
          }}
        >
        {
          activityTypes.map((type) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type} className="capitalize">{type}</Label>
            </div>
          ))
        }
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-gray-900">Difficulty of package:</h1>
        <RadioGroup
          onValueChange={(value) => {
            router.push(`${pathname}?${createQueryString("difficulty", value)}`)
          }}
        >
        {
          difficultyLevels.map((type) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type} className="capitalize">{type}</Label>
            </div>
          ))
        }
        </RadioGroup>
      </div>
    </div>
  )
}
