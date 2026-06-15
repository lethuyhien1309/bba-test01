1. So sánh Git và Github
   1. Git
      1. Là 1 phần mềm
      2. cài trên máy của mình
      3. Là công cụ quản lý phiên bản, đưa file vào git repo
   2. Github
      1. Là 1 dịch vụ web
      2. Host trên web
      3. Là công cục có giao diện
      4. Nơi để upload gi repo lên
      5. Có các tính năng của version control system và 1 số tính năng khác
    
2. Các trạng thái của Git
    a. Working directory: Lưu file mới or file có thay đổi
    b. Staging area: Đưa các file vào vùng chuẩn bị commit(tạo ra các phiên bản)
    c. Repository: Tạo ra các commit/phiên bản
3. Git- commit convention
    a. Type
        i. Chore: sửa nhỏ lẻ, chính tả, xoá file không dùng tới
        ii. Feat: Thêm tính năng mới, thêm testcase mới
        iii. Fix: Sửa lỗi 1 test trước đó
4. Java script 
    a. Là 1 ngôn ngữ lập trình
    b. Gíup cho browser hoạt động được trên nhiều nền tảng

5. Comment: là cách vô hiệu hoá tạm thời 1 đọan code , những dòng code comment sẽ bị bỏ qua và không thực thi
6. Biến và hằng
    a. Biến: có thể thay đổi được. Ví dụ: <từ khoá> <tên biến> =  <giá trị>. Ví dụ : var/let 
        i. Var: Cho phép khai báo lại, 
        ii. Let: Không cho phép khai báo lại -> An toàn hơn, nghiêm ngặt hơn
    b. Hằng: giá trị không thể thay đổi được, dùng để khai báo các giá trị không có nhu cầu thay đổi
             <từ khoá> <tên hằng> = <giá trị>

    c. Khi nào dùng
        const: Mặc định dùng, giúp code an toàn hơn, dễ đọc hơn
        let: dùng khi chắn chắn cần gán lại giá trị
        var: không dùng var    
    
7. Kiểu dữ liệu
8. Toán tử 
    a. So sánh === và ==
            i. 2 dấu bằng: So sánh giá trị sau khi chuyển đổi dữ liệu của 1 bên thành kiểu dữ liệu của 1 bên còn lại rồi so sánh
            ii. 3 dấu bằng: kiểm tra đúng cả kiểu dũ liệu và giá trị rồi mới do sánh
    b. Logic: Or và And 
        and: trả về đúng nếu cả 2 vế đúng
        or: trả về đúng nếu 1 trong 2 vế đúng
            
    c. Toán tử 1 ngôi: Chỉ cần toán tử hạng để thực hiện
            i. Prefix
                1) Ví dụ: let a = 10 b = ++a // tăng a lên 11 rồi trả về => b có giá trị là 11
                
            ii. Postfix
                a) Ví dụ: let c= 10 ; d = c ++ // trả về giá trị d =10 rồi mới tăng => d = 10
                
                
    d. Toán tử toán học: +, -, *, /
    e. Câu điều kiện
    f. Vòng lặp
        i. For ( <điều kiện khởi tạo> ; < điều kiện lặp> ; cập nhật> ) {
            }
            Trong đó
            - Điều kiện khởi tạo: chạy 1 lần duy nhất, khi vòng lặp bắt đầu
            - Điều kiện lặp: Nếu đúng thì chạy tiếp, sai thì dừng
            - Cập nhật: chạy vào mỗi cuối vòng lăpj, để thay đổi giá trị của biến đếm
                □ Ví dụ for(let i = ;i < 5 ; i++) ->
                    ® Vòng 1 (i = 0)
                        ◊ Khởi tạo i=0;
                        ◊ Kiểm tra i < 5 hay không? -> Nếu đúng thì chạy, nếu sai thì dừng
                        ◊ In ra 
                        ◊ Cập nhật lại i =1
                    ® Vòng 2 ( i=1)
                        ◊ Khởi tạo i =1;
                        ◊ Kiểm tra i < 5 hay không ?
                        ◊ In ra 
                        ◊ Cập nhật lại i =2
            - [Bổ sung]
                □ Vòng lặp
                
