import { Navigation } from "./navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import logo from "./reallogowhite.png"
import Image from "next/image"
export function Navbar() {

    return(
        <div className="navbar_wrapper bg-background dark">
            <div className="navbar">
                <div className="navbar_logo">
                <a href="/"><Image src={logo} alt={""} width={30} height="30" /></a>
                
                <a href="/"><Logo /></a>
                </div>
                <Navigation  />

            </div>
        </div>
    )
}