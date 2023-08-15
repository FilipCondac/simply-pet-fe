import React from "react";
import ServiceContainer from "./ServiceContainer";

export default function ServicesSection(): React.ReactElement {
  return (
    <section className="flex w-full pt-10  z-20 shadow-inner bg-gradient-to-r  from-tertiary to-white">
      <ServiceContainer
        title="Pet Sitting"
        image="./userAccount.jpg"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales aliquam, urna nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet sodales aliquam, urna nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."
      />
      <ServiceContainer
        title="Pet Sitting"
        image="./userAccount.jpg"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales aliquam, urna nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet sodales aliquam, urna nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."
      />
      <ServiceContainer
        title="Pet Sitting"
        image="./userAccount.jpg"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales aliquam, urna nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet sodales aliquam, urna nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."
      />
    </section>
  );
}
