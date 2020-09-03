import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import React, { ReactElement } from "react";
import { HomeSection } from "./shared/HomeSection";

function ContactSection(): ReactElement {
  return (
    <HomeSection heading="Contacts" id={HomepageSectionIds.Contact}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, adipisci
      odio ut sapiente dolorem perferendis ipsa optio reprehenderit, eligendi
      labore nulla officia aut minus! Excepturi aperiam perspiciatis ex
      veritatis! Rerum quisquam doloribus cumque incidunt quos quis alias quas
      amet explicabo nobis perspiciatis exercitationem soluta molestias,
      asperiores molestiae maxime id ab tenetur enim neque ipsam dolorem
      distinctio magnam fugit. Obcaecati repellat impedit veritatis incidunt
      mollitia eaque maxime unde iste! Nulla quisquam pariatur laboriosam modi
      quidem quia libero magnam corporis aliquam doloremque in quod neque
      dolorum consequuntur quo cumque, unde iste, quibusdam dolores provident
      itaque nemo? Error molestiae nihil distinctio ex exercitationem?
    </HomeSection>
  );
}
export { ContactSection };
