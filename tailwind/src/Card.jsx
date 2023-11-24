// ATMCard.jsx
import React, { useState } from "react";
import "./App.css";

const ATMCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card">
        <div className="card-face front bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-md flex flex-col">
          {/* Muka depan kartu */}
          <div className="logo-container">
            <div className="text-lg font-semibold text-white italic">Tahapan Xpresi BCA</div>
            <img
              src="assets/logobca.png"
              alt="Logo Bank"
              className="w-16 mb-2"
            />
          </div>
          <div className="tengah flex mt-1">
            <img src="assets/cip.png" className="w-11" alt="CIP Logo" />
            <div>
              <p className="text-xl font-bold text-white">**** **** **** ****</p>
              <p className="text-base ml-0.5 text-white">Rigel Sundun T</p>
            </div>
          </div>
          <div className="logo mt-2">
            <img src="assets/mastercard.png" alt="Logo Bawah" className="w-14" />
          </div>
        </div>

        <div className="card-back bg-gradient-to-l from-cyan-500 to-blue-500 rounded-xl shadow-md flex flex-col">
          {/* Belakang kartu */}
          <div className="flex flex-row full-width justify-between">
            <div className="text-white text-sm pt-1 pl-4">PT Bank Central Asia  Tbk</div>
            <div className="text-white text-sm pt-1 mr-4 text-right">Halo BCA 1500888</div>
          </div>
          
          <div className="bg-black h-10 full-width"></div>

          <div className="pl-4">
          <div className="text-white text-sm pb-1">Authorized Signature</div>
          <div className="flex flex-row full-width">
            <div className="bg-white h-7 w-20 italic">560</div> {/* Tambahan elemen untuk kotak putih */}
            <div className="text-white text-xs pl-2 pb-1 flex flex-col">
              <p className="font-bold">Jaga Kerahasiaan PIN Anda</p>
              <p>This card is issued by PT Bank Central Asia Tbk pursuant to license</p>
              <p>by Mastercard Asia/Pacific Pte. Ltd.</p>
              <p>Penggunaan kartu ini diatur menurut perjanjian/syarat dan ketentuan</p>
              <p>PT Bank Central Asia Tbk.</p>
              </div>
          </div>
          <div className="text-white text-sm mb-1 ">Card No.</div>
          <div className="pl-4 italic">5555 3258 6418 0271</div>
          </div>

          <div className="flex p-4">
            <div className="cvv self-end">
              <div className="bg-gray-300 text-white h-8 p-2 rounded-md text-sm rounded-2xl w-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMCard;