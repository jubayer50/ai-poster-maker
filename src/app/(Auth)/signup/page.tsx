"use client";

import { authClient } from "@/lib/auth-client";
import { uploadImage } from "@/lib/UploadImage/uploadImage";
import { Separator } from "@heroui/react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GoEyeClosed, GoUpload } from "react-icons/go";

type SignUpFormData = {
  name: string;
  email: string;
  image: FileList | null;
  password: string;
};

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    if (!data.image) return;

    const imageHostUrl = await uploadImage(data.image[0]);

    const newSignupData = {
      ...data,
      image: imageHostUrl,
    };

    const { data: authData, error } = await authClient.signUp.email({
      ...newSignupData,

      // email,
      // password,
      // name,
      // image,
    });

    if (authData?.token) {
      router.push("/");
    }

    if (error) {
      console.log(error?.message);
    }

    setImageUrl("");

    reset();
  };

  const handleGoogle = () => {};

  return (
    <div>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-16">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.10),transparent_35%)]" />

        <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
          {/* Top Gradient Line */}
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-400 via-green-400 to-red-400" />

          <h2 className="mb-2 text-center text-3xl font-bold text-white">
            Sign Up to{" "}
            <span className="bg-linear-to-r from-emerald-400 via-green-300 to-red-400 bg-clip-text font-bold tracking-tight text-transparent">
              AIposter
            </span>
          </h2>

          <p className="mb-7 text-center text-slate-400">
            Please enter your details.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* upload image section */}
            <div>
              <div className="flex justify-center flex-1">
                <label
                  htmlFor="image"
                  className="w-17 h-17 flex items-center justify-center overflow-hidden rounded-full border border-green-500"
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      width={500}
                      height={500}
                      alt="profile picture"
                      className="w-full h-full object-cover"
                    ></Image>
                  ) : (
                    <GoUpload className="w-6 h-6 text-white" />
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    id="image"
                    className="hidden"
                    {...register("image", { onChange: handleImageChange })}
                  />
                </label>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-emerald-400/60 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/10"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-emerald-400/60 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/10"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>

              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must contain one uppercase and one lowercase letter.",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                      message:
                        "Password must contain one uppercase and one lowercase letter.",
                    },
                  })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-emerald-400/60 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/10"
                />

                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}

                <div
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 transition-colors hover:text-emerald-400"
                >
                  {showPassword ? (
                    <GoEyeClosed size={20} />
                  ) : (
                    <GoEyeClosed size={20} />
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-linear-to-r from-emerald-500 via-green-500 to-red-500 py-3 font-semibold text-white shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              Sign In
            </button>
          </form>

          <Separator className="my-6 bg-white/10" />

          <div>
            <button
              onClick={handleGoogle}
              className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-white/5 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <FcGoogle size={22} /> SignUp with Google
            </button>
          </div>

          <div className="mt-5">
            <p className="text-center text-sm text-slate-400">
              If you have already Account |{" "}
              <Link
                href={"/signin"}
                className="font-bold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
