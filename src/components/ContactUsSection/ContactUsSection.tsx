import React from 'react'
import { FaComments, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const ContactUsSection = () => {
  return (
    <div className='p-12 flex flex-row items-center justify-between'>
         <section className="w-5/12   text-white">
      {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight">
        have a<br />question?
      </h1>

      {/* Paragraphs */}
      <p className="mt-6 text-sm leading-relaxed">
        We’re here to help! Fill out the form or reach us via email or phone. 
        Our Support & Development Team is available to ensure you get the best 
        experience with our software solutions — whether you need project support,
        want to discuss your idea, or have any technical questions.
      </p>

      <p className="mt-4 text-sm leading-relaxed">
        Every inquiry receives a personalized response. Please allow up to 24 hours 
        during business days for a reply. Our business hours are <b>M–F, 9am to 6pm</b>.
      </p>

      {/* Contact Actions */}
      <div className="mt-4 space-y-5 text-md">
        
        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-xl" />
          <a href="mailto:info@yourcompany.com" className="underline">
            info@yourcompany.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-xl" />
          <a href="tel:+1234567890" className="underline">
            +1 (234) 567-890
          </a>
        </div>

        {/* Live Chat */}
        <div className="flex items-center gap-2">
          <FaComments className="text-xl" />
          <a href="#" className="underline">
            chat with us
          </a>
        </div>
      </div>
    </section>
    <div className='w-5/12'>
    <form className="max-w-2xl mx-auto w-full mt-10 space-y-6">
      
      {/* First + Last Name (Row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">First Name</Label>
          <Input placeholder="John" />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">Last Name</Label>
          <Input placeholder="Doe" />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-medium">Email</Label>
        <Input type="email" placeholder="john@example.com" />
      </div>
 <div className="flex flex-col space-y-2">
    <Label>Phone / WhatsApp</Label>
    <Input type="tel" placeholder="+1 234 567 890" />
  </div>
      {/* Query */}
      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-medium">Your Query</Label>
        <Textarea
          placeholder="Write your message here..."
          className="resize-none"
          rows={6}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" variant={"custom1"} className="w-full">
        Submit
      </Button>
    </form>
    </div>
    </div>
  )
}

export default ContactUsSection