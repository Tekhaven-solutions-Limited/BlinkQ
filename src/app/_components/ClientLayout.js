"use client";

import { useState } from "react";
import Header from "./Header";
import Modal from "./modal/Modal";
import Image from "next/image";
import shield from "../../../public/svgs/shield-red.svg";
import dropDown from "../../../public/svgs/Chevron down.svg";
import BlockAccountModal from "./BlockAccountModal";
import Footer from "./Footer";
import TermsConditionsModal from "./TermsConditionsModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import RetrieveAccountModal from "./RetrieveAccountModal";

export default function ClientLayout({ children }) {
  const [openBlockAccountModal, setOpenBlockAccountModal] = useState(false);
  const [openRetrieveAccountModal, setOpenRetrieveAccountModal] =
    useState(false);
  const [openTermsConditionsModal, setOpenTermsConditionsModal] =
    useState(false);
  const [openPrivacyPolicyModal, setOpenPrivacyPolicyModal] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setOpenBlockAccountModal(true)} />
      {children}

      <BlockAccountModal
        open={openBlockAccountModal}
        setOpen={setOpenBlockAccountModal}
      />
      <RetrieveAccountModal
        open={openRetrieveAccountModal}
        setOpen={setOpenRetrieveAccountModal}
      />
      <TermsConditionsModal
        open={openTermsConditionsModal}
        setOpen={setOpenTermsConditionsModal}
      />

      <PrivacyPolicyModal
        open={openPrivacyPolicyModal}
        setOpen={setOpenPrivacyPolicyModal}
      />
      <Footer
        onOpenModalTermsConditions={() => setOpenTermsConditionsModal(true)}
        onOpenModalPrivacyPolicy={() => setOpenPrivacyPolicyModal(true)}
        onOpenModalRetrieveAccount={() => setOpenRetrieveAccountModal(true)}
      />
    </>
  );
}
