"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
    return (
        <div id="FAQ" className="isolate mx-auto bg-white max-w-6xl px-2 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-sky-600">FAQ</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Frequently asked questions
                </p>
            </div>
            <Accordion selectionMode="multiple">
                <AccordionItem className="mt-16" key="1" aria-label="How often should air ducts be cleaned?" title="How often should air ducts be cleaned?">
                    Typically, every 2-5 years, depending on home factors like pets, recent renovations, or health issues.
                </AccordionItem>
                <AccordionItem key="2" aria-label="How do I know if my ducts need cleaning?" title="How do I know if my ducts need cleaning?">
                    Look for excess dust, unexplained allergies, or musty odors.
                </AccordionItem>
                <AccordionItem key="3" aria-label="What methods do you use?" title="What methods do you use?">
                    We use a Negative Air Machine for a thorough cleaning and offer optional sanitization.
                </AccordionItem>
            </Accordion>
        </div>
    );
}