export const site = {
  name: "Ali Yoga Studio",
  shortName: "Ali Yoga",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aliyoga.eu",
  locale: "en_DK",
  themeColor: "#261a0e",
  address: "Robert Jacobsens Vej 44L, 2300 Copenhagen",
  phone: "+4591937009",
  email: "info@aliyoga.eu",
  socials: {
    instagram: "https://www.instagram.com/aliyogastudio/",
    facebook: "https://www.facebook.com/aliyogastudio",
    youtube: "https://www.youtube.com/channel/UCYJuQ1MN46D0MrHm41o3I_A"
  },
  booking: {
    book: "/booking",
    profile: "https://aliyogastudio.yogobooking.com/frontend/index.html#/my-profile",
    timetable: "https://aliyogastudio.yogobooking.com/frontend/index.html#/schedule"
  },
  maps: {
    query: "https://maps.google.com?q=Robert+Jacobsens+Vej+44L+Copenhagen"
  }
} as const;

