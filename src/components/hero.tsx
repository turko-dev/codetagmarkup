import logo from './reallogo.png'
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from './ui/button'
export function Hero() {
    return(
        <div className="wrapper">
            <div className="hero inner hero_main">
                <div className="text_gap">
                    <h1 className="text-5xl lg:text-8xl font-medium text-foreground dark">We put your code into &lt;<span className="pink">code</span>&gt; tags.</h1>
                    <p className="text-1xl lg:text-2xl dark text-muted-foreground">Solving HTML pitfalls one tag at a time.</p>
                    
                    <Button>Get Started</Button>
                    
                </div>
                <div className="hero_image">
                <Image src={logo} alt={""} width={400} />

                </div>

            </div>
            
        </div>
    )
}