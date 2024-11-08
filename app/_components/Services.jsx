import Service from "./Service";
import AirDuctCleaning from '@/app/assets/air-duct-cleaning.jpg'
import DryerVentCleaning from '@/app/assets/dryer-vent-cleaning.jpeg'
import HVACSanitization from '@/app/assets/hvac-system-maintenance.jpg'

export default function Services() {
    return (
        <div className="md:h-full md:flex md:flex-col md:justify-center md:items-center px-0 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center py-8 px-6">
                <h2 className="text-base/7 font-semibold text-sky-600">Services</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Choose the perfect service
                </p>
                {/* <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales.
                </p> */}
            </div>
            <article className="md:grid lg:grid-cols-3 md:gap-x-2">
                <Service
                    serviceImage={AirDuctCleaning}
                    serviceTitle={"Air Duct Cleaning"}
                    serviceDesc={"We remove dust, debris, and allergens from your ducts, improving air quality and making your home healthier."}
                    serviceCTAButton={"Learn more"}
                />
                <Service
                    serviceImage={DryerVentCleaning}
                    serviceTitle={"Dryer Vent Cleaning"}
                    serviceDesc={"Prevent fire hazards and increase dryer efficiency with regular vent cleaning, extending the life of your appliance."}
                    serviceCTAButton={"Learn more"}
                />
                <Service
                    serviceImage={HVACSanitization}
                    serviceTitle={"HVAC Sanitization"}
                    serviceDesc={"Our non-toxic HVAC sanitization kills bacteria and mold, helping circulate cleaner air throughout your home."}
                    serviceCTAButton={"Learn more"}
                />
            </article>
        </div>
    )
}