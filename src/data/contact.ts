// Contact page — non-text data (addresses, numbers, option values).
// All visible text is translated in src/i18n/messages/contact.ts.
// Content mirrors https://ecoklien.com/contact/

export interface ContactChannel {
  value: string;
  href: string;
}

export const contactEmails: ContactChannel[] = [
  { value: "sales@ecoklien.com", href: "mailto:sales@ecoklien.com" },
  { value: "captvj@ecoklien.com", href: "mailto:captvj@ecoklien.com" },
];

export const contactPhones = {
  singapore: { value: "+65 8834 8223", href: "tel:+6588348223" },
  india: { value: "+91 7418642999", href: "tel:+917418642999" },
} satisfies Record<string, ContactChannel>;

export const salesEmailHref = "mailto:sales@ecoklien.com";

export const officeDirectionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "RT Solutions Pte Ltd, 237 Pandan Loop, #04-07 Westech Building, Singapore 128424"
)}`;

export const dealerFormId = "dealer";

/** Option values are submitted in English; labels are translated in messages. */
export const dealerProductValues = ["all", "hospital-effluent", "biomedical-liquid-waste", "biomedical-disinfection"] as const;
export const ownershipTypeValues = ["partnership-llp", "pvt-public-ltd", "sole-proprietorship"] as const;

export type DealerProductValue = (typeof dealerProductValues)[number];
export type OwnershipTypeValue = (typeof ownershipTypeValues)[number];

/** Country names stay in English so applications reach the sales team in one consistent form. */
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
