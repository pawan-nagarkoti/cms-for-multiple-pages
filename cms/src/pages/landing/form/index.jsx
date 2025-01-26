import { useEffect, useRef, useState } from "react";
import { CustomInput, CustomHeading, CustomButton, CustomTextarea } from "../../../components";
import { previewImage } from "../../../utils/helper";
import { _post } from "../../../services/api";
import axios from "axios";

export default function index() {
  const [landingPageName, setLandingPageName] = useState(""); // landing page name
  const [themeColor, setThemeColor] = useState(""); // theme color
  const [primaryColor, setPrimaryColor] = useState(""); // primary color
  const [secondaryColor, setSecondaryColor] = useState(""); // secondary color

  const [headerMenuItems, setHeaderMenuItems] = useState(""); // header itesm
  const [containerForHeaderMenuItems, setContainerForHeaderMenuItems] = useState([]); // stored header items in an array

  const [mobileNumber, setMobileNumber] = useState(""); // number

  const [logo, setLogo] = useState(""); // logo
  const [previewLogo, setPreviewLogo] = useState(""); // preview logo

  const [bannerImage, setBannerImage] = useState("");
  const [bannerPreviewImage, setBannerPreviewImage] = useState("");

  const [bannerBoxHeading, setBannerBoxHeading] = useState("");
  const [bannerBoxDescription, setBannerBoxDescription] = useState("");
  const [bannerPriceViewHeading, setBannerPriceViewHeading] = useState("");
  const [bannerKeyPoints, setBannerKeyPoints] = useState("");
  const [containerForBannerKeyPoints, setContainerForBannerKeyPoints] = useState([]);

  const [projectHeading, setProjectHeading] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectSubHeading, setProjectSubHeading] = useState("");
  const [projectSubTitle, setProjectSubTitle] = useState("");
  const [containerForAddProjectSubHeadingAndTitle, setContainerForAddProjectSubHeadingAndTitle] = useState([]);

  const [projectOverviewHeading, setProjectOverviewHeading] = useState("");
  const [projectOverviewTitle, setProjectOverviewTitle] = useState("");
  const [projectOverviewDescription, setProjectOverviewDescription] = useState("");
  const [projectOverviewImage, setProjectOverviewImage] = useState("");
  const [projectOverviewPreviewImage, setProjectOverviewPreviewImage] = useState("");

  const [gallery, setGallery] = useState("");
  const [galleryPreview, setGalleryPreview] = useState([]);

  const [amenitiesName, setAmenitiesName] = useState("");
  const [amenitiesImage, setAmenitiesImage] = useState("");
  const [containerForAmenitiesNameAndImage, setContainerForAmenitiesNameAndImage] = useState([]);

  const amenitiesImageBox = useRef(null);

  const [locationAdvantageImage, SetLocationAdvantageImage] = useState("");
  const [locationPreviewAdvantageImage, setLocationPreviewAdvantage] = useState("");
  const [locationTitle, setLocationTitle] = useState("");
  const [locationDescription, setLocationDescription] = useState("");
  const [locationKeyPoint, setLocationKeyPoint] = useState("");
  const [containerLocationKeyPoint, setContainerLocationKeyPoint] = useState([]);

  const [aboutProjectTitle, setAboutProjectTitle] = useState("");
  const [aboutProjectDescription, setAboutProjectDescription] = useState("");

  const [floorImage, setFloorImage] = useState("");
  const [containerForFloorImage, setContainerForFloorImage] = useState([]);

  const [brochureImage, setBrochureImage] = useState("");
  const [brochureDescription, setBrochureDescription] = useState("");

  const [listPaymentPlanTitle, setListPaymentPlanTitle] = useState("");
  const [listPaymentPlanSize, setListPaymentPlanSize] = useState("");
  const [listPaymentPlanPrice, setListPaymentPlanPrice] = useState("");
  const [containerForListPaymentPlan, setContainerForListPaymentPlan] = useState([]);
  const [editListPaymentId, setEditListPaymentId] = useState(null);

  const [imageForVideo, setImageForVideo] = useState("");

  const [priceTableType, setPriceTableType] = useState("");
  const [priceTableSize, setPriceTableSize] = useState("");
  const [priceTablePrice, setPriceTablePrice] = useState("");
  const [containerForTable, setContainerForTable] = useState([]);
  const [editPriceTableId, setEditPriceTableId] = useState(null);

  const [googleMap, setGoogleMap] = useState("");

  const [footerDescription, setFooterDescription] = useState("");

  const [qrCodeImage, setQrCodeImage] = useState("");
  const [containerForQrCodeImage, setContainerForQrCodeImage] = useState([]);

  const handleHeaderItems = () => {
    setContainerForHeaderMenuItems((prev) => [...prev, headerMenuItems]);
    setHeaderMenuItems("");
  };

  const handleAddBannerKeyPoints = () => {
    setContainerForBannerKeyPoints((prev) => [...prev, bannerKeyPoints]);
    setBannerKeyPoints("");
  };

  const handleAddProjectInfo = () => {
    setContainerForAddProjectSubHeadingAndTitle((prev) => [...prev, { projectSubHeading, projectSubTitle }]);
    setProjectSubHeading("");
    setProjectSubTitle("");
  };

  const handleAddGallerybtn = () => {
    setGalleryPreview((prev) => [...prev, { id: Date.now(), image: previewImage(gallery) }]);
  };
  const handleDeletedGalleryImages = (deletedGalleryId) => {
    setGalleryPreview(galleryPreview.filter((v) => v.id !== deletedGalleryId));
  };

  const handleAddAmenities = () => {
    const amenitiesObject = {
      id: Date.now(),
      amenitiesName,
      amenitiesImage,
    };
    setContainerForAmenitiesNameAndImage((prev) => [...prev, amenitiesObject]);
    setAmenitiesName("");
    if (amenitiesImageBox.current) {
      amenitiesImageBox.current.value = "";
    }
  };

  const handleAddLocationAdvantage = () => {
    setContainerLocationKeyPoint((prev) => [...prev, locationKeyPoint]);
    setLocationKeyPoint("");
  };

  const handleAddFloorPlanImages = () => {
    const floorImageObj = {
      id: Date.now(),
      image: floorImage,
    };
    setContainerForFloorImage((prev) => [...prev, floorImageObj]);
  };

  const handleAddListPaymentPlan = () => {
    if (editListPaymentId === null) {
      const paymentPlanObject = {
        id: Date.now(),
        listPaymentPlanTitle,
        listPaymentPlanSize,
        listPaymentPlanPrice,
      };
      setContainerForListPaymentPlan((prev) => [...prev, paymentPlanObject]);
      setListPaymentPlanTitle("");
      setListPaymentPlanPrice("");
      setListPaymentPlanSize("");
    } else {
      const paymentPlanObject = {
        id: editListPaymentId,
        listPaymentPlanTitle: listPaymentPlanTitle,
        listPaymentPlanSize: listPaymentPlanSize,
        listPaymentPlanPrice: listPaymentPlanPrice,
      };
      setContainerForListPaymentPlan((prev) => prev.map((item) => (item.id === editListPaymentId ? paymentPlanObject : item)));
      setEditListPaymentId(null);
      setListPaymentPlanTitle("");
      setListPaymentPlanPrice("");
      setListPaymentPlanSize("");
    }
  };

  const handleAddPriceTable = () => {
    if (editPriceTableId === null) {
      const priceTableObject = {
        id: Date.now(),
        priceTableType,
        priceTableSize,
        priceTablePrice,
      };
      setContainerForTable((prev) => [...prev, priceTableObject]);
      setPriceTablePrice("");
      setPriceTableType("");
      setPriceTableSize("");
    } else {
      const priceTableObject = {
        id: editPriceTableId,
        priceTableType,
        priceTableSize,
        priceTablePrice,
      };
      setContainerForTable((prev) => prev.map((item) => (item.id === editPriceTableId ? priceTableObject : item)));
      setEditPriceTableId(null);
      setPriceTablePrice("");
      setPriceTableType("");
      setPriceTableSize("");
    }
  };

  const handleAddQrCode = () => {
    setContainerForQrCodeImage((prev) => [...prev, { id: Date.now(), image: qrCodeImage }]);
  };

  const handleLandingPageForm = async (e) => {
    e.preventDefault();
    const data = {
      landingPageName,
      logo,
      headerItems: containerForHeaderMenuItems,
      themeColor,
      primaryColor,
      secondaryColor,
      mobileNumber,

      bannerImage,
      bannerBoxHeading,
      bannerBoxDescription,
      bannerPriceViewHeading,
      containerForBannerKeyPoints,
      projectHeading,
      projectTitle,
      containerForAddProjectSubHeadingAndTitle,
      projectOverviewHeading,
      projectOverviewTitle,
      projectOverviewDescription,
      projectOverviewImage,
      gallery,
      containerForAmenitiesNameAndImage,
      locationAdvantageImage,
      locationTitle,
      locationDescription,
      containerLocationKeyPoint,
      aboutProjectTitle,
      aboutProjectDescription,
      containerForFloorImage,
      brochureImage,
      brochureDescription,
      containerForListPaymentPlan,
      imageForVideo,
      containerForTable,
      googleMap,
      footerDescription,
      containerForQrCodeImage,
    };
    console.log(data);

    try {
      const landingPageFormData = new FormData();
      landingPageFormData.append("landingPageName", landingPageName);
      landingPageFormData.append("logo", logo);

      const r = await axios.post("http://localhost:3000/landing-page/add", landingPageFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(r);
      // const response = await _post(`landing-page/add`, landingPageFormData);
      // console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 my-6">Add New Landing Page</h1>
        <form onSubmit={handleLandingPageForm}>
          <CustomHeading text="Basic Information" />
          <CustomInput label="Landing Page Name" placeholder="Landing Page Name" value={landingPageName} onChange={(e) => setLandingPageName(e.target.value)} />
          <CustomInput label="Theme Color" placeholder="Theme Color" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
          <CustomInput label="Primary Color" placeholder="Primary Color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
          <CustomInput label="Secondary Color" placeholder="Secondary Color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
          <CustomHeading text="Header" />
          <CustomInput
            label="Logo"
            type="file"
            onChange={(e) => {
              const file = e?.target?.files[0];
              if (file) {
                setLogo(file);
                setPreviewLogo(previewImage(file));
              }
            }}
          />
          {previewLogo && (
            <div className="my-3">
              <img src={previewLogo} alt="Preview Logo" className="mt-4 w-32 h-32 object-cover rounded-md border border-gray-300 shadow" />
            </div>
          )}
          <div className="flex items-center gap-4">
            <CustomInput
              label="Header Menu Items"
              placeholder="header meneu items"
              value={headerMenuItems}
              onChange={(e) => setHeaderMenuItems(e.target.value)}
            />
            <CustomButton text="Add" onClick={handleHeaderItems} />
          </div>
          {containerForHeaderMenuItems.length > 0 && (
            <div className="mb-3 bg-gray-100 p-4 rounded-md shadow">
              <ul className="list-disc pl-5 space-y-2">
                {containerForHeaderMenuItems?.map((v, index) => (
                  <li key={index} className="text-gray-700 hover:text-blue-500">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <CustomInput label="Mobile Number" placeholder="Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} />
          <CustomHeading text="Banner Box Content" />
          <CustomInput
            label="Banner Image"
            placeholder="Mobile Number"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setBannerImage(file);
                setBannerPreviewImage(previewImage(file));
              }
            }}
          />
          {bannerPreviewImage && (
            <div className="my-3">
              <img src={bannerPreviewImage} alt="Preview Logo" className="mt-4 w-100 h-30  rounded-md border border-gray-300 shadow" />
            </div>
          )}
          <CustomInput label="Banner Heading" placeholder="banner heading" value={bannerBoxHeading} onChange={(e) => setBannerBoxHeading(e.target.value)} />
          <CustomInput label="Description" placeholder="description" value={bannerBoxDescription} onChange={(e) => setBannerBoxDescription(e.target.value)} />
          <CustomInput
            label="Price view heading"
            placeholder="price view heading"
            value={bannerPriceViewHeading}
            onChange={(e) => setBannerPriceViewHeading(e.target.value)}
          />
          <div className="flex items-center gap-4">
            <CustomInput label="Banner key Points" placeholder="Banner key name" value={bannerKeyPoints} onChange={(e) => setBannerKeyPoints(e.target.value)} />
            <CustomButton text="Add" onClick={handleAddBannerKeyPoints} />
          </div>
          {containerForBannerKeyPoints.length > 0 && (
            <div className="mb-3 bg-gray-100 p-4 rounded-md shadow">
              <ul className="list-disc pl-5 space-y-2">
                {containerForBannerKeyPoints?.map((v, index) => (
                  <li key={index} className="text-gray-700 hover:text-blue-500">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <CustomHeading text="Project Information" />
          <CustomInput label="Project Heading" placeholder="Project heading" value={projectHeading} onChange={(e) => setProjectHeading(e.target.value)} />
          <CustomInput label="Project Title" placeholder="Project title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
          <div className="flex items-center gap-4">
            <CustomInput
              label="Projcet Sub Heading"
              placeholder="Project sub heading"
              value={projectSubHeading}
              onChange={(e) => setProjectSubHeading(e.target.value)}
            />
            <CustomInput
              label="Projcet Sub title"
              placeholder="Project sub title"
              value={projectSubTitle}
              onChange={(e) => setProjectSubTitle(e.target.value)}
            />
            <CustomButton text="Add" onClick={handleAddProjectInfo} />
          </div>
          {containerForAddProjectSubHeadingAndTitle.length > 0 && (
            <div className="mb-3 bg-gray-100 p-4 rounded-md shadow">
              <ul className="list-disc pl-5 space-y-2">
                {containerForAddProjectSubHeadingAndTitle?.map((v, index) => (
                  <li key={index} className="text-gray-700 hover:text-blue-500">
                    projectSubHeading : {v?.projectSubHeading} &nbsp; projectSubTitle: {v?.projectSubTitle}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <CustomHeading text="Project Overview" />
          <CustomInput label="Project Overview Heading" placeholder="Project overview heading" onChange={(e) => setProjectOverviewHeading(e.target.value)} />
          <CustomInput label="Project Title" placeholder="Project title" onChange={(e) => setProjectOverviewTitle(e.target.value)} />
          <CustomTextarea label="Project description" placeholder="Project description" onChange={(e) => setProjectOverviewDescription(e.target.value)} />
          <CustomInput
            label="Project Overview"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setProjectOverviewImage(file);
                setProjectOverviewPreviewImage(previewImage(file));
              }
            }}
          />
          {projectOverviewPreviewImage && (
            <div className="my-3">
              <img src={projectOverviewPreviewImage} alt="Preview Logo" className="mt-4 w-80 h-30  rounded-md border border-gray-300 shadow" />
            </div>
          )}
          <CustomHeading text="Gallery" />
          <div className="flex items-center gap-4">
            <CustomInput
              label="Gallery"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setGallery(file);
                }
              }}
            />
            <CustomButton text="Add" onClick={handleAddGallerybtn} />
          </div>
          {galleryPreview.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-4 mb-4">
              {galleryPreview?.map((v, i) => (
                <div key={i} className="relative">
                  <img src={v.image} alt={`Preview ${i}`} className="w-full h-40 object-cover rounded-md border border-gray-300 shadow" />
                  <button
                    onClick={() => handleDeletedGalleryImages(v.id)}
                    className="mt-2 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
          <CustomHeading text="Amenities" />
          <div className="flex items-center gap-4">
            <CustomInput label="Amenities Text" placeholder="Project sub heading" value={amenitiesName} onChange={(e) => setAmenitiesName(e.target.value)} />
            <CustomInput label="Amenities Image" type="file" ref={amenitiesImageBox} onChange={(e) => setAmenitiesImage(e.target.files[0])} />
            <CustomButton text="Add" onClick={handleAddAmenities} />
          </div>
          {containerForAmenitiesNameAndImage.length > 0 && (
            <div className="grid grid-cols-3 gap-6 p-4">
              {containerForAmenitiesNameAndImage.map((v, i) => (
                <div key={i} className="p-4 bg-gray-100 rounded-md shadow-md flex flex-col items-center">
                  <p className="text-lg font-semibold text-gray-700 text-center">{v.amenitiesName}</p>
                  <img src={previewImage(v?.amenitiesImage)} alt={`Amenity ${i}`} className="mt-2 w-32 h-32 object-cover rounded-md border border-gray-300" />
                  <button
                    onClick={() => setContainerForAmenitiesNameAndImage((s) => s.filter((i) => i.id !== v.id))}
                    className="mt-4 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
          <CustomHeading text="Location Advantage" />
          <CustomInput
            label="Image"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                SetLocationAdvantageImage(file);
                setLocationPreviewAdvantage(previewImage(file));
              }
            }}
          />
          {locationPreviewAdvantageImage && (
            <div className="my-3">
              <img src={locationPreviewAdvantageImage} alt="Preview Logo" className="mt-4 w-80 h-30  rounded-md border border-gray-300 shadow" />
            </div>
          )}
          <CustomInput label="Title" placeholder="Title" onChange={(e) => setLocationTitle(e.target.value)} />
          <CustomInput label="description" placeholder="description" onChange={(e) => setLocationDescription(e.target.value)} />
          <div className="flex items-center gap-4">
            <CustomInput
              label="Location Advantage Key Points"
              placeholder="key points"
              value={locationKeyPoint}
              onChange={(e) => setLocationKeyPoint(e.target.value)}
            />
            <CustomButton text="Add" onClick={handleAddLocationAdvantage} />
          </div>
          {containerLocationKeyPoint.length > 0 && (
            <div className="mb-3 bg-gray-100 p-4 rounded-md shadow">
              <ul className="list-disc pl-5 space-y-2">
                {containerLocationKeyPoint?.map((v, index) => (
                  <li key={index} className="text-gray-700 hover:text-blue-500">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <CustomHeading text="About Project" />
          <CustomInput label="title" placeholder="title" onChange={(e) => setAboutProjectTitle(e.target.value)} />
          <CustomInput label="description" placeholder="description" onChange={(e) => setAboutProjectDescription(e.target.value)} />
          <CustomHeading text="Floor Plans" />
          <div className="flex items-center gap-4">
            <CustomInput label="images" type="file" onChange={(e) => setFloorImage(e.target.files[0])} />
            <CustomButton text="Add" onClick={handleAddFloorPlanImages} />
          </div>
          {containerForFloorImage.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-4 mb-4">
              {containerForFloorImage?.map((v, i) => (
                <div key={i} className="relative">
                  <img src={previewImage(v.image)} alt={`Preview ${i}`} className="w-full h-40 object-cover rounded-md border border-gray-300 shadow" />
                  <button
                    type="button"
                    onClick={() => setContainerForFloorImage((prev) => prev.filter((s) => s.id !== v.id))}
                    className="mt-2 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
          <CustomHeading text="Brochure content images" />
          <CustomInput label="icon" type="file" onChange={(e) => setBrochureImage(e.target.files[0])} />
          <CustomInput label="description" placeholder="description" onChange={(e) => setBrochureDescription(e.target.value)} />
          <CustomHeading text="List Payment Plan" />
          <div className="flex items-center gap-4">
            <CustomInput label="Title" placeholder="title" value={listPaymentPlanTitle} onChange={(e) => setListPaymentPlanTitle(e.target.value)} />
            <CustomInput label="Size" placeholder="Size" value={listPaymentPlanSize} onChange={(e) => setListPaymentPlanSize(e.target.value)} />
            <CustomInput label="price" placeholder="price" value={listPaymentPlanPrice} onChange={(e) => setListPaymentPlanPrice(e.target.value)} />
            <CustomButton text="Add" onClick={handleAddListPaymentPlan} />
          </div>
          {containerForListPaymentPlan.length > 0 && (
            <div className="my-4">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {containerForListPaymentPlan.map((v, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 px-4 py-2">{v.listPaymentPlanTitle}</td>
                      <td className="border border-gray-300 px-4 py-2">{v.listPaymentPlanSize}</td>
                      <td className="border border-gray-300 px-4 py-2">{v.listPaymentPlanPrice}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          type="button"
                          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                          onClick={() => {
                            setListPaymentPlanPrice(v.listPaymentPlanPrice);
                            setListPaymentPlanTitle(v.listPaymentPlanTitle);
                            setListPaymentPlanSize(v.listPaymentPlanSize);
                            setEditListPaymentId(v.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="bg-red-500 text-white px-3 py-1 rounded"
                          onClick={() => setContainerForListPaymentPlan((prev) => prev.filter((t) => t.id !== v.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <CustomHeading text="Image for video" />
          <CustomInput label="Image" type="file" onChange={(e) => setImageForVideo(e.target.files[0])} />
          {imageForVideo && (
            <div className="my-3">
              <img src={previewImage(imageForVideo)} alt="Preview Logo" className="mt-4 w-80 h-30  rounded-md border border-gray-300 shadow" />
            </div>
          )}

          <CustomHeading text="Price Table" />
          <div className="flex items-center gap-4">
            <CustomInput label="Type" placeholder="title" value={priceTableType} onChange={(e) => setPriceTableType(e.target.value)} />
            <CustomInput label="Price Size" placeholder="Size" value={priceTableSize} onChange={(e) => setPriceTableSize(e.target.value)} />
            <CustomInput label="price" placeholder="price" value={priceTablePrice} onChange={(e) => setPriceTablePrice(e.target.value)} />
            <CustomButton text="Add" onClick={handleAddPriceTable} />
          </div>

          {containerForTable.length > 0 && (
            <div className="my-4">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {containerForTable.map((v, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 px-4 py-2">{v.priceTableType}</td>
                      <td className="border border-gray-300 px-4 py-2">{v.priceTableSize}</td>
                      <td className="border border-gray-300 px-4 py-2">{v.priceTablePrice}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          type="button"
                          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                          onClick={() => {
                            setPriceTablePrice(v.priceTablePrice);
                            setPriceTableType(v.priceTableType);
                            setPriceTableSize(v.priceTableSize);
                            setEditPriceTableId(v.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="bg-red-500 text-white px-3 py-1 rounded"
                          onClick={() => setContainerForTable((prev) => prev.filter((t) => t.id !== v.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <CustomHeading text="Map" />
          <CustomInput label="image" type="file" onChange={(e) => setGoogleMap(e.target.files[0])} />
          {googleMap && (
            <div className="my-3">
              <img src={previewImage(googleMap)} alt="Preview Logo" className="mt-4 w-100 h-30  rounded-md border border-gray-300 shadow" />
            </div>
          )}

          <CustomHeading text="Footer Description" />
          <CustomTextarea label="footer" placeholder="Footer description" onChange={(e) => setFooterDescription(e.target.value)} />

          <CustomHeading text="QR Code" />
          <div className="flex items-center gap-4">
            <CustomInput label="image" type="file" onChange={(e) => setQrCodeImage(e.target.files[0])} />
            <CustomButton text="Add" onClick={handleAddQrCode} />
          </div>
          {containerForQrCodeImage.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-4 mb-4">
              {containerForQrCodeImage?.map((v, i) => (
                <div key={i} className="relative">
                  <img src={previewImage(v.image)} alt={`Preview ${i}`} className="w-full h-40 object-cover rounded-md border border-gray-300 shadow" />
                  <button
                    onClick={() => setContainerForQrCodeImage((prev) => prev.filter((qr) => qr.id !== v.id))}
                    className="mt-2 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

          <CustomHeading text="Privacy Policy" />
          <p>rich text editor</p>
          <div className="text-center my-10">
            <CustomButton text="submit" btnType="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
