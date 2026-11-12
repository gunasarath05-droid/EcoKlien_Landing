// Contact page content — mirrors https://ecoklien.com/contact/

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export const contactHero = {
  eyebrow: "CONTACT",
  title: "Want to Know More About Our Products?",
  description:
    "Fill in the contact form below and we’ll get back to you soon. You can also call us or leave us a message.",
  emailCta: { label: "Email us", href: "mailto:sales@ecoklien.com" },
};

export const contactCard = {
  eyebrow: "LET'S CONNECT",
  title: "Contact Us",
  subtitle: "Call us or email us to know more about our products.",
  footerTag: "ECOKlien / ENVIRONMENTAL TECHNOLOGY",
  emails: [
    { label: "EMAIL US", value: "sales@ecoklien.com", href: "mailto:sales@ecoklien.com" },
    { label: "EMAIL US", value: "captvj@ecoklien.com", href: "mailto:captvj@ecoklien.com" },
  ] satisfies ContactChannel[],
  phones: [
    { label: "CALL / SINGAPORE", value: "+65 8834 8223", href: "tel:+6588348223" },
    { label: "CALL / INDIA", value: "+91 7418642999", href: "tel:+917418642999" },
  ] satisfies ContactChannel[],
};

export const enquiryForm = {
  eyebrow: "SEND AN ENQUIRY",
  title: "Send us your details.",
  description: "Fill in the contact form below and we’ll get back to you soon.",
};

const officeAddressLine1 = "No. 237, Pandan Loop, #04-07";
const officeAddressLine2 = "Westech Building, Singapore 128424";

export const office = {
  eyebrow: "FIND US",
  title: "Our Singapore office.",
  description: ["Connect with RT Solutions Pte Ltd,", "the team behind ECOKlien."],
  company: "RT SOLUTIONS PTE LTD",
  addressLines: [officeAddressLine1, officeAddressLine2],
  directionsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "RT Solutions Pte Ltd, 237 Pandan Loop, #04-07 Westech Building, Singapore 128424"
  )}`,
};

export const dealerForm = {
  id: "dealer",
  eyebrow: "BECOME A PARTNER",
  title: "Want to Be a Dealer?",
};

export const dealerProducts = [
  "All Products",
  "Hospital Effluent Treatment System",
  "Biomedical Liquid Waste Treatment System",
  "Biomedical Liquid Disinfection System",
];

export const ownershipTypes = ["Partnership/LLP", "Pvt / Public Ltd", "Sole Proprietorship"];

export const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba",
  "Cyprus", "Czech Republic (Czechia)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay",
  "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];
