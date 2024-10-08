import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  // navigate to /home
  router.push("/home");
}

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-40 h-40 mb-4 animate-pulse">
        <Image
          src="/logo.svg"
          alt="Circadia Logo"
          width={160}
          height={160}
          priority
          className="animate-bounce"
        />
      </div>
      <h1 className="text-3xl font-bold text-[#7B2CBF]">Circadia</h1>
    </div>
  );
}
