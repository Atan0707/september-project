import Image from "next/image";

export default function Home() {
  return (
    <div className="home m-4">
      <h1>Home</h1>
      <Image 
      src="/gambar/orang-juhur.jpg"
      width={500}
      height={500}
      alt="orang juhur"
      />
    </div>
  );
}
