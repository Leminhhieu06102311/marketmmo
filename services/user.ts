import api from "./api";

export async function getUser(access_token: string) {
  const res = await api.get("/auth/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  return res.data.data;
}
export async function loginUser(email: string, password: string) {
  const res = await api.post("/auth/login", {
    email: email,
    password: password,
  });
  return res.data;
}
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const res = await api.post("/auth/register", {
    email,
    password,
    name,
  });
  return res.data;
}

export async function hanldeOrder(
  productId: string,
  userId: string,
  quantity: number,
  price: number
) {
  const res = await api.post("/order/order", {
    product: productId,
    user: userId,
    quantity: quantity,
    orderPrice: price,
  });
  return res.data;
}

export async function changePassword(
  access_token: string,
  currentPassword: string,
  password: string,
  confirmPassword: string
) {
  const res = await api.patch(
    "/settings/password",
    {
      currentPassword: currentPassword,
      password: password,
      confirmPassword: confirmPassword,
    },
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  );
  return res.data;
}

export async function sendToEmail(email: string) {
  const res = await api.post("/recover/send-code", {
    email,
    type: "FORGET_PASSWORD",
  });
  return res.data;
}

export async function ChangeForgotPassword(
  password: string,
  confirmPassword: string,
  code: string
) {
  const res = await api.post(`/recover/send-code/${code}`, {
    password: password,
    confirmPassword: confirmPassword,
  });
  return res.data;
}
