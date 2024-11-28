import { Separator } from "@/components/ui/separator"

import { Features } from "@/components/features"
export default function FeaturesPage() {

    return(
        <div className="wrapper">
            <div className="inner dark">
                <Features />
            </div>
            <div className="wrapper">
          <div className="dark hero inner">
          <div>
        <div className="space-y-1">
          <h4 className="text-sm dark text-foreground font-medium leading-none">Extras</h4>
          <p className="text-sm dark text-muted-foreground">
            We aim to add the most functionality into our products as we possibly can.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div className="dark text-foreground">About Us</div>
        <Separator orientation="vertical" />
        <div className="dark text-foreground">Our Mission</div>

          
        </div>
        </div>
        </div>
</div>
<div className="wrapper">
    <div className="inner dark">

    </div>
</div>
        </div>
    )
}