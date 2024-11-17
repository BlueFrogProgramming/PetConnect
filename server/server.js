const express = require('express');
const cors = require('cors')
const path = require('path')
const app = express();
const https = require('https')
const multer = require('multer');
const fs = require('fs')

const upload = multer({ dest: 'uploads/' });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://bluefrogprogramming.github.io', 'https://98.81.134.175:3000'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCinImWF+ysQaA2
A3SkChkmYMHQnKKzRfI68+efSfG2dnTDLi3fNx8oS4gaMBe7OoD8TiY55XMMyDqR
EbZvWT02df9erUvtKfZj8TXBHqBb6PX0WV9c9MYy6vh3mTLUgL5TlXUuhpSsyh+b
T0sYQHMt9uiDXRoSgOL8bOjvyHD/Qd+Sgzci5nZ7dzQnXTla7WtFgMn7LrYDX9Da
bQSzdNQhtvoivM6pF8uL/NEhVfcY+lgGHDcq9VnHhgtYjO/xqfSWhaBlxWArLU66
ak1J2ii7rV9kX8imr2q5XD7pvxkSdIUq8eG+TE9q90T8DhfIOeS5bup7kZ3WcyWR
O0rbZF1xAgMBAAECggEAJcwwGQDXpRSeCmAUQTsNrIOKGZUHJpeoHfbqzHZSJoDz
VBkMVZnI9sNT0A6EvaL0L3F05jlE3GBAaM8OsmQyW9HiuZ2bi/WYjZOYVJrrWGHW
peUOSxukZFqExbwI+icw1lnjwpxKu71ByoaMZIc6nqEJW9uMv2dRG66vGGllhpdo
YVFplyDCWuvWXPgfbhIPuaz2Q0HauK536Y50RBlTZ4dG3U2NFHtwaLOv8rv8lDYQ
K5xJY0grX21Cj6OpcM1kDVfw2yd+yNOSuLIUdSxVsOKGJFiH0NhyG+vD2XhPp9Oh
FMEBPorWtTSQHrGL5LTr3xvyAm+wRl7CqbBafbqMLwKBgQDirF3YR8mtquLccueE
735Sqrqnt1P0FK03+dvTs0Z2OGsbaXp9nst9Ug0Msr4qpTX665M0yhOZq+Co5Etf
SNxsw4ZOMmz2sBHG0VBCJDVyks7AvlP0AKFfTPGlu+XIv6zpbL/KAd8ONjvJzZnV
oh5Q+suFh/iG9hijw4Is5yuCswKBgQC3pmH0T6QsvBL0okblXHX2478vnO2FUODI
yb1d08wh/KT0mj8ov+BioBOAMkOMsMI28eBFBrRzI6BPRdhdL6H7kK9Gc8UkUHEe
SUN/wvWJrmydGtA2Q1IY9lRNSJD1Gmb/YdVlX+naB9D2A4f8b+svhMxc9E8Th/vG
vSUHGQQhSwKBgFUtdlpWp5emFnfGie9vW6XO2DM79cVLm8fkEVIdFQZJrx3u5gOc
j1T5Z0P1SvaVfJJcwcVdhj4B03tDxnr40zPfyXFLC50rjpKKh0FDf/4c4qqVGtEf
B4TbUhb4Y6GrPVu97NgJGfuqL49mvj8EG6ZMh/wWmzKD+cBYMGuVNsl3AoGBAII0
q+RshsjUu1fIqh051cUqqcVXLKvFsOmK5wDcBjHejxGBPuBkUfF67viIKo5YUApm
qQwnec7cZm9t5L4E5IKYjTyVHiPmCJ1hckLl9fIcwZMNjKu8RTu/gfudRHESvA26
znJmc0WLHyMdU8+thgCV1dLdwCbn1aGNPvBuUxhLAoGBAJHdP7D+ySxNtfXCL/Bh
I85ndVj8S3uXspes3M5vkxUUnA1I3gW5dEFMh3EBDotTo9WauLX+FKTejMrft5UZ
2wfTcvuBtoazRwU8wnaRVlO34A+hf0YrPhv50KxBrQGd4E1zNo+FFwedXs+IKJOF
7vZ/Me3wUSl7yXA0OifdInd7
-----END PRIVATE KEY-----`

const certificate = `-----BEGIN CERTIFICATE-----
MIIFRjCCBC6gAwIBAgIRAMO53yZzri2jE1UdrVLQjL8wDQYJKoZIhvcNAQELBQAw
OzELMAkGA1UEBhMCVVMxHjAcBgNVBAoTFUdvb2dsZSBUcnVzdCBTZXJ2aWNlczEM
MAoGA1UEAxMDV1IxMB4XDTI0MTAyNTE1MzcxN1oXDTI1MDEyMzE1MzcxNlowHTEb
MBkGA1UEAxMSbXlhd3NzZXJ2ZXIuMDAwLnBlMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEAopyJlhfsrEGgNgN0pAoZJmDB0Jyis0XyOvPnn0nxtnZ0wy4t
3zcfKEuIGjAXuzqA/E4mOeVzDMg6kRG2b1k9NnX/Xq1L7Sn2Y/E1wR6gW+j19Flf
XPTGMur4d5ky1IC+U5V1LoaUrMofm09LGEBzLfbog10aEoDi/Gzo78hw/0HfkoM3
IuZ2e3c0J105Wu1rRYDJ+y62A1/Q2m0Es3TUIbb6IrzOqRfLi/zRIVX3GPpYBhw3
KvVZx4YLWIzv8an0loWgZcVgKy1OumpNSdoou61fZF/Ipq9quVw+6b8ZEnSFKvHh
vkxPavdE/A4XyDnkuW7qe5Gd1nMlkTtK22RdcQIDAQABo4ICYTCCAl0wDgYDVR0P
AQH/BAQDAgWgMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwGA1UdEwEB/wQCMAAwHQYD
VR0OBBYEFBW71P03vQg3+kKX/qrwA7VDG1IMMB8GA1UdIwQYMBaAFGZpSdTeKpyR
A8+JDiS4DjADboguMF4GCCsGAQUFBwEBBFIwUDAnBggrBgEFBQcwAYYbaHR0cDov
L28ucGtpLmdvb2cvcy93cjEvdzdrMCUGCCsGAQUFBzAChhlodHRwOi8vaS5wa2ku
Z29vZy93cjEuY3J0MDMGA1UdEQQsMCqCEm15YXdzc2VydmVyLjAwMC5wZYIUKi5t
eWF3c3NlcnZlci4wMDAucGUwEwYDVR0gBAwwCjAIBgZngQwBAgEwNgYDVR0fBC8w
LTAroCmgJ4YlaHR0cDovL2MucGtpLmdvb2cvd3IxL3Btc0VHMmUxNDdVLmNybDCC
AQQGCisGAQQB1nkCBAIEgfUEgfIA8AB3AH1ZHhLheCp7HGFnfF79+NCHXBSgTpWe
uQMv2Q6MLnm4AAABksSKGsYAAAQDAEgwRgIhAMI86n/nuM15BKp4q2HZz6sp0vWm
ojat9lq/QHgDjB6qAiEA2r4zK9AJgBDLtj7L7NH+ig6tF95/XwbyMGyMHiIQP3YA
dQBOdaMnXJoQwzhbbNTfP1LrHfDgjhuNacCx+mSxYpo53wAAAZLEihp+AAAEAwBG
MEQCIFKcyusx/2/6B7VIlqdJHvNjn3YCTIbALlBzVkwEn495AiBwRUhbkvQlDIXw
wZj1emyshGNQ8qf931/unyoN8lRFbTANBgkqhkiG9w0BAQsFAAOCAQEAObxou7G1
VZb0bx5zvn4gI8H8wegGMIlCjALNzTVeeb1m/bl4fagOgXL3GftFx5uXKCt1gjLQ
5Pk7iKOpc+gEsWVJ+kbHLqpehWPNAxPnSpGvQB0HJzCdDzv7BLX7nsC2R6Vju2W3
TVy24f/IYUoKXnpFGkTYTYPEKylG60HSy6k/tjRd+439FO8oPFfuSH1QtgpcIIvw
osydSHYaDfO/NUO37EQ5wxrTSj/NFMRDnSP7J+GLhft2B6QeaN+TvkhEZDXIWKW9
F4NE8wKubOf84tw7RiFyF2P9sWfS2fn3xqgaWX6Fm6VxjLnVzeswrAyUSXQXQcbd
ADypkff7GU7nog==
-----END CERTIFICATE-----`

const options = {
    key: privateKey,
    cert: certificate
};

app.use(express.json())

app.get('/api/testget', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/upload', upload.single('profile'), (req, res) => {
    const { userId } = req.body
    console.log(userId)
    console.log(req.body)
    const newFilePath = path.join('uploads', `${userId}-profile.jpg`);

    fs.rename(req.file.path, newFilePath, (err) => {
        if (err) {
            fs.unlink(req.file.path, () => {});
            return res.status(500).json({ message: 'Error saving profile picture' });
        }
        res.send('Uploaded successfully');
    })
})

https.createServer(options, app).listen(3000, () => {
    console.log('HTTPS Server running on port 3000');
});
