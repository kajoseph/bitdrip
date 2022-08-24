
<details>
<summary> Create a Certificate </summary>

## STEP 1: create the root CA

openssl genrsa -des3 -out MyLocalCA.key 2048

openssl req -x509 -new -nodes -key MyLocalCA.key -sha256 -days 1825 -out MyLocalCA.pem

sudo cp MyLocalCA.pem /usr/local/share/ca-certificates/MyLocalCA.crt

sudo update-ca-certificates

> NOTE: to remove \
> `sudo rm /usr/local/share/ca-certificates/MyLocalCA.crt` \
> `sudo rm /etc/ssl/certs/dev.local.pem` \
> `sudo update-ca-certificates`


## STEP 2: create the CSR

openssl genrsa -out dev.local.key 2048

openssl req -new -key dev.local.key -out dev.local.csr

nano dev.local.ext

(copy and paste)
```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.2 = dev.local
```

openssl x509 -req -in dev.local.csr -CA MyLocalCA.pem -CAkey MyLocalCA.key -CAcreateserial -out dev.local.crt -days 1825 -sha256 -extfile dev.local.ext

openssl x509 -in dev.local.crt -out dev.local.der -outform DER
openssl x509 -in MyLocalCA.pem -out MyLocalCA.der -outform DER
openssl x509 -in MyLocalCA.pem -out MyLocalCA.crt -outform DER
cp MyLocalCA.pem MyLocalCA.crt

sudo nano /etc/hosts
Add `127.0.0.1		dev.local`

</details>

<details>
<summary>Client</summary>

## Webpack

```
devServer: {
	port: 9000,
	compress: true,
	https: true,
	host: 'dev.local',
	key: fs.readFileSync(__dirname + '/../../ssl/dev.local.key'),
	cert: fs.readFileSync(__dirname + '/../../ssl/dev.local.crt')
},
```

```
npm install
npm start
```

</details>

<details>
<summary>Server</summary>

Dependencies:
- MongoDB
- NodeJS

Use `.config.example.js` as a template for your `.config.js` file.

Create a `.env` file and add NODE_ENV=development and any (optional) DB connection env vars you wish.

Example `.env`:
```
NODE_ENV=development
BITDRIP_DB_NAME=bitdrip_dev
```

Start the server

```
npm install
npm start
```
</details>