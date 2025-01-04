import Image from "next/image";

interface Testimony {
  testimony: string;
  avatar: string;
  name: string;
  role: string;
}

export default function Testimonial({
  testimonial,
}: {
  testimonial: Testimony;
}) {
  return (
    <div className='bg-zinc-100 md:w-96 w-72 py-4 px-5 rounded-md text-base flex flex-col justify-between'>
      <h1 className='text-subtext font-medium'>TRUSTED CUSTOMER</h1>
      <p className='text-zinc-700 mt-3 font-medium'>
        "{testimonial.testimony}"
      </p>
      <div className='flex gap-2 mt-3'>
        <Image src={testimonial.avatar} width='40' height='40' alt='avatar' />
        <div className='flex flex-col justify-center'>
          <h2 className='text-sm font-medium'>{testimonial.name}</h2>
          <p className='text-xs'>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
