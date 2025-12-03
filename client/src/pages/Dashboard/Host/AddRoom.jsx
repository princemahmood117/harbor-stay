
import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateRange = (item) => {
    setDates(item.selection);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (roomData) => {
      const { data } = await axiosSecure.post(`/add-room`, roomData);
      return data;
    },
    onSuccess: () => {
      toast.success("Room data added successfully");
      navigate("/dashboard/my-listings");
      setLoading(false);
    },
  });

  // ✅ now expects roomData, not event
  const handleAddRoomForm = async (roomData) => {
    setLoading(true);

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    const finalData = {
      ...roomData,
      from: dates.startDate,
      to: dates.endDate,
      host,
    };

    try {
      console.table(finalData);
      await mutateAsync(finalData);
    } catch (error) {
      console.log(error);
      toast.error("Error occurred adding data!");
      setLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      <AddRoomForm
        dates={dates}
        handleDateRange={handleDateRange}
        handleAddRoomForm={handleAddRoomForm}
        loading={loading}
      />
    </div>
  );
};

export default AddRoom;
