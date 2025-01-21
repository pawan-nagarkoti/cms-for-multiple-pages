import { useEffect, useRef, useState } from "react";
import { CustomInput, CustomHeading, CustomButton, CustomTextarea } from "../../../components";
import { previewImage } from "../../../services/helper";

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

  const handleLandingPageForm = async (e) => {
    e.preventDefault();
    const obj = {
      landingPageName,
      themeColor,
      primaryColor,
      secondaryColor,
      containerForHeaderMenuItems,
      mobileNumber,
      logo,
      bannerImage,
      bannerBoxHeading,
      bannerBoxDescription,
      bannerPriceViewHeading,
      containerForBannerKeyPoints,
      projectHeading,
      projectTitle,
      projectSubHeading,
      projectSubTitle,
      containerForAddProjectSubHeadingAndTitle,
      projectOverviewHeading,
      projectOverviewTitle,
      projectOverviewDescription,
      projectOverviewImage,
      gallery,
      containerForAmenitiesNameAndImage,
    };
    console.log(obj);
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
          <CustomInput label="Image" type="file" />
          <CustomInput label="Title" placeholder="Title" />
          <CustomInput label="description" placeholder="description" />
          <div className="flex items-center gap-4">
            <CustomInput label="Location Advantage Key Points" placeholder="key points" />
            <CustomButton text="Add" />
          </div>

          <CustomHeading text="About Project" />
          <CustomInput label="title" placeholder="title" />
          <CustomInput label="description" placeholder="description" />

          <CustomHeading text="Floor Plans" />
          <CustomInput label="images" type="file" />

          <CustomHeading text="Brochure content images" />
          <CustomInput label="icon" type="file" />
          <CustomInput label="description" placeholder="description" />

          <CustomHeading text="List Payment Plan" />
          <div className="flex items-center gap-4">
            <CustomInput label="Title" placeholder="title" />
            <CustomInput label="Size" placeholder="Size" />
            <CustomInput label="price" placeholder="price" />
            <CustomButton text="Add" />
          </div>

          <CustomHeading text="Image for video" />
          <CustomInput label="Image" type="file" />

          <CustomHeading text="Price Table" />
          <div className="flex items-center gap-4">
            <CustomInput label="Type" placeholder="title" />
            <CustomInput label="Price Size" placeholder="Size" />
            <CustomInput label="price" placeholder="price" />
            <CustomButton text="Add" />
          </div>

          <CustomHeading text="Map" />
          <div className="flex items-center gap-4">
            <CustomInput label="image" type="file" />
            <CustomButton text="Add" />
          </div>

          <CustomHeading text="Footer Description" />
          <CustomTextarea label="footer" placeholder="Footer description" />

          <CustomHeading text="QR Code" />
          <div className="flex items-center gap-4">
            <CustomInput label="image" type="file" />
            <CustomButton text="Add" />
          </div>

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
