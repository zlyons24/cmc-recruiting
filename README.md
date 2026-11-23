# CMC Recruiting Website

Static website for CMC Recruiting, a sales recruiting firm for commission-based roles. Hosted with GitHub Pages.

## Editing without a computer setup

Everything can be edited right on GitHub:

1. Open a file (e.g. `index.html`) and click the pencil icon.
2. Make your change and click **Commit changes**.
3. The live site updates automatically in about a minute.

## Common edits

| What | Where |
|---|---|
| Contact email, phone, location | `script.js`, the `SITE` block at the top |
| Page text | `index.html` |
| Colors, fonts, spacing | `styles.css` |
| Logo | `assets/logo.webp` (replace with a file of the same name) |

## Files

- `index.html`: page content and sections
- `styles.css`: dark/silver styling to match the logo
- `script.js`: contact info, mobile menu, contact form, scroll animations
- `assets/logo.webp`: logo

## 10DLC / A2P SMS compliance

The site includes what carriers and The Campaign Registry check for:

- **Opt-in on the contact form**: two separate, optional, unchecked checkboxes (recruiting/account texts and job alerts/promotional texts) with brand name, frequency, "Msg & data rates may apply", HELP/STOP, and a "not a condition of service" note.
- **Privacy Policy** (`privacy.html`) with the required "no mobile information will be shared with third parties" language.
- **SMS Terms & Conditions** (`terms.html`) with program description, frequency, rates, STOP/HELP, carrier disclaimer and contact info.
- **Business contact info** in the footer/contact section, filled from the `SITE` block in `script.js`.

Before submitting your campaign, fill in `legalName`, `email`, `phone` and `address` in `script.js`. `legalName` must match your registered brand exactly.

Campaign fields you can paste into Telnyx:

- **Opt-in workflow**: "Users opt in via the contact form at <site URL>#contact by checking an optional, unchecked SMS consent checkbox and providing their mobile number. Disclosures include brand name, message frequency, msg & data rates, HELP/STOP, and links to the Privacy Policy (<site URL>privacy.html) and Terms (<site URL>terms.html)."
- **Sample message 1**: "CMC Recruiting: Hi {name}, your interview with {company} is confirmed for {date} at {time}. Reply STOP to opt out."
- **Sample message 2**: "CMC Recruiting: New commission-based sales role in {city}: {title}. Interested? Reply YES and we'll reach out. Reply STOP to opt out, HELP for help."
- **HELP reply**: "CMC Recruiting: For help, email {email} or call {phone}. Msg & data rates may apply. Reply STOP to opt out."
- **STOP reply**: "CMC Recruiting: You have been unsubscribed and will receive no further messages. Reply START to resubscribe."
- **Opt-in confirmation**: "CMC Recruiting: Thanks for subscribing to recruiting updates. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out."
