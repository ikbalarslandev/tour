import DatePickerForm from "@/components/user/date-picker";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Pool renting made easy.",
};

const HomePage = async () => {
  return (
    <div className="flex flex-col  gap-4  justify-center items-center">
      <h1 className="text-center pt-1 text-2xl font-bold   text-red-700  my-10">
        Buisness tours in Milan
      </h1>

      <DatePickerForm />
    </div>
  );
};

export default HomePage;
