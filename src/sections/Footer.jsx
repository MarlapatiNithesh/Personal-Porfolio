const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/MarlapatiNithesh" target='_blank' className="cursor-pointer"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 cursor-pointer m-auto" /></a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/marlapati-nithesh-685815339/" target='_blank' className="cursor-pointer"><img src="/assets/LinkedIn.png" alt="LinkedIn" className="w-1/2 h-1/2 cursor-pointer m-auto" /></a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/nitheeshmarlapati/" target='_blank' className="cursor-pointer"><img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 cursor-pointer m-auto" /></a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Marlapati Nithesh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
