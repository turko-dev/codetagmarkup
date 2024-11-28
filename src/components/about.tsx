import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   


export function AboutUs() {
    return(
        <div className="wrapper">
            <div className="dark inner">
            <h1 className="text-2xl lg:text-5xl text-foreground text-center">About Us</h1>
            </div>
            <div className="hero max-w-[600px] inner dark">
                <Accordion type="single" collapsible className="w-full text-foreground">
      <AccordionItem value="item-1" >
        <AccordionTrigger>Is it easy to use?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          CodeTagMarkup is entirely hosted online and all you need to do is navigate to the dashboard and enter the code that 
          you want to be displayed on your own front-end project.<br/><br/> CodeTagMarkup will then give you the converted text you need to avoid errors in your code.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What frameworks can I use it with?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Our first choice was <span className="pink">DaisyUI</span>&apos;s pre-built code mockup components. However, in the future we will aim to create code mockup components for <span className="orange">Shadcn-UI</span> and other Tailwind libraries too.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it free?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          And <span className="pink">of course it&apos;s free</span>. We don&apos;t know what this project is yet, it might be something cool,
           or it might be something profitable. Until further notice, CodeTagMarkup is <span className="pink">free to use </span>
           for anybody and everybody.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" >
        <AccordionTrigger>Who is the founder of CodeTagMarkup?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          CodeTagMarkup founded on 30th July and was written entirely by technical founder Mert Aygun also mentioned by his alias and online handle Turko. You can follow him on X at <a className="link" target="_blank" href="https://x.com/selecta_turko">@selecta_turko</a>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" >
        <AccordionTrigger>Who can benefit from this?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
            The target audience for a product like this would be developers hoping to find an easier way to display their code on the front-end of their websites similarly to how <a className="link" href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools.com</a> displays their code in code mockups.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
                </div>
        </div>
    )
}