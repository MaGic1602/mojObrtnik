import axios from "axios";
const signUpTemplateCopy = require("../server/models/signUpModels");

export async function SignupPost(signupPostRequest) {
  const response = await axios.post("/logIn", signUpTemplateCopy, {});

  return response.data;
}
