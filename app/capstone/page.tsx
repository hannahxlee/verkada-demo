import Image from "next/image";

export default function Capstone() {
  return (
    <div className="w-full min-h-screen items-center justify-center p-16">
      <Image
        src="/CAPSTONE.png"
        alt="HOME"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </div>
  );
}
