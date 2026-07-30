---
title: "E-Filing GPS Proofs Without Rejection: How to Attach Location Data That Actually Gets Accepted"
description: "California e-filing systems are notoriously picky about attachments. Here's how to format and submit GPS-verified proof-of-service photos before the 2027 AB 747 deadline — without rejection errors."
pubDate: 2026-07-29
category: "Compliance"
author: "Pete Campbell"
---

# E-Filing GPS Proofs Without Rejection: How to Attach Location Data That Actually Gets Accepted

You've done everything right. You took the GPS photo. The coordinates are burned onto the image. The timestamp matches the proof of service. You log into the e-filing portal, attach the file — and it bounces.

Rejected attachments are one of the most frustrating and least-discussed problems in process serving tech. The documentation exists. The location data is there. But the system won't take it.

With AB 747's GPS photo requirement going live January 1, 2027, this is about to become a much more common problem for a lot more servers. Here's how to avoid it.

---

## Why E-Filing Systems Reject GPS Photos

Before we get into fixes, it helps to understand why rejections happen. California's e-filing ecosystem — dominated by Tyler Technologies' Odyssey platform and a handful of county-specific EFMs (Electronic Filing Managers) — wasn't designed with process server photo attachments in mind. It was designed for attorney documents.

That means the systems have opinions about:

- **File format** — PDFs are expected; raw image files often aren't
- **File size** — most county portals cap attachment size at 25 MB per document, some lower
- **File naming** — special characters, spaces, or non-standard names can trigger parsing errors
- **Document type classification** — if the portal doesn't have a category for "GPS evidence photo," it may reject the upload or misfile it
- **EXIF metadata stripping** — some portals process uploaded files through conversion pipelines that strip EXIF data before storing the document

That last one is the dangerous one. If you upload a JPEG with GPS coordinates in the EXIF metadata and the portal strips it on ingest, you've filed a photo with no verifiable location data. The visible overlay — coordinates burned directly onto the image — is your protection against this.

---

## The Golden Rule: Burn It On, Don't Just Embed It

EXIF metadata is invisible to anyone looking at the photo. It can be stripped by file converters, email clients, and e-filing systems. It can be challenged by opposing counsel as easy to fabricate.

Coordinates burned visibly onto the photo — the timestamp, the GPS coordinates, the reverse-geocoded address overlaid directly on the image — cannot be stripped. What you see is what's in the file.

This distinction matters for e-filing because even if the portal strips EXIF on ingest, the visible data on the photo itself is still there. That's why apps like Timestamp Camera Pro and GPS Map Camera, which burn data onto the image rather than just embedding it in metadata, produce more legally durable documentation than apps that only write to EXIF.

If your current GPS app only writes to EXIF and doesn't overlay visible data on the photo, switch before 2027.

---

## Convert to PDF Before You File

The single most reliable fix for e-filing attachment rejections is converting your GPS photos to PDF before uploading.

Nearly every California e-filing portal accepts PDFs. Most reject raw JPEG or PNG uploads outright, or accept them only in specific document type slots that are difficult to find. A PDF with your GPS photos embedded:

- Gets accepted by every major portal
- Preserves the visible overlay data (since the image is embedded, not converted)
- Allows you to include multiple photos from multiple attempts in one document
- Can include a brief header identifying the case, serve attempt, and address

The conversion is straightforward on any platform:

**On iPhone:** Use the Files app or any PDF converter app. Photos → Share → Print → Pinch out on the preview → Share as PDF. Or use a free app like PDF Expert.

**On Android:** Use Google Photos → Share → Print → Save as PDF. Or use Adobe Scan.

**On desktop:** Open the image in Preview (Mac) or any image viewer → Print → Save as PDF.

Some GPS documentation apps — including ServeManager and ProofServe — will generate a PDF proof package directly that includes the GPS photos already embedded alongside the attempt data. If you're using one of those platforms, use their export function rather than converting photos manually.

---

## File Naming: Small Detail, Real Consequences

E-filing portals parse file names. Names that confuse the parser create rejection errors that look completely unrelated to the actual problem.

**Safe naming conventions:**
- Use only letters, numbers, hyphens, and underscores
- No spaces — use hyphens or underscores instead
- No special characters: no parentheses, ampersands, apostrophes, slashes, or periods except before the extension
- Keep names under 50 characters
- Include the case number, date, and attempt number for your own records

**Examples:**

| ❌ Avoid | ✅ Use |
|---|---|
| `GPS Photo (Attempt #1).pdf` | `GPS-Photo-Attempt-1.pdf` |
| `Smith v. Jones 7/29 serve.pdf` | `Smith-Jones-20260729-Serve1.pdf` |
| `IMG_4827.jpeg` | `CaseNo-12345-GPS-Attempt1.pdf` |

---

## Size Limits by Portal

Most California county e-filing portals use Tyler Technologies' Odyssey platform, which has a 35 MB per document limit and a 50 MB per submission limit. But individual county configurations vary, and some run tighter.

Practical size guidance:

- A single GPS photo as a compressed JPEG: typically 2–5 MB
- Three attempt photos converted to a single PDF: typically 5–15 MB
- A full serve package with GPS photos, cover page, and POS: typically under 25 MB

If you're routinely hitting size limits, compress your photos before conversion. On iPhone, Settings → Camera → Formats → Most Compatible produces smaller files than HEIC. On Android, most camera apps allow you to reduce resolution in settings. For a proof-of-service attachment, you don't need 48-megapixel images — something in the 8–12 MP range at standard compression is plenty.

If a single attempt requires many photos (e.g., gated community, multiple structures, a multi-day serve), split them across two attachments.

