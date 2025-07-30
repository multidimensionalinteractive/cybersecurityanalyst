import { useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  const [timelineSvg, setTimelineSvg] = useState<string>('');

  const animateTimeline = useCallback(() => {
    gsap.to('.timeline-item', { opacity: 1, y: 0, duration: 1 });
  }, []);

  const initScrollTrigger = useCallback(() => {
    ScrollTrigger.create({
      trigger: '.timeline',
      start: 'top 80%',
      onEnter: () => animateTimeline(),
    });
  }, [animateTimeline]);

  useEffect(() => {
    animateTimeline();
    initScrollTrigger();
    setTimelineSvg('example-svg-data');
  }, [animateTimeline, initScrollTrigger, setTimelineSvg]);

  return (
    <section className="timeline py-16 px-8 bg-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-10">Career Timeline</h2>
      <div className="timeline-item">
        <h3>2025 - CASP+ Certification</h3>
        <p>Achieved CompTIA CASP+ certification, mastering enterprise security architecture, operations, engineering, and governance.</p>
      </div>
      <div className="timeline-item">
        <h3>2024 - Vulnerability Management</h3>
        <p>Conducted vulnerability scans using Qualys VMDR, analyzed CVEs, and collaborated on remediation plans.</p>
      </div>
      <div className="timeline-item">
        <h3>2023 - Active Directory Management</h3>
        <p>Managed and secured Active Directory environments, implementing security policies and monitoring access.</p>
      </div>
    </section>
  );
};

export default Timeline;
