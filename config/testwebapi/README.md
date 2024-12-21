# WCAG Requirements

## [Text Alternatives](https://www.w3.org/TR/WCAG21/#text-alternatives)

### [1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content)

- [ ] All non-text content has a text alternative that serves the equivalent purpose

- [ ] Controls/Inputs - have descriptive Title, Names, Description/Instructions
- [ ] Content used only for visual formatting can be ignored by assistive technology
- [ ] At minimum, there's a descriptive identification of the content
- [ ] Invisible content - Is/can be ignored by assistive technology `aria-hidden="true"`

- [ ] Images - have `alt`.
- [ ] Images **Decorative** - use empty `alt`.
- [ ] Images **Complex** (e.g., graphs) - `alt` (longer descriptions available).

- [ ] Buttons with **Only Icons** - have `alt` or `aria-label` with `aria-description` or `aria-labeledby` with `aria-describedby`
- [ ] Form inputs - have labels `<label/>`.
- [ ] Audio players - have text transcripts available `WebVTT AP`
- [ ] Video players - have captions and audio descriptions available - `WebVTT AP` [mdn](https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [ ] CAPTCHAs - Accessible offers, multiple solving methods (e.g., audio and visual)

#### TEST

- [ ] Tested forms with a screen reader to ensure all inputs are labeled
- [ ] Checked that CAPTCHAs are accessible or have accessible alternatives

## [1.4.12 Text Spacing](https://www.w3.org/TR/WCAG21/#text-spacing) | VISUAL

- [ ] [Line height (minimum `x1.5` of font size)](<https://www.w3.org/TR/WCAG21/#text-spacing:~:text=Line%20height%20(line%20spacing)%20to%20at%20least%201.5%20times%20the%20font%20size%3B>)
- [ ] [Spacing between paragraphs (minimum `x2` of font size)](https://www.w3.org/TR/WCAG21/#text-spacing:~:text=Spacing%20following%20paragraphs%20to%20at%20least%202%20times%20the%20font%20size%3B)
- [ ] [Letter Spacing (minimum `x0.12` of font size)](<https://www.w3.org/TR/WCAG21/#text-spacing:~:text=Letter%20spacing%20(tracking)%20to%20at%20least%200.12%20times%20the%20font%20size%3B>)
- [ ] [Word Spacing (minimum `x0.16` of font size)](https://www.w3.org/TR/WCAG21/#text-spacing:~:text=Word%20spacing%20to%20at%20least%200.16%20times%20the%20font%20size.)
