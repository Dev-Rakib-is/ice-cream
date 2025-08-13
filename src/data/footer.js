import footerLogo from "../assets/urllogo.png"

 const footerData = {
  logo:footerLogo,
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Page", url: "/page" },
        { label: "Blog", url: "/blog" },
        { label: "Faq's", url: "/Faq's" },       
      ],
    },
    {
      title: "Address",
      items: [
        "121 King Street Melbourne, 3000, Australia",
        "Got Questions? Call us 24/7",
        "+5689 2589 6325",
      ],
    },
    {
      title: ["Address", "Email"],
      Contact: [
        {
          icon: "MapPin",
          label: "Address :",
          value: "121 King Street Melbourne, 3000, Australia",
        },
        {
          icon: "Mail",
          label: "Email:",
          value: "info@icedelights.com",
        },
      ],
      items: [
        "121 King Street Melbourne, 3000, Australia",
        "info@icedelights.com",
      ],
    },
    {
      title: "+5689 2589 6325",
    },
  ],
};
export default footerData;
