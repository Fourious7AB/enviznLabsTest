export default function Footer() {
  return (
    <footer className="bg-[#ff5c22] border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-bold mb-4">
              Sales Mastery
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Testimonials</li>
              <li>How To Participate?</li>
              <li>Our Packages</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <button className="border border-white px-4 py-2 rounded-full">
              Learn & Read More
            </button>

            <button className="bg-black text-white px-4 py-2 rounded-full">
              Sign Up Now
            </button>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Sales Mastery
            </h3>

            <p>loremipsum@gmail.com</p>

           
          </div>

        </div>

        <div className="mt-10 text-center text-sm">
          © 2026 Sales Mastery. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}