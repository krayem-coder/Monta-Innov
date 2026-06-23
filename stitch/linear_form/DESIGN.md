# Design System: Architectural Precision

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Monolithic Gallery."** 

This system moves away from the "busy" nature of traditional web interfaces, instead treating the screen as a curated architectural space. We are not just building a website; we are drafting a blueprint. The experience must feel intentional, silent, and structural. We achieve this through "The Void"—using generous white space (macro-spacing) not as an absence of content, but as a structural element that gives the content its gravitas. By utilizing a strictly neutral palette and sharp, 0px radiuses, we evoke the feeling of raw stone, polished glass, and cold-pressed paper.

## 2. Colors & Tonal Depth
The palette is a study in grayscale. It avoids the "flatness" of digital design by using Material Design tonal tiers to create a sense of physical layering.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined through **Background Color Shifts**. For example, a main content area using `surface` (#f9f9f9) should transition into a footer or sidebar using `surface-container-low` (#f3f3f3) or `surface-container` (#eeeeee). This mimics the way light hits different planes of a building.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked architectural materials:
*   **Base Layer:** `surface` (#f9f9f9) for the overall canvas.
*   **Nested Containers:** Use `surface-container-lowest` (#ffffff) for high-focus cards or elements to make them appear "closer" to the viewer, or `surface-container-high` (#e8e8e8) to recessed elements into the page.
*   **The Signature CTA:** Use `primary` (#000000) against `on_primary` (#e2e2e2) for a high-contrast, authoritative strike.

### Glassmorphism & Texture
To prevent a "dead" neutral look, use `surface_variant` (#e2e2e2) at 60-80% opacity with a `20px` backdrop-blur for navigation bars. This creates a "frosted glass" effect that allows architectural photography to bleed through the UI, maintaining a sense of transparency and light.

## 3. Typography
The typographic system is a dialogue between the classicism of architecture and the efficiency of modernism.

*   **The Serif (Noto Serif):** Used for `display` and `headline` scales. This evokes the history of architectural theory and editorial prestige.
    *   *Strategy:* Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headlines to create a "monolithic" impact.
*   **The Sans (Manrope):** Used for `title`, `body`, and `label` scales. This provides technical clarity and a "blueprint" aesthetic.
    *   *Strategy:* `label-md` should always be uppercase with `0.1rem` letter-spacing to mimic architectural labels on a technical drawing.

## 4. Elevation & Depth
In this system, we do not use shadows to mimic light; we use tone to mimic mass.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` (#ffffff) card sitting on a `surface` (#f9f9f9) background provides all the separation required.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a shadow with a `40px` blur and only `4%` opacity using the `on_surface` color. It should feel like an ambient occlusion, not a "drop shadow."
*   **The Ghost Border:** If a boundary is functional (like an input field), use `outline_variant` (#c6c6c6) at `20%` opacity. Never use a 100% opaque border; it breaks the illusion of a seamless architectural plane.

## 5. Components

### Buttons
*   **Primary:** `primary` (#000000) background, `on_primary` text. Sharp `0px` corners. Padding: `1.4rem` (4) horizontal, `0.85rem` (2.5) vertical.
*   **Secondary:** `surface` background with a "Ghost Border" of `outline`.
*   **Tertiary:** Text-only, `title-sm` scale, uppercase with a thin `1px` underline that expands on hover.

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid 1px horizontal lines between list items. Use spacing scale `8` (2.75rem) to separate items, or alternating subtle background shifts (`surface` to `surface-container-low`).
*   **Image Containers:** Images must always have a `0px` border-radius. In a grid, images should be treated as "windows" into the architectural projects.

### Input Fields
*   **Styling:** Underline-only style using `outline` (#777777). Focus state shifts the underline to `primary` (#000000) and moves the label up using `label-sm` typography.

### Structural Components (New)
*   **The Vertical Rule:** Use a single, tall vertical line (token `px`) using `outline_variant` at 30% opacity to separate side-navigation from main content. This mimics the "column" logic of a building.
*   **The Grid Overlay:** For high-end editorial pages, allow a subtle 12-column grid to be visible in the background using `outline_variant` at 5% opacity to emphasize the "Innovation Design" precision.

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Place a small `label-md` text block far away from a large `display-lg` headline to create "tension."
*   **Do** use the maximum spacing scale `24` (8.5rem) for section breaks to ensure the design "breathes."
*   **Do** ensure all imagery is either high-contrast black and white or desaturated architectural photography.

### Don't
*   **Don't** use border-radii. Every corner in this system must be a sharp 90-degree angle.
*   **Don't** use "Grey" for text when "Black" or "Primary" is available. Lean into high contrast for readability and authority.
*   **Don't** use standard "Success" or "Warning" colors unless absolutely critical for UI feedback. Even then, use them as subtle dots rather than large banners.