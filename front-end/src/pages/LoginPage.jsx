import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { axiosInstance } from '../config/axiosInstance'
import toast, { Toaster } from 'react-hot-toast';

export const LoginPage = () => {
  const {register,handleSubmit} = useForm();
  const navigate = useNavigate()

  const onSubmit = async(data) => {
    try {
      const response = await axiosInstance({method:"post",url:"/user/login",data})
      console.log(response,"====response");
      toast.success("login success");
      navigate('/user/profile');
    } catch (error) {
      toast.error("login failed")
      console.log(error);
    }
  };

  return (
    <div className="hero  bg-gray-400 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card  bg-slate-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register('password')} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={"/Signup"}>Signup ?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}