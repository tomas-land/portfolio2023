import { iFormData } from "@/lib/interfaces";

const validateFormData = ({ name, email, message }: iFormData) => {
  const errors: { name?: string; email?: string; message?: string } = {};
  const emailRegex = /\S+@\S+\.\S+/;
  if (!name || name.trim() === "") {
    errors.name = "Name is required";
  }

  if (!email || email.trim() === "") {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Email is invalid";
  }

  if (!message || message.trim() === "") {
    errors.message = "Message is required";
  }
  return errors;
};

export default validateFormData;
