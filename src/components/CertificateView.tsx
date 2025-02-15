import cert1 from "../certificates/COURSERA_FOUNDATION_CYBERSECURITY.pdf"
import cert2 from "../certificates/COURSERA_Play_It_Safe_Manage_Security_Risks.pdf"
import cert3 from "../certificates/Coursera_Bits_Bytes.pdf"
import cert4 from "../certificates/Coursera_Digital_System.pdf"
import cert5 from "../certificates/Coursera_Fundamentals_Network_Communication.pdf"
import cert6 from "../certificates/Coursera_Introduction_Hardware_OS.pdf"
import cert7 from "../certificates/Coursera_Kali_linux.pdf"
import cert8 from "../certificates/How_to_become_succelful_affliate_marketer_Certificate.pdf"
import cert9 from "../certificates/Neo_collab_C++_Certificate.pdf"
import cert10 from "../certificates/Neo_collab_C_Certificate.pdf"
import cert11 from "../certificates/Neo_collab_DSA_Certificate.pdf"
import cert12 from "../certificates/ai_workshop_1123_certificate.pdf"
import cert13 from "../certificates/ethical_hacking_introdustion_certificate.pdf"


const certificates = [
  { name: "COURSERA_FOUNDATION_CYBERSECURITY Certification", url: cert1 },
  { name: "COURSERA_Play_It_Safe_Manage_Security_Risks Certification", url: cert2 },
  { name: "Coursera_Bits_Bytes Certification", url: cert3 },
  { name: "Coursera_Digital_System Certification", url: cert4 },
  { name: "Coursera_Fundamentals_Network_Communication Certification", url: cert5 },
  { name: "Coursera_Introduction_Hardware_OS Certification", url: cert6 },
  { name: "Coursera_Kali_linux Certification", url: cert7 },
  { name: "How_to_become_succelful_affliate_marketer_Certificate Certification", url: cert8 },
  { name: "Neo_collab_C++_Certificate Certification", url: cert9 },
  { name: "Neo_collab_C_Certificate Certification", url: cert10 },
  { name: "Neo_collab_DSA_Certificate Certification", url: cert11 },
  { name: "ai_workshop_1123_certificate Certification", url: cert12 },
  { name: "ethical_hacking_introdustion_certificate Certification", url: cert13 },
  
];

export default function Certificates() {
  return (
    <div className="p-6 bg-slate-900 h-screen">
      <h2 className="text-3xl font-bold mb-4 text-orange-500 text-center">My All Certificates</h2>
      <div className="grid grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-600 text-white px-4 py-4 mt-4 m-1 rounded-md hover:bg-blue-700 transition font-bold"
          >
            {cert.name} (View PDF)
          </a>
        ))}
      </div>
    </div>
  );
}
