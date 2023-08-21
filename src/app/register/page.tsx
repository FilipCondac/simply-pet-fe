"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { registerUser } from "../util/registerUser";
import { User, Vet } from "../types/types";

export default function Register() {
  const [isVet, setIsVet] = React.useState(false);

  const [userDetails, setUserDetails] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    petIDs: [],
  });

  const [vetDetails, setVetDetails] = useState<Vet>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    clinicName: "",
    clinicAddress: "",
    clinicPhoneNumber: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isVet) {
      const res = await registerUser(vetDetails, true);
      console.log(res);
    } else {
      const res = await registerUser(userDetails, false);
      console.log(res);
    }
  };

  return (
    <div className="flex-col w-full min-h-screen ">
      <div
        className={`fixed w-full h-full transition-opacity duration-1000 ease-in-out bg-center bg-cover ${
          isVet ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url('/userAccount.jpg')` }}
      />
      <div
        className={`fixed w-full h-full transition-opacity duration-1000 ease-in-out bg-center bg-cover ${
          isVet ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url('/vetAccount.jpg')` }}
      />
      <div className="relative flex flex-col items-center min-h-screen bg-gray-800 bg-opacity-40">
        <div className="flex items-center justify-center  mb-5">
          <label className="flex  flex-col items-center cursor-pointer">
            <h1 className="text-white font-bold text-2xl mt-4">Account Type</h1>
            <div className="relative flex mt-5">
              <input
                type="checkbox"
                className="sr-only"
                checked={isVet}
                onChange={() => setIsVet(!isVet)}
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition  ${
                  isVet ? "transform translate-x-full" : ""
                }`}
              ></div>
              <div className="ml-3 text-white font-medium ">
                {isVet ? "Vet" : "Pet Owner"}
              </div>
            </div>
          </label>
        </div>
        {/* Toggle End */}
        {/* Form */}
        <form className="flex flex-col gap-4 w-3/12" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstName"
                className="mt-1 text-white font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-2 border-gray-400 rounded-md p-1"
                value={isVet ? vetDetails.firstName : userDetails.firstName}
                onChange={(e) =>
                  isVet
                    ? setVetDetails({
                        ...vetDetails,
                        firstName: e.target.value,
                      })
                    : setUserDetails({
                        ...userDetails,
                        firstName: e.target.value,
                      })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastName"
                className="mt-1 text-white font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="border-2 border-gray-400 rounded-md p-1"
                value={isVet ? vetDetails.lastName : userDetails.lastName}
                onChange={(e) =>
                  isVet
                    ? setVetDetails({ ...vetDetails, lastName: e.target.value })
                    : setUserDetails({
                        ...userDetails,
                        lastName: e.target.value,
                      })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="mt-1 text-white font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 border-gray-400 rounded-md p-1"
                value={isVet ? vetDetails.email : userDetails.email}
                onChange={(e) =>
                  isVet
                    ? setVetDetails({ ...vetDetails, email: e.target.value })
                    : setUserDetails({
                        ...userDetails,
                        email: e.target.value,
                      })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="mt-1 text-white font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-2 border-gray-400 rounded-md p-1"
                value={isVet ? vetDetails.password : userDetails.password}
                onChange={(e) =>
                  isVet
                    ? setVetDetails({
                        ...vetDetails,
                        password: e.target.value,
                      })
                    : setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phoneNumber"
                className="mt-1 text-white font-semibold"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="border-2 border-gray-400 rounded-md p-1"
                value={isVet ? vetDetails.phoneNumber : userDetails.phoneNumber}
                onChange={(e) =>
                  isVet
                    ? setVetDetails({
                        ...vetDetails,
                        phoneNumber: e.target.value,
                      })
                    : setUserDetails({
                        ...userDetails,
                        phoneNumber: e.target.value,
                      })
                }
              />
            </div>
            {!isVet && (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="address"
                  className="mt-1 text-white font-semibold"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border-2 border-gray-400 rounded-md p-1"
                  value={userDetails.address}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      address: e.target.value,
                    })
                  }
                />
              </div>
            )}

            {isVet && (
              <div className="flex-col">
                <h1 className="text-2xl font-bold mb-2 mt-5 text-white font-semibold">
                  Clinic Details
                </h1>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="clinicName"
                    className="mt-1 text-white font-semibold"
                  >
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    name="clinicName"
                    id="clinicName"
                    className="border-2 border-gray-400 rounded-md p-1"
                    value={vetDetails.clinicName}
                    onChange={(e) =>
                      setVetDetails({
                        ...vetDetails,
                        clinicName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="clinicAddress"
                    className="mt-1 text-white font-semibold"
                  >
                    Clinic Address
                  </label>
                  <input
                    type="text"
                    name="clinicAddress"
                    id="clinicAddress"
                    className="border-2 border-gray-400 rounded-md p-1"
                    value={vetDetails.clinicAddress}
                    onChange={(e) =>
                      setVetDetails({
                        ...vetDetails,
                        clinicAddress: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="clinicPhoneNumber"
                    className="mt-1 text-white font-semibold"
                  >
                    Clinic Phone Number
                  </label>
                  <input
                    type="text"
                    name="clinicPhoneNumber"
                    id="clinicPhoneNumber"
                    className="border-2 border-gray-400 rounded-md p-1"
                    value={vetDetails.clinicPhoneNumber}
                    onChange={(e) =>
                      setVetDetails({
                        ...vetDetails,
                        clinicPhoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}
            <button className="mt-3 mb-20 text-white bg-blue-400 w-1/2 mx-auto rounded-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
