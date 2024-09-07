import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();
  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>

      <TabsContent value="orders" className="space-y-5 bg-gray-50 pg-10 rounded-lg">
        <h2 className="text-2xl font-bold">
          {orders && orders.length > 0 ? `${orders.length} active orders` : "Not created Restaurant yet"}
        </h2>

        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <OrderItemCard key={order._id} order={order} />  
          ))
        ) : (
          <p className="text-center text-gray-500">No orders available</p>
        )}
      </TabsContent>

      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreateLoading || isUpdateLoading} />
      </TabsContent>
    </Tabs>
  );
}

export default ManageRestaurantPage;
