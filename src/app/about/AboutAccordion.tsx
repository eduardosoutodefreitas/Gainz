"use client";

import aboutInfos from "@/constants/About";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Balancer from "react-wrap-balancer";

const AboutAccordion = () => {
  return (
    <Accordion defaultExpandedKeys={["0"]} variant='bordered'>
      {aboutInfos.map((info, index) => (
        <AccordionItem key={index} aria-label={info.title} title={info.title}>
          <Balancer>{info.content}</Balancer>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AboutAccordion;
