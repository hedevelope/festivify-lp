# Festivify - Christmas Mug Shop Component

A beautiful, interactive Christmas-themed mug shop component built with React, TypeScript, and Tailwind CSS. Features animated lordicons, smooth hover effects, and a festive soft green color scheme.

## Features

- 🎄 Christmas-themed UI with soft green color palette
- ✨ Animated lordicon hover effects on product category buttons
- 🎨 Gradient animated navigation links
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- ⚡ Built with Vite for fast development

## Project Structure

```
src/
├── components/ui/
│   ├── festivify-mug-shop.tsx    # Main component
│   └── festivify-mug-shop.css    # Component styles
├── demos/
│   └── default.tsx                # Demo implementation
├── App.tsx                        # App entry point
├── main.tsx                       # React DOM render
└── index.css                      # Global styles
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Type Checking

```bash
npm run lint
```

## Usage

### Basic Usage

```tsx
import { FestivifyMugShop } from './components/ui/festivify-mug-shop';

function App() {
  return <FestivifyMugShop />;
}
```

### With Custom Class

```tsx
import { FestivifyMugShop } from './components/ui/festivify-mug-shop';

function App() {
  return <FestivifyMugShop className="custom-class" />;
}
```

## Component Props

### FestivifyMugShop

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Optional CSS class name |

## TypeScript Types

```tsx
export interface GeneratedAsset {
  key: string;
  data: string | null;
  loading: boolean;
  prompt: string;
  width?: string;
  height?: string;
}

export interface AssetState {
  [key: string]: GeneratedAsset;
}

interface FestivifyMugShopProps {
  className?: string;
}
```

## Tailwind Configuration

The component uses custom Tailwind colors defined in \`index.html\`:

```js
colors: {
  christmas: {
    dark: '#0f172a',
    card: '#1e293b',
    red: '#ef4444',
    green: '#10b981',
    gold: '#fbbf24',
    accent: '#6ee7b7',      // Soft green
    softgreen: '#86efac'     // Lighter green
  }
}
```

## Dependencies

- React 19.2.1
- React DOM 19.2.1
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS (via CDN)
- Lordicon (via CDN)

## Assets

Place your mug images in \`public/components/assets/img/\`:
- \`deer-mug.png\`
- \`christmas-mug.png\`
- \`santa-mug.png\`

## Lordicon Integration

The component uses three animated lordicons:
- \`https://cdn.lordicon.com/hxhedyir.json\`
- \`https://cdn.lordicon.com/hqwrfgja.json\`
- \`https://cdn.lordicon.com/sukpkdnq.json\`

These icons appear randomly around the product category buttons on hover.

## License

MIT
