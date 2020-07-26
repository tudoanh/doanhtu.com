Title: Dùng Raspberry Pi để gửi và nhận SMS với Sim900A
Date: 2018-10-10
Tags: raspberrypi, sms
Authors: Do Anh Tu


Hướng dẫn kết nối module Sim900A với Raspberry Pi 3 B+, dùng để gửi và nhận tin nhắn SMS

Dạo này vì lý do công việc nên cần phải tìm cách kết nối và sử dụng module Sim900A với con Raspberry Pi 3, dùng để nhận SMS.

Tìm hiểu mấy hôm, rất là cực nên hôm nay mình viết lại bài này, cho những ai cần tới sau này đỡ tốn thời gian mày mò lại từ đầu.

## Chuẩn bị

Để bắt đầu, bạn cần:

* Một combo **Raspberry Pi 3 B+** đầy đủ nguồn, thẻ nhớ, đã cài đặt **Raspbian**

* Một module **Sim900A**

![](https://cdn-images-1.medium.com/max/2000/0*LxUDdh-_XLIsLOBK.jpg)

* Dây chuyển đổi USB — UART PL2303 (Có thể không có)

![](https://cdn-images-1.medium.com/max/2000/0*st-uEN7bd7TxFn71.jpg)

* Đầy đủ dây nối

![](https://cdn-images-1.medium.com/max/2000/0*cT6jvUUCv8BtdxU_.png)

## Kết nối

Chỉ cần bạn kết nối đúng các cổng *Tx, Rx, Gnd và nguồn 5v* vào Pi là xong. Tham khảo ảnh dưới:

![](https://cdn-images-1.medium.com/max/2624/0*GvDvS1wwLMTTRWxw.jpg)

Ảnh thực tế (Nếu kết nối thẳng vào GPIO)

![](https://cdn-images-1.medium.com/max/4000/0*7uycXUwOUcUbFH0G.jpg)

![](https://cdn-images-1.medium.com/max/4000/0*5SWGHh30pdJ-TRrU.jpg)

Còn nếu kết nối qua USB

![](https://cdn-images-1.medium.com/max/4000/0*iTHkYv8Rh2TXgm2_.jpg)

## Cài đặt

Đầu tiên ta cần mở cổng **ttyS0**

Bạn có thể dùng “raspi-config” để mở UART:

![](https://cdn-images-1.medium.com/max/3844/0*pPgk8OHCZe9Byhp5.png)

1. Trong “Interfacing Options”, chọn “Serial”

1. Chọn “No” khi được hỏi “You want a login shell over serial?”.

1. Chọn “Yes” khi được hỏi “You want the hardware enabled?”

1. Khởi động lại

Thực ra, bạn có thể sửa file */boot/config.txt* và sửa **enable_uart=1**, và **console=serial0,115200** (hoặc **console=ttyS0,115200**) ở trong */boot/cmdline.txt*

Và bạn có thể bật *terminal* lên và test xem kết nối thành công chưa bằng cách gửi command **AT\r\n** đến khi nào trả về **OK** là thành công. (Nếu kết nối qua GPIO thì sẽ là **/dev/ttyS0**, còn qua USB thì sẽ là **/dev/ttyUSB0**)

Ví dụ:

![](https://cdn-images-1.medium.com/max/2692/0*ARNoeoY37ScXpBsi.png)

Link asciinema:

![](https://cdn-images-1.medium.com/max/4000/0*rI0-d-OfRpAlDkFn.png)

Sử dụng thư viện sau để kết nối và làm việc với SMS Module:

[http://smstools3.kekekasvi.com/](http://smstools3.kekekasvi.com/)

Ví dụ về kết quả nhận được bằng lệnh **AT+CNMI=3,2,0,0,0**

![](https://cdn-images-1.medium.com/max/4000/0*u1dVWPTqYw-QhEwz.png)

Về chi tiết cách sử dụng các lệnh AT và các khái niệm GPIO, UART mình sẽ để sang một bài khác.

Chúc các bạn thành công.

Tham khảo:

1. [https://pinout.xyz/](https://pinout.xyz/)

1. [http://mlab.vn/9216-huong-dan-lap-trinh-module-sim900a-va-arduino.html](http://mlab.vn/9216-huong-dan-lap-trinh-module-sim900a-va-arduino.html)

1. [https://www.developershome.com/sms/checkCommandSupport3.asp](https://www.developershome.com/sms/checkCommandSupport3.asp)

1. [https://raspberrypi.stackexchange.com/questions/82696/how-do-i-connect-gsm-sim-900a-to-a-raspberry-pi-3](https://raspberrypi.stackexchange.com/questions/82696/how-do-i-connect-gsm-sim-900a-to-a-raspberry-pi-3)

1. [https://www.espruino.com/datasheets/SIM900_AT.pdf](https://www.espruino.com/datasheets/SIM900_AT.pdf)

1. [https://hristoborisov.com/index.php/projects/turning-the-raspberry-pi-into-a-sms-center-using-python/#Connecting_the_3gModem](https://hristoborisov.com/index.php/projects/turning-the-raspberry-pi-into-a-sms-center-using-python/#Connecting_the_3gModem)