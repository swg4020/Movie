import { useLocation, useNavigate } from "react-router-dom";

export const Detail = () => {
  const {
    state: { title },
  } = useLocation();
  console.log(title);

  const nav = useNavigate();
  const onClick = () => {
    nav("/", { state: { name: 123 } });
  };

  return (
    <div>
      <h2>Detail</h2>
      <h3>받아온 데이터값: {title}</h3>
      <button onClick={onClick}>홈으로 이동</button>
    </div>
  );
};
