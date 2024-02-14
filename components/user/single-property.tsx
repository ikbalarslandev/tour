"use client";

import DatePickerForm from "@/components/user/date-form-pool";
import Slider from "@/components/user/slider";
import { useEffect, useState } from "react";
import * as z from "zod";
import { PropertySchema } from "@/schemas";

interface propertyType {
  title: string;
  description: string;
  tourGuide: string;
  totalTime: number;
  tourPlan: string[];
  availability: any[];
  imgUrls: string[];
  meetingPointLink: string;
}

const SingleProperty = ({ propertyObj }: { propertyObj: any }) => {
  const [array, setArray] = useState<string[]>([]);
  const [property, setProperty] = useState<any>();

  useEffect(() => {
    setProperty(propertyObj);
    setArray(propertyObj.imgUrls);
    console.log(propertyObj.reviews);
  }, [propertyObj]);

  return (
    <div className="flex flex-col max-w-[400px]">
      <h1 className="text-3xl pb-3  text-blue-100 text-center font-bold">
        {property?.title}
      </h1>

      <Slider array={array} />

      <h2 className="bg-red-400 text-white py-4 px-2 mb-1 rounded-md shadow-md text-center">
        {property?.description}
      </h2>
      <div className="bg-red-400 py-4  mb-5 rounded-md shadow-md">
        <div className="flex flex-col items-start justify-between mx-3">
          <p className="text-center text-white text-xl">Plan for the day:</p>
          {property?.tourPlan.map((item: any, index: number) => (
            <div key={index} className="flex items-center ">
              <span className="text-white text-lg font-bold">{index + 1}</span>
              <p className="text-white ml-2">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <h2 className="bg-red-400 text-white py-4 px-2 mb-7  rounded-md shadow-md text-center">
        Tour Guide: {property?.tourGuide}
      </h2>

      <div className="pb-6">
        {property && <DatePickerForm property={property} />}
      </div>

      <div className="space-y-6">
        <hr />
        <h1 className="text-4xl mb-6 font-bold text-center">Reviews</h1>

        {property?.reviews &&
          (property?.reviews.length > 0 ? (
            property?.reviews.map((review: any, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold mr-2">
                      {review.rating}/5
                    </span>

                    <span className="text-blue-500">{review.title}</span>
                  </div>
                  <p className="ml-auto text-gray-600">{review.date}</p>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold mr-2">
                    Posted by:
                  </span>
                  <span className="text-blue-500">{review.user}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No reviews yet</p>
          ))}
      </div>
    </div>
  );
};

export default SingleProperty;
