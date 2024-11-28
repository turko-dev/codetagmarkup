"use client"
import esthetic from "esthetic"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState, useEffect } from "react"

export default function Dashboard() {
  const [textarea, setTextarea] = useState("")
  const [result, setResult] = useState("")
  const [extra, setExtra] = useState("")
    return(
        <div className="wrapper">
            <div className="inner">
                <p className="text-5xl text-foreground dark">Dashboard</p>
                <div className="dashboard-options">
                <Popover>
      <PopoverTrigger asChild>
        <Button>Custom Classes</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Custom Classes</h4>
            <p className="text-sm text-muted-foreground">
              This function is currently under development and therefore currently not available.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger asChild>
        <Button>Prefixes</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Prefixes</h4>
            <p className="text-sm text-muted-foreground">
              This function is currently under development and therefore currently not available.
            </p>
          </div>
         
        </div>
      </PopoverContent>
    </Popover>
    
                </div>
                    <textarea defaultValue="Default" value={textarea} onChange={e=> setTextarea(e.target.value)} className="text-1xl text-foreground bg-secondary dashboard w-full" id="">
                      Enter the code
                    </textarea>

                    <Button className="my-2" onClick={()=> {
                      let text1 = esthetic.format(textarea, {
                        language: "html",
                        style: {
                          noLeadZero: true
                        }
                      })
                      let text = text1.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("{", "&#123;").replaceAll("}", "&#125;")
                      text = text.replace(/(?:\r\n|\r|\n)/g, "</code>\n<code>");
                      text = "<code>" + text + "</code>"
                      setResult(text)
                    }}>Submit</Button>
                    <p className="my-2 dark text-foreground">Results</p>
                    <div className="p-5 bg-black mockup-code w-full whitespace-pre">
                    <code><span className="pink">&lt;div className=&quot;bg-black mockup-code w-full p-4&quot;&gt;</span><br /></code>
                    {result}
                    <code><br/><span className="pink">&lt;/div&gt;</span></code>
                    </div>
            </div>
          
        </div>

    )
}