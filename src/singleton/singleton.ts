
//Lớp Singleton định nghĩa phương thức tĩnh getInstance() cho phép
//người dùng truy cập vào instance độc nhất của Singleton
export class Singleton {
    private static instance : Singleton;

    //constructor luôn là private để chặn những truy cập trực tiếp 
    // vào lớp Singleton bằng tón tử new  
    private constructor (){
    }
    // phương thức tĩnh getInstance() kiểm soát việc truy cập vào Singleton instance
    public static getInstance() : Singleton {
        if (this.instance == null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
    // cuối cùng là định nghĩ một vài method xử lý logic của ứng dụng
    // Ví dụ : 
    public turnOnMusic(){
        console.log("Music is running ....");
    }

}