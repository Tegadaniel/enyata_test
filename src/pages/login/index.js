import React from "react";
import Grid from "@mui/material/Grid";
import headerImage from "../../assets/starWarsImage.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "../../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      toast("Login Successful", {
        position: "top-center",
        autoClose: 2000,
        closeOnClick: true,
      });
      navigate("/dashboard");
    },
  });
  return (
    <>
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <div className=" col-span-3 border-r border-gray-500 min-h-[100vh] w-full xl:w-[350px] md:w-[200px] px-5 xl:flex hidden items-center bg-[#031434]">
          <div className=" hidden xl:block ">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.8 }}
                className="h-full flex justify-center items-center"
              >
                <img src={headerImage} className=" h-80 w-80" alt="starwars" />
              </motion.div>
            </Grid>
          </div>
        </div>

        <div className="col-span-12 w-full xl:col-span-9 min-h-[100vh] flex items-center">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              <div className="p-4 xl:mx-20 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg sm:p-6 md:p-8">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                  <div className="flex flex-col gap-3 mb-20 ">
                    <h5 className="text-xl font-medium  text-[#434854]">
                      Login
                    </h5>
                    <p className=" text-sm font-light text-[#737373]">
                      {" "}
                      Kindly enter your details to log in{" "}
                    </p>
                  </div>

                  <div className="mt-5 w-full">
                    <TextField
                      label="Email Address"
                      type="email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                      InputLabelProps={{
                        style: { color: "#B0B9C8" },
                      }}
                    />
                  </div>

                  <div className="mt-5 w-full">
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      fullWidth
                      InputLabelProps={{
                        style: { color: "#B0B9C8" },
                      }}
                    />
                  </div>

                  <div className="mt-4">
                    <Button
                      title="Log in"
                      className="cursor-pointer"
                      type="submit"
                    />
                  </div>

                  <div className="flex items-center mt-8">
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <p className=" text-sm text-[#0A74DC] font-light">
                        Forgot your password?
                      </p>
                    </Grid>
                  </div>

                  <div className="flex items-center mt-8 mb-3">
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <div className="flex flex-row gap-1">
                        <p className="text-sm text-[#303B54] font-normal underline">
                          Privacy Policy
                        </p>
                        <p className="text-sm text-[#A4A7B74D] font-light">
                          {" "}
                          and
                        </p>
                        <p className="text-sm text-[#303B54] font-normal underline">
                          Terms of services
                        </p>
                      </div>
                    </Grid>
                  </div>
                </form>
              </div>
            </motion.div>
          </Grid>
        </div>
      </div>
    </>
  );
}
