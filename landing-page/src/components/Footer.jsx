import React from "react";
import { useNavigate } from "react-router-dom";

export default function FooterSection() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center space-y-6">
        {/* Footer Heading */}
        <h1 className="text-3xl font-bold">Footer</h1>
        <p className="text-gray-300 text-lg">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
          the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <p onClick={() => navigate("/privacy-policy")}>Privacy Policy</p>
      </div>
      <div className="container mx-auto px-4 text-center space-y-6 mt-10">
        {/* Footer Heading */}
        <h1 className="text-3xl font-bold">Download Our App</h1>

        {/* Footer Description */}
        <p className="text-gray-300 text-lg">
          Scan the QR codes below to download our app on your favorite device. Get instant access to exclusive features and updates.
        </p>

        {/* QR Codes Row */}
        <div className="flex justify-center gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-24 h-24 bg-white rounded-lg shadow-lg p-2">
              <img
                src={`https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg`}
                alt={`QR Code ${item}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
