# Uninus PKM

## Didalam Repo ini terdapat 3 Aplikasi:

- Pasar Desa
- Wisata Desa
- Layanan Desa Terpadu

## Demo Aplikasi

-

# WAJIB Setup Husky

Untuk bisa menggunakan husky agar berjalan baik dan benar maka perlu di inisialisasi dulu

- Jalankan perintah
  > `npx husky install`

# Cara Menggunakan GIT dengan Baik dan Benar

### Jika Kamu baru di Project ini maka kamu bisa ke Section Installasi

# Cara Berkontribusi di Project Ini

# Di Mohon jangan PUSH Langsung ke Branch "develop"

## Aturan Branching ( Percabangan )

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git checkout -b "improvement/apa-yang-di-improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git checkout -b "bugfix/apa-yang-di-fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git checkout -b "feature/fitur-apa-yang-di-buat`

## Aturan Commit

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git commit -m "improvement: apa yang di improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git commit -m "bugfix: apa yang di fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git commit -m "feature: fitur apa yang di buat`

## Rekomendasi Kode Editor

Visual Studio Code

### Rekomendasi Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier
- Error Lens
- ESLint

## Menyiapkan Projek

- Clone Projek Dengan SSH ( Direkomendasikan menggunakan SSH )

  > `git clone git@github.com:uninus-opensource/uninus-pkm.git`

- Clone Projek Dengan HTTPS

  > `git clone https://github.com/uninus-opensource/uninus-pkm.git`

## Memasang _Dependency_

- Pasang _Dependency_

  > `npm install`

## Menjalankan Aplikasi di Lokal

- Untuk menjalankan Projek _Backoffice_ dengan mode **Development** ketik perintah berikut

  > `npm run web:backoffice:dev`

- Untuk menjalankan Projek _Backoffice_ dengan mode **Production** ( Perlu dilakukan Build terlebih dahulu ) ketik perintah berikut

  > `npm run web:backoffice:start`

- Untuk menjalankan Projek _API Backoffice_ dengan mode **Development** ketik perintah berikut

  > `npm run api:backoffice:dev`

- Untuk menjalankan Projek _API Backoffice_ dengan mode **Production** ( Perlu dilakukan Build terlebih dahulu ) ketik perintah berikut

  > `npm run api:backoffice:start`

## Mem*Build* Aplikasi ke _Production_

- Untuk mem*build* Projek _Backoffice_ ketik perintah berikut

  > `npm run web:backoffice:build`

- Untuk mem*build* Projek _API Backoffice_ ketik perintah berikut

  > `npm run api:backoffice:build`

## Mem*Build* Aplikasi ke _Production_ Menggunakan Docker

Anda perlu menginstall _Docker_ terlebih dahulu

- Untuk menginstall docker sesuai dengan Sistem Operasi anda, bisa mengunjungi link berikut https://docs.docker.com/install/

- Untuk mem*build* Projek _Backoffice_ Dengan _Docker_ ketik perintah berikut

  > `npm run web:backoffice:container`

- Untuk mem*build* Projek _API Backoffice_ Dengan _Docker_ ketik perintah berikut

  > `npm run api:backoffice:container`

## _Development_ Dengan _NIX_

_Development_ dengan Nix membuat proses Develop menjadi lebih mudah dan ringkas, semua dependency akan terurus dengan sendirinya, juga independent artinya tidak akan menggangu environment yang lain

- Pasang Nixpkgs

> `sh <(curl -L https://nixos.org/nix/install) --no-daemon`

- Pasang nix-flakes

> `nix-env -iA nixpkgs.nixFlakes`

- Setup nix-flakes \
  Edit file yang ada di `~/.config/nix/nix.conf` atau `/etc/nix/nix.conf` dan tambahkan:

> `experimental-features = nix-command flakes`

- Pasang nix-direnv

> `nix-env -f '<nixpkgs>' -iA nix-direnv`

- Setup nix-direnv

> `source $HOME/.nix-profile/share/nix-direnv/direnvrc`

- Masuk ke folder yang sudah di clone kemudian jalankan perintah berikut

> `direnv allow`

- Dan enjoy tinggal tunggu dependency terinstall dengan sendirinya

## Setup Env

Masuk kedalam folder `apps/nama-apps/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`
