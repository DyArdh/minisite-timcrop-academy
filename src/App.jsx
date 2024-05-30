import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navbar } from './components';
import {
  ArrowRightIcon,
  CheckIcon,
  CircleCheklistIcon,
  DollarIcon,
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from './components/icons';

// Import Images
import Hero from '/hero.webp';
import AWS from '/aws.webp';
import Dikti from '/dikti.webp';
import KampusMerdeka from '/kampus-merdeka.webp';
import Logo from '/logo.webp';
import Section2 from '/section2.webp';
import Section3 from '/section3.webp';
import Program1 from '/program1.webp';
import Program2 from '/program2.webp';
import Program3 from '/program3.webp';

import { Pagination } from 'swiper/modules';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="flex items-center bg-white px-5 pt-[70px] md:h-screen md:px-[150px] md:pt-10">
        <div className="flex flex-col-reverse items-center gap-10 md:w-full md:flex-row md:items-center md:justify-between">
          <div className="text-center md:w-1/2 md:text-left">
            <div className="text-3xl font-bold md:text-5xl">
              <h2 className="mb-3 md:mb-5">Kejar Masa Depan</h2>
              <h2>
                Di <span className="text-hover">Cloud Computing!</span>
              </h2>
            </div>
            <div className="mt-7 md:mt-8 md:text-lg">
              <p>
                Jalani pengalaman belajar interaktif dan menyenangkan.
                <span className="hidden md:inline">
                  <br />
                </span>
                Kolaborasi TIMCorp-Academy sebagai partner resmi
                <span className="hidden md:inline">
                  <br />
                </span>
                Amazon Web Service (AWS) dan Kampus Merdeka.
              </p>
              <p className="mt-3">
                Dibuat khusus untuk mahasiswa yang ingin mengembangkan
                <span className="hidden md:inline">
                  <br />
                </span>
                keterampilan dan selanjutnya mengejar karir di bidang
                <span className="hidden md:inline">
                  <br />
                </span>
                cloud computing.
                <br />
                <span className="text-hover">#darikampuskekarir</span>
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-7 md:mt-14 md:justify-start">
              <img src={AWS} alt="Amazon Web Service" />
              <img src={KampusMerdeka} alt="Kampus Merdeka" />
              <img src={Dikti} alt="Dikti Ristek" />
            </div>
            <div className="mt-7 flex justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 rounded-md border-2 border-primary px-5 py-3 font-semibold">
                Lihat Program
                <span>
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <img src={Hero} alt="Company Profile" className="w-60 rounded-lg md:w-[460px]" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="mt-14 px-5 md:mt-0 md:flex md:h-screen md:flex-col md:justify-center md:px-[150px]">
        <div className="mb-5 text-center md:mb-14">
          <h1 className="mb-3 text-2xl font-bold md:text-4xl">Kenapa Belajar Cloud Computing Penting?</h1>
          <p className="font-medium md:text-lg">Lorem ipsum dolor sit amet,aku mau lima kata</p>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="border-border flex items-center rounded-3xl border-[1.5px] px-8 py-10 md:w-1/2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Posisi Cloud Engineer menjadi posisi paling dicari #2 dalam bidang teknologi informasi</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Di Indonesia, masih sangat sedikit yang punya kemampuan ini</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>
                  Future of Jobs Survey 2023, bilang teknologi Cloud Computing adalah top 5 teknologi yang perlu
                  diadopsi organisasi/industri
                </p>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Permintaan untuk posisi ini di dunia kerja masih sangat banyak</p>
              </div>
              <div className="mt-6">
                <p>Tahukah kamu?</p>
                <div className="mt-3 flex items-center gap-3">
                  <DollarIcon className="h-5 w-5" />
                  <p>8 - 25 juta/bulan</p>
                </div>
                <p>Gaji rata-rata Cloud Engineer di Indonesia</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 md:justify-end">
            <img src={Section2} className="w-[380px]" alt="Section" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-background mt-14 px-5 py-14 md:mt-0 md:px-[150px] md:py-20">
        <h1 className="mb-7 text-left text-4xl font-bold md:text-4xl">Apa itu MSIB TIMCorp Academy?</h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-3 md:w-1/2">
            <p>
              Studi Independen Bersertifikat adalah program Kampus Merdeka yang diinisiasi Kemendikbudristek Indonesia,
              program ini memberikan kesempatan bagi mahasiswa IT dan non-IT mengembangkan diri di luar kampus Tanpa
              Biaya Tambahan.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
              <div className="order-4 flex gap-3 md:order-none">
                <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>
                  Kemampuan dan keterampilan
                  <span className="inline md:hidden">&nbsp;</span>
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  Soft Skills
                </p>
              </div>
              <div className="order-1 flex gap-3 md:order-none">
                <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Pengetahuan dasar IT</p>
              </div>
              <div className="order-2 flex gap-3 md:order-none">
                <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Pengetahuan dan keterampilan dasar cloud computing</p>
              </div>
              <div className="order-5 flex gap-3 md:order-none">
                <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Implementasi ke dalam proyek real</p>
              </div>
              <div className="order-3 flex gap-3 md:order-none">
                <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                <p>Pengetahuan dan keterampilan lanjut cloud computing</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 md:justify-end">
            <img src={Section3} alt="Section3" className="h-auto w-[400px]" />
          </div>
        </div>
      </section>

      {/* Forth Section */}
      <section className="mt-14 px-5 md:mt-20 md:px-[150px]">
        <div className="text-left md:text-center">
          <h1 className="text-lg font-bold md:text-3xl">Program TIMCorp-Academy</h1>
          <h2 className="mb-5 mt-2 font-medium md:mb-6 md:text-lg">
            3 kelas khusus yang bisa dipilih untuk kamu pelajari bersama para mentor
          </h2>
        </div>
        <div className="relative">
          <Swiper
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <img src={Program1} className="w-full" alt="Cloud Architecture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Program2} className="w-full" alt="Modern Cloud Applications" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Program3} className="w-full" alt="Data Analytics" />
            </SwiperSlide>
          </Swiper>
          <div className="custom-swiper-pagination"></div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="h-screen px-5 md:px-[150px]">
        <h1 className="mb-3 text-left text-lg font-bold"></h1>
        <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-5 md:px-[150px]">
        <div className="mb-3 flex flex-col">
          <div className="mt-10 flex flex-col gap-4">
            <img src={Logo} className="w-full max-w-28" alt="TimCorp Academy" />
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis nihil, eaque, earum sequi at
              sunt nulla, sint beatae velit magnam excepturi cum explicabo! Ducimus ratione a iste esse. Dolorum!
            </p>
            <div className="flex gap-4">
              <InstagramIcon className="h-8 w-8 text-hover" />
              <TwitterIcon className="h-8 w-8 text-hover" />
              <LinkedInIcon className="h-8 w-8 text-hover" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold ">Program</h1>
            <p className="text-sm">Cloud Architecture</p>
            <p className="text-sm">Cloud Architecture</p>
            <p className="text-sm">Cloud Architecture</p>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Kontak Kami</h1>
            <div className="flex items-center gap-3">
              <EmailIcon className="h-6 w-6 flex-shrink-0 text-hover" />
              <p className="text-sm">loremipsum@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 flex-shrink-0 text-hover" />
              <p className="text-sm">+62 8123456789</p>
            </div>
            <div className="items-left flex gap-3">
              <LocationIcon className="h-6 w-6 flex-shrink-0 text-hover" />
              <p className="text-sm">
                Gedung Pondok Indah Office Tower 3, 17th Floor, Jalan Sultan Iskandar Muda Kav V-TA, Jakarta 12310,
                Indonesia
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="py-3 text-center text-sm">Copyright &copy;{currentYear} TIMCorp-Academy. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

