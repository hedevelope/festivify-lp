# Cloudflare Pages Deployment Configuration

## Build Settings

Use these exact settings in your Cloudflare Pages dashboard:

### Framework preset
- **None** (or Vite if available)

### Build command
```bash
npm install && npm run build
```

### Build output directory
```
dist
```

### Root directory (project root path)
```
/
```

### Environment variables
None required

## Node.js Version
The `.node-version` file specifies Node.js 22.16.0 which Cloudflare will automatically use.

## Package Manager
The project uses **npm**. Yarn lock file has been removed to prevent conflicts.

## Troubleshooting

If build fails:
1. Make sure "Build command" is exactly: `npm install && npm run build`
2. Make sure "Build output directory" is: `dist`
3. Clear Cloudflare Pages cache and retry deployment
4. Check that all dependencies are in package.json

## Local Testing

Before deploying, test locally:
```bash
npm install
npm run build
npm run preview
```

The preview should work without errors before deploying to Cloudflare Pages.
