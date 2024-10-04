import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserStore } from "@/store/UserStore";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import api from "@/utils/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import convertBase64 from "@/utils/convertToBase64";
import { AxiosError } from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner8 } from "react-icons/im";

const NewPartner = () => {
  const [loading, setLoading] = useState(false);

  const userType = UserStore.useState((s) => s.type);
  const navigate = useNavigate();

  const [image, setImage] = useState("");

  const [partnerType, setPartnerType] = useState("");

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (!file) {
      return setImage("");
    }

    const base64 = await convertBase64(file);
    setImage(String(base64));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
      contactName: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().optional(),
      description: Yup.string().required("Required"),
      contactName: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const res = await api.post("/partners", {
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          partner_type_id: partnerType,
          image: image,
          description: values.description,
          contact_name: values.contactName,
        });

        if (res.status === 201) {
          toast.success("Partner added successfully");
        }
      } catch (err) {
        const error = err as AxiosError;

        if (error.status === 500) {
          toast.error("An unexpected error occured");
        } else {
          //@ts-ignore
          toast.error(
            //@ts-ignore
            error.response?.data.errors.image ||
            //@ts-ignore
              error.response?.data.errors.name ||
              //@ts-ignore
              error.response?.data.errors.email ||
              //@ts-ignore
              error.response?.data.errors.phone ||
              //@ts-ignore
              error.response?.data.errors.partner_type_id ||
              //@ts-ignore
              error.response?.data.errors.description ||
              //@ts-ignore
              error.response?.data.errors.contact_name
          );
        }
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

  useEffect(() => {}, []);

  return (
    <div className="p-6 h-full w-full overflow-auto">
      <Toaster />
      <h1 className="text-[#FAFAFF] font-bold text-2xl">New Partner</h1>
      <div className="mt-8">
        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="name" className="text-white font-semibold">
                Full Name
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Rebecca Funsho"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-400">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%] h-full">
              <label htmlFor="partnerType" className="text-white font-semibold">
                Partner type
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <Select
                  name="partnerType"
                  onValueChange={(e) => setPartnerType(e)}
                >
                  <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                    <SelectValue placeholder="Select Partner type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                    <SelectItem key={1} value={"1"}>
                      Hotel
                    </SelectItem>
                    <SelectItem key={2} value={"2"}>
                      Guest House
                    </SelectItem>
                    <SelectItem key={3} value={"3"}>
                      Airbnb
                    </SelectItem>
                    <SelectItem key={4} value={"4"}>
                      Taxi
                    </SelectItem>
                    <SelectItem key={5} value={"5"}>
                      Car Rental
                    </SelectItem>
                    <SelectItem key={6} value={"6"}>
                      Resort
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="phone" className="text-white font-semibold">
                Phone number
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="09086752541"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-400">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="email" className="text-white font-semibold">
                Email
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ekohotelandsuites@eko.com"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="contactName" className="text-white font-semibold">
                Contact Name
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  placeholder="Eko hotels & suites"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  value={formik.values.contactName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.contactName && formik.errors.contactName ? (
                <div className="text-red-400">{formik.errors.contactName}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="description" className="text-white font-semibold">
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
                <div className="text-red-400">{formik.errors.description}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="image" className="text-white font-semibold">
                Image
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  onChange={handleImageChange}
                />
              </div>
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
  );
};

export default NewPartner;
