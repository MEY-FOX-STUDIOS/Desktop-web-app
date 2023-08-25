The Electron framework lets you write cross-platform desktop applications
using JavaScript, HTML and CSS. It is based on [Node.js](https://nodejs.org/) and
[Chromium](https://www.chromium.org) and is used by the [Atom
editor](https://github.com/atom/atom) and many other [apps](https://electronjs.org/apps).

Follow [@electronjs](https://twitter.com/electronjs) on Twitter for important
announcements.

And Follow [@MeyFox_Org](https://meyfox_org.t.me) on Telegram Channel.

This project adheres to the Contributor Covenant
[code of conduct](https://github.com/electron/electron/tree/main/CODE_OF_CONDUCT.md).

## Installation

To install prebuilt Electron binaries, use [`npm`](https://docs.npmjs.com/).
The preferred method is to install Electron as a development dependency in your
app:

```sh
npm install
composer install
```


For more installation options and troubleshooting tips, see
[installation](docs/tutorial/installation.md). For info on how to manage Electron versions in your apps, see
[Electron versioning](docs/tutorial/electron-versioning.md).

## Platform support

Each Electron release provides binaries for macOS, Windows, and Linux.

* macOS (High Sierra and up): Electron provides 64-bit Intel and ARM binaries for macOS. Apple Silicon support was added in Electron 11.
* Windows (Windows 10 and up): Electron provides `ia32` (`x86`), `x64` (`amd64`), and `arm64` binaries for Windows. Windows on ARM support was added in Electron 5.0.8. Support for Windows 7, 8 and 8.1 was [removed in Electron 23, in line with Chromium's Windows deprecation policy](https://www.electronjs.org/blog/windows-7-to-8-1-deprecation-notice).
* Linux: The prebuilt binaries of Electron are built on Ubuntu 20.04. They have also been verified to work on:
  * Ubuntu 14.04 and newer
  * Fedora 24 and newer
  * Debian 8 and newer

## Quick start & Electron Fiddle

Use [`Electron Fiddle`](https://github.com/electron/fiddle)
to build, run, and package small Electron experiments, to see code examples for all of Electron's APIs, and
to try out different versions of Electron. It's designed to make the start of your journey with
Electron easier.

Alternatively, clone and run the
[electron/electron-quick-start](https://github.com/electron/electron-quick-start)
repository to see a minimal Electron app in action:

```sh
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
npm start
```

## Resources for learning Electron

* [electronjs.org/docs](https://electronjs.org/docs) - All of Electron's documentation
* [electron/fiddle](https://github.com/electron/fiddle) - A tool to build, run, and package small Electron experiments
* [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - A very basic starter Electron app
* [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - Sample starter apps created by the community

## Programmatic usage

Most people use Electron from the command line, but if you require `electron` inside
your **Node app** (not your Electron app) it will return the file path to the
binary. Use this to spawn Electron from Node scripts:

```javascript
const electron = require('electron')
const proc = require('child_process')

// will print something similar to /Users/maf/.../Electron
console.log(electron)

// spawn Electron
const child = proc.spawn(electron)
```

## MeyFox Licence

Copyright (C) [2023] [MeyFox]

 This software is released under the [MIT] license.  See the license file for more details.

 This software is provided to the extent possible without warranty of any kind;  EVEN WITHOUT WARRANTY OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE.  The author will not be responsible for any damage or loss, whether contractual or incidental, resulting from the use of the software or the inability to use it.  
 
 This Software is made for Meyfox Personal developers
  
 [Visit Web Site](https://meyfox.ir)


## Contributing

If you are interested in reporting/fixing issues and contributing directly to the code base, please see Issues for more information on what we're looking for and how to get started.

## Community

Info on reporting bugs, getting help, finding third-party tools and sample apps,
and more can be found on the [Community page](https://meyfox.ir).

## License

[MIT](https://github.com/MEY-FOX-STUDIOS/Desktop-web-app/blob/main/LICENSE)

When using Electron logos, make sure to follow [OpenJS Foundation Trademark Policy](https://openjsf.org/wp-content/uploads/sites/84/2021/01/OpenJS-Foundation-Trademark-Policy-2021-01-12.docx.pdf).
