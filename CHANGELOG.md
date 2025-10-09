# eslint-config-nice-nextjs

## 0.3.0

### Minor Changes

- 24bead8: Fix the misconfigured react-hooks plugin. Also, require the minimum version 7 as it supports natively flat config.

### Patch Changes

- 0c30e9b: Enable back all react plugin and jsx runtime rules with flat config.
- aad2fd9: Redesign how config is tested. Require errors to be present selectively.

## 0.2.0

### Minor Changes

- 1e6146a: Test config on the example production next.js app with both success and failing rules
- d18f160: Removed 70% of dependencies previously used by this config.

### Patch Changes

- 38a7e8a: Removed the kludge regarding TypeScript definitions and unofficial usage of the Next.js plugin.
- 54ae036: Rewrite from scratch eslint-config-love and eslint-plugin-next composition. Fix type and compatability errors. Reduce complexity of dependencies required for this eslint config.

## 0.1.6

### Patch Changes

- 8fedf3f: Fix versioning

## 0.1.5

### Patch Changes

- bf28546: Allow zero and one magic number

## 0.1.4

### Patch Changes

- 46b29f3: More informative readme

## 0.1.3

### Patch Changes

- acfc874: Fix deps

## 0.1.2

### Patch Changes

- f1f78ee: Fix package access

## 0.1.1

### Patch Changes

- 05694a5: Publish only compiled files

## 0.1.0

### Minor Changes

- cc3f52e: Initial releae
