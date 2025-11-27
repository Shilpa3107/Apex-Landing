# Apex Landing Page

This is a modern, responsive landing page template for a fictional SaaS company called "Apex Landing". It's built with Next.js, Tailwind CSS, and ShadCN UI components.

## ✨ Features

*   **Hero Section:** An engaging introduction to capture user interest.
*   **Features:** A section to highlight the key benefits of your product.
*   **Testimonials:** Build social proof with quotes from satisfied customers.
*   **Pricing:** A clear and easy-to-understand pricing table.
*   **Responsive Design:** Fully optimized for a great experience on any device, from mobile phones to desktops.
*   **Dark Mode:** Includes a dark mode theme.

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **AI:** [Genkit](https://firebase.google.com/docs/genkit)

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Shilpa3107/Apex-Landing.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Apex-Landing
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 📁 Project Structure

The project follows a standard Next.js App Router structure, with a clear separation of concerns:

-   `src/app/`: Contains the core application logic, including pages and layouts.
    -   `page.tsx`: The main entry point for the landing page.
    -   `layout.tsx`: The root layout for the application.
    -   `globals.css`: Global styles and Tailwind CSS configuration.
-   `src/components/`: Home to all React components.
    -   `landing/`: Components specifically designed for the landing page (e.g., `HeroSection`, `Footer`).
    -   `ui/`: Reusable, general-purpose UI components provided by ShadCN (e.g., `Button`, `Card`).
-   `src/lib/`: Includes utility functions and helper modules.
    -   `utils.ts`: Common utility functions, such as `cn` for combining class names.
    -   `placeholder-images.ts`: Manages placeholder image data for the UI.
-   `src/ai/`: Contains Genkit flows and AI-related functionality.
-   `public/`: Stores static assets like images and fonts that are served directly.
-   `package.json`: Lists project dependencies and defines npm scripts.

## 📝 Documentation

Clarity in documentation is a priority for this project. We strive to maintain a clean and understandable codebase, with JSDoc comments for complex logic where necessary. The goal is to make the project easy to navigate, maintain, and extend for any developer.

## 📜 Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Lints the code to catch errors.
