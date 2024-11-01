import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-h-screen h-screen flex ">
      {/* TODO: OTP VERIFICATION / PASSKEY MODAL*/}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular text-[#76828D] flex justify-between mt-20">
            <p className="justify-items-end xl:text-left">© 2024 CarePulse</p>
            <Link href="?/admin=true" className="text-green-500">
              {" "}
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img rounded-2xl max-w-[50%]"
      />
    </div>
  );
}
