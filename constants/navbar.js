const NAVBAR_ITEMS = [
  { pathname: "/", label: "Beranda" },
  {

    label: "Tentang Kami",
    subMenu: [
      { pathname: "/about/dpc-pkb-pontianak", label: "DPC PKB Kota Pontianak" },
      { pathname: "/about/administrator", label: "Pengurus DPC PKB Pontianak" },
      { pathname: "/about/history", label: "Sejarah" },
      { pathname: "/about/vision", label: "Visi dan Misi" },
    ],
  },
  {
    pathname: "/gallery",
    label: "E-Library",
  },
  {
    pathname: "/activity",
    label: "Kegiatan",
  },
];

export default NAVBAR_ITEMS;
