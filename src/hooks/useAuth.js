
//Quản lý trạng thái xác thực người dùng sử dụng Firebase Authentication

import React from "react";
import { onAuthStateChanged } from "firebase/auth"; //Hàm này được sử dụng để theo dõi sự thay đổi trong trạng thái xác thực người dùng.
import { FIRE_BASE_AUTH } from "../firebase/firebaseConfig";//cấu hình Firebase Authentication, chứa thông tin cần thiết để kết nối ứng dụng của bạn với dịch vụ xác thực Firebase.

export default function useAuth() {
  const [user, setUser] = React.useState(null);//Biến này sẽ chứa thông tin về người dùng hiện tại.
  React.useEffect(() => {
    const unsub = onAuthStateChanged(FIRE_BASE_AUTH, (user) => {
      console.log("got user:", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);
  return { user };//theo dõi trạng thái xác thực người dùng. Hook này sẽ được chạy sau khi giao diện người dùng đã render ([] là một danh sách rỗng, đảm bảo hook chỉ chạy một lần sau khi giao diện người dùng đã render).
}//theo dõi trạng thái xác thực và cung cấp thông tin về người dùng hiện tại
//Hàm onAuthStateChanged được gọi với tham số là cấu hình xác thực Firebase (FIRE_BASE_AUTH) và một hàm callback. Hàm callback này sẽ được gọi mỗi khi trạng thái xác thực của người dùng thay đổi.
//Trong hàm callback, nếu người dùng đã đăng nhập (user tồn tại), thì setUser được gọi để cập nhật trạng thái user với thông tin người dùng. Nếu người dùng chưa đăng nhập, trạng thái user được đặt thành null.