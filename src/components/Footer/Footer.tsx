 

const Footer = () => { 

  return (
 <div className="flex flex-col items-center w-full justify-center p-4 border border-b-0 border-x-0">
   <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Codenexo</span>. All Rights Reserved.
        </p>
 </div>

  )
}

export default Footer