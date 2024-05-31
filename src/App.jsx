import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navbar, VideoPlayer } from './components';
import {
  ArrowRightIcon,
  CheckIcon,
  CircleCheklistIcon,
  DollarIcon,
  DotIcon,
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
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
import Section5 from '/section5.webp';
import Section6 from '/section6.webp';
import Section7 from '/section7.webp';
import Section9 from '/section9.webp';
import Section10 from '/section10.webp';
import Program1 from '/program1.webp';
import Program2 from '/program2.webp';

import Mentor1 from '/mentor.jpg';

import { Pagination } from 'swiper/modules';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="container mx-auto">
        <section className="flex items-center justify-center bg-white px-5 pt-[70px] md:h-screen md:px-[150px] md:pt-10">
          <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center gap-10 md:w-full md:flex-row md:items-center md:justify-between">
            <div className="text-center md:w-1/2 md:text-left">
              <div className="text-3xl font-extrabold md:text-5xl">
                <h2 className="mb-3 md:mb-5">Kejar Masa Depan</h2>
                <h2>
                  Di <span className="text-primary">Cloud Computing!</span>
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
                  <span className="font-bold text-primary">#darikampuskekarir</span>
                </p>
              </div>
              <div className="mt-6 flex justify-center gap-7 md:mt-14 md:justify-start">
                <img src={AWS} alt="Amazon Web Service" />
                <img src={KampusMerdeka} alt="Kampus Merdeka" />
                <img src={Dikti} alt="Dikti Ristek" />
              </div>
              <div className="mt-7 flex justify-center md:justify-start">
                <button className="flex items-center justify-center gap-2 rounded-md border-2 border-primary px-5 py-3 font-semibold hover:bg-primary">
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
      </div>

      {/* Second Section */}
      <div className="container mx-auto">
        <section className="mt-14 px-5 md:mt-0 md:flex md:h-screen md:flex-col md:justify-center md:px-[150px]">
          <div className="mb-5 text-center md:mb-14">
            <h1 className="mb-3 text-2xl font-bold md:text-4xl">Kenapa Belajar Cloud Computing Penting?</h1>
            <p className="font-medium md:text-lg">Siapkan diri untuk ciptakan peluang baru</p>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="flex items-center rounded-3xl border-[1.5px] border-border px-8 py-10 md:w-1/2">
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
                    <DollarIcon className="h-5 w-5 text-green-600" />
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
      </div>

      {/* Third Section */}
      <div className="container mx-auto">
        <section className="mt-14 bg-background px-5 py-14 md:mt-0 md:px-[150px] md:py-20">
          <h1 className="mb-7 text-left text-2xl font-bold md:text-4xl">Apa itu MSIB TIMCorp Academy?</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-3 text-base md:w-1/2 md:text-lg">
              <p>
                Studi Independen Bersertifikat adalah program Kampus Merdeka yang diinisiasi Kemendikbudristek
                Indonesia, program ini memberikan kesempatan bagi mahasiswa IT dan non-IT mengembangkan diri di luar
                kampus Tanpa Biaya Tambahan.
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
      </div>

      {/* Forth Section */}
      <div className="contianer mx-auto">
        <section className="mt-14 px-5 md:mt-20 md:px-[150px]">
          <div className="text-left md:text-center">
            <h1 className="text-2xl font-bold md:text-4xl">Program TIMCorp Academy</h1>
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
            </Swiper>
            <div className="custom-swiper-pagination"></div>
          </div>
        </section>
      </div>

      {/* Fifth Section */}
      <div className="container mx-auto">
        <section className="mt-14 px-5 md:mt-24 md:h-screen md:px-[150px]">
          <div className="text-left md:text-center">
            <h1 className="mb-5 text-2xl font-bold md:text-4xl">
              Belajar Interaktif dan Menyenangkan Bersama TIMCorp Academy
            </h1>
            <p className="md:text-lg">
              Lewati 5 bulan belajar interaktif berstandar kurikulum global di batch 7, menggunakan metode Blended
              Learning
              <span className="hidden md:inline">
                <br />
              </span>
              yaitu self learning dan hands-on lab melalui platform AWS Skill Builder premium account dan
              <span className="hidden md:inline">
                <br />
              </span>
              LMS TIMCorp-Academy, dengan didampingi mentor profesional.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:mt-14  md:flex-row md:items-center md:justify-between">
            <div className="hidden md:flex md:w-1/2 md:justify-start">
              <img src={Section5} alt="Section3" className="h-auto w-[520px]" />
            </div>
            <div className="flex flex-col gap-3 md:w-1/2 md:ps-10">
              <div className="flex flex-col gap-4 md:text-lg">
                <div className="flex items-center gap-3">
                  <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                  <p>Gamification melalui Cloud Quest 3D role-playing game-based dan Industry Quest</p>
                </div>
                <div className="flex items-center gap-3">
                  <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                  <p>Capstone Projects bersama kelompok</p>
                </div>
                <div className="flex items-center gap-3">
                  <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                  <p>Pemberian berbagai Global Certificate dan badges dari AWS</p>
                </div>
                <div className="flex items-center gap-3">
                  <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                  <p>Graduation di kantor TIMCorp-Academy</p>
                </div>
                <div className="flex items-center gap-3">
                  <CircleCheklistIcon className="h-5 w-5 flex-shrink-0 text-hover" />
                  <p>Kesempatan magang bagi mahasiswa berprestasi #darikampuskekarir</p>
                </div>
                <div className="mt-3 md:mt-5">
                  <p>Semua dirancang untuk mendukung keterampilan hardskill dan softskill kamu. Seru kan!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sixth Section */}
      <div className="container mx-auto">
        <section className="mt-14 bg-background px-5 py-14 md:px-[150px] md:py-20">
          <div className="container flex flex-col md:flex-row md:gap-16">
            <div className="flex flex-col gap-2 md:w-1/2">
              <div className="flex flex-col gap-2 text-lg">
                <h1 className="text-2xl font-bold md:text-4xl">
                  Sudah Siap Belajar Bersama
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  TIMCorp Academy?
                </h1>
                <p className="mt-6 text-base md:text-lg">
                  Sebelum mendaftar, pastikan kamu sudah memahami persyaratan dan timeline pendaftaran Studi Independen
                  Bersertifikat - Kampus Merdeka batch 7!
                </p>
                <div className="mt-4 flex flex-col text-base md:text-lg">
                  <h1 className="rounded-t-md bg-[#FFC369] py-3 text-center font-medium">Syarat Pendaftaran</h1>
                  <div className="rounded-b-md bg-[#FFEFD6] px-10 py-8 text-base">
                    <div className="mb-2 flex items-center gap-6">
                      <DotIcon className="h-3 w-3 flex-shrink-0 text-hover" />
                      <p>Graduation di kantor TIMCorp-Academy</p>
                    </div>
                    <div className="mb-2 flex items-center gap-6">
                      <DotIcon className="h-3 w-3 flex-shrink-0 text-hover" />
                      <p>Terbuka untuk seluruh jurusan (IT dan non IT) di kampus seluruh Indonesia</p>
                    </div>
                    <div className="mb-2 flex items-center gap-6">
                      <DotIcon className="h-3 w-3 flex-shrink-0 text-hover" />
                      <p>Memiliki ketertarikan pada cloud computing</p>
                    </div>
                    <div className="mb-2 flex items-center gap-6">
                      <DotIcon className="h-3 w-3 flex-shrink-0 text-hover" />
                      <p>Memiliki kemampuan bahasa Inggris memadai</p>
                    </div>
                    <div className="mb-2 flex items-center gap-6">
                      <DotIcon className="h-3 w-3 flex-shrink-0 text-hover" />
                      <p>Memiliki perangkat belajar laptop dan internet yang memadai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:w-1/2 md:justify-end">
              <img src={Section6} alt="Section3" className="h-auto w-full md:w-[403px]" />
            </div>
          </div>
        </section>
      </div>

      {/* Seventh Section */}
      <div className="container mx-auto">
        <section className="mt-14 px-5 md:px-[150px]">
          <div className="container flex flex-col">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-center text-2xl font-bold md:text-4xl">Timeline Pendaftaran</h1>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-4">
                <div className="border border-black bg-[#FFEFD6] px-6 py-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-hover font-bold">
                      <p>1</p>
                    </div>
                    <h1 className="text-base">
                      Publikasi dan Sosialisasi
                      <span className="inline md:hidden">&nbsp;</span>
                      <span className="hidden md:inline">
                        <br />
                      </span>
                      Kegiatan Mahasiswa
                    </h1>
                    <p className="text-xl font-bold">13 Mei - 10 Juni 2024</p>
                  </div>
                </div>
                <div className="border border-black bg-[#FFEFD6] px-6 py-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-hover font-bold">
                      <p>1</p>
                    </div>
                    <h1 className="text-base">
                      Publikasi dan Sosialisasi
                      <span className="inline md:hidden">&nbsp;</span>
                      <span className="hidden md:inline">
                        <br />
                      </span>
                      Kegiatan Mahasiswa
                    </h1>
                    <p className="text-lg font-bold">13 Mei - 10 Juni 2024</p>
                  </div>
                </div>
                <div className="border border-black bg-[#FFEFD6] px-6 py-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-hover font-bold">
                      <p>1</p>
                    </div>
                    <h1 className="text-base">
                      Publikasi dan Sosialisasi
                      <span className="inline md:hidden">&nbsp;</span>
                      <span className="hidden md:inline">
                        <br />
                      </span>
                      Kegiatan Mahasiswa
                    </h1>
                    <p className="text-lg font-bold">13 Mei - 10 Juni 2024</p>
                  </div>
                </div>
                <div className="border border-black bg-[#FFEFD6] px-6 py-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-hover font-bold">
                      <p>1</p>
                    </div>
                    <h1 className="text-base">
                      Publikasi dan Sosialisasi
                      <span className="inline md:hidden">&nbsp;</span>
                      <span className="hidden md:inline">
                        <br />
                      </span>
                      Kegiatan Mahasiswa
                    </h1>
                    <p className="text-lg font-bold">13 Mei - 10 Juni 2024</p>
                  </div>
                </div>
              </div>

              <img src={Section7} className="mt-5 md:mt-12" alt="CTA Jadwal" />
            </div>
          </div>
        </section>
      </div>

      {/* Eighth Section */}
      <div className="container mx-auto">
        <section className="mt-14 px-5 md:mt-24 md:px-[150px]">
          <div className="container flex flex-col">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-center text-2xl font-bold md:text-4xl">Belajar Langsung Dari Ahlinya</h1>
              <div className="mt-8 flex flex-col gap-5 md:flex-row">
                <div className="w-full rounded-xl border-[1.5px] border-[#9E9E9E] md:w-80">
                  <img
                    src={Mentor1}
                    className="h-64 w-full rounded-t-xl border-[1.5px] border-[#9E9E9E]"
                    alt="Mentor1"
                  />
                  <div className="px-5 pb-5 pt-3">
                    <h1 className="text-bold text-lg">Mentor 1</h1>
                    <p className="mb-3 text-gray-500">Cloud Computing</p>
                    <hr />
                    <div className="mt-3 flex flex-col">
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-xl border-[1.5px] border-[#9E9E9E] md:w-80">
                  <img
                    src={Mentor1}
                    className="h-64 w-full rounded-t-xl border-[1.5px] border-[#9E9E9E]"
                    alt="Mentor1"
                  />
                  <div className="px-5 pb-5 pt-3">
                    <h1 className="text-bold text-lg">Mentor 1</h1>
                    <p className="mb-3 text-gray-500">Cloud Computing</p>
                    <hr />
                    <div className="mt-3 flex flex-col">
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-xl border-[1.5px] border-[#9E9E9E] md:w-80">
                  <img
                    src={Mentor1}
                    className="h-64 w-full rounded-t-xl border-[1.5px] border-[#9E9E9E]"
                    alt="Mentor1"
                  />
                  <div className="px-5 pb-5 pt-3">
                    <h1 className="text-bold text-lg">Mentor 1</h1>
                    <p className="mb-3 text-gray-500">Cloud Computing</p>
                    <hr />
                    <div className="mt-3 flex flex-col">
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotIcon className="h-2 w-2 text-primary md:h-3 md:w-3" />
                        <p>Lorem ipsum dolor sit amet wailah dalah malah</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Ninth Section */}
      <div className="container mx-auto">
        <VideoPlayer videoId="dQw4w9WgXcQ" isOpen={isOpen} togglePopUp={togglePopUp} />
        <section className="md:py-20s mt-14 bg-background px-5 py-14 md:px-[150px]">
          <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="flex flex-col gap-2 md:w-1/2">
              <h1 className="text-2xl font-bold md:text-4xl">
                Cerita Perjalanan Peserta
                <span className="hidden md:inline">
                  <br />
                </span>
                TIMCorp Academy
              </h1>
              <p className="mt-6 text-base md:text-lg">
                Lihat bagaimana keseruan program TIMCorp-Academy. Tidak hanya belajar, setelah program selesai kita juga
                ada acara Graduation secara offline di kantor TIMCorp-Academy bahkan presentasi hasil Capstones Project
                langsung ke CTO Amazon.
              </p>
            </div>
            <div className="flex md:w-1/2 md:justify-end">
              <img src={Section9} alt="Section3" className="h-auto w-full md:w-[473px]" onClick={togglePopUp} />
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center md:mt-24">
            <h1 className="text-2xl font-bold md:text-4xl">Begini Kata Mereka</h1>
            <div className="mt-5 flex flex-col gap-3 md:flex-row">
              <div className="w-full rounded-xl border-[1.5px] border-primary border-opacity-50 bg-white bg-opacity-70 px-6 py-7 text-center md:w-[340px]">
                <h1 className="text-bold text-lg">Wulan Sri Lestari</h1>
                <p className="mb-3 text-gray-500">Universita Pendidikan Indonesia</p>
                <hr />
                <p className="mt-3">
                  Terima kasih semua! Pak Bintang CEO, Pak Widi, Kak Anisa, para mentor udah sabar banget ngajarin. Gak
                  akan pernah dapet pembelajaran & pengalaman kayak gini di kuliah atau tempat lain. Semangat buat
                  teman2 yang lain!
                </p>
              </div>
              <div className="w-full rounded-xl border-[1.5px] border-primary border-opacity-50 bg-white bg-opacity-70 px-6 py-7 text-center md:w-[340px]">
                <h1 className="text-bold text-lg">Sebut Saja Bunga</h1>
                <p className="mb-3 text-gray-500">Politeknik Elektronika Negeri Surabaya</p>
                <hr />
                <p className="mt-3">
                  Terima kasih PT TIM sudah mendampingi kami di batch 5! Mentornya keren, ramah, dan ilmunya bermanfaat.
                  Sukses selalu semua!
                </p>
              </div>
              <div className="w-full rounded-xl border-[1.5px] border-primary border-opacity-50 bg-white bg-opacity-70 px-6 py-7 text-center md:w-[340px]">
                <h1 className="text-bold text-lg">Mugi Lestari</h1>
                <p className="mb-3 text-gray-500">Universitas Pamulang</p>
                <hr />
                <p className="mt-3">
                  Senang & bersyukur bisa belajar cloud computing, pasti berguna buat masa depan saya. Terima kasih
                  sudah berbagi ilmu buat kami semua. Jangan bosan mencerdaskan anak bangsa ya!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tenth Section */}
      <div className="container mx-auto">
        <section className="my-10 flex items-center justify-center px-5 md:my-0 md:h-screen md:px-[150px]">
          <div className="container">
            <div>
              <img src={Section10} className="h-auto w-full rounded-md" alt="CTA" />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="container mx-auto">
        <footer className="bg-gray-100 px-5 pt-10 md:px-[150px]">
          <div className="mb-3 flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 max-w-80 md:mb-0">
              <h1 className="mb-3 text-lg font-bold">Head Office</h1>
              <p>
                Gedung Pondok Indah Office Tower 3, 17th Floor, Jalan Sultan Iskandar Muda Kav V-TA, Jakarta 12310,
                Indonesia
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h1 className="mb-3 text-lg font-bold">Kontak</h1>
              <div className="mb-2 flex items-center gap-3">
                <PhoneIcon className="h-5 w-5" />
                <p>+62 21 2345678</p>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="h-5 w-5" />
                <p>iniemailyages.gmail.com</p>
              </div>
            </div>
            <div>
              <h1 className="mb-3 text-lg font-bold">Media Sosial</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <InstagramIcon className="h-5 w-5" />
                  <p>timcorp.academy</p>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedInIcon className="h-5 w-5" />
                  <p>TIMCorp-Academy</p>
                </div>
                <div className="flex items-center gap-3">
                  <TwitterIcon className="h-5 w-5" />
                  <p>timcorp.academy</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="my-8 flex flex-col gap-7 md:flex-row md:items-center md:gap-10">
            <img src={Logo} className="h-[80px] w-[200px]" alt="TIMCorp Academy" />
            <p className="max-w-2xl">
              Curabitur faucibus ipsum id metus pharetra, eget aliquet tellus eleifend. Donec porttitor accumsan tellus,
              eget aliquet magna bibendum eget. Sed malesuada ligula dui, vel auctor metus venenatis eu. Vivamus vel ex
              ut felis ultrices accumsan. Mauris hendrerit augue ut semper pulvinar. Sed nec elit convallis, pharetra
              ligula eget, euismod mauris. Donec aliquam augue at augue bibendum, et porttitor purus maximus.
            </p>
          </div>
          <hr />
          <p className="py-3 text-center text-sm">
            Copyright &copy;{new Date().getFullYear()} TIMCorp-Academy. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

