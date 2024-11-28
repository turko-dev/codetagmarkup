import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 
export function Logo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-1xl logo text-foreground">CodeTagMarkup</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
          <h4 className="text-md font-light">Founder</h4>

            <h4 className="text-sm font-semibold"><a target="_blank" href="https://x.com/selecta_turko">@selecta_turko</a></h4>
            <p className="text-sm">
              "A tool that allows you to use <span className="pink">&lt;</span>code<span className="pink">&gt;</span> tags to actually display code instead of throwing an error."
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Founded 30th Jul 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}