import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Register = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/data");
  }, [navigate]);
  return (
    <>
      <section className="flex justify-center items-center h-screen w-screen">
        <div className="py-5 px-10 bg-slate-400 flex flex-col gap-8 font-sans rounded-lg">
          <h1 className="font-semibold">Page Register</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().min(8, "Minimal 8 bg").required("Wajib Isi"),
              email: Yup.string().email("Ga Valid").required("Wajib Isi"),
              password: Yup.string()
                .min(8, "Minimal 8 bg")
                .required("Wajib Isi")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
                  "Must contain at least one lowercase, one uppercase, one number, and one symbol"
                ),
            })}
            onSubmit={async (values, { resetForm }): Promise<void> => {
              await fetch("http://localhost:3000/data", {
                method: "POST",
                body: JSON.stringify(values),
              }).then((data) => console.log(data));
              handleClick();
              resetForm();
            }}>
            <Form className="flex flex-col">
              <TextInput
                label="Full Name"
                id="name"
                name="name"
                type="text"
                placeholder="John"
              />
              <TextInput
                label="Email"
                id="email"
                name="email"
                type="text"
                placeholder="John@email"
              />
              <TextInput
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="*************"
              />
              <button
                className="mt-5 w-full px-2 py-2 bg-slate-200 rounded-xl"
                type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Register;
