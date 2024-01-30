import RestaurantDetails from "@/components/AdminDashboard/Restaurant/RestaurantDetails";
import RestaurantHead from "@/components/AdminDashboard/Restaurant/RestaurantHead";
import Layout from "@/components/Layout";
import { getAllAdmin } from "@/redux/slices/adminSlice";
import { getRestaurantBookings } from "@/redux/slices/restaurantSlice";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Restaurant() {
  const dispatch = useDispatch();
  const restaurant = useSelector((state: RootState) => state.restaurant.restaurants);
  const loading = useSelector((state: RootState) => state.restaurant.loading);

  console.log("all restaurant bookings:", restaurant);

  useEffect(() => {
    dispatch(getRestaurantBookings() as any);
  }, [dispatch]);
  return (
    <Layout customClass="px-6">
      <RestaurantHead />
      <RestaurantDetails restaurant={restaurant} />
    </Layout>
  );
}

Restaurant.getAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#F5F5F5] font-outfit w-full h-screen min-h-screen">{page}</div>;
};
