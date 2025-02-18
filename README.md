# Satsie's zine translation boilerplate

For bitcoiners far & wide, I created this to translate a short zine on BIPs created by the half-Thai
half-awesome (same half) [@satsie](https://github.com/satsie) found [here.](https://satsie.dev/bips)

This repository is meant to be used with Visual Studio Code with the recommended extension

* `yzane.markdown-pdf` listed in recommended extensions
  (repository: [vscode-markdown-pdf](https://github.com/yzane/vscode-markdown-pdf) by [@yzane](https://github.com/yzane))

## Current roster

- All about BIPs
  * [🇬🇧](./bips.md) - [pdf](./bips.pdf)
  * [🇹🇭](./bips.th.md) - [pdf](./bips.th.pdf)

- Payjoin
  * [🇬🇧](./payjoin.md) - [pdf](./payjoin.pdf)
  * [🇹🇭](.) - [pdf](.)

## Usage

1. Create a copy from the Markdown file, for exampple we will use `bip.md` containing original
  contents to your desired language. (Recommend renaming to `bip.xx.md` with xx denoting language,
  following after Thai translated zine convention, `bip.th.md`)
1. One paragraph at a time, translate the contents of the "All about BIPs" zine to desired language.
1. Use the command palette to turn your new markdown `bip.xx.md` to PDF file ready for print.
1. Hand out at local conferences and meetups. New bitdevs are found everywhere.

### Command Palette

1. Press `F1` or `Ctrl+Shift+P`
1. Type `export` and select below
   * `Markdown PDF: Export (pdf)`
1. Sometimes hangs. When unsuccessful, try try again.
1. Voila!

### Tips

1. Use `<bitcoin></bitcoin>` tag in your translation to inject "bitcoin" with original branding
  using bold and italicized Ubuntu font.

## Demonstration

![demonstration](./static/demo.gif)

### Acknowledgements

1. "Mali" typeface by [Cadson Demak](https://github.com/cadsondemak/Mali) `SIL Open Font License 1.1`
1. `bitcoin` logo font "Ubuntu" by [Dalton Maag](https://design.ubuntu.com/font)
  `...distributed under an open licence and you are expressly encouraged to experiment, modify, share and improve.`
1. [HereComesBitcoin](https://www.herecomesbitcoin.org/) for vector assets
1. [SVGRepo](https://www.svgrepo.com/) and [Freepik](https://freepik.com) for various vector assets

## License

This project is licensed under the terms of the MIT license.