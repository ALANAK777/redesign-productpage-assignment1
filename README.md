# Front-End Development Internship Assignment

## Project Setup

Before starting, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

To set up the project:

1. Clone this repository
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## Assignment Tasks

### Task 1: Redesign the Home Page

The current home page needs a redesign. The home page is located in `src/views/Home/index.tsx` and its related components are in `src/views/Home/components/`.

Requirements:
- Improve the visual appeal of the home page while maintaining the core functionality
- Ensure the page is responsive and works well on mobile, tablet, and desktop devices
- Optimize performance where possible
- Maintain the existing component structure, but feel free to add new components as needed
- Follow standard SaaS landing page UI protocols and design standards:
  - Clear hero section with compelling value proposition
  - Feature highlights with proper visual hierarchy
  - Social proof sections (testimonials/logos if applicable)
  - Clear CTAs (Call-to-Actions) throughout the page
  - Consistent spacing, typography and color system
  - Accessible design practices (contrast ratios, focus states, etc.)
  - Visual elements that communicate the product's purpose

### Task 2: Create Shared Routes Configuration

Currently, routes are defined in two separate files:
- `src/configs/routes.config/authRoute.ts` - for unauthorized users
- `src/configs/routes.config/routes.config.ts` - for authorized users

Your task is to:

1. Create a new configuration file named `src/configs/routes.config/sharedRoutes.ts`
2. This file should export an array of route objects with the same structure as in the existing config files
3. Implement the system so that routes defined in this new file are accessible to both authorized and unauthorized users
4. Ensure that when you add a new route to this shared config, it works without any additional configuration

### Task 3: Change Default Path

Currently, the application uses `/hello` as the default path (defined in `src/configs/app.config.ts`).

Requirements:
- Modify the configuration files to change the default path from `/hello` to `/`
- This should be done by only changing the configuration files, not by modifying the actual components
- Ensure that the home page is properly rendered at the root path (`/`)
- The change should work for both authorized and unauthorized users

## Submission Guidelines

1. Fork this repository
2. Complete the assignments
3. Push your changes to your forked repository
4. Submit the URL of your repository

## Evaluation Criteria

Your submission will be evaluated based on:
- Code quality and organization
- Visual design and user experience
- Proper implementation of routing configurations
- Attention to detail
- Performance considerations
- Ability to follow instructions

## References: Top SaaS Landing Pages to Inspire

Study these top-performing SaaS landing pages for inspiration:

- **Asana**: Known for amazing typography and a visually appealing layout that clearly communicates value.
- **HubSpot**: Combines clear messaging, engaging visuals, social proof, and intuitive CTAs to capture attention and drive action.
- **Airtable**: Features an animated product demo and strong social proof with logos from major brands like Netflix and Shopify, making complex offerings easy to understand.
- **SEMrush**: Demonstrates strong SaaS landing page design principles with a unique and compelling presentation.
- **Canva**: Offers a visually stunning page that quickly communicates product value, inspiring effective SaaS landing page design.
- **Moz**: Provides a high-converting design focused on SEO tools, combining clarity and persuasion.
- **Help Scout**: Delivers an informative and visually appealing landing page that communicates product value effectively.
- **Shopify**: Known for a well-written, persuasive landing page with a unique value proposition and customization options.
- **Talon.One**: Persuasively presents features and benefits aimed at converting visitors into leads or trial users.
- **Evernote**: Covers all essential elements of a SaaS landing page, creating a comprehensive and effective user experience.
- **Monday.com**: Uses clever design to present product capabilities interactively, with clear support options highlighted.
- **Other notable examples**: Mixpanel, Trinet, OpenPhone, SurveyMonkey, Jira, Squarespace, and Twilio Segment

Take time to visit these sites and analyze what makes them effective before starting your redesign.

Good luck!

## Completed Tasks

All tasks for this assignment have been successfully completed:

### Task 1: Redesigned Home Page ✅
- Created a modern dark-themed SaaS design with deep blue color scheme
- Implemented animated background elements with gradients and grid patterns
- Enhanced the visual appeal with glassmorphism effects and subtle animations
- Developed a comprehensive UI with the following sections:
  - Modern hero section with animated backgrounds and trust indicators
  - "Trusted By" logo section with brand logos
  - Feature highlights with card hover effects
  - Tech stack integration section
  - Interactive prompting section with code examples
  - Testimonials section with customer reviews
  - Pricing section with multiple plan options
  - FAQ section with category filtering
  - Call-to-action section
  - Contact form with modern styling
  - Footer with links and social icons
- Added animations including scroll reveal, floating elements, and hover effects
- Ensured responsive design across all device sizes
- Maintained consistent styling and visual hierarchy throughout

### Task 2: Created Shared Routes Configuration ✅
- Created the `src/configs/routes.config/sharedRoutes.ts` file
- Implemented route configuration for routes accessible to both authorized and unauthorized users
- Set up the home route in the shared configuration
- Ensured routes can be added to this shared config without additional configuration

### Task 3: Changed Default Path ✅
- Modified the configuration in `src/configs/app.config.ts` to change the default path from `/hello` to `/`
- Updated routes to ensure the home page is properly rendered at the root path
- Verified the change works correctly for both authorized and unauthorized users
- Completed the task by only modifying configuration files, without changing components

All requirements have been met, and the application now features a modern, visually appealing design with properly configured routing.
