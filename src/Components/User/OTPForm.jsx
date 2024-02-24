import React from "react";

const OTPForm = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>OTP Verification!</h1>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Verify OTP</span>
              </label>
              <input
                type='text'
                placeholder='OTP'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;

{
  /* <div className='card w-96 bg-base-100 shadow-xl'>
  <div className='card-body'>
    <h2 className='card-title'>Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className='card-actions justify-end'>
      <button className='btn btn-primary'>Buy Now</button>
    </div>
  </div>
</div>; */
}
