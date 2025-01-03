import Image from "next/image";

export default function Items({
  heading,
  body,
  icon,
}: {
  heading: string;
  body: string;
  icon: string;
}) {
  return (
    <div className='flex items-start gap-2 mt-3'>
      <Image src={icon} height='70' width='70' alt='one' />
      <div className='mt-3'>
        <div className='font-semibold mb-1'>
          {heading}
        </div>
        <div className='text-subtext'>
          {body}
        </div>
      </div>
    </div>
  );
}
