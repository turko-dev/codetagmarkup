import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
export function Features() {
    return(
        <div className="wrapper dark">
            <div className="features inner">
                <h1 className="text-foreground text-2xl py-4 lg:text-5xl">Features</h1>
                <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="dark text-foreground mx-4">Custom Classes</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[500px] text-foreground dark">
        <DialogHeader>
          <DialogTitle>Custom Classes</DialogTitle>
          <DialogDescription>
            We can add custom classes to your code to customize colours & fonts.
          </DialogDescription>
        </DialogHeader>
        <div className="dark grid gap-4 py-4">

        <Tabs defaultValue="Input" className="max-w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Input">Before</TabsTrigger>
        <TabsTrigger value="Output">After</TabsTrigger>
      </TabsList>
      <TabsContent value="Input">
<div className="bg-black mockup-code">
  <pre data-prefix="~" className="text-sm"><code># Before Custom Classes are added.</code></pre>
  <pre data-prefix="1" className="text-sm text-secondary"><code>&lt;div className=&quot;code_embed&quot;&gt;</code></pre>
  <pre data-prefix="2" className="text-sm text-secondary"><code>    &lt;code&gt;</code></pre>
  <pre data-prefix="3" className="text-sm text-secondary"><code>        Text</code></pre>
  <pre data-prefix="4" className="text-sm text-secondary"><code>    &lt;/code&gt;</code></pre>
  <pre data-prefix="5" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
</div>
      </TabsContent>
      <TabsContent value="Output">
<div className="bg-black mockup-code">
  <pre data-prefix="~" className="text-sm"><code># After Custom Classes are added.</code></pre>
  <pre data-prefix="1" className="text-sm text-secondary"><code>&lt;div className=&quot;code_embed&quot;&gt;</code></pre>
  <pre data-prefix="2" className="text-sm text-secondary"><code>    &lt;span className=&quot;pink&quot;&gt;<span className="pink">&amp;lt;</span>&lt;/span&gt;</code></pre>
  <pre data-prefix="3" className="text-sm text-secondary"><code>        <span className="orange">code</span></code></pre>
  <pre data-prefix="4" className="text-sm text-secondary"><code>    &lt;span className=&quot;pink&quot;&gt;<span className="pink">&amp;gt;</span>&lt;/span&gt;</code></pre>
  <pre data-prefix="5" className="text-sm text-secondary"><code>            <span className="blue">Text</span></code></pre>
  <pre data-prefix="6" className="text-sm text-secondary"><code>    &lt;span className=&quot;pink&quot;&gt;<span className="pink">&amp;lt;</span>&lt;/span&gt;</code></pre>
  <pre data-prefix="7" className="text-sm text-secondary"><code>        <span className="orange">code</span></code></pre>
  <pre data-prefix="8" className="text-sm text-secondary"><code>    &lt;span className=&quot;pink&quot;&gt;<span className="pink">&amp;gt;</span>&lt;/span&gt;</code></pre>
  <pre data-prefix="9" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
</div>
     
      </TabsContent>
      
    </Tabs>
        </div>
        <DialogDescription>
            We can imagine the <span className="pink">pink</span> &amp;lt; and &amp;gt codes as &lt; and &gt; respectively.<br/><br/> Furthermore, we can imagine the <span className="orange">orange</span> as HTML tags and the finally the <span className="blue">blue</span> as the text between HTML tags.
          </DialogDescription>
      </DialogContent>
    </Dialog>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="dark text-foreground mx-4">DaisyUI Suffixes</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[500px] text-foreground dark">
        <DialogHeader>
          <DialogTitle>DaisyUI Suffixes</DialogTitle>
          <DialogDescription>
            Choose whether you want your code to be displayed with numbered lines or custom suffixes with DaisyUI.
          </DialogDescription>
        </DialogHeader>
        <div className="dark grid gap-4 py-4">

        <Tabs defaultValue="Input" className="max-w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Input">Before</TabsTrigger>
        <TabsTrigger value="Output">After</TabsTrigger>
      </TabsList>
      <TabsContent value="Input">
<div className="bg-black mockup-code">
  <pre data-prefix="~" className="text-sm"><code># Before Suffixes are added.</code></pre>
  <pre data-prefix="1" className="text-sm text-secondary"><code>&lt;div className=&quot;code_embed&quot;&gt;</code></pre>
  <pre data-prefix="2" className="text-sm text-secondary"><code>    &lt;code&gt;</code></pre>
  <pre data-prefix="3" className="text-sm text-secondary"><code>        Text</code></pre>
  <pre data-prefix="4" className="text-sm text-secondary"><code>    &lt;/code&gt;</code></pre>
  <pre data-prefix="5" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
</div>
      </TabsContent>
      <TabsContent value="Output">
<div className="bg-black mockup-code">
  <pre data-prefix="~" className="text-sm"><code># After Suffixes are added.</code></pre>
  <pre data-prefix="1" className="text-sm text-secondary"><code>&lt;div className=&quot;code_embed&quot;&gt;</code></pre>
  <pre data-prefix="2" className="text-sm text-secondary"><code>    &lt;pre data-prefix=&quot;<span className="pink">1</span>&quot;&gt;&amp;lt;code&amp;gt;&lt;/pre&gt;</code></pre>
  <pre data-prefix="3" className="text-sm text-secondary"><code>    &lt;pre data-prefix=&quot;<span className="pink">2</span>&quot;&gt;Text&lt;/pre&gt;</code></pre>
  <pre data-prefix="4" className="text-sm text-secondary"><code>    &lt;pre data-prefix=&quot;<span className="pink">3</span>&quot;&gt;&amp;lt;/code&amp;gt;&lt;/pre&gt;</code></pre>
  <pre data-prefix="5" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
</div>
     
      </TabsContent>
      
    </Tabs>
        </div>
        
      </DialogContent>
    </Dialog>
            

            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="dark text-foreground mx-4">Beautify Code</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[500px] text-foreground dark">
        <DialogHeader>
          <DialogTitle>Beautify Code</DialogTitle>
          <DialogDescription>
            Format and beautify your code to improve readability and make future development easier.
          </DialogDescription>
        </DialogHeader>
        <div className="dark grid gap-4 py-4">

        <Tabs defaultValue="Input" className="max-w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Input">Before</TabsTrigger>
        <TabsTrigger value="Output">After</TabsTrigger>
      </TabsList>
      <TabsContent value="Input">
<div className="bg-black mockup-code">
  <pre data-prefix="~" className="text-sm"><code># Before code is formatted.</code></pre>
  <pre data-prefix="1" className="text-sm text-secondary"><code>&lt;div className=&quot;code_embed&quot;&gt;</code></pre>
  <pre data-prefix="2" className="text-sm text-secondary"><code>  &lt;code&gt;Text</code></pre>
  <pre data-prefix="3" className="text-sm text-secondary"><code>&lt;div className=&quot;heroSection&quot;&gt;</code></pre>
  <pre data-prefix="4" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
  <pre data-prefix="5" className="text-sm text-secondary"><code>&lt;span&gt;</code></pre>
  <pre data-prefix="6" className="text-sm text-secondary"><code>    &lt;p&gt;</code></pre>
  <pre data-prefix="7" className="text-sm text-secondary"><code>     Hello World!</code></pre>
  <pre data-prefix="8" className="text-sm text-secondary"><code>  &lt;/p&gt;</code></pre>
  <pre data-prefix="9" className="text-sm text-secondary"><code>&lt;/span&gt;</code></pre>
  <pre data-prefix="10" className="text-sm text-secondary"><code>    &lt;/code&gt;</code></pre>
  <pre data-prefix="11" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
</div>
      </TabsContent>
      <TabsContent value="Output">
<div className="bg-black mockup-code">
  <pre data-prefix="~" className="text-sm"><code># After code is formatted.</code></pre>
  <pre data-prefix="1" className="text-sm text-secondary"><code>&lt;div className=&quot;code_embed&quot;&gt;</code></pre>
  <pre data-prefix="2" className="text-sm text-secondary"><code>  &amp;lt;<span className="pink">code</span>&amp;gt;</code></pre>
  <pre data-prefix="3" className="text-sm text-secondary"><code>    &amp;lt;<span className="pink">div</span> <span className="orange">className</span>=<span className="blue">&quot;heroSection&quot;</span>&amp;gt;</code></pre>
  <pre data-prefix="4" className="text-sm text-secondary"><code>    &amp;lt;<span className="pink">/div</span>&amp;gt;</code></pre>
  <pre data-prefix="5" className="text-sm text-secondary"><code>    &amp;lt;<span className="pink">span</span>&amp;gt;</code></pre>
  <pre data-prefix="6" className="text-sm text-secondary"><code>      &amp;lt;<span className="pink">p</span>&amp;gt;</code></pre>
  <pre data-prefix="7" className="text-sm text-secondary"><code>        <span className="blue">Hello World!</span></code></pre>
  <pre data-prefix="8" className="text-sm text-secondary"><code>      &amp;lt;<span className="pink">/p</span>&amp;gt;</code></pre>
  <pre data-prefix="9" className="text-sm text-secondary"><code>    &amp;lt;<span className="pink">/span</span>&amp;gt;</code></pre>
  <pre data-prefix="10" className="text-sm text-secondary"><code>  &amp;lt;<span className="pink">/code</span>&amp;gt;</code></pre>
  <pre data-prefix="11" className="text-sm text-secondary"><code>&lt;/div&gt;</code></pre>
</div>
     
      </TabsContent>
      
    </Tabs>
        </div>
        <DialogDescription>
            Imagine the <span className="text-secondary">&amp;lt;</span> and <span className="text-secondary">&amp;gt;</span> symbols replaced with &lt; and &gt; symbols on the front-end.
          </DialogDescription>
      </DialogContent>
    </Dialog>


            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
        </div>
    )
}