import { Button } from "@nextui-org/react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import testimage from '@/app/assets/dryer-vent-cleaning.jpeg'
import Image from "next/image";

export default function Service({ serviceImage, serviceTitle, serviceDesc, serviceCTAButton }) {
    return (
        <article className="max-w-4xl md:max-w-xl lg:max-w-sm max-h-full mt-6 bg-white md:border md:border-gray-200 md:rounded-lg md:shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
                src={serviceImage || testimage}
                alt="Service image"
                className="md:rounded-t-lg"
                width={1920}
                height={1080}
            />
            <header className="p-5">
                <a href="#">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {serviceTitle}
                    </h2>
                </a>
                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
                    {serviceDesc}
                </p>
                <Button color="primary"
                    endContent={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    }
                >
                    {serviceCTAButton}
                </Button>
            </header>
        </article>
    )
}
