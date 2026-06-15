1. Phạm vi của biến
    a. Block scope: Theo khối: được khai báo trong cặp ngoặc nhọn
        i. Var: không bị giới hạn trong cặp ngoặc nhọn
        ii. Let/const: bị giới hạn trong cặp ngoặc nhọn. Ra ngoài dùng -> báo underfind -> nên dùng cái này
            
    b. Function scope(hàm): 
        i. biến được khai báo trong 1 hàm
        ii. Cả let/var/const ra ngoài hàm -> bị lỗi undefined
        
    c. Toàn cục (global): được khai báo ở 1 dòng code tự do, k nằm trong khối/hàm
        
        
2. Break & continue
    a. Break: thoát khỏi vòng lặp ngay lập tức
    b. Continue: bỏ qua phần còn laị của vòng lặp hiên tại và chuyển sang lần lặp tiếp theo
3. Câu điều kiện nâng cao
    a. If_else_if: Kiểm tra nhiều điều kiện theo thứ tự
    b. Toán tử điều kiện: Cách viết ngắn gọn cho if_else
4. Vòng lặp nâng cao
    a. For_in loop: duyêt qua các thuộc tính của 1 object
    b. ForEach method: Method của arr để thực thu 1 func cho mỗi phần tử. Không thể dùng break hoặc continue
5. Utils function:
    a. Là các hàm có sẵn, giúp cho việc code nhanh hơn và gon hơn
    b. Các loại
        i. String utils: xử lý chuỗi
        ii. Array utils: xử lý mảng
    c. String utils
        i. Xử lý chuỗi
            1) Bỏ khoảng trắng 2 đầu: trim() -> console.log(text.trim());
            2) Bỏ khoảng trắng trái: trimStart()
            3) Bỏ khoảng trắng phải: trimEnd
            4) Chuyển đổi chữ Hoa -> Thường
                a) Thường -> Hoa: toUpperCase -> console.log(str.toUpperCase());
                b) Hoa -> Thường: toLowerCase -> console.log(str.toLowerCase());
            5) Cắt chuỗi: Dùng hàm split
            6) Thay thế chuỗi: Dùng hàm replace -> text.replace
    d. Array utils
        i. Thêm phần tử vào mảng: push, unshift, splice
        ii. Xoá phần tử khỏi mảng: pop, shift, splice
        iii. Tìm kiếm (find, filter)
        iv. Biến đổi mảng(map)
        v. Sắp xếp mảng (sort)
