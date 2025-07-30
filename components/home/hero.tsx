import { forwardRef } from 'react';
import Image from 'next/image';

interface HeroProps {
  typedRef?: React.Ref<HTMLSpanElement>;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ typedRef }, ref) => (
  <section ref={ref} className="hero-section py-20 text-center bg-gradient-to-r from-blue-900 to-gray-800">
    <Image
      src="/hero-bg.svg"
      alt="Hero Background"
      width={1200}
      height={600}
      className="w-full"
      loading="lazy"
    />
    <h1 className="text-5xl font-bold mb-4">
      Junior Vulnerability Management Analyst <span ref={typedRef}></span>
    </h1>
    <p className="text-xl mb-6">CASP+ Certified | Specializing in Qualys VMDR, FedRAMP, and NIST 800-53</p>
    <p className="text-lg max-w-2xl mx-auto">
      Passionate about securing IT environments through vulnerability management and compliance. Experienced in Windows, Linux, AWS, and Active Directory.
    </p>
  </section>
));

Hero.displayName = 'Hero';
export default Hero;
