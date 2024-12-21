# MUST HAVE

📏♻️🦄

- [ ] Special Support
  - [ ] Printers (Where needed)
  - [ ] Accessibility - WCAG 2.1 or 3.0
  - [ ] Contrast
    - [ ] more (default)
    - [ ] lower
- [ ] 📏 Responsivenes
  - [ ] 📺 TV support
  - [ ] 🖥️ Desktop
    - [ ] MD 2560px
    - [ ] LG 1440px
    - [ ] XL 1024px
  - [ ] 💻 Tablet 768px
  - [ ] 📱 Mobile
    - [ ] S 425px
    - [ ] M 375px
    - [ ] L 320px
- [ ] ⚡ Optimized

  - [ ] Use CDN's
  - [ ] Caching Files (CSS/JS with naming `fileName.cacheTag.ext`)
  - [ ] CSS
  - [ ] Javascript
    - [ ] ♻️ Minify and Compress (Code-Splitting, Lazy Loading, Memoizing/Cache'ing, treeshake, optimize etc)
    - [ ] Async Loading
    - [ ] Load at the End of the Body (`<script>` tags at bottom of body)
    - [ ] Priority Loading

- [ ] Maintaining
  - [ ] To Statistics
  - [ ] 📊 Analytics Integration
  - [ ] 🐛 Error Logging and Monitoring
- [ ] 🧪 Testing

  - [ ] Unit Tests
  - [ ] Component Tests
  - [ ] Integration Tests
  - [ ] E2E Tests
  - [ ] Cross-browser compatibility

    - [ ] 📏 Responsivenes
      - [ ] Chrome
      - [ ] Edge
      - [ ] Firefox
      - [ ] Opera
      - [ ] Brave
      - [ ] Safari (webkit)
    - [ ] 📏 CSS
      - [ ] Chrome
      - [ ] Edge
      - [ ] Firefox
      - [ ] Opera
      - [ ] Brave
      - [ ] Safari (webkit)

  - [ ] 100/100 points at `unlighthouse`
    - [ ] 100/100 Performance
    - [ ] 100/100 Accessibility
    - [ ] 100/100 Best Practices
    - [ ] 100/100 SEO
    - [ ] 100/100 CrUX

- [ ] 📱 Progressive Web App (PWA) features
  - [ ] Service Workers
  - [ ] Offline functionality
  - [ ] Add to Home Screen capability

<!--
Use `REM` as **global scalling size reference** - For Font Sizes and No local scalling sizes. </br>
Use `EM` as **Local scalling size reference** - For UI </br>
Use `PX` as **NOT scalling size** - For Effects </br> -->

## Code Requirements

| Use   | as (Why)                                                                                                     | For (Example)                               |
| ----- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `REM` | **global scalling size reference (For Tags `html`/`:root` fontsize) (For @media - user config, basic 16px)** | For Font Sizes and No local scalling sizes. |
| `EM`  | **Local scalling size reference**                                                                            | For UI                                      |
| `PX`  | **NOT scalling size**                                                                                        | For Effects                                 |

- [ ] `html` or `:root` - `font-size` using `REM` (px is not scalling with user config)
- [ ] All `font-size` using `REM`
- [ ] All `width` and `heights` etc using `EM`
- [ ] All Effects like `blur()` using `px`

- [ ] All @media `min-width` using `REM`

## SUPPORTS

- [ ] `@meta` High Contrast Mode (`forced-colors`)
- [ ] `@meta` X Contrast Mode (`prefers-contrast:more`)
- [ ] `@meta` X Contrast Mode (`prefers-contrast:custom`)

## Video or audio

- [ ] Transcription `WebVTT AP`

## SUPPORT

### High Contrast (forced-colors: active)

- [ ] Basic Outline 3px transparent
