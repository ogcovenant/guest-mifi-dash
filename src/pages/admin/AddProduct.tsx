import { FaPlus } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import mifi from "@/assets/mifi.png";
import { UserStore } from "@/store/UserStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "@/utils/api";
import { AxiosError } from "axios";
import { ImSpinner8 } from "react-icons/im";

const AddProduct = () => {
  const userType = UserStore.useState((s) => s.type);
  const navigate = useNavigate();

  const [dataProvider, setDataProvider] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      product_no: "",
      manufacturer: "",
      sim_type: "",
      battery: "",
      specifications: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      product_no: Yup.string().required("Required"),
      manufacturer: Yup.string().required("Required"),
      sim_type: Yup.string().required("Required"),
      battery: Yup.string().required("Required"),
      specifications: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const res = await api.post("/products", {
          name: values.name,
          description: values.description || "",
          product_no: values.product_no,
          manufacturer: values.manufacturer || "",
          sim_type: values.sim_type || "",
          data_provider_id: dataProvider,
          battery: values.battery || "",
          specifications: values.specifications,
        });

        console.log(res);
      } catch (err) {
        const error = err as AxiosError;

        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (userType === "user") {
      navigate("/error");
    }
  }, []);

  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">New product</h1>
      <div className="mt-3 bg-[#211E48] border-2 border-[#23215B] rounded-lg">
        <div className="p-4 flex justify-between border-b-[1px] border-[#979797]">
          <p className="text-white font-semibold">Product type</p>
          <p className="flex items-center text-white gap-2">
            <FaPlus />
            <span className="block">Add Category</span>
          </p>
        </div>
        <div className="p-6 flex">
          <div className="bg-gradient-to-tr from-[#5AC8C8] to-[#5AC8C8] p-[2px] rounded-lg">
            <div className="bg-[#13113C] p-6 rounded-lg flex gap-5">
              <div className="flex flex-col justify-between">
                <p className="text-[#FAFAFF] font-black">MIFI</p>
                <div>
                  <p className="text-[#FAFAFF]">Total number</p>
                  <p className="text-[#FAFAFF] font-bold">10,000</p>
                </div>
              </div>
              <div>
                <img src={mifi} alt="Mifi Picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-[#211E48] border-2 border-[#23215B] rounded-lg">
        <div className="p-4 border-b-[1px] border-[#979797]">
          <p className="text-white font-semibold">Product Details</p>
        </div>
        <div className="p-6 mt-5">
          <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label
                  htmlFor="productName"
                  className="text-white font-semibold"
                >
                  Product name
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="LTE MIFI"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-400">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label
                  htmlFor="product_no"
                  className="text-white font-semibold"
                >
                  Product number
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="product_no"
                    id="product_no"
                    placeholder="000221"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                    value={formik.values.product_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.product_no && formik.errors.product_no ? (
                  <div className="text-red-400">{formik.errors.product_no}</div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label
                  htmlFor="manufacturer"
                  className="text-white font-semibold"
                >
                  Manufacturer
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="manufacturer"
                    id="manufacturer"
                    placeholder="Huawei"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                    value={formik.values.manufacturer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.manufacturer && formik.errors.manufacturer ? (
                  <div className="text-red-400">
                    {formik.errors.manufacturer}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label
                  htmlFor="dataProvider"
                  className="text-white font-semibold"
                >
                  Data Provider
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <Select
                    name="dataProvider"
                    onValueChange={(e) => setDataProvider(e)}
                  >
                    <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                      <SelectValue placeholder="Select data provider" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                      <SelectItem key={1} value={"1"}>
                        MTN
                      </SelectItem>
                      <SelectItem key={2} value={"2"}>
                        AIRTEL
                      </SelectItem>
                      <SelectItem key={3} value={"3"}>
                        GLO
                      </SelectItem>
                      <SelectItem key={4} value={"4"}>
                        9MOBILE
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="sim_type" className="text-white font-semibold">
                  SIM Type
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="sim_type"
                    id="sim_type"
                    placeholder="E-SIM"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                    value={formik.values.sim_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.sim_type && formik.errors.sim_type ? (
                  <div className="text-red-400">{formik.errors.sim_type}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="battery" className="text-white font-semibold">
                  Battery
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="battery"
                    id="battery"
                    placeholder="2000MAH"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                    value={formik.values.battery}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.battery && formik.errors.battery ? (
                  <div className="text-red-400">{formik.errors.battery}</div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="description"
                  className="text-white font-semibold"
                >
                  Description
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <textarea
                    name="description"
                    id="description"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF] resize-none h-36"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-red-400">
                    {formik.errors.description}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="specifications"
                  className="text-white font-semibold"
                >
                  Specifications
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="specifications"
                    id="specifications"
                    placeholder="Product specifications here"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                    value={formik.values.specifications}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.specifications &&
                formik.errors.specifications ? (
                  <div className="text-red-400">
                    {formik.errors.specifications}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full md:w-[35%] md:self-end">
              <button
                className="bg-[#442B88] w-full p-3 rounded-lg text-white font-bold disabled:bg-gray-700"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <ImSpinner8 size={25} className="animate-spin" />
                  </div>
                ) : (
                  "Done"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
