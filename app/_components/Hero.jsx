import Image from "next/image";
import bgImage from '@/app/assets/kansas-city-bg.jpg'
import DDDCLogo from '@/app/assets/Duct-Daddy-01.png'
import { Button } from "@nextui-org/react";

export default function Hero() {
    return (
        <main className="h-screen relative">
            <Image
                src={bgImage}
                alt="Picture of Missouri, Kansas City"
                className="absolute h-full z-[-1] object-cover filter brightness-50"
                priority
            />
            <header className="h-full flex flex-col items-center justify-center text-center p-2">
                <Image
                    src={DDDCLogo}
                    alt="Duct Daddy Duct Cleaning logo"
                    className="h-72 w-auto"
                />
                <h1 className="text-3xl font-bold text-slate-100">Affordable and Dependable Duct Cleaning Services</h1>
                <p className="text-lg text-slate-300 mt-2">Based in Kansas City and Surrounding Areas</p>
                <Button className="mt-4" color="primary">Get a Free Quote</Button>
            </header>
        </main>
    )
}
