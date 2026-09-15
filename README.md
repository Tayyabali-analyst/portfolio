# Tayyab Ali Portfolio

A responsive static portfolio for Tayyab Ali, Data Analyst.

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension. No build step or dependencies are required.

## Customize

- Edit portfolio content through `/admin/` after completing the Decap CMS setup below.
- Adjust colors and layout in `styles.css`.
- Update interactions in `script.js`.
- Uploads made in Decap are stored in `assets/uploads` and referenced by `content/data.json`.

## Decap CMS setup

1. Use the GitHub repository `Tayyabali-analyst/portfolio`. The CMS currently commits to the isolated `admin-cms-feature` branch.
2. Push this project, including `content/data.json`, `admin/index.html`, and `admin/config.yml`, to that repository.
3. Configure a GitHub OAuth application. Set its callback URL to `https://api.netlify.com/auth/done` and use the OAuth client ID in the Netlify/Decap OAuth provider. Do not commit the client secret.
4. Deploy the repository to Vercel. Set the production domain, enable automatic deployments from `main`, and confirm that `/content/data.json` and `/admin/` are publicly reachable.
5. Point the Namecheap domain DNS at Vercel using the records Vercel supplies. Add both the apex domain and `www` in Vercel, then wait for HTTPS to become active.
6. Open `https://your-domain.example/admin/`, sign in with GitHub, and verify that a small content edit creates a commit on `admin-cms-feature` and triggers a preview deployment.

## Merge after testing

1. Confirm the feature branch is clean and the preview site works, including `/admin/`, image uploads, certificate links, mobile layout, and a fresh content edit.
2. In `admin/config.yml`, change `branch: admin-cms-feature` to `branch: main` and commit that change on `admin-cms-feature`.
3. Push the branch and open a pull request from `admin-cms-feature` into `main` on GitHub. Review the changed files and merge the pull request; do not force-push or reset `main`.
4. After merging, confirm Vercel deploys `main`, then open `/admin/` on the production domain and make one harmless test edit. Decap should create the commit on `main`.
5. Delete the remote feature branch only after production verification. Keep a local copy if you want to retain the test history.

### Admin access boundary

Decap is a browser application, so a static `/admin/` URL cannot be made invisible or blocked from being downloaded by username alone. GitHub repository permissions are the write boundary: keep the repository private or ensure only your GitHub account has write access, and use a GitHub OAuth app/proxy that allows only your account. Other visitors may still retrieve the admin HTML and see the login screen; they cannot commit unless GitHub grants them repository write access. To enforce a true allowlist before the login screen, add an authenticated serverless/OAuth gateway in front of `/admin/` and validate the GitHub user ID there.

### Important deployment security note

The local `.env.local` file contains a Vercel token. Keep it out of Git, rotate it in Vercel if it has ever been exposed, and store replacement secrets only in Vercel environment variables or your local untracked environment file.
