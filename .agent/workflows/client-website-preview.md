---
description: Generate and deploy a client website preview based on business information.
---

1.  **Parse Business Information**

    I will analyze your request to extract the following business details:
    *   **Business Name** (Required)
    *   **Phone Number** (Required)
    *   **Address/Service Area** (Required)
    *   **Services Offered** (Optional)
    *   **Hours** (Optional)
    *   **Testimonials** (Optional)

    If any *required* information is missing or ambiguous in your initial prompt, I will ask you for it before proceeding. I will NOT prompt you if the info is already present.

    I will also generate a `kebab-case` branch name from the Business Name (e.g., "Bob's Trees" -> `bobs-trees`).

2.  **Create Git Branch**

    I will create a new branch in the `hmseeb/client-previews` repository.
    *   Branch from: `main`
    *   Branch name: `[kebab-business-name]`
    *   If the branch already exists, I will ask if you want to overwrite it or use a different name.

    ```
    github:create_branch(repo="client-previews", owner="hmseeb", branch="[branch_name]", from_branch="main")
    ```

3.  **Generate Assets (Parallel)**

    I will generate the necessary images using `generate_image` tool:
    *   **Hero Image**: A professional scene matching the business type. Save to `public/images/hero.png`.
    *   **Gallery Images**: 4 realistic project photos. Save to `public/images/gallery-1.png` through `public/images/gallery-4.png`.

    **CRITICAL**: After generating images, copy them from the generated path to the `public/images/` directory. Create the directory if it does not exist.
    
    *   **Fallback**: ONLY if image generation explicitly fails, use the relevant Unsplash URLs provided in `.claude/skills/fallback-images.md`.

4.  **Scaffold & Implement Website**

    I will overwrite the existing files in the repository with the customized website code. I will *not* run `npm create vite`.

    I will update/create the following files using the content in `.claude/skills/SKILL.md` and `.claude/skills/design-system.md` as a guide:
    *   `package.json`: Update `name` to match branch name.
    *   `index.html`: Update `<title>` and `<meta name="description">`.
    *   `src/index.css`: Ensure design system tokens (colors, fonts) are present.
    *   `src/App.jsx`: Complete implementation including:
        *   Hero Section (with generated/fallback image)
        *   Services Grid
        *   Testimonials
        *   Contact Form
        *   Footer
    *   `src/main.jsx`: Ensure correct mounting.

5.  **Deploy**

    I will commit and push the changes to GitHub.

    ```
    github:push_files(repo="client-previews", owner="hmseeb", branch="[branch_name]", message="feat: generate preview for [Business Name]", files=[...])
    ```

6.  **Deliver**

    I will provide you with the live preview URL.

    **URL Pattern:**
    `https://client-previews-git-[branch]-badaaas.vercel.app`

    (Note: Deployment may take a minute. If the link doesn't work immediately, wait 30-60 seconds and refresh.)
