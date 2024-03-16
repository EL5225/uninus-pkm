import { BiGlobe, BiMap } from 'react-icons/bi';
import { MdMailOutline } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';

export const Footer = () => {
  return (
    <footer>
      <section className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-16 gap-10 bg-[#626262]/50">
        <div className="md:col-span-2 pr-10">
          <h3 className="font-semibold text-xl">Desa Bojongsari</h3>
          <p>
            Bojongsari adalah desa di kecamatan Bojongsoang, Bandung, Jawa
            Barat, Indonesia.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Program</h3>
          <ul>
            <li>Masyarakat</li>
            <li>Destinasi Wisata</li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold text-xl">Profil</h3>
          <ul>
            <li>Profil</li>
            <li>Galeri Foto</li>
            <li>Galeri Video</li>
            <li>Kontak Kami</li>
          </ul>
        </div>
      </section>
      <div className="flex justify-center md:justify-end gap-3 p-4 lg:pr-48 text-xl bg-[#626262]/50">
        <BiMap />
        <BiGlobe />
        <MdMailOutline />
        <AiOutlinePhone />
        <IoSettingsOutline />
      </div>
      <div className="text-center p-5 bg-[#626262] text-white">
        © 2023 DesaBojongsari.id. All right reserved
      </div>
    </footer>
  );
};
