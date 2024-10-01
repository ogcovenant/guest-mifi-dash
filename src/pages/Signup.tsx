import Logo from "@/components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import wifiSymbol from "@/assets/wifi-symbol.png"

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim("Email cannot contain whitespaces")
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password cannot be less than 6 characters")
        .trim("Password cannot contain whitespaces")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex w-full h-screen">
      <div className="w-full md:w-[60%] flex flex-col h-full items-center justify-center p-8 lg:p-12 xl:p-0">
        <div className="flex justify-center mb-4 md:hidden">
          <Logo isDark={true} />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl">Sign up</h1>
          <p className="font-semibold">
            Please enter your email and password to continue
          </p>
        </div>
        <div className="w-full mt-12 flex justify-center">
          <form
            className="flex flex-col items-center gap-6 w-full xl:w-[50%]"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="email"
                className="font-semibold text-[#202224] opacity-80"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Taiwo.Emmanuel@ekohotels.com"
                className="p-3 border-2 border-[#D8D8D8] outline-none rounded-lg bg-[#F1F4F9]"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="font-semibold text-[#202224] opacity-80"
                >
                  Password
                </label>
                <p className="text-[#202224] font-semibold opacity-60 cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="p-3 border-2 border-[#D8D8D8] outline-none rounded-lg bg-[#F1F4F9]"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-400">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="flex items-center gap-1 w-full self-start">
              <input
                type="checkbox"
                name="remember-password"
                id="remember-password"
              />
              <label htmlFor="remember-password">Remember Password</label>
            </div>
            <button className="bg-[#442B88] w-full p-3 rounded-lg text-white font-bold" type="submit"> 
              Sign Up
            </button>
          </form>
        </div>
        <p className="mt-3">
          Are you an existing partner?{" "}
          <a href="/login" className="text-[#442B88]">
            Login
          </a>
        </p>
      </div>
      <div className="bg-[#B2EBF2] w-[40%] md:flex flex-col items-center justify-center hidden">
        <Logo isDark={true} />
        <img
          src={wifiSymbol}
          alt="Wifi illustration"
          className="w-[80%]"
        />
      </div>
    </div>
  );
};

export default Signup;
