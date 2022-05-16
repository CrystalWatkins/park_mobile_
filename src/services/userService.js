import http from "./httpService";

export async function getAllUsers() {
    console.log("get all users service");
  const { data } = await http.post("https://api.github.com/users");
  return data;
}

export async function getUserById(id) {
    const { data } = await http.post(`https://api.github.com/users/${id}`);
    return data;
  }