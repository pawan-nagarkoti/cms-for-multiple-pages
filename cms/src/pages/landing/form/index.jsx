import { CustomInput, CustomHeading, CustomButton, CustomTextarea } from "../../../components";

export default function index() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 my-6">Add New Landing Page</h1>
        <form action="">
          <CustomHeading text="Basic Information" />
          <CustomInput label="Landing Page Name" placeholder="Landing Page Name" />
          <CustomInput label="Theme Color" placeholder="Theme Color" />
          <CustomInput label="Primary Color" placeholder="Primary Color" />
          <CustomInput label="Secondary Color" placeholder="Secondary Color" />

          <CustomHeading text="Header" />
          <div className="flex items-center gap-4">
            <CustomInput label="Header Menu Items" placeholder="Theme Color" />
            <CustomButton text="Add" />
          </div>
          <CustomInput label="Mobile Number" placeholder="Mobile Number" />

          <CustomHeading text="Banner Box Content" />
          <CustomInput label="Banner Image" placeholder="Mobile Number" type="file" />
          <CustomInput label="Banner Heading" placeholder="banner heading" />
          <CustomInput label="Description" placeholder="description" />
          <CustomInput label="Price view heading" placeholder="price view heading" />
          <div className="flex items-center gap-4">
            <CustomInput label="Banner key Points" placeholder="Banner key name" />
            <CustomButton text="Add" />
          </div>

          <CustomHeading text="Project Information" />
          <CustomInput label="Project Heading" placeholder="Project heading" />
          <CustomInput label="Project Title" placeholder="Project title" />
          <div className="flex items-center gap-4">
            <CustomInput label="Projcet Sub Heading" placeholder="Project sub heading" />
            <CustomInput label="Projcet Sub title" placeholder="Project sub title" />
            <CustomButton text="Add" />
          </div>

          <CustomHeading text="Project Overview" />
          <CustomInput label="Project Overview Heading" placeholder="Project overview heading" />
          <CustomInput label="Project Title" placeholder="Project title" />
          <CustomTextarea label="Project description" placeholder="Project description" />
          <CustomInput label="Project Overview" type="file" />

          <CustomHeading text="Gallery" />
          <CustomInput label="Gallery" type="file" />

          <CustomHeading text="Amenities" />
          <div className="flex items-center gap-4">
            <CustomInput label="Amenities Text" placeholder="Project sub heading" />
            <CustomInput label="Amenities Image" type="file" />
            <CustomButton text="Add" />
          </div>

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
