export interface Observer{
    //method update với tham số tưởng ứng sẽ được 
    //truyền qua giao diện Subject mỗi khi có sự thay đổi
    //ở đây mình ví dụ là nhiệt độ
    update(temperature : number) : void ;
} 