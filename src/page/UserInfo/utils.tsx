import { useMemo, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { useAppContext } from "context";
import { chat } from "services";
import { IMG_OBJ, SERVICE } from "constant";

export const useUserInfo = () => {
  const { setState, notiList } = useAppContext();
  const [loading, setLoading] = useState(false);

  const validationSchema = useMemo(
    () =>
      object().shape({
        program: string()
          .nullable()
          .trim()
          .required("Vui lòng nhập tên chương trình"),
        name: string()
          .nullable()
          .trim()
          .required("Vui lòng nhập tên người dùng"),
        habit: string()
          .nullable()
          .trim()
          .required("Vui lòng nhập thói quen tiêu dùng/sở thích"),
        content: string().nullable().trim().required("Vui lòng nhập nội dung"),
        service: string().nullable().trim().required("Vui lòng chọn dịch vụ"),
      }),
    []
  );
  const form = useForm<Data>({
    defaultValues,
    resolver: yupResolver(validationSchema) as any,
  });

  const onGenerate = form.handleSubmit((noti) => {
    form.reset({ ...noti, imgs: null as any }, { keepDirtyValues: true });
  });

  const onSubmit = form.handleSubmit(async (noti) => {
    const img = document.querySelector("#imgs .swiper-slide-active") as Element;
    const index = img.getAttribute("data-swiper-slide-index") as string;
    setLoading(true);
    await chat(
      `
      MoMo cần tạo ra những thông báo ưu đãi siêu vui vẻ, có tính kêu gọi hành động siêu cao và siêu cá nhân hóa với khách hàng của MoMo. Hãy giúp tạo ra 5 thông báo ưu đãi cho chương trình A của MoMo:
      Tên chương trình ưu đãi A: ${noti.program}.
      Mô tả về ưu đãi A: ${noti.content}.
      Tên dịch vụ A của MoMo: ${noti.service}.
      Tên của đối tượng mục tiêu A: ${noti.name}.
      Một vài thói quen hoặc sở thích độc đáo của đối tượng mục tiêu A: ${noti.habit}.
      
      Hãy tạo 5 thông báo ưu đãi ngắn và gần gũi. Nội dung chỉ từ 2 đến 3 câu là tối đa, với sự thay thế từ "MoMo" cho "Chúng tôi" hoặc "Chúng tớ".

      Hãy tạo 5 thông báo ưu đãi có cấu trúc
      Thông báo n:
      Tiêu đề:
      Nội dung: 
      `,
      (message) => {
        console.log(message);
        const random = Math.floor(Math.random() * 5);
        const messSplit = message.split("\n").filter((item) => item);
        console.log(messSplit);
        let notiTitle = messSplit[random * 3 + 1];
        notiTitle = notiTitle.substring(notiTitle.indexOf("Tiêu đề:") + 8);
        let notiContent = messSplit[random * 3 + 2];
        notiContent = notiContent.substring(
          notiContent.indexOf("Nội dung:") + 9
        );
        setState({
          notiList: [
            { ...noti, notiTitle, notiContent, img: noti.imgs[Number(index)] },
            ...notiList,
          ],
        });
        setLoading(false);
        form.reset({ ...defaultValues });
      }
    );
  });
  return { form, onSubmit, loading, onGenerate };
};

const defaultValues = {
  program: "",
  name: "",
  habit: "",
  content: "",
  service: null as any,
  imgs: [],
};

// const defaultValues = {
//   program: "Giảm giá",
//   name: "Hảo",
//   habit: "Chơi game",
//   content: "Giảm 10k với thẻ nạp 100k",
//   service: SERVICE[0],
//   imgs: IMG_OBJ["Ví Trả Sau"],
// };

interface Data {
  program: string;
  name: string;
  habit: string;
  content: string;
  service: string;
  imgs: string[];
}