---

## Document Type Classification: Where to Put the GPS Photos

When you upload an attachment to an e-filing portal, it asks you to classify the document type. This is where a lot of servers get tripped up, because there's rarely a category labeled "GPS compliance photo" or "serve attempt documentation."

The categories that work — and that clerks are familiar with — vary by county and platform, but generally:

- **"Exhibit"** — the most universally accepted catch-all for supporting documentation
- **"Attachment"** — available in most portals; acceptable for photo evidence
- **"Proof of Service"** or **"POS Attachment"** — if your GPS photos are being filed alongside or as part of a proof of service, this classification is most accurate
- **"Supplemental"** — some counties use this for supporting documentation that isn't the primary filing

Avoid classifying GPS photos as "Declaration" or "Affidavit" unless they're part of a sworn declaration. Mis-classification doesn't always cause a rejection, but it can cause the document to be misfiled in the case record in a way that's hard to retrieve later.

When in doubt, call the court clerk. They process these filings every day and can tell you in thirty seconds what classification they expect.

---

## County-Specific Notes

California has 58 counties. Every one of them has an e-filing portal (or a paper-filing option where e-filing isn't mandated), and the details vary.

**Los Angeles (Odyssey):** Standard Tyler platform. PDF required for photo attachments. Document type "Exhibit" works reliably. 35 MB per document limit. E-filing is mandatory for most civil cases.

**San Diego (Odyssey):** Same platform as LA, same PDF requirement. County has published guidance for process servers on the San Diego Superior Court website — worth bookmarking.

**Sacramento (Odyssey):** PDF required. Some servers report success using "Attachment" classification for GPS photos; others use "Exhibit." Both appear to work.

**Orange County (Tyler One):** Migrated to Tyler One in 2025. Interface differs from classic Odyssey. PDF requirement remains. File size limits are the same.

**Alameda (Odyssey):** Active e-filing mandate. Standard Odyssey behavior applies.

**Small/rural counties:** Some still accept paper filings in lieu of e-filing for certain case types. If you're serving in a county where e-filing isn't mandated for your case type, confirm with the clerk whether GPS photo attachments need to be submitted electronically or can accompany a paper POS.

The Judicial Council maintains an e-filing portal directory at courts.ca.gov — use it to confirm current portal information for any county before your first filing there.

---

## The Metadata vs. Visual Overlay Debate

There's a persistent misconception in the process serving community that EXIF GPS metadata is what makes a photo "legally valid" under AB 747. It's worth clearing this up.

AB 747 requires that GPS coordinates be captured and included in the documentation. It does not specify EXIF as the required mechanism. A photo with GPS coordinates visibly burned onto the image satisfies the requirement just as well — arguably better, because the visual data is harder to challenge and survives file format conversions that strip EXIF.

This matters for e-filing because you shouldn't be relying on EXIF metadata as your only GPS evidence. Portals may strip it. Courts may not know how to read it. Opposing counsel may argue it was added after the fact.

The visible overlay is your primary evidence. EXIF is a backup.

---

## Building a Pre-Filing Checklist

Before you submit any e-filed proof of service with GPS attachments, run through this:

**Documentation check:**
- [ ] GPS coordinates visible on every attempt photo (burned onto image, not just EXIF)
- [ ] Timestamp on each photo matches the attempt time on the POS
- [ ] Address visible in frame or confirmed by reverse-geocode overlay

**File preparation:**
- [ ] Photos converted to PDF
- [ ] PDF file name: letters, numbers, hyphens/underscores only — no spaces or special characters
- [ ] File size under 25 MB (well under if possible)
- [ ] Multiple attempts combined into one PDF where logical

**Portal submission:**
- [ ] Correct document type classification selected (Exhibit or Attachment)
- [ ] File uploads without error before submitting
- [ ] Submission confirmation received and saved

One rejected e-filing creates a gap in your serve timeline that opposing counsel will find. The checklist takes two minutes. The gap can cost you a case.

---

## What If It Still Gets Rejected?

Sometimes you do everything right and the portal rejects the submission anyway. Here's the escalation order:

1. **Read the rejection notice carefully.** Tyler Odyssey rejections include a reason code. The code is often cryptic, but googling it alongside "Tyler Odyssey" will usually surface what it means.

2. **Re-check file name and size.** These are the two most common causes of non-obvious rejections.

3. **Try reclassifying the document type.** If you used "Exhibit," try "Attachment," or vice versa.

4. **Call the e-filing support line.** Tyler Technologies has a customer support line for EFM issues. Court clerk's offices also handle escalated filing questions — they've seen every error code.

5. **Document your attempt.** If you've made a good-faith attempt to e-file and are being blocked by a technical issue, document it: screenshot the rejection error, note the date and time, and contact the clerk in writing. Most courts have provisions for alternative filing when e-filing is technically unavailable.

The goal is to file the documentation. If the system won't cooperate, get that documented too.

---

## The Bottom Line

E-filing GPS proofs isn't complicated once you know the rules the portals actually care about. Convert to PDF. Name your files cleanly. Stay under the size limit. Use "Exhibit" or "Attachment" as your document type. Burn the coordinates visibly onto the photo so they survive any conversion pipeline.

None of this requires new software or expensive tools. It requires a workflow — and the earlier you build it, the more natural it'll be when January 2027 hits and everyone else is scrambling.

You've already done the hard part by being in the field with a GPS camera. Don't let a file naming error be the reason your documentation gets rejected.

---

*Pete Campbell is a registered process server in Amador County, California, and the founder of Served Wire. He covers AB 747 compliance, legal tech, and the business of process serving.*
