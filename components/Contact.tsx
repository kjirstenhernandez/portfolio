'use client'
import { assets } from "@/assets/assets"
import Image from 'next/image'
import React, { useState } from "react"

const Contact = () => {
    const [result, setResult] = useState("");
    const [message, setMessage] = useState<string>('');
    const [rows, setRows] = useState<number>(6)

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        const lineCount = newMessage.split('\n').length;
        setRows(Math.max(lineCount, 6));
        };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);


    formData.append("access_key", "8daae26e-bd4c-42b3-80f0-6455c8df3ede");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setMessage('');
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h2 className="text-center text-4xl font-Esteban">
            Contact Me
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Quicksand">
            I&apos;d love to hear from you!  If you have any questions, comments, or suggestions, please use the form below to reach out.
        </p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Your name' required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name='name' />
                <input type='email' placeholder="Your email" required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
                <textarea
                    placeholder="Your message"
                    required
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
                    name='message'
                    value={message}
                    onChange={handleMessageChange}
                    rows={rows}
                />
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit <Image src={assets.right_arrow_white} alt='right arrow in white' className='w-4'/></button>
            </div>
            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact