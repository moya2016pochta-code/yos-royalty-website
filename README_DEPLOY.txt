YOS ROYALTY LLC — STATIC WEBSITE

Files:
- index.html
- about.html
- telecommunications.html
- real-estate.html
- ventures.html
- contact.html
- assets/styles.css
- assets/script.js
- CNAME / robots.txt / sitemap.xml

FREE HOSTING OPTION: GitHub Pages
1. Create a free GitHub account if needed.
2. Create a new public repository named yosroyalty-site.
3. Upload all files/folders from this package to the repository root.
4. Go to Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select branch main and folder /(root), then Save.
7. GitHub will publish a temporary github.io URL.
8. In Settings > Pages > Custom domain, enter yosroyalty.com.
9. In Porkbun DNS, add the DNS records GitHub displays/recommends for a custom apex domain.
10. Wait for DNS propagation, then enable Enforce HTTPS in GitHub Pages.

IMPORTANT:
- The contact form currently opens the visitor's email app (mailto). It has no backend.
- The Telecommunications page includes a reserved block for a future Vomtel/provider widget.
- Text is intentionally general and does not claim unauthorized affiliation with any telecom provider.

MANAGING CAREERS POSTINGS
1. Open opportunities.json in GitHub and click the pencil icon.
2. Copy the template entry, keeping entries separated with commas. Fill in the title, location, start, description and requirements. Use project, technician or subcontractor for category. Start and requirements may be empty.
3. Set status to open and commit to the Pages publishing branch. Use closed to remove an announcement from the active list.
4. Check careers.html after GitHub Pages deploys. The Apply link opens an email to info@yosroyalty.com with the listing title in the subject.
Only put public information in this repository. Entries with draft or closed status are hidden on the Careers page, but the JSON file is public.
