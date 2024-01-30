import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Eye, EyeOff, MoveLeft } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: { auth: { loading: string } }) => state.auth.loading);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(userLogin(values) as any);

        // Check if the response status is "success" before navigating
        if (response.payload.status === "success") {
          toast.success("Login good");
          router.push("/admin");
        } else {
          toast.error("failed");
          console.error("Login failed:", response.payload.message);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  });

  const { email, password } = formik.values;

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative h-screen bg-black">
      <img
        src="https://res.cloudinary.com/dyijwff8m/image/upload/v1702731461/gridex/ab2_gabvo7.webp"
        alt="room image"
        className="w-full bg-black opacity-25 h-full object-cover"
      />
      <div className="flex flex-col inset-0 absolute items-center h-screen lg:justify-center w-full md:px-20 flex-1 md:py-20">
        <div className="bg-white h-screen rounded-lg flex lg:max-w-4xl w-full max-w-full">
          <div className=" w-full px-5 md:px-8 py-8 md:py-20">
            <div className="flex justify-start pb-20 items-center gap-6 text-4xl">
              <Link href="/">
                <MoveLeft />
              </Link>
              <span className="text-[#676869]">Back</span>
            </div>
            <h1 className="text-[#19202C] font-bold text-6xl">
              Sign in to <span className="text-[#0D60D8]"> Rise High Hotel</span>
            </h1>
            <p className="mt-4 text-[#676869] font-normal text-2xl">Enter your login details below.</p>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col mt-12">
                <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="email"
                  required={!email.includes("@") && !email.match(/^\d+$/)}
                  name="email"
                  value={email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-xl"
                  placeholder="Enter your email or phone number"
                />
                {formik.touched.email && formik.errors.email && <span className="text-red-500">{formik.errors.email}</span>}
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="password" className="text-[#19202C] text-2xl mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={open === false ? "password" : "text"}
                    id="password"
                    required
                    name="password"
                    value={password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                    placeholder-gray-200::placeholder placeholder-opacity-75
                    border focus:border-[#0D60D8] text-xl"
                    placeholder="Enter your password"
                  />
                  <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                    {open === false ? <Eye name="eye" onClick={toggle} size={20} /> : <EyeOff name="eye-off" onClick={toggle} size={20} />}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && <span className="text-red-500">{formik.errors.password}</span>}
              </div>

              <Link href="/auth/forgotPassword" className="text-black font-normal text-lg md:text-2xl">
                Forgot Password?
              </Link>

              <button
                type="submit"
                disabled={isLoading === "pending"}
                className="lg:w-full bg-[#0D60D8] py-4 text-white rounded-md
              font-bold text-2xl focus:outline-none w-full mt-6"
              >
                {isLoading === "pending" ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
