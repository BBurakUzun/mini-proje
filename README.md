# Mini Proje: Docker Service Uygulaması

Bu proje, Node.js ile yazılmış basit bir web app ile MySQL veritabanını birlikte çalıştıran çoklu servisli bir Docker uygulamasıdır.


### Kurulum

1. Bu projeyi klonlayın:

```bash
git clone https://github.com/bburakuzun/mini-proje.git
cd mini-proje
```

## Başlatmak için

```bash
docker compose up --build
```

## Uygulama Adresi
http://localhost:3000

## Proje Yapısı
```bash
mini-proje/
├── Dockerfile
├── .env
├── compose.yaml
├── .dockerignore
├── README.md
├── src/
│   ├── index.js
│   ├── package.json
│   ├── package.json
│   └── db/
│       └── init.sql
```

## API Kullanımı

Yeni ziyaretçi ekle
```bash
curl -X POST http://localhost:3000/visitors
```

Ziyaretçileri göster
```bash
curl http://localhost:3000/visitors
```

## Kullanılan Teknolojiler

Node.js (Express)

MySQL 8

Docker & Docker Compose


## Notlar
Veritabanı ilk başlatıldığında init.sql dosyasındaki komutlar çalışır.

Ortam değişkenleri .env dosyasından okunur.

compose.yaml dosyasındaki ortam değişkenleri şunlardır:
MYSQL_ROOT_PASSWORD: 123

Veritabanı ve tablolar, src/db/init.sql dosyası içinde tanımlanmıştır.
Node.js uygulaması, bu ayarlar ile miniproje adlı veritabanına root kullanıcısı üzerinden bağlanır:

| Ayar     | Değer     |
| -------- | --------- |
| DB\_HOST | db        |
| DB\_USER | root      |
| DB\_PASS | 123       |
| DB\_NAME | miniproje |
| PORT     | 3000      |

## Lisans
Bu proje MIT lisansı ile lisanslanmıştır.

