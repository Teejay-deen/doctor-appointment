import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-screen h-screen flex items-center justify-center">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-contaier max-w-[496px] ">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />
        </div>
      </section>
    </div>
  );
}
