import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { catalogData } from "../apis"

export const getCatalogPageData = async (categoryId) => {
  const toastId = toast.loading("Loading...")
  let result = [];
  
  try {

    console.log("pahle aa gaya hu")
    const response = await apiConnector(
      "POST",
      catalogData.CATALOGPAGEDATA_API,
      {
        categoryId: categoryId,
      }
      
    )
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Catagory page data.")
    }
  
    result = response?.data

    console.log("pahle aa gaya hu3")
  } catch (error) {
    console.log("CATALOGPAGEDATA_API API ERROR............", error)
    console.error(error)
    toast.error(error.message)
    result = error.response?.data
  }
  toast.dismiss(toastId)
  return result
}
