import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import Head from "next/head";
import { AboutUs } from "@/components/about";
import { useEffect } from "react";
export default function Home() {
  

  return (
    <div>
      <Hero />
      
      <div className="wrapper">
        
        <div className="inner demonstration dark">
        <Tabs defaultValue="Input" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Input">Input</TabsTrigger>
        <TabsTrigger value="Output">Output</TabsTrigger>
      </TabsList>
      <TabsContent value="Input">
<div className="bg-black mockup-code w-full">
  <pre data-prefix="~"><code>Raw HTML Script</code></pre>
  <pre data-prefix="1" className="text-secondary"><code>&lt;html&gt;</code></pre>
  <pre data-prefix="2" className="text-secondary"><code>  &lt;head&gt;</code></pre>
  <pre data-prefix="2" className="text-secondary"><code>    &lt;title&gt;Hi&lt;/title&gt;</code></pre>
  <pre data-prefix="2" className="text-secondary"><code>  &lt;/head&gt;</code></pre>
  <pre data-prefix="3" className="text-secondary"><code>&lt;/html&gt;</code></pre>
</div>
      </TabsContent>
      <TabsContent value="Output">
<div className="bg-black mockup-code w-full">
  <pre data-prefix="~"><code>Ready to be displayed in &lt;code&gt;</code></pre>
  <pre data-prefix="1" className="text-muted-foreground"><code><span className="pink">&amp;lt;</span>html<span className="pink">&amp;gt;</span></code></pre>
  <pre data-prefix="2" className="text-muted-foreground"><code>  <span className="pink">&amp;lt;</span>head<span className="pink">&amp;gt;</span></code></pre>
  <pre data-prefix="2" className="text-muted-foreground"><code>    <span className="pink">&amp;lt;</span>title<span className="pink">&amp;gt;</span>Hi<span className="pink">&amp;lt;</span>/title<span className="pink">&amp;gt;</span></code></pre>
  <pre data-prefix="2" className="text-muted-foreground"><code>  <span className="pink">&amp;lt;</span>/head<span className="pink">&amp;gt;</span></code></pre>
  <pre data-prefix="3" className="text-muted-foreground"><code><span className="pink">&amp;lt;</span>/html<span className="pink">&amp;gt;</span></code></pre>
</div>
        
      </TabsContent>
      
    </Tabs>
    
        </div>
      </div>
      <div className="wrapper">
          <div className="dark hero inner">
          <div>
        <div className="space-y-1">
          <h4 className="text-sm dark text-foreground font-medium leading-none">Note</h4>
          <p className="text-sm dark text-muted-foreground">
            By default, the following characters cannot be used between &lt;<span className="pink">code</span>&gt; tags within HTML or JSX.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div className="dark text-foreground">&#123;</div>
          <Separator orientation="vertical" />
          <div className="dark text-foreground">&#125;</div>
          <Separator orientation="vertical" />
          <div className="dark text-foreground">&amp;</div>
          <Separator orientation="vertical" />
          <div className="dark text-foreground">&lt;</div>
          <Separator orientation="vertical" />
          <div className="dark text-foreground">&gt;</div>
          <Separator orientation="vertical" />
        </div>
        </div>
        </div>
      </div>
    <div className="wrapper">
      
      <div className="inner demonstration">
      <div className="bg-black mockup-code w-full">
  <pre data-prefix="~"><code>This will return an error.</code></pre>
  <pre data-prefix="1" className="text-muted-foreground"><code>&lt;<span className="pink">code</span>&gt;</code></pre>
  <pre data-prefix="2" className="text-muted-foreground"><code>   .header &#123;</code></pre>
  <pre data-prefix="3" className="text-muted-foreground"><code>     width:100%;</code></pre>
  <pre data-prefix="4" className="text-muted-foreground"><code>   &#125;</code></pre>
  <pre data-prefix="5" className="text-muted-foreground"><code>&lt;/<span className="pink">code</span>&gt;</code></pre>

</div>
<div className="bg-black mockup-code w-full">
  <pre data-prefix="~"><code>Now it's ready to be displayed.</code></pre>
  <pre data-prefix="1" className="text-muted-foreground"><code>&lt;<span className="pink">code</span>&gt;</code></pre>
  <pre data-prefix="2" className="text-muted-foreground"><code>   .header &amp;#123;</code></pre>
  <pre data-prefix="3" className="text-muted-foreground"><code>     width:100%;</code></pre>
  <pre data-prefix="4" className="text-muted-foreground"><code>   &amp;#125;</code></pre>
  <pre data-prefix="5" className="text-muted-foreground"><code>&lt;/<span className="pink">code</span>&gt;</code></pre>

</div>
      </div>
   
    </div>
    <div className="wrapper">
          <div className="dark hero inner">
          <div>
        <div className="space-y-1">
          <h4 className="text-sm dark text-foreground font-medium leading-none">Extras</h4>
          <p className="text-sm dark text-muted-foreground">
            Our mission is to help front-end developers write displayable code into their websites. If you're interested, read more about what we can provide for you.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div className="dark text-foreground">Features</div>
          <Separator orientation="vertical" />
          <div className="dark text-foreground">Customization</div>
          
          
        </div>
        </div>
        </div>
</div>
<Features />
<AboutUs />
    </div>
  );
}
